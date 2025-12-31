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
 
 ### 7.2 Key Metrics
 
 | Category | Metrics |
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
