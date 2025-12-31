# Data Storage

ZeroDayClose uses a multi-database architecture optimized for different data access patterns.

---

## Database Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Application Layer                         │
└─────────────────────────────────────────────────────────────────┘
        │           │           │           │           │
        ▼           ▼           ▼           ▼           ▼
   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
   │  OLTP  │  │  OLAP  │  │ Vector │  │ Graph  │  │ Object │
   │ Postgres│  │Snowflake│ │ Qdrant │  │ Neo4j  │  │Storage │
   └────────┘  └────────┘  └────────┘  └────────┘  └────────┘
```

---

## Operational Database (OLTP)

| Component | Technology |
|-----------|------------|
| **Database** | PostgreSQL (via Supabase) |
| **Hosting** | Supabase managed |
| **Scaling** | Connection pooling via Supabase |

**Use Cases:**
- User accounts and preferences
- Workflow status and state
- Audit logs
- Real-time transaction data

---

## Analytical Warehouse (OLAP)

| Component | Technology |
|-----------|------------|
| **Database** | Snowflake or Google BigQuery |
| **Pattern** | ELT (Extract, Load, Transform) |
| **Modeling** | dbt (Data Build Tool) |

**Use Cases:**
- High-volume transaction history
- Complex analytical queries
- Historical trend analysis
- Reporting aggregations

---

## Vector Database

| Component | Technology |
|-----------|------------|
| **Database** | Qdrant or Pinecone |
| **Embeddings** | OpenAI / Gemini models |
| **Index Type** | HNSW (Hierarchical Navigable Small World) |

**Use Cases:**
- Semantic search over documents
- Contract similarity matching
- RAG (Retrieval Augmented Generation)
- Document clustering

---

## Graph Database

| Component | Technology |
|-----------|------------|
| **Database** | Neo4j |
| **Query Language** | Cypher |
| **Hosting** | Neo4j AuraDB or self-hosted |

**Use Cases:**
- Context graph (Transaction → Vendor → Pattern → Account)
- Multi-hop reasoning for AI
- Relationship discovery
- Pattern matching across entities

<details>
<summary><strong>Context Graph Schema</strong></summary>

```
(Transaction)-[:FROM]->(Vendor)
(Transaction)-[:TO]->(Account)
(Transaction)-[:MATCHED_BY]->(Pattern)
(Vendor)-[:HAS_HISTORY]->(HistoricalPattern)
(Pattern)-[:APPROVED_BY]->(User)
(Pattern)-[:APPLIES_TO]->(Account)
```

</details>

---

## Object Storage

| Component | Technology |
|-----------|------------|
| **Storage** | Supabase Bucket (S3-compatible) |
| **CDN** | Supabase CDN |

**Use Cases:**
- Uploaded documents (contracts, receipts)
- Generated reports (PDFs)
- Evidence packs
- Backup exports

---

## Caching Layer

| Component | Technology |
|-----------|------------|
| **Cache** | Redis |
| **Pattern** | Cache-aside |
| **TTL** | Configurable per key type |

**Use Cases:**
- Session storage
- API response caching
- Rate limiting counters
- Temporary computation results

---

## Data Integrity

| Feature | Implementation |
|---------|----------------|
| **Transaction Hashing** | SHA-256 hash of (vendor, amount, date) |
| **Duplicate Detection** | Hash lookup before insert |
| **Audit Trail** | Immutable append-only audit log |
| **Reconciliation** | Automated checks between Shadow Ledger and ERP |
