# System Architecture Layers

ZeroDayClose follows a four-layer architecture designed for scalability and ERP-agnostic operation.

---

## Layer 1: Integration Layer (The "Connectors")

This layer is responsible for the secure, authenticated extraction and loading of data.

**Role:** Manage API quotas, handle retries, and normalize authentication methods (OAuth2, Token, Basic).

<details>
<summary><strong>Technology Stack</strong></summary>

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Framework** | Airbyte (embedded) or custom Python connectors | Singer specification for standard data extraction |
| **Orchestration** | Temporal.io or Dagster | Manage complex, long-running sync workflows |
| **Queuing** | Redis-backed queues (Celery or BullMQ) | Rate-limit requests to legacy ERP APIs |

</details>

---

## Layer 2: Data Layer (The "Unified Finance Context")

This is the system's "Brain." It stores raw data, normalized data, and the semantic graph.

**Role:** Provide a unified schema for AI agents to query, abstracting the differences between underlying source systems.

<details>
<summary><strong>Technology Stack</strong></summary>

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Operational DB (OLTP)** | PostgreSQL (AWS Aurora) | User state, workflow status, audit logs |
| **Analytical Warehouse (OLAP)** | Snowflake or BigQuery | High-volume transaction history |
| **Vector Database** | Pinecone, Weaviate, or pgvector | RAG for contracts and invoices |
| **Graph Database** | Neo4j | Context graph for multi-hop reasoning |
| **Data Modeling** | dbt (Data Build Tool) | Transform raw ERP data to unified schema |

</details>

---

## Layer 3: Orchestration & AI Layer (The "Audit-Ready Agent")

This layer hosts the autonomous agents that differentiate the platform from a simple chatbot.

**Role:** Execute workflows (e.g., "Reconcile Cash") using a Multi-Agent System (MAS).

<details>
<summary><strong>Technology Stack</strong></summary>

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Backend Runtime** | Python with FastAPI | Core API layer |
| **Agent Framework** | LangGraph or AutoGen | Multi-agent workflow orchestration |
| **LLM Inference** | Hybrid approach | See details below |
| **Validation Engine** | Pandas or Polars | Enforce accounting identities |

**LLM Strategy:**
- **Reasoning/Complex Tasks:** GPT-4o or Claude 3.5 Sonnet for high-level reasoning and complex contract parsing
- **Privacy-Sensitive/High-Volume:** Fine-tuned open-source models (Llama 3, Mistral) hosted within VPC

</details>

---

## Layer 4: Frontend Layer (The "Command Center")

**Role:** Provide the user interface for monitoring agents, reviewing evidence, and analyzing reports.

<details>
<summary><strong>Technology Stack</strong></summary>

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Framework** | React with TypeScript | Component-based UI |
| **Styling** | Tailwind CSS | Rapid UI development |
| **State Management** | TanStack Query | Server-state synchronization |
| **Visualization** | Recharts or Visx | Financial charting (Cash Flow, Burn Rate) |

</details>

---

## Asynchronous Processing

All heavy processing is handled asynchronously:

- **Task Queues:** Redis + Celery for background job processing
- **Workflow Orchestration:** Temporal.io for long-running, fault-tolerant workflows
- **Event-Driven:** Near real-time sync ensures the Unified Finance Context stays current

---

## Event-Driven Architecture

ZeroDayClose employs an event-driven architecture that enables loose coupling, real-time processing, and seamless scalability across all system layers.

### Event Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    EVENT-DRIVEN FLOW                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Layer 1 (Integration)                                          │
│  ┌─────────────┐                                                │
│  │ Connector   │──▶ Event: data.synced ──────────────┐          │
│  └─────────────┘                                      │          │
│                                                       ▼          │
│  Layer 2 (Data)                              ┌─────────────┐    │
│  ┌─────────────┐                             │ Event Bus   │    │
│  │ Context     │◀── Event: graph.updated ◀──│ (Kafka/     │    │
│  │ Graph       │                             │  Redis)     │    │
│  └─────────────┘                             └─────────────┘    │
│                                                       │          │
│  Layer 3 (AI/Orchestration)                          ▼          │
│  ┌─────────────┐                             ┌─────────────┐    │
│  │ Agent       │◀── Event: task.assigned ◀──│ Workflow    │    │
│  │ Framework   │──▶ Event: task.completed ──▶│ Engine      │    │
│  └─────────────┘                             └─────────────┘    │
│                                                       │          │
│  Layer 4 (Frontend)                                  ▼          │
│  ┌─────────────┐                             ┌─────────────┐    │
│  │ Dashboard   │◀── Event: ui.update ◀──────│ WebSocket   │    │
│  │ Components  │                             │ Gateway     │    │
│  └─────────────┘                             └─────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Event Categories

| Category | Examples | Consumers |
|----------|----------|-----------|
| **Data Events** | `data.synced`, `transaction.created`, `balance.updated` | AI Layer, Analytics |
| **Workflow Events** | `task.assigned`, `task.completed`, `approval.required` | Notification Service, Dashboard |
| **AI Events** | `prediction.made`, `anomaly.detected`, `learning.updated` | Audit Log, Context Graph |
| **User Events** | `user.action`, `correction.made`, `exception.resolved` | Learning System, Analytics |

### Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Event Broker** | Apache Kafka / Redis Streams | Reliable event delivery |
| **Event Schema** | Apache Avro / JSON Schema | Schema validation |
| **Dead Letter Queue** | Kafka DLQ | Failed event handling |
| **Event Replay** | Kafka offset management | Reprocess historical events |

### Benefits

- **Loose Coupling** — Services communicate via events, not direct calls
- **Real-Time Updates** — Dashboard reflects changes immediately
- **Scalability** — Add consumers without modifying producers
- **Auditability** — Complete event history for compliance
- **Resilience** — Failed events retry automatically

---

## Related Documentation

- [Technical Architecture](technical-architecture-detailed.md)
- [Sidecar Pattern](sidecar-pattern.md)
- [Shadow Ledger](shadow-ledger.md)
