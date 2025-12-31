# Semantic Search ("Instant Answers")

> **Natural Language Querying with Traceable Results**

The Semantic Search feature enables users to ask complex financial questions in natural language and receive accurate, verifiable answers.

---

## Overview

Traditional finance systems require:
- Complex report builders
- SQL knowledge
- Multiple system logins
- Manual data aggregation

ZeroDayClose provides a natural language interface that understands financial context.

---

## How It Works

### 1. Natural Language Querying

Users can ask complex questions like:
- "Show me SaaS revenue churn by region for Q3"
- "What is the burn rate for the last 6 months?"
- "Which vendors have outstanding invoices over $10,000?"
- "Compare marketing spend YoY by channel"

---

### 2. Query Parsing

When a user asks a question, the system classifies the intent:

<details>
<summary><strong>Intent Classification</strong></summary>

| Intent Type | Example | Method |
|-------------|---------|--------|
| **Data Retrieval** | "What is the burn rate?" | Text-to-SQL query |
| **Document Search** | "Find the contract with Acme Corp" | RAG (Retrieval Augmented Generation) |
| **Calculation** | "What's our runway at current burn?" | Formula + data retrieval |
| **Comparison** | "Compare Q3 vs Q4 revenue" | Multi-query aggregation |

</details>

---

### 3. Traceable Lineage

Every answer provides a "drill-down" path:

<details>
<summary><strong>Lineage Features</strong></summary>

| Feature | Description |
|---------|-------------|
| **Citation Links** | Click to see source transactions or documents |
| **Query Transparency** | View the underlying SQL or search query |
| **Calculation Trace** | Step-by-step formula breakdown |
| **Source Documents** | Direct links to contracts, invoices, etc. |

</details>

---

### 4. Cross-Silo Visibility

The search engine joins data across systems:

**Example Query:** "Show revenue from Salesforce contracts that haven't been recognized in NetSuite"

This requires:
1. Fetching contract data from Salesforce
2. Fetching revenue schedules from NetSuite
3. Correlating contract terms with recognition status
4. Returning the gap analysis

---

## Indexing

All data is vectorized and indexed for semantic search:

| Data Type | Indexing Method |
|-----------|-----------------|
| **Transactions** | Structured metadata + embeddings |
| **Contracts** | Full-text + clause extraction |
| **Invoices** | Line items + vendor context |
| **Memos** | Full-text search |
| **Emails** | Subject, body, attachments |

---

## Response Generation

The system synthesizes retrieved data into natural language:

```
User: "What is the burn rate?"

System: "Your average monthly burn rate over the last 6 months is $127,500.

This is calculated from:
- Operating expenses: $95,000/month average
- Payroll: $28,000/month average
- Other costs: $4,500/month average

[View detailed breakdown] [View source transactions]"
```

---

## Verification

Every answer includes verification options:

| Option | Description |
|--------|-------------|
| **View Query** | See the SQL or search query used |
| **View Sources** | List of transactions/documents used |
| **Drill Down** | Navigate to individual line items |
| **Export** | Download supporting data |
