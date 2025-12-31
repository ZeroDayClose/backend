# Audit-Ready Workflow

> **The "Doer/Critic" Architecture**

The defining characteristic of ZeroDayClose is that **no AI action is final without validation**. This workflow is hard-coded into every feature module.

---

## Overview

The Audit-Ready Agent architecture ensures:
- Every automated action is validated before execution
- Evidence is generated for every decision
- Humans remain in control of high-stakes actions
- Complete audit trails exist for every transaction

---

## Workflow Steps

### Step 1: Trigger

An event or schedule initiates the process:

| Trigger Type | Example |
|--------------|---------|
| **Event-Based** | "New Invoice Received" |
| **Schedule-Based** | "Daily Reconciliation at 6am" |
| **User-Initiated** | "Run Cash Application" |

---

### Step 2: The "Doer" Agent (Generative AI)

The Doer Agent analyzes the input context and proposes an accounting action.

**Example:** "Match Invoice #1234 to Payment #5678"

The Doer uses:
- Historical patterns from the knowledge graph
- Vendor relationship context
- Policy rules configured by the user

---

### Step 3: The "Critic" Agent (Deterministic Rules)

A separate logic engine validates the proposal against strict accounting constraints:

| Constraint | Validation Question |
|------------|---------------------|
| **Amount Match** | Do the amounts match exactly? |
| **Period Validity** | Is the date within the current open accounting period? |
| **Master Data** | Does the vendor exist in the Master Data? |
| **Debits = Credits** | Does the entry balance? |
| **Policy Compliance** | Does this follow configured approval policies? |

---

### Step 4: Evidence Generator

If validation passes, the system compiles an **"Evidence Pack"**:

<details>
<summary><strong>Evidence Pack Contents</strong></summary>

| Component | Description |
|-----------|-------------|
| **Source Document** | Original PDF, email, or data record |
| **Calculation Logic** | Step-by-step calculation trace |
| **Validation Log** | Critic agent validation results |
| **Graph Traversal** | Path through knowledge graph |
| **Confidence Score** | AI confidence percentage |

</details>

---

### Step 5: Human-in-the-Loop Routing

The system routes based on confidence and materiality:

| Confidence Level | Materiality | Action |
|------------------|-------------|--------|
| **>99%** | Any | Auto-post to ERP |
| **95-99%** | Low | Auto-post to ERP |
| **95-99%** | High | Route to human reviewer |
| **<95%** | Any | Route to human reviewer |

Human reviewers receive:
- The proposed action
- Complete Evidence Pack
- AI confidence score and reasoning
- One-click approve/reject options

---

### Step 6: Commit

Once approved (automatically or by human), the transaction is:

1. **Written to ERP** — Journal entry posted to source system
2. **Logged in Audit Log** — Immutable record with timestamp and user attribution
3. **Knowledge Graph Updated** — Pattern learned for future matching

---

## Workflow Diagram

```
┌─────────────┐
│   Trigger   │
│ (Event/Cron)│
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Doer     │
│   Agent     │──────────────┐
│ (Proposes)  │              │
└──────┬──────┘              │
       │                     │
       ▼                     │
┌─────────────┐              │
│   Critic    │   Fails      │
│   Agent     │──────────────┘
│ (Validates) │   (Return to Doer)
└──────┬──────┘
       │ Passes
       ▼
┌─────────────┐
│  Evidence   │
│  Generator  │
└──────┬──────┘
       │
       ▼
┌─────────────┐     Low Confidence
│  Confidence │─────────────────────┐
│    Check    │                     │
└──────┬──────┘                     ▼
       │ High              ┌─────────────┐
       │ Confidence        │   Human     │
       │                   │   Review    │
       ▼                   └──────┬──────┘
┌─────────────┐                   │
│  Auto-Post  │◄──────────────────┘
│   to ERP    │     Approved
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Audit Log + │
│ Graph Update│
└─────────────┘
```

---

## Confidence Scoring

The AI calculates confidence based on:

| Factor | Weight |
|--------|--------|
| **Historical Match** | Has this exact pattern been approved before? |
| **Vendor Familiarity** | How many times have we seen this vendor? |
| **Amount Reasonableness** | Is the amount within expected range? |
| **Document Quality** | How confident is the OCR extraction? |
| **Policy Alignment** | Does it match configured rules? |

Transactions below the configured threshold require human review.
