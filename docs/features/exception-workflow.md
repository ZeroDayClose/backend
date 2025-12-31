# Exception Workflow & Human Review

> **Human-in-the-Loop Oversight**

When the AI encounters uncertain cases, outliers, or items requiring approval, they are routed to a dedicated exception workflow for human review.

---

## Overview

ZeroDayClose combines AI automation with human oversight and control. The system is **natively explainable** with built-in guardrails:

- Outliers and uncertain cases are **flagged for human review** instead of auto-posting
- Management can set **policies and approval thresholds** to govern the AI
- Every exception includes full context and AI reasoning

---

## Exception Types

| Exception Type | Description | Example |
|----------------|-------------|---------|
| **Low Confidence** | AI confidence below threshold | Match with 78% confidence |
| **High Materiality** | Transaction exceeds approval threshold | Journal entry > $50,000 |
| **Anomaly Detected** | Unusual pattern identified | Duplicate invoice suspected |
| **Policy Violation** | Conflicts with configured rules | Expense over per-diem limit |
| **Missing Data** | Required information not found | No matching vendor in master data |
| **Unusual Contract Terms** | Revenue contract with non-standard clauses | Early termination rights detected |

---

## Exception Queue

All flagged items appear in a centralized **Exceptions Queue**:

<details>
<summary><strong>Queue Features</strong></summary>

| Feature | Description |
|---------|-------------|
| **Prioritized List** | Sorted by materiality and age |
| **Filter & Search** | Filter by type, module, date, assignee |
| **Bulk Actions** | Approve or reject multiple items at once |
| **Assignment** | Route exceptions to specific team members |
| **SLA Tracking** | Time since flagged, aging alerts |

</details>

---

## Review Interface

Each exception includes comprehensive context:

<details>
<summary><strong>Exception Detail View</strong></summary>

| Section | Contents |
|---------|----------|
| **Summary** | What was flagged and why |
| **AI Recommendation** | What the AI would have done |
| **Confidence Score** | Numerical confidence with breakdown |
| **Supporting Evidence** | Source documents, calculations, matching logic |
| **Similar Cases** | How similar items were resolved previously |
| **Action Buttons** | Approve, Reject, Modify, Request More Info |

</details>

<details>
<summary><strong>Actions Available</strong></summary>

| Action | Description |
|--------|-------------|
| **Approve** | Accept AI recommendation and proceed |
| **Approve with Edit** | Accept with modifications |
| **Reject** | Decline and provide reason |
| **Reassign** | Route to another team member |
| **Add Comment** | Attach notes for audit trail |
| **Request Info** | Flag for additional documentation |

</details>

---

## Resolution Workflow

```
┌─────────────┐
│  Exception  │
│   Flagged   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Appears   │
│  in Queue   │
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐
│   Review    │────▶│   Approve   │──────┐
│   by User   │     │  or Reject  │      │
└──────┬──────┘     └─────────────┘      │
       │                                  │
       │ Need more info                   │
       ▼                                  │
┌─────────────┐                          │
│  Reassign   │                          │
│ or Request  │                          │
│    Info     │                          │
└──────┬──────┘                          │
       │                                  │
       └──────────────────────────────────┘
                                          │
                                          ▼
                               ┌─────────────────┐
                               │  Resolution     │
                               │  Logged +       │
                               │  AI Learns      │
                               └─────────────────┘
```

---

## Learning from Resolutions

Every resolution feeds back into the AI:

| Outcome | AI Learning |
|---------|-------------|
| **Approved as-is** | Strengthen the pattern confidence |
| **Approved with edit** | Learn the correction for future |
| **Rejected** | Reduce confidence for similar cases |
| **Recurring pattern** | Auto-create a rule if pattern repeats |

This creates **continuous improvement** — the more you use the system, the smarter it gets.

---

## Notifications

When exceptions require attention:

| Notification | Delivery |
|--------------|----------|
| **New Exception** | Email + in-app notification |
| **Aging Alert** | Daily digest of unresolved items |
| **Assignment** | Immediate notification when assigned |
| **Escalation** | Alert to manager if SLA exceeded |

---

## Policy Configuration

Administrators can configure what triggers exceptions:

<details>
<summary><strong>Configurable Thresholds</strong></summary>

| Setting | Description |
|---------|-------------|
| **Confidence Threshold** | Minimum AI confidence for auto-posting (default: 95%) |
| **Materiality Threshold** | Amount above which human approval required |
| **Variance Threshold** | Flag items with >X% variance from expected |
| **Approval Workflow** | Who can approve different types/amounts |
| **Auto-escalation** | Rules for escalating aged exceptions |

</details>

---

## Related Features

- [Audit-Ready Workflow](audit-ready-workflow.md) — The Doer/Critic architecture
- [Alerts & Notifications](alerts-notifications.md) — Notification system
- [Dashboards](dashboards.md) — Exception status dashboard
