# AI & Analysis

ZeroDayClose uses a sophisticated AI system for financial analysis and automation.

---

## AI Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      Orchestration Layer                         │
│                   (Pydantic AI / LangGraph)                      │
└─────────────────────────────────────────────────────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌───────────────┐      ┌───────────────┐      ┌───────────────┐
│   LLM APIs    │      │ Vector Search │      │  Graph Query  │
│ (Gemini/GPT)  │      │   (Qdrant)    │      │    (Neo4j)    │
└───────────────┘      └───────────────┘      └───────────────┘
```

---

## LLM Integration

| Component | Technology |
|-----------|------------|
| **Abstraction Layer** | Custom extensible interface |
| **Primary Models** | Gemini + Z.ai |
| **Fallback** | OpenAI GPT-4 |
| **Embeddings** | Gemini + OpenAI |

**Design Principles:**
- Model-agnostic interface allows easy switching
- Fallback chains for reliability
- Cost optimization via model routing

---

## Document Processing

### OCR & Extraction

| Component | Technology |
|-----------|------------|
| **OCR Engine** | VLLM (Gemini + GLM-4.6V) |
| **Document Types** | PDF, images, scanned documents |
| **Extraction** | Structured data from unstructured documents |

**Extracted Fields:**
- Vendor name and address
- Invoice number and date
- Line items and amounts
- Payment terms
- Contract clauses

---

## Context Graph Technology

The Context Graph is the central knowledge store that enables multi-hop reasoning across financial data, powering intelligent automation and contextual understanding.

### Context Graph Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      CONTEXT GRAPH                               │
│                    (Neo4j Graph Database)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐   │
│  │ Vendors │────▶│Invoices │────▶│Payments │────▶│ GL Accts│   │
│  └─────────┘     └─────────┘     └─────────┘     └─────────┘   │
│       │               │               │               │         │
│       ▼               ▼               ▼               ▼         │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐   │
│  │Patterns │     │Contracts│     │ Users   │     │ Policies│   │
│  └─────────┘     └─────────┘     └─────────┘     └─────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Graph Node Types

| Node Type | Description | Key Properties |
|-----------|-------------|----------------|
| **Vendor** | Supplier/vendor entities | name, tax_id, payment_terms, risk_score |
| **Customer** | Customer entities | name, segment, credit_limit, payment_history |
| **Transaction** | Financial transactions | amount, date, type, status |
| **Account** | GL accounts | code, name, type, normal_balance |
| **Pattern** | Learned behavioral patterns | confidence, frequency, last_seen |
| **Policy** | Business rules and policies | rule_type, threshold, action |
| **User** | System users | role, approvals_given, corrections_made |
| **Contract** | Revenue contracts | value, start_date, obligations |

### Graph Relationships

| Relationship | From | To | Properties |
|--------------|------|-----|------------|
| `PAID_BY` | Invoice | Payment | amount, date |
| `BELONGS_TO` | Transaction | Account | period |
| `HAS_PATTERN` | Vendor | Pattern | confidence |
| `APPROVED_BY` | Transaction | User | timestamp |
| `GOVERNED_BY` | Account | Policy | effective_date |
| `SIMILAR_TO` | Vendor | Vendor | similarity_score |

<details>
<summary><strong>How It Works</strong></summary>

**Multi-Hop Reasoning:**
```
Query: "How should I categorize this transaction from Acme Corp?"

Path: Transaction → Vendor (Acme Corp) → Historical Patterns →
      Previous Categorizations → Confidence Score
```

**Financial Knowledge Graphs:**
- Vendor relationships and history
- Approval patterns by user
- Seasonal trends
- Policy exceptions
- Entity relationships and hierarchies
- Historical correction patterns

</details>

### Graph-Powered Features

| Feature | Graph Query Pattern |
|---------|---------------------|
| **Smart Categorization** | Traverse vendor → historical patterns → most common account |
| **Anomaly Detection** | Compare transaction to vendor's typical patterns |
| **Approval Routing** | Find appropriate approver based on amount + entity + type |
| **Vendor Deduplication** | Identify similar vendors via relationship scoring |
| **Impact Analysis** | Trace downstream effects of account changes |

---

## Confidence Scoring

Every AI decision includes a confidence score (0-100%):

| Score Range | Interpretation | Action |
|-------------|----------------|--------|
| **95-100%** | Very high confidence | Auto-approve |
| **85-94%** | High confidence | May auto-approve based on policy |
| **75-84%** | Medium confidence | Human review recommended |
| **&lt;75%** | Low confidence | Human review required |

---

## Analysis Capabilities

### Pattern Matching

| Type | Description |
|------|-------------|
| **Exact Match** | Precise string matching |
| **Fuzzy Match** | RapidFuzz for similar strings |
| **Regex Match** | Pattern-based matching |
| **Semantic Match** | Vector similarity for meaning |

---

### Categorization Engine

<details>
<summary><strong>Categorization Workflow</strong></summary>

1. **Query Context Graph** — Fetch vendor history
2. **Calculate Confidence** — Score each suggestion (0-100%)
3. **Graph Traversal** — Multi-hop path: Transaction → Vendor → Historical Pattern → Account
4. **Store Reasoning** — Save AI reasoning for audit
5. **Route by Confidence:**
   - `&lt;75%` → Flag for human review
   - `&gt;95%` → Auto-approve (optional setting)
6. **Learn from Corrections** — Update graph when human corrects

</details>

---

## Learning System

The AI learns from every human correction:

| Input | Learning |
|-------|----------|
| **Approved Match** | Strengthen pattern confidence |
| **Rejected Match** | Weaken pattern, flag for review |
| **Manual Correction** | Create new pattern, update vendor profile |
| **New Vendor** | Initialize vendor node in graph |

---

## Anomaly Detection

Continuous monitoring for unusual patterns:

| Anomaly Type | Detection Method |
|--------------|------------------|
| **Duplicate Invoices** | Hash matching + date proximity |
| **Miscoded Expenses** | Historical pattern deviation |
| **Unusual Spikes** | Statistical outlier detection |
| **Out-of-Period** | Date validation against open periods |

---

## Visualization

| Component | Technology |
|-----------|------------|
| **Graph Visualization** | React Flow or D3.js |
| **Interactive Exploration** | Click-through to source data |
| **Reasoning Display** | Step-by-step AI decision path |

---

## Structured Output Enforcement

All LLM outputs are validated against strict schemas to ensure reliability and prevent hallucination.

### Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Schema Definition** | Pydantic Models | Define expected output structure |
| **LLM Enforcement** | Instructor / Outlines | Force LLM to produce valid JSON |
| **Validation** | Pydantic Validators | Runtime validation of outputs |
| **Fallback** | Retry with structured prompts | Handle malformed responses |

### Implementation Pattern

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   User Query    │────▶│   LLM + Schema  │────▶│ Validated Output│
│                 │     │   Enforcement   │     │  (Pydantic)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Schema Examples:   │
                    │  - JournalEntry     │
                    │  - MatchResult      │
                    │  - CategoryPrediction│
                    │  - ContractTerms    │
                    └─────────────────────┘
```

### Output Schema Examples

| Schema | Fields | Use Case |
|--------|--------|----------|
| `JournalEntrySchema` | date, lines[], memo, confidence | Auto-generated journal entries |
| `MatchResultSchema` | invoice_id, payment_id, confidence, reasoning | Cash application matching |
| `CategorySchema` | account_id, category, confidence, alternatives[] | Expense categorization |
| `ContractTermsSchema` | obligations[], dates, amounts, clauses[] | Contract parsing |
| `AnomalySchema` | type, severity, evidence[], recommendation | Anomaly detection |

### Benefits

- **No Hallucination** — LLM cannot return unexpected fields
- **Type Safety** — All outputs are typed and validated
- **Audit Trail** — Schema version tracked with each decision
- **Error Handling** — Graceful fallback on validation failures

---

## Function Calling for Integrations

LLMs can directly interact with external systems through structured function calls, enabling dynamic data retrieval and action execution.

### Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    FUNCTION CALLING LAYER                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  User Query: "What's the payment status for invoice INV-1234?"  │
│                              │                                   │
│                              ▼                                   │
│                    ┌─────────────────┐                          │
│                    │   LLM Reasoning │                          │
│                    │   + Tool Choice │                          │
│                    └────────┬────────┘                          │
│                             │                                    │
│              ┌──────────────┼──────────────┐                    │
│              ▼              ▼              ▼                    │
│      ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│      │ ERP Tools  │  │ Bank Tools │  │ CRM Tools  │            │
│      │ get_invoice│  │ get_balance│  │get_customer│            │
│      │ post_je    │  │ get_txns   │  │get_contract│            │
│      └────────────┘  └────────────┘  └────────────┘            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Available Tool Categories

| Category | Tools | Description |
|----------|-------|-------------|
| **ERP Tools** | `get_invoice`, `get_vendor`, `post_journal_entry`, `get_trial_balance` | Read/write to ERP systems |
| **Bank Tools** | `get_bank_balance`, `get_transactions`, `get_statement` | Query bank data |
| **CRM Tools** | `get_customer`, `get_contract`, `get_opportunity` | Access sales data |
| **Internal Tools** | `search_documents`, `get_audit_trail`, `query_graph` | Query internal systems |
| **Calculation Tools** | `calculate_depreciation`, `compute_allocation`, `forecast_cash` | Perform computations |

### Tool Definition Example

```
Tool: get_invoice
├── Parameters:
│   ├── invoice_id: string (required)
│   └── include_payments: boolean (optional)
├── Returns:
│   ├── invoice_number, amount, due_date, status
│   ├── customer_name, payment_terms
│   └── payments[]: applied payments if requested
└── Permissions: Requires 'ar.read' scope
```

### Security Controls

| Control | Implementation |
|---------|----------------|
| **Scoped Permissions** | Each tool requires specific RBAC permissions |
| **Rate Limiting** | Per-user and per-tool rate limits |
| **Audit Logging** | All function calls logged with parameters and results |
| **Sandbox Mode** | Read-only mode for exploratory queries |
| **Approval Gates** | Write operations require human approval |

---

## Streaming LLM Responses

For real-time user experience, LLM responses are streamed token-by-token to the frontend.

### Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                   STREAMING RESPONSE FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐   │
│  │ User    │────▶│ FastAPI │────▶│  LLM    │────▶│ Stream  │   │
│  │ Query   │     │Streaming│     │  API    │     │ Response│   │
│  └─────────┘     │Response │     └─────────┘     └─────────┘   │
│                  └────┬────┘                          │         │
│                       │                               │         │
│                       ▼                               ▼         │
│                  ┌─────────────────────────────────────┐        │
│                  │  Server-Sent Events (SSE)           │        │
│                  │  or WebSocket Connection            │        │
│                  └─────────────────────────────────────┘        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Implementation

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Backend** | FastAPI StreamingResponse | Async token streaming |
| **Transport** | Server-Sent Events (SSE) | Real-time delivery |
| **Frontend** | EventSource API | Receive and render tokens |
| **Fallback** | Complete response | For clients without SSE support |

### Stream Event Types

| Event | Description |
|-------|-------------|
| `token` | Individual token from LLM |
| `thinking` | Reasoning step indicator |
| `tool_call` | Function being invoked |
| `tool_result` | Function result received |
| `data` | Structured data (tables, charts) |
| `complete` | Response finished |
| `error` | Error occurred |

### Benefits

- **Perceived Speed** — Users see response immediately
- **Interruptible** — Users can cancel long responses
- **Progress Visibility** — Show reasoning steps in real-time
- **Better UX** — Natural conversational feel

---

## Related Documentation

- [Context Graph Details](../architecture/shadow-ledger.md)
- [Technical Architecture](../architecture/technical-architecture-detailed.md)
- [Instant Answers](../features/instant-answers-detailed.md)
- [Continuous Learning](../features/continuous-learning.md)
