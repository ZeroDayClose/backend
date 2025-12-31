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

The Context Graph enables multi-hop reasoning across financial data.

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

</details>

---

## Confidence Scoring

Every AI decision includes a confidence score (0-100%):

| Score Range | Interpretation | Action |
|-------------|----------------|--------|
| **95-100%** | Very high confidence | Auto-approve |
| **85-94%** | High confidence | May auto-approve based on policy |
| **75-84%** | Medium confidence | Human review recommended |
| **<75%** | Low confidence | Human review required |

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
   - `<75%` → Flag for human review
   - `>95%` → Auto-approve (optional setting)
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
