 ---
 sidebar_label: Platform Features (Detailed)
 ---
 
 # Supporting Platform Features: Comprehensive Documentation
 
 > **Cross-Cutting Capabilities — Complete Technical and Functional Reference**
 
 This document provides comprehensive coverage of the supporting platform features that underpin all ZeroDayClose modules, including the unified data model, security framework, integration management, and collaboration features.
 
 ---
 
 ## 1. Unified Finance Data Model
 
 ### 1.1 Overview
 
 The Unified Finance Data Model is the foundation of ZeroDayClose, harmonizing data from disparate finance, accounting, and operational systems into a single, coherent schema that enables AI-powered automation and cross-system querying.
 
 ### 1.2 Core Data Entities
 
 #### Entity Hierarchy
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                    UNIFIED DATA MODEL                           │
 ├─────────────────────────────────────────────────────────────────┤
 │                                                                  │
 │  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐      │
 │  │ Entity  │───▶│ Account │───▶│  Journal │───▶│  Trans  │      │
 │  │         │    │         │    │  Entry   │    │  Line   │      │
 │  └─────────┘    └─────────┘    └──────────┘    └─────────┘      │
 │       │              │                              │            │
 │       │              │         ┌─────────┐          │            │
 │       │              └────────▶│ Customer│◀─────────┘            │
 │       │                        │ /Vendor │                       │
 │       │                        └─────────┘                       │
 │       │                             │                            │
 │       │         ┌─────────┐         │         ┌─────────┐       │
 │       └────────▶│Contract │◀────────┴────────▶│ Invoice │       │
 │                 └─────────┘                   └─────────┘       │
 │                      │                             │             │
 │                      ▼                             ▼             │
 │                ┌──────────┐                 ┌──────────┐        │
 │                │ Revenue  │                 │ Payment  │        │
 │                │ Schedule │                 │          │        │
 │                └──────────┘                 └──────────┘        │
 │                                                                  │
 └─────────────────────────────────────────────────────────────────┘
 ```
 
 #### Primary Entities
 
 | Entity | Description | Key Fields |
 |--------|-------------|------------|
 | **Entity** | Company/subsidiary | entity_id, name, currency, parent_id, region |
 | **Account** | GL account | account_id, entity_id, code, name, type, is_intercompany |
 | **JournalEntry** | Accounting entry header | je_id, entity_id, date, period, source, status |
 | **JournalEntryLine** | Entry line detail | je_id, line_id, account_id, debit, credit |
 | **Customer** | Customer master | customer_id, name, entity_id, external_id |
 | **Vendor** | Vendor master | vendor_id, name, entity_id, external_id |
 | **Contract** | Revenue contract | contract_id, customer_id, value, start_date, end_date |
 | **Invoice** | AR invoice | invoice_id, customer_id, amount, due_date, status |
 | **Payment** | Cash receipt/disbursement | payment_id, amount, date, type, status |
 | **BankTransaction** | Bank feed transaction | tx_id, account_id, date, amount, description |
 
 #### Supporting Entities
 
 | Entity | Description | Key Fields |
 |--------|-------------|------------|
 | **User** | System user | user_id, name, email, role_id |
 | **Role** | Permission role | role_id, name, permissions |
 | **AuditLog** | Immutable action log | log_id, timestamp, user_id, action, details |
 | **IntegrationConfig** | External system config | config_id, system_type, credentials, last_sync |
 | **FXRate** | Exchange rates | date, from_currency, to_currency, rate |
 
 ### 1.3 Schema Design Principles
 
 | Principle | Implementation |
 |-----------|----------------|
 | **Entity Attribution** | Every record tagged with entity_id |
 | **Temporal Tracking** | Created_at, updated_at on all tables |
 | **Soft Deletes** | deleted_at instead of hard delete |
 | **Audit Trail** | All changes logged to AuditLog |
 | **External References** | external_id fields for source system IDs |
 | **Dimensional Flexibility** | Custom tags/dimensions for segmentation |
 
 ### 1.4 Star Schema for Analytics
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                      ANALYTICS SCHEMA                           │
 ├─────────────────────────────────────────────────────────────────┤
 │                                                                  │
 │                    ┌─────────────────┐                          │
 │                    │   FACT TABLE    │                          │
 │                    │ (GL_Transactions│                          │
 │                    │  or Invoices)   │                          │
 │                    └────────┬────────┘                          │
 │                             │                                    │
 │     ┌───────────┬───────────┼───────────┬───────────┐           │
 │     ▼           ▼           ▼           ▼           ▼           │
 │ ┌───────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
 │ │ Date  │ │ Account │ │ Entity  │ │Customer │ │ Product │      │
 │ │ Dim   │ │   Dim   │ │   Dim   │ │   Dim   │ │   Dim   │      │
 │ └───────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘      │
 │                                                                  │
 └─────────────────────────────────────────────────────────────────┘
 ```
 
 ---
 
 ## 2. Security and Access Control
 
 ### 2.1 Authentication
 
 #### Supported Methods
 
 | Method | Use Case | Implementation |
 |--------|----------|----------------|
 | **SSO (SAML 2.0)** | Enterprise identity | Integration with Okta, Azure AD, etc. |
 | **SSO (OAuth 2.0)** | Modern identity providers | Google, Microsoft OAuth |
 | **Username/Password** | Fallback/small orgs | Bcrypt-hashed passwords |
 | **API Tokens** | Programmatic access | JWT with short expiry |
 | **MFA** | Additional security | TOTP authenticator apps |
 
 #### Session Management
 
 | Feature | Implementation |
 |---------|----------------|
 | **Token Type** | JWT (JSON Web Token) |
 | **Expiry** | Configurable (default: 1 hour) |
 | **Refresh** | Refresh token with longer expiry |
 | **Revocation** | Token blacklist for logout |
 | **Session Storage** | Redis for distributed sessions |
 
 ### 2.2 Authorization (RBAC)
 
 #### Role Hierarchy
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                    ROLE HIERARCHY                               │
 ├─────────────────────────────────────────────────────────────────┤
 │                                                                  │
 │  ┌─────────────────────────────────────────────────────────┐    │
 │  │                      ADMIN                               │    │
 │  │  (Full system access, user management, configuration)   │    │
 │  └─────────────────────────────────────────────────────────┘    │
 │                             │                                    │
 │              ┌──────────────┼──────────────┐                    │
 │              ▼              ▼              ▼                    │
 │  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐         │
 │  │   CFO/EXEC    │ │  CONTROLLER   │ │   TREASURER   │         │
 │  │ (All data,    │ │ (All data,    │ │ (Cash data,   │         │
 │  │  read-only)   │ │  approve)     │ │  approve)     │         │
 │  └───────────────┘ └───────────────┘ └───────────────┘         │
 │              │              │              │                    │
 │              ▼              ▼              ▼                    │
 │  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐         │
 │  │   ACCOUNTANT  │ │  FP&A ANALYST │ │    AUDITOR    │         │
 │  │ (Entity data, │ │ (All data,    │ │ (Read-only,   │         │
 │  │  edit/review) │ │  read-only)   │ │  audit trail) │         │
 │  └───────────────┘ └───────────────┘ └───────────────┘         │
 │                                                                  │
 └─────────────────────────────────────────────────────────────────┘
 ```
 
 #### Permission Types
 
 | Permission | Description |
 |------------|-------------|
 | **Read** | View data and reports |
 | **Write** | Create and modify records |
 | **Approve** | Approve automated actions |
 | **Admin** | System configuration |
 | **Delete** | Remove records (soft delete) |
 
 #### Data-Level Security
 
 | Scope | Implementation |
 |-------|----------------|
 | **Entity Scope** | Users assigned to specific entities |
 | **Role Scope** | Role-based visibility rules |
 | **Row-Level Security** | Database-enforced row filters |
 | **Field-Level Masking** | Sensitive fields (account numbers) masked |
 
 ### 2.3 Audit Logging
 
 #### Logged Events
 
 | Event Category | Events Logged |
 |----------------|---------------|
 | **Authentication** | Login, logout, failed attempts, MFA events |
 | **Data Access** | Report views, data exports, API calls |
 | **Data Modification** | Create, update, delete with before/after |
 | **Agent Actions** | AI decisions, confidence scores, reasoning |
 | **Approvals** | Approval/rejection with user and timestamp |
 | **Configuration** | Settings changes, integration updates |
 
 #### Audit Log Schema
 
 | Field | Description |
 |-------|-------------|
 | log_id | Unique identifier |
 | timestamp | UTC timestamp |
 | user_id | Acting user (or 'system' for AI) |
 | action_type | Category of action |
 | entity_type | What was acted upon |
 | entity_id | ID of affected record |
 | details | JSON with action-specific data |
 | ip_address | Source IP |
 | user_agent | Client information |
 
 ---
 
 ## 3. Integration Management
 
 ### 3.1 Integration Framework
 
 #### Connector Architecture
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                  INTEGRATION FRAMEWORK                          │
 ├─────────────────────────────────────────────────────────────────┤
 │                                                                  │
 │  ┌─────────────────────────────────────────────────────────┐    │
 │  │                 CONNECTOR INTERFACE                      │    │
 │  │  connect() | fetch() | push() | validate() | status()   │    │
 │  └─────────────────────────────────────────────────────────┘    │
 │                             │                                    │
 │      ┌──────────────────────┼──────────────────────┐            │
 │      ▼                      ▼                      ▼            │
 │ ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     │
 │ │ ERP Connectors│     │Bank Connectors│     │CRM Connectors│     │
 │ ├──────────────┤     ├──────────────┤     ├──────────────┤     │
 │ │ • NetSuite   │     │ • Plaid      │     │ • Salesforce │     │
 │ │ • Intacct    │     │ • Teller     │     │ • HubSpot    │     │
 │ │ • SAP        │     │ • SWIFT/BAI2 │     │              │     │
 │ │ • Dynamics   │     │              │     │              │     │
 │ └──────────────┘     └──────────────┘     └──────────────┘     │
 │                                                                  │
 └─────────────────────────────────────────────────────────────────┘
 ```
 
 #### Connector Capabilities
 
 | Capability | Description |
 |------------|-------------|
 | **Authentication** | OAuth 2.0, API keys, basic auth, certificates |
 | **Rate Limiting** | Respect API limits, queue requests |
 | **Retry Logic** | Exponential backoff on failures |
 | **Transformation** | Map external schema to internal model |
 | **Validation** | Verify data integrity before import |
 | **Incremental Sync** | Track watermarks for efficient updates |
 
 ### 3.2 Sync Management
 
 #### Sync Types
 
 | Type | Frequency | Use Case |
 |------|-----------|----------|
 | **Real-Time** | Seconds | Bank transactions, invoices |
 | **Incremental** | Minutes | ERP updates, CRM changes |
 | **Full Sync** | Daily/Weekly | Complete data refresh |
 | **On-Demand** | Manual trigger | Force refresh |
 
 #### Sync Monitoring Dashboard
 
 | Metric | Description |
 |--------|-------------|
 | **Last Sync Time** | When data was last updated |
 | **Sync Status** | Success, failed, in-progress |
 | **Records Processed** | Count of records synced |
 | **Error Rate** | Percentage of failed records |
 | **Latency** | Average sync duration |
 
 ### 3.3 API and Webhooks
 
 #### REST API
 
 | Endpoint Category | Example Endpoints |
 |-------------------|-------------------|
 | **Financials** | GET /api/v1/financials/&#123;period&#125; |
 | **Invoices** | GET/POST /api/v1/invoices |
 | **Transactions** | GET /api/v1/transactions |
 | **Reports** | GET /api/v1/reports/&#123;type&#125; |
 | **Webhooks** | POST /api/v1/webhooks/subscribe |
 
 #### Webhook Events
 
 | Event | Trigger |
 |-------|---------|
 | `close.completed` | Period close finished |
 | `exception.created` | New exception flagged |
 | `journal.posted` | Journal entry posted |
 | `anomaly.detected` | Anomaly identified |
 | `sync.failed` | Integration sync failed |
 
 ---
 
 ## 4. Notification and Collaboration
 
 ### 4.1 Notification System
 
 #### Notification Types
 
 | Category | Examples |
 |----------|----------|
 | **Alerts** | Anomaly detected, threshold exceeded |
 | **Approvals** | Item pending approval, approval reminder |
 | **Status** | Close completed, sync failed |
 | **Mentions** | Tagged in comment, assigned task |
 
 #### Delivery Channels
 
 | Channel | Configuration |
 |---------|---------------|
 | **In-App** | Real-time notifications in platform |
 | **Email** | Immediate or digest (daily/weekly) |
 | **Slack** | Channel or DM notifications |
 | **MS Teams** | Channel notifications |
 | **Webhook** | Custom integration endpoint |
 
 ### 4.2 Collaboration Features
 
 #### Comments and Mentions
 
 | Feature | Description |
 |---------|-------------|
 | **Comments** | Add notes to any record (invoice, exception, etc.) |
 | **@Mentions** | Tag team members for attention |
 | **Threads** | Reply chains for discussion |
 | **Attachments** | Attach files to comments |
 
 #### Task Assignment
 
 | Feature | Description |
 |---------|-------------|
 | **Manual Assignment** | Assign exceptions/tasks to users |
 | **Auto-Assignment** | Rules-based routing (by entity, type) |
 | **SLA Tracking** | Monitor time-to-resolution |
 | **Escalation** | Auto-escalate aged items |
 
 ---
 
 ## 5. Configuration and Administration
 
 ### 5.1 System Configuration
 
 #### Configurable Parameters
 
 | Category | Parameters |
 |----------|------------|
 | **Thresholds** | Confidence thresholds, materiality limits |
 | **Policies** | Approval workflows, auto-posting rules |
 | **Schedules** | Sync frequencies, report generation times |
 | **Mappings** | Account mappings, category rules |
 | **Notifications** | Alert rules, digest preferences |
 
 #### Entity Configuration
 
 | Setting | Description |
 |---------|-------------|
 | **Entity Hierarchy** | Parent-child relationships |
 | **Currency** | Functional currency per entity |
 | **Chart of Accounts** | COA structure and mapping |
 | **Fiscal Calendar** | Period definitions |
 | **Intercompany Accounts** | Designated IC accounts |
 
 ### 5.2 User Administration
 
 | Function | Description |
 |----------|-------------|
 | **User CRUD** | Create, update, deactivate users |
 | **Role Assignment** | Assign roles and permissions |
 | **Entity Access** | Scope user access to entities |
 | **SSO Configuration** | SAML/OAuth provider setup |
 | **Password Policy** | Complexity, expiry, history |
 
 ---
 
 ## 6. Performance and Scalability
 
 ### 6.1 Performance Targets
 
 | Metric | Target |
 |--------|--------|
 | **Page Load** | &lt;2 seconds |
 | **Query Response** | &lt;3 seconds |
 | **Sync Latency** | Near real-time to hourly |
 | **Report Generation** | &lt;30 seconds |
 | **System Uptime** | 99.9% |
 
 ### 6.2 Scalability Architecture
 
 | Component | Scaling Strategy |
 |-----------|------------------|
 | **Application** | Horizontal pod scaling (Kubernetes) |
 | **Database** | Read replicas, connection pooling |
 | **Caching** | Redis for sessions and query cache |
 | **Task Processing** | Worker pools for background jobs |
 | **File Storage** | Cloud storage (Supabase/S3) |
 
 ### 6.3 Data Volume Capacity
 
 | Metric | Supported Scale |
 |--------|-----------------|
 | **Transactions/Day** | 10M+ across all integrations |
 | **Entities** | 100+ subsidiaries |
 | **Concurrent Users** | 500+ |
 | **Historical Data** | 7+ years retention |
 
 ---
 
 ## 7. Compliance Framework
 
 ### 7.1 Regulatory Compliance
 
 | Standard | Status | Key Controls |
 |----------|--------|--------------|
 | **SOC 1 Type II** | Planned | Financial reporting controls |
 | **SOC 2 Type II** | Planned | Security, availability, confidentiality |
 | **ISO 27001** | Planned | Information security management |
 | **GDPR** | Compliant | Data privacy, right to erasure |
 
 ### 7.2 Financial Compliance
 
 | Requirement | Implementation |
 |-------------|----------------|
 | **Segregation of Duties** | Role-based approval workflows |
 | **Audit Trail** | Immutable logging of all actions |
 | **Data Integrity** | Double-entry validation, reconciliation |
 | **Access Control** | Least-privilege principle |
 | **Change Management** | Approval required for config changes |
 
 ---
 
 ## 8. Related Documentation
 
 - [Security & Compliance](../compliance/security-compliance.md)
 - [Architecture Overview](../architecture/README.md)
 - [System Layers](../architecture/system-layers.md)
 - [User Management](../admin/user-management.md)
 - [Configuration](../admin/configuration.md)
 - [APIs & Webhooks](../admin/apis-webhooks.md)
