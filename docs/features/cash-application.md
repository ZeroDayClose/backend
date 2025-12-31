# Cash Application ("The Matcher")

> **AI-Powered Payment Matching**

This feature targets the 90% reduction in manual reconciliation work by automatically matching payments to invoices.

---

## Overview

Manual cash application is painful:
- Matching payments to invoices one-by-one
- Handling partial payments and bulk payments
- Deciphering cryptic payment references
- Chasing exceptions and edge cases

ZeroDayClose automates this with a multi-level matching algorithm.

---

## Data Ingestion

Continuous ingestion from multiple sources:

| Source | Data |
|--------|------|
| **Bank Feeds** | BAI2 format from banks |
| **ERP Open Invoices** | AR/AP aging reports |
| **Payment Processors** | Stripe, PayPal transactions |
| **Lockbox Files** | Bank lockbox data |

---

## The Matching Algorithm

The system uses a three-level matching approach:

### Level 1: Deterministic Match

<details>
<summary><strong>Exact Match Rules</strong></summary>

| Criteria | Match Logic |
|----------|-------------|
| **Amount + Reference ID** | Exact match on invoice number and amount |
| **Amount + Customer ID** | Exact amount from known customer with single open invoice |

**Confidence:** 100% — Auto-posted without review

</details>

---

### Level 2: Fuzzy Logic

<details>
<summary><strong>Fuzzy Match Rules</strong></summary>

| Criteria | Match Logic |
|----------|-------------|
| **Amount + Vendor Similarity** | Levenshtein distance on names (e.g., "Acme Corp" vs "Acme Inc") |
| **Amount + Date Proximity** | Payment within expected date range |
| **Partial Reference Match** | Invoice number partially present in reference |

**Confidence:** 85-99% — May require review based on threshold

</details>

---

### Level 3: Combinatorial

<details>
<summary><strong>Complex Match Rules</strong></summary>

For bulk payments covering multiple invoices, the system solves the "Knapsack Problem":

**Scenario:** Payment of $15,000 received with no reference

**Algorithm:**
1. Find all open invoices for the payer
2. Find combinations that sum to $15,000
3. Rank by probability (most recent invoices first)
4. Propose best match for review

**Examples Handled:**
- Bulk payments covering 5-10 invoices
- Partial payments with planned remainder
- Overpayments requiring credit memos
- Short payments requiring write-offs

</details>

---

## Exception Handling

Transactions that cannot be matched with >95% confidence are flagged:

| Exception Type | Handling |
|----------------|----------|
| **No Match Found** | Route to "Unidentified Payments" queue |
| **Multiple Possible Matches** | Present top 3 candidates to reviewer |
| **Partial Payment** | Suggest allocation and remainder handling |
| **Duplicate Detection** | Flag potential duplicate payment |

---

## Human Review Interface

Exceptions are presented with AI assistance:

| Element | Description |
|---------|-------------|
| **Payment Details** | Amount, date, payer, reference |
| **Suggested Matches** | Top 3 candidates with confidence scores |
| **Match Reasoning** | Why the AI suggested each match |
| **One-Click Actions** | Approve, reject, or manually match |

---

## Learning from Corrections

When a human corrects an AI suggestion:

1. **Pattern Recorded** — The correct match is stored
2. **Confidence Adjusted** — Future similar matches get higher confidence
3. **Graph Updated** — Vendor/customer relationships are strengthened
4. **Rules Refined** — Matching algorithm improves over time

---

## Matching Statistics

The dashboard shows real-time metrics:

| Metric | Description |
|--------|-------------|
| **Auto-Match Rate** | Percentage matched without human review |
| **Exception Rate** | Percentage requiring human intervention |
| **Average Resolution Time** | Time from payment to matched status |
| **Accuracy Rate** | Percentage of auto-matches that were correct |
