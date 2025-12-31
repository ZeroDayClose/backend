# Backend Tech Stack

The backend is built with Python and FastAPI, following modern best practices for scalability and maintainability.

---

## Core Framework

| Component | Technology |
|-----------|------------|
| **Framework** | FastAPI |
| **Language** | Python 3.11+ |
| **Schema Validation** | Pydantic v2 |
| **Async Support** | asyncio / uvicorn |

---

## Databases

| Type | Technology | Purpose |
|------|------------|---------|
| **Relational (OLTP)** | Supabase (PostgreSQL) | User state, transactions, audit logs |
| **Cache** | Redis | Session storage, rate limiting, caching |
| **Vector DB** | Qdrant / Pinecone | Document embeddings for semantic search |
| **Graph DB** | Neo4j | Context graph for relationship mapping |
| **Object Storage** | Supabase Bucket | File storage for documents and receipts |

---

## Task Processing

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Task Queue** | Redis + Celery | Background job processing |
| **Workflow Orchestration** | Temporal.io | Long-running, fault-tolerant workflows |
| **Scheduling** | Celery Beat | Scheduled tasks (daily sync, reports) |

---

## AI & ML

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Agentic System** | Pydantic AI | Agent framework for automation |
| **LLM Abstraction** | Custom layer | Extensible support for Gemini + Z.ai |
| **Embeddings** | Gemini + OpenAI | Document vectorization |
| **OCR** | VLLM (Gemini + GLM-4.6V) | Document extraction |

---

## DevOps & Infrastructure

| Component | Technology |
|-----------|------------|
| **Containerization** | Docker + Docker Compose |
| **CI/CD** | GitHub Actions |
| **Deployment** | Railway |
| **Logging** | Structured Logging (JSON format) |
| **Monitoring** | Application metrics + alerts |

---

## API Design

### RESTful Endpoints

```
/api/v1/
├── /auth           # Authentication & authorization
├── /transactions   # Transaction management
├── /reconciliation # Matching & reconciliation
├── /reports        # Report generation
├── /search         # Semantic search
└── /webhooks       # External system callbacks
```

### Response Format

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "request_id": "abc-123"
  }
}
```

---

## Security

| Feature | Implementation |
|---------|----------------|
| **Authentication** | JWT tokens via Supabase Auth |
| **Authorization** | Role-based access control (RBAC) |
| **Encryption** | TLS 1.3 in transit, AES-256 at rest |
| **Secrets Management** | Environment variables / Vault |
