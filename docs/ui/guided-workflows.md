# Guided Workflows

> **Human-AI Collaboration in Action**

The platform provides step-by-step guidance for processes, showing what AI has completed and what requires human input.

---

## Overview

Guided workflows ensure smooth collaboration between AI automation and finance teams:
- AI completes what it can confidently handle
- Humans focus on exceptions and judgment calls
- Progress is visible at all times

---

## Workflow Checklist View

During month-end close, a checklist shows all tasks:

```
┌─────────────────────────────────────────────────────────────────┐
│ January 2024 Close Progress                        75% Complete │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ✅ Bank reconciliation - Operating Account        AI Completed  │
│ ✅ Bank reconciliation - Payroll Account          AI Completed  │
│ ✅ AR sub-ledger reconciliation                   AI Completed  │
│ ✅ AP sub-ledger reconciliation                   AI Completed  │
│ ⏳ Inventory valuation                            In Progress   │
│ ⚠️ Revenue recognition - Contract #1234          Needs Review  │
│ ⬜ Depreciation journal entry                     Pending       │
│ ⬜ Accrual entries                                Pending       │
│ ⬜ Intercompany eliminations                      Pending       │
│ ⬜ Final review and approval                      Pending       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Status Indicators

| Icon | Status | Description |
|------|--------|-------------|
| ✅ | **Completed** | Task finished (by AI or human) |
| ⏳ | **In Progress** | Currently being processed |
| ⚠️ | **Needs Review** | AI completed but needs human approval |
| ⬜ | **Pending** | Not yet started |
| 🔴 | **Blocked** | Cannot proceed, dependency missing |
| ❌ | **Failed** | Error occurred, needs attention |

---

## Task Detail View

Clicking a task shows full details:

<details>
<summary><strong>Task Detail Components</strong></summary>

| Section | Contents |
|---------|----------|
| **Summary** | What the task is and current status |
| **Completed By** | AI agent or user name |
| **Completion Time** | When it was finished |
| **Evidence** | Links to supporting documents |
| **AI Confidence** | If AI-completed, confidence score |
| **Next Steps** | What happens after this task |
| **Actions** | Approve, reject, or retry options |

</details>

---

## Human-Required Tasks

When AI flags something for human review:

<details>
<summary><strong>Review Interface</strong></summary>

```
┌─────────────────────────────────────────────────────────────────┐
│ ⚠️ Revenue Recognition Review Required                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Contract: Acme Corp Enterprise Agreement                        │
│ Total Value: $500,000                                           │
│ AI Confidence: 82%                                              │
│                                                                 │
│ Reason for Review:                                              │
│ - Non-standard termination clause detected                      │
│ - Multi-element arrangement requires SSP allocation review      │
│                                                                 │
│ AI Recommendation:                                              │
│ Recognize over 24 months with 60/40 SSP allocation             │
│                                                                 │
│ [View Contract] [View Calculation] [View Similar Contracts]     │
│                                                                 │
│ [Approve as Recommended] [Modify & Approve] [Reject]            │
└─────────────────────────────────────────────────────────────────┘
```

</details>

---

## Workflow Types

### Close Workflow

| Phase | Tasks |
|-------|-------|
| **Pre-Close** | Data sync verification, cutoff review |
| **Reconciliations** | Bank, AR, AP, inventory reconciliation |
| **Adjustments** | Accruals, prepaids, depreciation |
| **Consolidation** | Intercompany elimination, currency translation |
| **Review** | Variance analysis, final approval |
| **Close** | Lock period, generate reports |

---

### Revenue Workflow

| Phase | Tasks |
|-------|-------|
| **Ingestion** | Import new contracts |
| **Extraction** | Parse terms and obligations |
| **Analysis** | Determine recognition treatment |
| **Scheduling** | Generate revenue schedules |
| **Approval** | Review and approve recognition |
| **Posting** | Post entries to ERP |

---

### Cash Workflow

| Phase | Tasks |
|-------|-------|
| **Sync** | Pull latest bank transactions |
| **Matching** | Auto-match payments to invoices |
| **Review** | Handle exceptions |
| **Categorization** | Categorize unmatched items |
| **Forecast** | Update cash projections |

---

## Contextual Explainability

Click "Why?" on any AI decision to see the reasoning:

<details>
<summary><strong>Computation Trail Example</strong></summary>

```
Why did AI categorize this as "Cloud Infrastructure"?

Computation Trail:
─────────────────────────────────────────────────
1. Vendor identified: "Amazon Web Services"
2. Historical pattern lookup:
   - 45 previous transactions from this vendor
   - 44 categorized as "Cloud Infrastructure"
   - 1 categorized as "Software Licenses"
3. Amount pattern: $12,500 consistent with monthly AWS spend
4. Description analysis: "AWS Monthly Charges" matches pattern
5. Confidence calculation: 97.8%

Decision: Auto-categorize as "Cloud Infrastructure"

[View Historical Transactions] [Override Category]
```

</details>

---

## Notifications & Reminders

The workflow system sends reminders:

| Reminder Type | Trigger |
|---------------|---------|
| **Task Assigned** | When human task created |
| **Deadline Approaching** | X days before close deadline |
| **Blocked Task** | Dependency not met |
| **Aging Item** | Task unresolved for X hours |

---

## No-Code Workflow Builder

Finance teams can create, customize, and manage workflows without developer assistance using the visual workflow builder.

### Builder Interface

```
┌─────────────────────────────────────────────────────────────────┐
│  WORKFLOW BUILDER - Custom Month-End Close                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                     CANVAS                               │    │
│  │                                                          │    │
│  │  [Start] ──▶ [Bank Recon] ──▶ [AR Recon] ──┐            │    │
│  │                                             │            │    │
│  │              [AP Recon] ◀──────────────────┘            │    │
│  │                  │                                       │    │
│  │                  ▼                                       │    │
│  │           ┌──────────────┐                              │    │
│  │           │  Parallel    │                              │    │
│  │           │   ┌────┬────┐│                              │    │
│  │           │   │Accr│Depr││                              │    │
│  │           │   └────┴────┘│                              │    │
│  │           └──────┬───────┘                              │    │
│  │                  ▼                                       │    │
│  │           [Controller Approval] ──▶ [Close Period]      │    │
│  │                                                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  COMPONENT PALETTE                                              │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ [Reconciliation] [Journal Entry] [Approval] [Notify]   │    │
│  │ [Condition] [Parallel] [Wait] [Manual Task] [Webhook]  │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [Save Draft] [Test Workflow] [Publish]     [Import] [Export]  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Drag-and-Drop Components

| Component | Description | Configuration Options |
|-----------|-------------|----------------------|
| **Reconciliation** | Auto-reconcile account | Account, tolerance, confidence threshold |
| **Journal Entry** | Generate/post JE | Template, accounts, calculation formula |
| **Approval** | Require human approval | Approver role, timeout, escalation path |
| **Notification** | Send alert | Channel (email/Slack), recipients, template |
| **Condition** | Branch logic | If/else rules, threshold comparisons |
| **Parallel** | Concurrent tasks | Tasks to run, merge condition (all/any) |
| **Wait** | Pause workflow | Duration, or wait for event |
| **Manual Task** | Human action needed | Assignee, instructions, due date |
| **Webhook** | Call external API | URL, method, payload, auth |

### Workflow Templates

Pre-built templates to start from:

| Template | Description | Complexity |
|----------|-------------|------------|
| **Standard Close** | Full month-end workflow | 12 steps |
| **Quick Close** | Streamlined for mature orgs | 8 steps |
| **First Close** | Guided for new implementations | 10 steps |
| **Revenue Only** | Just revenue recognition | 6 steps |
| **Cash Only** | Cash and AR focus | 5 steps |
| **Audit-Ready** | Extra documentation steps | 15 steps |

### Builder Features

| Feature | Description |
|---------|-------------|
| **Visual Editor** | Drag, drop, connect components |
| **Version Control** | Save versions, compare, rollback |
| **Test Mode** | Dry-run without posting |
| **Clone Workflow** | Duplicate and modify |
| **Import/Export** | Share as JSON/YAML |
| **Scheduling** | Auto-trigger at period end |
| **Variables** | Reusable parameters (thresholds, accounts) |
| **Conditional Logic** | If/else branching based on data |

### Component Configuration

Each component has a configuration panel:

```
┌─────────────────────────────────────────────────────────────────┐
│  CONFIGURE: Bank Reconciliation                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Name:        [Operating Account Recon          ]               │
│                                                                  │
│  Account:     [1000 - Operating Account    ▼]                   │
│                                                                  │
│  Tolerance:   [$] [100.00    ]                                  │
│                                                                  │
│  Auto-approve if confidence > [95] %                            │
│                                                                  │
│  On failure:  ○ Stop workflow                                   │
│               ● Continue and flag                               │
│               ○ Retry 3 times                                   │
│                                                                  │
│  Assignee:    [@sarah (Accountant)     ▼]                       │
│                                                                  │
│  [Cancel]                                         [Save]        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Workflow Testing

Before publishing, test workflows in sandbox mode:

| Test Feature | Description |
|--------------|-------------|
| **Dry Run** | Execute without posting to ERP |
| **Sample Data** | Use historical or synthetic data |
| **Step-Through** | Pause at each step for inspection |
| **Validation** | Check for missing configs, dead ends |
| **Simulation** | Predict duration and resource usage |

---

## Related Features

- [Exception Workflow](../features/exception-workflow.md) — Handle flagged items
- [Dashboards](../features/dashboards.md) — Close status dashboard
- [Alerts](../features/alerts-notifications.md) — Workflow notifications
- [Automated Close](../features/automated-close-detailed.md) — Close automation details
