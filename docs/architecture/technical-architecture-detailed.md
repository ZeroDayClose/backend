 ---
 sidebar_label: Technical Architecture (Detailed)
 ---
 
 # Technical Architecture: Comprehensive Documentation
 
 > **System Design and Infrastructure — Complete Technical Reference**
 
 This document provides comprehensive coverage of ZeroDayClose's technical architecture, including system design, technology stack, infrastructure patterns, and implementation approaches.
 
 ---
 
 ## 1. Architecture Overview
 
 ### 1.1 High-Level Architecture
 
 ZeroDayClose follows a modular monolith architecture with clear sub-components, designed for scalability, security, and ERP-agnostic operation.
 
 ```
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                           CLIENT LAYER                                      │
 │                                                                              │
 │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
 │  │  Web App    │  │  Mobile App │  │  Slack Bot  │  │  API Client │        │
 │  │  (React)    │  │  (Future)   │  │             │  │             │        │
 │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
 │                                                                              │
 └──────────────────────────────────┬──────────────────────────────────────────┘
                                    │ HTTPS / WebSocket
                                    ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                           API GATEWAY                                       │
 │                    (Authentication, Rate Limiting, Routing)                 │
 └──────────────────────────────────┬──────────────────────────────────────────┘
                                    │
                                    ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                        APPLICATION LAYER                                    │
 │                                                                              │
 │  ┌───────────────────────────────────────────────────────────────────────┐  │
 │  │                     FastAPI Application                                │  │
 │  ├───────────────┬───────────────┬───────────────┬───────────────────────┤  │
 │  │   Close       │   Revenue     │    Cash       │    Reporting          │  │
 │  │   Service     │   Service     │   Service     │    Service            │  │
 │  └───────────────┴───────────────┴───────────────┴───────────────────────┘  │
 │                                                                              │
 │  ┌───────────────────────────────────────────────────────────────────────┐  │
 │  │                   AI / Orchestration Layer                             │  │
 │  │              (Pydantic AI / LangGraph / Agent Framework)               │  │
 │  └───────────────────────────────────────────────────────────────────────┘  │
 │                                                                              │
 └──────────────────────────────────┬──────────────────────────────────────────┘
                                    │
                                    ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                           DATA LAYER                                        │
 │                                                                              │
 │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
 │  │ PostgreSQL  │  │  Snowflake  │  │  Qdrant     │  │   Neo4j     │        │
 │  │   (OLTP)    │  │   (OLAP)    │  │ (Vector DB) │  │ (Graph DB)  │        │
 │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │
 │                                                                              │
 │  ┌─────────────┐  ┌─────────────┐                                          │
 │  │   Redis     │  │  Supabase   │                                          │
 │  │  (Cache)    │  │  (Storage)  │                                          │
 │  └─────────────┘  └─────────────┘                                          │
 │                                                                              │
 └──────────────────────────────────┬──────────────────────────────────────────┘
                                    │
                                    ▼
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │                        INTEGRATION LAYER                                    │
 │                                                                              │
 │  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐     │
 │  │   ERPs    │ │   Banks   │ │   CRMs    │ │  Billing  │ │  Storage  │     │
 │  │ NetSuite  │ │   Plaid   │ │Salesforce │ │  Stripe   │ │   Gmail   │     │
 │  │  Intacct  │ │  Teller   │ │  HubSpot  │ │   Zuora   │ │   Slack   │     │
 │  │    SAP    │ │ SWIFT/BAI │ │           │ │ Chargebee │ │   Drive   │     │
 │  └───────────┘ └───────────┘ └───────────┘ └───────────┘ └───────────┘     │
 │                                                                              │
 └─────────────────────────────────────────────────────────────────────────────┘
 ```
 
 ### 1.2 Design Principles
 
 | Principle | Description |
 |-----------|-------------|
 | **API-First** | All functionality exposed via REST/GraphQL APIs |
 | **Event-Driven** | Asynchronous processing for scalability |
 | **Sidecar Pattern** | Overlay on existing systems, no replacement |
 | **Audit-Ready** | Every action produces traceable evidence |
 | **ERP-Agnostic** | Unified model abstracts source system differences |
| **Rollback-Capable** | All actions are reversible with full audit trail |
 
 ---
 
 ## 2. Technology Stack
 
 ### 2.1 Backend Stack
 
 | Component | Technology | Purpose |
 |-----------|------------|---------|
 | **Runtime** | Python 3.11+ | Core application language |
 | **Framework** | FastAPI | High-performance async API framework |
 | **Validation** | Pydantic | Data validation and serialization |
 | **ORM** | SQLAlchemy 2.0 | Database abstraction |
 | **Migrations** | Alembic | Database schema migrations |
 | **Task Queue** | Celery + Redis | Background job processing |
 | **Workflow** | Temporal.io | Long-running workflow orchestration |
| **Event Streaming** | Apache Kafka / Redis Streams | Event-driven architecture |
| **Message Broker** | Redis Pub/Sub | Real-time notifications |
 
 ### 2.2 Frontend Stack
 
 | Component | Technology | Purpose |
 |-----------|------------|---------|
 | **Framework** | React 18+ | Component-based UI |
 | **Language** | TypeScript | Type-safe JavaScript |
 | **Styling** | Tailwind CSS | Utility-first CSS |
 | **State** | TanStack Query | Server state management |
 | **Routing** | React Router | Client-side navigation |
 | **Charts** | Recharts | Financial visualizations |
 | **Tables** | TanStack Table | Complex data grids |
 
 ### 2.3 Data Stack
 
 | Component | Technology | Purpose |
 |-----------|------------|---------|
 | **OLTP Database** | PostgreSQL (Aurora) | Operational data |
 | **OLAP Warehouse** | Snowflake | Analytical queries |
 | **Vector Database** | Qdrant / pgvector | Semantic search, RAG |
 | **Graph Database** | Neo4j | Context graph, relationships |
 | **Cache** | Redis | Session, query caching |
 | **File Storage** | Supabase Storage | Documents, attachments |
 | **Data Transform** | dbt | ELT transformations |
 
 ### 2.4 AI/ML Stack
 
 | Component | Technology | Purpose |
 |-----------|------------|---------|
 | **Agent Framework** | Pydantic AI / LangGraph | Multi-agent orchestration |
 | **LLM Provider** | Gemini + OpenAI | Reasoning, text generation |
 | **Embeddings** | OpenAI / Gemini | Vector embeddings |
 | **OCR/Vision** | GLM-4.6V / Gemini Vision | Document extraction |
 | **ML Framework** | scikit-learn / XGBoost | Classification, prediction |
 
 ### 2.5 Infrastructure Stack
 
 | Component | Technology | Purpose |
 |-----------|------------|---------|
 | **Cloud** | AWS | Primary cloud provider |
 | **Containers** | Docker | Application containerization |
 | **Orchestration** | Kubernetes (EKS) | Container orchestration |
 | **CI/CD** | GitHub Actions | Continuous integration/deployment |
 | **Monitoring** | Datadog / Prometheus | Observability |
 | **Logging** | ELK Stack | Centralized logging |
 
 ---
 
 ## 3. Layer Architecture Details
 
 ### 3.1 Integration Layer
 
 **Purpose:** Secure, authenticated extraction and loading of data from external systems.
 
 #### Connector Framework
 
 ```
 Interface: BaseConnector
 ├── Method: authenticate() → Credentials
 ├── Method: test_connection() → ConnectionStatus
 ├── Method: fetch_data(query) → DataFrame
 ├── Method: push_data(records) → PushResult
 ├── Method: get_watermark() → Timestamp
 └── Method: set_watermark(timestamp) → void
 
 Concrete Implementations:
 ├── NetSuiteConnector (REST/SOAP)
 ├── IntacctConnector (SDK)
 ├── PlaidConnector (OAuth)
 ├── SalesforceConnector (REST)
 └── GenericFileConnector (CSV/BAI2/SWIFT)
 ```
 
 #### Sync Orchestration
 
 | Component | Technology | Purpose |
 |-----------|------------|---------|
 | **Scheduler** | Temporal.io | Cron-like scheduling |
 | **Queue** | Redis + Celery | Rate-limited request processing |
 | **State** | PostgreSQL | Sync status, watermarks |
 | **Retry** | Exponential backoff | Handle transient failures |
 
 ### 3.2 Data Layer
 
 **Purpose:** Unified storage for all financial data with optimized query patterns.
 
 #### Database Strategy
 
 | Database | Use Case | Data Types |
 |----------|----------|------------|
 | **PostgreSQL** | Operational CRUD | Users, config, workflow state |
 | **Snowflake** | Analytics, reporting | Historical transactions, aggregates |
 | **Qdrant** | Semantic search | Contract embeddings, document chunks |
 | **Neo4j** | Relationship queries | Vendor patterns, approval chains |
 
 #### Data Flow
 
 ```
 External Systems
         │
         ▼
 ┌─────────────────┐
 │   Staging DB    │  (Raw data, minimal transformation)
 └────────┬────────┘
          │
          ▼ dbt transformations
 ┌─────────────────┐
 │  Unified Model  │  (Canonical schema)
 └────────┬────────┘
          │
     ┌────┴────┐
     ▼         ▼
 PostgreSQL  Snowflake  (Operational + Analytical)
 ```
 
 ### 3.3 Application Layer
 
 **Purpose:** Business logic, API endpoints, and service orchestration.
 
 #### Service Structure
 
 ```
 src/
 ├── api/
 │   ├── v1/
 │   │   ├── close/          # Close automation endpoints
 │   │   ├── revenue/        # Revenue automation endpoints
 │   │   ├── cash/           # Cash automation endpoints
 │   │   ├── reporting/      # Reporting endpoints
 │   │   └── search/         # Instant Answers endpoints
 │   └── dependencies.py     # Shared dependencies
 ├── services/
 │   ├── reconciliation/     # Reconciliation logic
 │   ├── revenue_recognition/ # ASC 606 engine
 │   ├── cash_application/   # Payment matching
 │   ├── consolidation/      # Multi-entity consolidation
 │   └── nlp/                # Query parsing
 ├── agents/
 │   ├── close_agent.py      # Close automation agent
 │   ├── revenue_agent.py    # Revenue automation agent
 │   ├── cash_agent.py       # Cash automation agent
 │   └── base_agent.py       # Doer/Critic pattern
 ├── models/
 │   ├── domain/             # Domain entities
 │   └── schemas/            # Pydantic schemas
 └── core/
     ├── config.py           # Configuration
     ├── security.py         # Auth/authz
     └── database.py         # DB connections
 ```
 
 ### 3.4 AI/Orchestration Layer
 
 **Purpose:** Multi-agent system for autonomous financial operations.
 
 #### Agent Architecture (Doer/Critic Pattern)
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                     AGENT ORCHESTRATION                         │
 ├─────────────────────────────────────────────────────────────────┤
 │                                                                  │
 │  ┌─────────────┐          ┌─────────────┐          ┌──────────┐ │
 │  │   DOER      │──propose─▶│   CRITIC    │──validate─▶│ COMMIT │ │
 │  │  (LLM/AI)   │          │ (Rules/Det) │          │ (Action) │ │
 │  └─────────────┘          └─────────────┘          └──────────┘ │
 │         │                        │                       │      │
 │         │                        │                       │      │
 │         ▼                        ▼                       ▼      │
 │  ┌─────────────┐          ┌─────────────┐          ┌──────────┐ │
 │  │  Evidence   │          │  Validation │          │  Audit   │ │
 │  │  Generator  │          │    Log      │          │   Log    │ │
 │  └─────────────┘          └─────────────┘          └──────────┘ │
 │                                                                  │
 └─────────────────────────────────────────────────────────────────┘
 ```
 
 #### LLM Integration Strategy
 
 | Task | Model | Rationale |
 |------|-------|-----------|
 | **Reasoning/Analysis** | GPT-4o / Claude 3.5 | High accuracy for complex tasks |
 | **Document Parsing** | Gemini 1.5 Flash | Fast, cost-effective extraction |
 | **Embeddings** | text-embedding-3-large | High-quality vectors |
 | **Simple Classification** | Fine-tuned Llama 3 | Privacy, cost optimization |
 
 ### 3.5 Frontend Layer
 
 **Purpose:** User interface for monitoring, review, and analysis.
 
 #### Component Architecture
 
 ```
 src/
 ├── components/
 │   ├── common/             # Shared UI components
 │   ├── dashboards/         # Dashboard widgets
 │   ├── forms/              # Input forms
 │   └── charts/             # Visualization components
 ├── pages/
 │   ├── close/              # Close module pages
 │   ├── revenue/            # Revenue module pages
 │   ├── cash/               # Cash module pages
 │   ├── reporting/          # Reporting pages
 │   └── admin/              # Admin pages
 ├── hooks/
 │   ├── useAuth.ts          # Authentication hook
 │   ├── useQuery.ts         # Data fetching hooks
 │   └── useRealtime.ts      # WebSocket hooks
 ├── services/
 │   └── api.ts              # API client
 └── store/
     └── index.ts            # Global state (if needed)
 ```
 
 #### Real-Time Updates
 
 | Technology | Use Case |
 |------------|----------|
 | **WebSocket** | Dashboard live updates |
 | **SSE** | Progress indicators |
 | **Polling** | Fallback for compatibility |
 
 ---
 
 ## 4. Key Design Patterns
 
 ### 4.1 Sidecar Pattern
 
 ZeroDayClose operates as a "sidecar" to existing ERPs, not a replacement.
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                     CUSTOMER ENVIRONMENT                        │
 │                                                                  │
 │  ┌─────────────────┐                ┌─────────────────────────┐ │
 │  │                 │    Sync Data   │                         │ │
 │  │   ERP System    │◀──────────────▶│    ZeroDayClose         │ │
 │  │   (NetSuite)    │   (Bidirect.)  │    (Sidecar)            │ │
 │  │                 │                │                         │ │
 │  │  - Source of    │                │  - Read GL/Subledger    │ │
 │  │    Truth        │                │  - Process/Analyze      │ │
 │  │  - Final Post   │                │  - Write back JEs       │ │
 │  │                 │                │  - Dashboards/Reports   │ │
 │  └─────────────────┘                └─────────────────────────┘ │
 │                                                                  │
 └─────────────────────────────────────────────────────────────────┘
 ```
 
 ### 4.2 Shadow Ledger Pattern
 
 Maintain a parallel ledger for high-performance operations.
 
 | Aspect | ERP Ledger | Shadow Ledger |
 |--------|------------|---------------|
 | **Purpose** | System of record | Fast analysis |
 | **Update** | Real-time | Near real-time sync |
 | **Query** | Slow for analytics | Optimized for BI |
 | **Write** | Yes | Read-only (except sync) |
 
 ### 4.3 Event Sourcing
 
 All financial actions stored as immutable events.
 
 ```
 Event: JournalEntryCreated
 ├── event_id: uuid
 ├── timestamp: datetime
 ├── aggregate_id: je_id
 ├── payload:
 │   ├── entity_id
 │   ├── date
 │   ├── lines: [...]
 │   └── source: "CloseAgent"
 └── metadata:
     ├── user_id or agent_id
     └── confidence_score
 ```
 
 ---
 
 ## 5. Security Architecture
 
 ### 5.1 Defense in Depth
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                     SECURITY LAYERS                             │
 ├─────────────────────────────────────────────────────────────────┤
 │                                                                  │
 │  Layer 1: Network Security                                      │
 │  ├── WAF (Web Application Firewall)                            │
 │  ├── DDoS Protection                                           │
 │  └── VPC Isolation                                             │
 │                                                                  │
 │  Layer 2: Application Security                                  │
 │  ├── Authentication (JWT/SSO)                                  │
 │  ├── Authorization (RBAC)                                      │
 │  └── Input Validation (Pydantic)                               │
 │                                                                  │
 │  Layer 3: Data Security                                         │
 │  ├── Encryption at Rest (AES-256)                              │
 │  ├── Encryption in Transit (TLS 1.3)                           │
 │  └── Row-Level Security                                        │
 │                                                                  │
 │  Layer 4: Audit & Monitoring                                    │
 │  ├── Immutable Audit Logs                                      │
 │  ├── Real-time Alerting                                        │
 │  └── Anomaly Detection                                         │
 │                                                                  │
 └─────────────────────────────────────────────────────────────────┘
 ```
 
 ### 5.2 Secrets Management
 
 | Secret Type | Storage | Rotation |
 |-------------|---------|----------|
 | **API Keys** | AWS Secrets Manager | 90 days |
 | **DB Credentials** | AWS Secrets Manager | 30 days |
 | **JWT Keys** | Environment/Secrets | On-demand |
 | **Integration Tokens** | Encrypted DB column | Per provider |
 
 ---
 
 ## 6. Deployment Architecture
 
 ### 6.1 Container Architecture
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                   KUBERNETES CLUSTER                            │
 ├─────────────────────────────────────────────────────────────────┤
 │                                                                  │
 │  Namespace: zerodayclose-prod                                   │
 │                                                                  │
 │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
 │  │  API Pods   │  │ Worker Pods │  │ Agent Pods  │              │
 │  │  (HPA: 3-10)│  │ (HPA: 2-20) │  │ (HPA: 2-10) │              │
 │  └─────────────┘  └─────────────┘  └─────────────┘              │
 │                                                                  │
 │  ┌─────────────┐  ┌─────────────┐                               │
 │  │   Ingress   │  │  Services   │                               │
 │  └─────────────┘  └─────────────┘                               │
 │                                                                  │
 └─────────────────────────────────────────────────────────────────┘
 
 External Services:
 ├── AWS RDS (PostgreSQL)
 ├── Snowflake (Warehouse)
 ├── Redis ElastiCache
 └── Supabase (Storage)
 ```
 
 ### 6.2 CI/CD Pipeline
 
 ```
 GitHub Repository
         │
         ▼ Push/PR
 ┌─────────────────┐
 │  GitHub Actions │
 ├─────────────────┤
 │ 1. Lint/Format  │
 │ 2. Unit Tests   │
 │ 3. Build Image  │
 │ 4. Security Scan│
 │ 5. Push to ECR  │
 └────────┬────────┘
          │
          ▼ (main branch)
 ┌─────────────────┐
 │  Deploy Staging │
 │  - Auto tests   │
 │  - Smoke tests  │
 └────────┬────────┘
          │ Manual approval
          ▼
 ┌─────────────────┐
 │ Deploy Prod     │
 │ - Blue/Green    │
 │ - Canary        │
 └─────────────────┘
 ```
 
 ---
 
 ## 7. Observability
 
 ### 7.1 Monitoring Stack
 
 | Component | Technology | Purpose |
 |-----------|------------|---------|
 | **Metrics** | Prometheus + Grafana | System metrics, dashboards |
 | **Logging** | ELK Stack | Centralized log aggregation |
 | **Tracing** | OpenTelemetry + Jaeger | Distributed tracing |
 | **APM** | Datadog | Application performance |
 | **Alerts** | PagerDuty | Incident management |
 
---

## 8. Event-Driven Architecture

ZeroDayClose uses an event-driven architecture to enable real-time processing, loose coupling, and scalability.

### 8.1 Event Bus Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      EVENT BUS (Kafka/Redis Streams)            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Publishers                              Subscribers             │
│  ┌─────────────┐                        ┌─────────────┐         │
│  │ Close Svc   │──publish──▶ Topic ──▶──│ Notification│         │
│  └─────────────┘            │           │   Service   │         │
│  ┌─────────────┐            │           └─────────────┘         │
│  │ Revenue Svc │──publish──▶│           ┌─────────────┐         │
│  └─────────────┘            ├──────────▶│ Analytics   │         │
│  ┌─────────────┐            │           │   Service   │         │
│  │ Cash Svc    │──publish──▶│           └─────────────┘         │
│  └─────────────┘            │           ┌─────────────┐         │
│  ┌─────────────┐            └──────────▶│ Audit Log   │         │
│  │ Integration │──publish──▶            │   Service   │         │
│  └─────────────┘                        └─────────────┘         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Event Types

| Domain | Events |
|--------|--------|
| **Close** | `reconciliation.started`, `reconciliation.completed`, `je.created`, `je.approved`, `period.closed` |
| **Revenue** | `contract.ingested`, `obligation.identified`, `revenue.recognized`, `schedule.modified` |
| **Cash** | `payment.received`, `payment.matched`, `forecast.updated`, `anomaly.detected` |
| **Integration** | `sync.started`, `sync.completed`, `sync.failed`, `data.refreshed` |
| **User** | `user.login`, `approval.given`, `correction.made`, `exception.resolved` |

### 8.3 Event Schema

```
Event Structure:
├── event_id: UUID
├── event_type: string (e.g., "reconciliation.completed")
├── timestamp: ISO8601 datetime
├── source: string (service name)
├── entity_id: UUID (affected entity)
├── user_id: UUID (actor, if applicable)
├── payload: JSON (event-specific data)
└── metadata:
    ├── correlation_id: UUID (trace across services)
    ├── causation_id: UUID (parent event)
    └── version: string (schema version)
```

### 8.4 Event Processing Patterns

| Pattern | Use Case | Implementation |
|---------|----------|----------------|
| **Pub/Sub** | Notifications, logging | Redis Pub/Sub |
| **Event Sourcing** | Audit trail, replay | Kafka with compaction |
| **CQRS** | Separate read/write models | Snowflake for reads |
| **Saga** | Distributed transactions | Temporal.io workflows |
| **Dead Letter Queue** | Failed event handling | Kafka DLQ topic |

---

## 9. Rollback and Undo Capabilities

All financial operations support rollback to maintain data integrity and enable error correction.

### 9.1 Rollback Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    ROLLBACK SYSTEM                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐        │
│  │  Original   │────▶│  Event      │────▶│  State      │        │
│  │  Action     │     │  Stored     │     │  Applied    │        │
│  └─────────────┘     └─────────────┘     └─────────────┘        │
│                             │                    │               │
│                             ▼                    ▼               │
│                      ┌─────────────┐     ┌─────────────┐        │
│                      │  Rollback   │◀────│  Undo       │        │
│                      │  Event      │     │  Requested  │        │
│                      └─────────────┘     └─────────────┘        │
│                             │                                    │
│                             ▼                                    │
│                      ┌─────────────┐                            │
│                      │  Compensating│                            │
│                      │  Action      │                            │
│                      └─────────────┘                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 9.2 Rollback-Capable Operations

| Operation | Rollback Method | Scope |
|-----------|-----------------|-------|
| **Journal Entry** | Reversing entry with opposite debits/credits | Single entry |
| **Payment Application** | Unapply payment, restore open invoice | Single match |
| **Reconciliation** | Unreconcile, restore pending status | Single account |
| **Revenue Recognition** | Reverse recognized amount, restore deferred | Schedule entry |
| **Categorization** | Revert to previous category | Single transaction |
| **Batch Import** | Rollback all records from batch | Entire batch |
| **Period Close** | Reopen period (with approval) | Full period |

### 9.3 Rollback Controls

| Control | Description |
|---------|-------------|
| **Time Window** | Rollback allowed within configurable period (e.g., 24 hours) |
| **Approval Required** | High-value rollbacks require manager approval |
| **Audit Trail** | Full logging of original action and rollback |
| **Cascade Detection** | Warn if rollback affects downstream data |
| **Lock Prevention** | Cannot rollback if period is locked |

### 9.4 Implementation

```
Class: RollbackManager
├── Method: can_rollback(action_id) → RollbackEligibility
├── Method: preview_rollback(action_id) → RollbackImpact
├── Method: execute_rollback(action_id, reason) → RollbackResult
├── Method: get_rollback_history(entity_id) → List[RollbackRecord]
└── Method: generate_compensating_action(action) → Action
```

---

## 10. Async Batch Processing

Large-scale operations are processed asynchronously in batches for performance and reliability.

### 10.1 Batch Processing Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                   BATCH PROCESSING SYSTEM                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐        │
│  │  Batch      │────▶│   Queue     │────▶│  Worker     │        │
│  │  Request    │     │  (Celery)   │     │   Pool      │        │
│  └─────────────┘     └─────────────┘     └─────────────┘        │
│                                                 │                │
│                        ┌────────────────────────┤                │
│                        ▼                        ▼                │
│                 ┌─────────────┐         ┌─────────────┐         │
│                 │  Parallel   │         │  Progress   │         │
│                 │  Execution  │         │  Tracking   │         │
│                 └─────────────┘         └─────────────┘         │
│                        │                        │                │
│                        ▼                        ▼                │
│                 ┌─────────────┐         ┌─────────────┐         │
│                 │  Results    │         │  WebSocket  │         │
│                 │  Aggregation│         │  Updates    │         │
│                 └─────────────┘         └─────────────┘         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 10.2 Batch Operation Types

| Operation | Batch Size | Parallelism | Typical Duration |
|-----------|------------|-------------|------------------|
| **Bank Transaction Import** | 10,000 per batch | 10 workers | 2-5 minutes |
| **Invoice Matching** | 1,000 per batch | 20 workers | 1-3 minutes |
| **Reconciliation** | 100 accounts | 10 workers | 5-10 minutes |
| **Revenue Schedule Generation** | 500 contracts | 5 workers | 3-5 minutes |
| **Report Generation** | 1 report | 1 worker | 30 seconds - 2 minutes |
| **Data Export** | 100,000 rows | 5 workers | 1-5 minutes |

### 10.3 Batch Processing Features

| Feature | Description |
|---------|-------------|
| **Progress Tracking** | Real-time progress via WebSocket |
| **Partial Failure** | Continue processing on individual failures |
| **Retry Logic** | Automatic retry with exponential backoff |
| **Priority Queues** | High-priority batches processed first |
| **Rate Limiting** | Respect external API limits |
| **Checkpointing** | Resume from last checkpoint on failure |
| **Result Aggregation** | Consolidated success/failure summary |

### 10.4 Celery Task Patterns

| Pattern | Use Case |
|---------|----------|
| **chord** | Fan-out processing with aggregation callback |
| **group** | Parallel execution of independent tasks |
| **chain** | Sequential task execution |
| **chunks** | Split large lists into parallel batches |

### 10.5 Monitoring

| Metric | Description |
|--------|-------------|
| **Queue Depth** | Number of pending batch jobs |
| **Processing Time** | Average/p95/p99 batch duration |
| **Success Rate** | Percentage of successful batches |
| **Worker Utilization** | CPU/memory usage per worker |
| **Retry Rate** | Frequency of task retries |

 ### 7.2 Key Metrics
 
## 11. Related Documentation
 |----------|---------|
 | **Availability** | Uptime %, error rate |
 | **Performance** | Response time p50/p95/p99 |
 | **Business** | Auto-match rate, close duration |
 | **Integration** | Sync success rate, latency |
 | **AI** | Confidence distribution, override rate |
 
 ---
 
 ## 8. Related Documentation
 
 - [Architecture Overview](README.md)
 - [System Layers](system-layers.md)
 - [Sidecar Pattern](sidecar-pattern.md)
 - [Shadow Ledger](shadow-ledger.md)
 - [Backend Stack](../technical/backend-stack.md)
 - [Frontend Stack](../technical/frontend-stack.md)
 - [AI & Analysis](../technical/ai-analysis.md)
