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

## Collaborative Annotations

Team members can collaborate on exception resolution through real-time annotations, comments, and shared context.

### Annotation Features

```
┌─────────────────────────────────────────────────────────────────┐
│                   EXCEPTION DETAIL VIEW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Exception: Payment $15,000 - Low Confidence Match              │
│  Status: Under Review                                           │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  AI Recommendation: Match to INV-1234 (78% confidence)  │    │
│  │                                                          │    │
│  │  [Highlighted] Amount matches but vendor name differs    │    │
│  │                ^^^^^^^^^^^^^^^^                          │    │
│  │                └── @john: "This is their new legal name" │    │
│  │                                                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Comments Thread:                                               │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ @sarah (2 min ago): I've seen this before, vendor       │    │
│  │                     changed name after acquisition.      │    │
│  │                                                          │    │
│  │ @john (1 min ago): Confirmed. Updating vendor master.   │    │
│  │                    [Attached: vendor_name_change.pdf]   │    │
│  │                                                          │    │
│  │ [Type a comment... @mention to notify]           [Send] │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [Approve] [Reject] [Reassign] [Add Annotation]                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Collaboration Capabilities

| Feature | Description |
|---------|-------------|
| **Inline Annotations** | Highlight and comment on specific data points |
| **@Mentions** | Tag team members for input or notification |
| **Threaded Comments** | Reply chains for focused discussion |
| **File Attachments** | Attach supporting documents to comments |
| **Real-Time Sync** | See others' annotations as they type |
| **Presence Indicators** | See who else is viewing the exception |
| **Reaction Emojis** | Quick acknowledgment without full comment |

### Real-Time Collaboration

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Sync Engine** | Liveblocks / Y.js | Real-time collaboration |
| **Presence** | WebSocket | Show active viewers |
| **Conflict Resolution** | CRDT | Handle simultaneous edits |
| **Persistence** | PostgreSQL | Store annotations and comments |

### Annotation Types

| Type | Use Case | Visual |
|------|----------|--------|
| **Highlight** | Draw attention to specific text | Yellow background |
| **Question** | Ask for clarification | Blue underline with ? |
| **Correction** | Suggest a fix | Red strikethrough + green text |
| **Approval Note** | Explain approval rationale | Green checkmark |
| **Concern** | Flag potential issue | Orange warning icon |

### Audit Trail

All annotations and comments are preserved in the audit trail:

| Logged Data | Description |
|-------------|-------------|
| **Author** | Who created the annotation |
| **Timestamp** | When it was created |
| **Content** | The annotation text |
| **Target** | What data element was annotated |
| **Attachments** | Any files attached |
| **Resolution** | How the exception was ultimately resolved |

---

## Related Features

- [Audit-Ready Workflow](audit-ready-workflow.md) — The Doer/Critic architecture
- [Alerts & Notifications](alerts-notifications.md) — Notification system
- [Dashboards](dashboards.md) — Exception status dashboard
- [Interface Design](../ui/interface-design.md) — UI components
