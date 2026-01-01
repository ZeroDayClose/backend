 ---
 sidebar_label: Automated Close (Detailed)
 ---
 
 # Automated Close: Comprehensive Feature Documentation
 
 > **The "24-Hour Close" — Complete Technical and Functional Reference**
 
 This document provides comprehensive coverage of the Automated Close module, including feature overview, functional behavior, user flows, technical details, implementation approach, and edge cases.
 
 ---
 
 ## 1. Feature Overview and Purpose
 
 ### 1.1 Core Objective
 
 The Automated Close module orchestrates the end-to-end month-end close process, transforming what traditionally takes 10+ days into a streamlined 1-2 day workflow. The system ensures that at period-end, every account is reconciled, variances are explained, and financials are prepared for reporting with minimal manual intervention.
 
 ### 1.2 Key Value Propositions
 
 | Value | Description |
 |-------|-------------|
 | **90% Time Reduction** | Close books in 1-2 days instead of 10+ days |
 | **90% Automation Rate** | Automate 90% of reconciliations and journal entries |
 | **Audit-Ready Output** | Every action produces evidence packs for inspection |
 | **Continuous Close** | Optional mode for daily close-readiness |
 | **Zero Last-Minute Scrambles** | Proactive anomaly detection eliminates surprises |
 
 ### 1.3 Target Users
 
 | Role | Primary Use Case |
 |------|------------------|
 | **Controller** | Monitor overall close progress, approve high-value entries |
 | **Staff Accountant** | Review flagged reconciliations, resolve exceptions |
 | **CFO** | View close status, access completed financials |
 | **External Auditor** | Access audit trails and evidence packs |
 
 ---
 
 ## 2. Functional Behavior and Scope
 
 ### 2.1 Sub-Feature Breakdown
 
 The Automated Close module comprises four integrated sub-systems:
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                    Automated Close Module                        │
 ├─────────────────┬─────────────────┬─────────────────┬───────────┤
 │   Automated     │   Automated     │      Flux       │   Close   │
 │ Reconciliation  │  Journal Entry  │    Analysis     │ Dashboard │
 │   Preparation   │    Posting      │   Generation    │           │
 └─────────────────┴─────────────────┴─────────────────┴───────────┘
 ```
 
 ### 2.2 Automated Reconciliation Preparation
 
 #### Supported Reconciliation Types
 
 | Type | Source Comparison | Matching Logic |
 |------|-------------------|----------------|
 | **Bank Reconciliation** | GL cash accounts vs. bank statement balances | Transaction-level matching by date, amount, reference |
 | **AR Reconciliation** | AR subledger total vs. GL AR control account | Subledger aging sum vs. GL balance |
 | **AP Reconciliation** | AP subledger total vs. GL AP control account | Open bills sum vs. GL balance |
 | **Intercompany** | Entity A due-from vs. Entity B due-to | Cross-entity balance matching |
 | **Balance Sheet** | Account schedules vs. GL balances | Formula-based validation (opening + changes = closing) |
 
 #### Reconciliation Process Flow
 
 ```
 ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
 │  Data Pull   │───▶│   Matching   │───▶│   Variance   │
 │  (GL + Sub)  │    │  Algorithm   │    │  Calculation │
 └──────────────┘    └──────────────┘    └──────────────┘
                                                │
         ┌─────────────────────────────────────┤
         ▼                                      ▼
 ┌──────────────┐                      ┌──────────────┐
 │  Variance=0  │                      │ Variance!=0  │
 │  Auto-Mark   │                      │ Flag for     │
 │  Reconciled  │                      │   Review     │
 └──────────────┘                      └──────────────┘
 ```
 
 #### Matching Algorithms
 
 <details>
 <summary><strong>Multi-Level Matching Strategy</strong></summary>
 
 | Level | Method | Confidence |
 |-------|--------|------------|
 | **L1: Exact Match** | Amount + Reference ID + Date | 100% |
 | **L2: Date Window** | Amount + Reference within 3-day window | 95% |
 | **L3: Fuzzy Match** | Amount + Levenshtein distance on description | 85-94% |
 | **L4: ML-Based** | Neural network trained on historical matches | 75-90% |
 | **L5: Combinatorial** | Sum of multiple items = single item | 80-95% |
 
 </details>
 
 ### 2.3 Automated Journal Entry (JE) Posting
 
 #### Supported JE Types
 
 | JE Category | Description | Calculation Method |
 |-------------|-------------|-------------------|
 | **Accruals** | Expense and revenue accruals | Rule-based (e.g., payroll accrual = days outstanding × daily rate) |
 | **Depreciation** | Fixed asset depreciation | Asset register schedules × depreciation method |
 | **Amortization** | Prepaid expense amortization | Prepaid schedules with straight-line allocation |
 | **Reclassifications** | Account reclassification for presentation | Configurable mapping rules |
 | **Intercompany** | Intercompany elimination entries | Balance matching with auto-elimination |
 
 #### JE Posting Workflow
 
 ```
 ┌─────────────────┐
 │  Identify JE    │
 │  Requirement    │
 └────────┬────────┘
          │
          ▼
 ┌─────────────────┐
 │ Calculate Entry │
 │ (Template/Rule) │
 └────────┬────────┘
          │
          ▼
 ┌─────────────────┐
 │ Attach Support  │
 │  (Calculations) │
 └────────┬────────┘
          │
          ▼
 ┌─────────────────┐     ┌─────────────────┐
 │  Confidence     │────▶│   Auto-Post     │
 │    >95%         │     │   to ERP        │
 └────────┬────────┘     └─────────────────┘
          │
          ▼ &lt;95%
 ┌─────────────────┐
 │  Route to Human │
 │    Approval     │
 └─────────────────┘
 ```
 
 ### 2.4 Flux Analysis Generation
 
 #### Variance Detection
 
 | Comparison Type | Threshold Triggers |
 |-----------------|-------------------|
 | **Month-over-Month** | > 10% change OR > $X absolute |
 | **Quarter-over-Quarter** | > 15% change OR > $Y absolute |
 | **Year-over-Year** | > 20% change OR > $Z absolute |
 | **Budget vs. Actual** | > 10% variance OR > $W absolute |
 
 #### Narrative Generation
 
 The system generates explanations for significant variances using:
 
 1. **Template-Based** — For common patterns (e.g., "Travel expenses increased by X% due to conference costs")
 2. **Data-Driven** — Analyzes underlying transactions to identify contributing factors
 3. **LLM-Enhanced** — Optional narrative polish using language models (facts-only mode)
 
 ### 2.5 Close Orchestration Dashboard
 
 #### Dashboard Components
 
 | Component | Description |
 |-----------|-------------|
 | **Progress Tracker** | "50 of 55 accounts reconciled (45 auto, 5 manual pending)" |
 | **Task Assignment** | Which accounts assigned to AI vs. manual processing |
 | **Exception Highlights** | Accounts requiring immediate attention |
 | **Countdown Timer** | Days remaining until close deadline |
 | **Key Metrics Preview** | Current P&L draft, balance sheet totals |
 
 ---
 
 ## 3. User Flows and Interactions
 
 ### 3.1 Controller: End-to-End Close Flow
 
 ```
 Day 0 (Period End)
 ├── System auto-triggers close workflows
 ├── Bank reconciliation starts
 ├── AR/AP reconciliation starts
 └── Accrual calculations begin
 
 Day 1 (Automation Day)
 ├── Review Close Dashboard
 ├── Monitor auto-reconciliation progress
 ├── Review flagged exceptions
 │   ├── Click exception → View details
 │   ├── Approve / Reject / Modify
 │   └── System learns from decision
 ├── Review auto-generated JEs
 │   ├── High-value entries queued for approval
 │   └── Approve or request modification
 └── Check Flux Analysis draft
 
 Day 2 (Finalization)
 ├── Resolve remaining exceptions
 ├── Review final Flux narratives
 ├── Generate Close Report
 │   ├── Financial statements
 │   ├── All reconciliations
 │   └── Evidence packs
 └── Mark period as "Closed"
 ```
 
 ### 3.2 Staff Accountant: Exception Resolution Flow
 
 ```
 1. Navigate to "Exceptions Queue"
 2. Filter by "My Assignments"
 3. Select exception item
    ├── View AI recommendation
    ├── View supporting evidence
    ├── View similar historical cases
    └── Take action:
        ├── [Approve] → AI recommendation accepted
        ├── [Modify] → Edit and approve with changes
        ├── [Reject] → Decline with reason
        └── [Reassign] → Route to another team member
 4. System records decision + learns pattern
 5. Return to queue for next item
 ```
 
 ### 3.3 CFO: Close Status Review Flow
 
 ```
 1. Access CFO Dashboard
 2. View "Close Progress" widget
    ├── Overall completion percentage
    ├── Days elapsed vs. target
    └── Critical blockers highlighted
 3. Click "Preview Financials"
    ├── Draft P&L with AI-generated commentary
    ├── Draft Balance Sheet
    └── Key variance highlights
 4. Drill-down on specific line items
    ├── Click account → View reconciliation detail
    └── View transaction list
 5. Request close completion when ready
 ```
 
 ---
 
 ## 4. Technical Details (High Level)
 
 ### 4.1 System Architecture
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                   Close Orchestration Engine                     │
 │                      (Temporal.io Workflows)                     │
 └───────────────────────────┬─────────────────────────────────────┘
                             │
          ┌─────────────────┬┴────────────────┬─────────────────┐
          ▼                 ▼                 ▼                 ▼
 ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌──────────────┐
 │  Reconciliation │ │   JE Engine     │ │  Flux Analysis  │ │  Dashboard   │
 │     Service     │ │   Service       │ │    Service      │ │   Service    │
 └─────────────────┘ └─────────────────┘ └─────────────────┘ └──────────────┘
          │                 │                 │                     │
          └─────────────────┴────────┬────────┴─────────────────────┘
                                     ▼
                        ┌─────────────────────┐
                        │  Unified Data Store │
                        │  (PostgreSQL/Neo4j) │
                        └─────────────────────┘
 ```
 
 ### 4.2 Key Data Entities
 
 | Entity | Purpose | Key Fields |
 |--------|---------|------------|
 | `ReconciliationTask` | Track reconciliation status per account | account_id, entity_id, period, status, variance_amount |
 | `ReconciliationDetail` | Individual match records | task_id, gl_transaction_id, sub_transaction_id, match_confidence |
 | `AutomatedJournalEntry` | AI-generated journal entries | je_id, entity_id, period, source_type, confidence_score, status |
 | `FluxAnalysis` | Variance analysis records | account_id, period, prior_value, current_value, variance_pct, narrative |
 | `CloseChecklist` | Period close task tracking | period, entity_id, task_type, status, assigned_to |
 
 ### 4.3 Integration Points
 
 | System | Direction | Data Exchanged |
 |--------|-----------|----------------|
 | **ERP (GL)** | Bidirectional | Trial balance, transactions, journal entries |
 | **ERP (AR)** | Inbound | Open invoices, customer balances |
 | **ERP (AP)** | Inbound | Open bills, vendor balances |
 | **Bank Feeds** | Inbound | Account balances, transactions |
 | **Fixed Asset Module** | Inbound | Depreciation schedules |
 
 ---
 
 ## 5. Implementation Approach
 
 ### 5.1 Architecture Pattern: State Machine Orchestration
 
 The close process is modeled as a state machine with defined states and transitions:
 
 ```
 [NOT_STARTED] ──trigger──▶ [IN_PROGRESS]
        │                        │
        │              ┌─────────┴─────────┐
        │              ▼                   ▼
        │    [RECONCILIATION]    [JE_GENERATION]
        │              │                   │
        │              └─────────┬─────────┘
        │                        ▼
        │                [FLUX_ANALYSIS]
        │                        │
        │                        ▼
        │                [PENDING_REVIEW]
        │                        │
        │                        ▼
        └─────────────────▶ [COMPLETED]
 ```
 
 ### 5.2 Core Classes and Interfaces
 
 #### Reconciliation Engine
 
 ```
 Interface: ReconciliationStrategy
 ├── Method: match(source_data, target_data) → List[MatchResult]
 ├── Method: calculate_variance() → Decimal
 └── Method: generate_report() → ReconciliationReport
 
 Implementations:
 ├── BankReconciliationStrategy
 ├── SubledgerReconciliationStrategy
 ├── IntercompanyReconciliationStrategy
 └── BalanceSheetReconciliationStrategy
 ```
 
 #### Journal Entry Generator
 
 ```
 Interface: JournalEntryTemplate
 ├── Method: calculate_entry(context) → JournalEntry
 ├── Method: get_supporting_data() → Dict
 └── Method: validate() → ValidationResult
 
 Implementations:
 ├── AccrualTemplate
 ├── DepreciationTemplate
 ├── AmortizationTemplate
 └── ReclassificationTemplate
 ```
 
 #### Flux Analysis Engine
 
 ```
 Class: FluxAnalyzer
 ├── Method: calculate_variances(current_period, comparison_period) → List[Variance]
 ├── Method: identify_drivers(variance) → List[ContributingFactor]
 ├── Method: generate_narrative(variance, drivers) → String
 └── Method: compile_report() → FluxReport
 ```
 
 ### 5.3 Design Patterns Used
 
 | Pattern | Application |
 |---------|-------------|
 | **Strategy** | Different reconciliation algorithms per account type |
 | **Template Method** | Standard JE generation with type-specific calculations |
 | **State Machine** | Close workflow progression |
 | **Observer** | Dashboard updates when task status changes |
 | **Factory** | Creating appropriate reconciliation strategy based on account type |
 
 ---
 
 ## 6. Dependencies, Constraints, and Edge Cases
 
 ### 6.1 Dependencies
 
 | Dependency | Type | Impact if Unavailable |
 |------------|------|----------------------|
 | **ERP Integration** | Critical | Cannot proceed without GL data |
 | **Bank Feed** | High | Bank reconciliation blocked |
 | **Fixed Asset Module** | Medium | Depreciation entries require manual input |
 | **Cash Automation Module** | Medium | Bank matching data may be incomplete |
 | **Policy Configuration** | Medium | Uses default thresholds if not configured |
 
 ### 6.2 Constraints
 
 | Constraint | Description |
 |------------|-------------|
 | **Materiality Threshold** | Variances below threshold may auto-adjust |
 | **Period Lock** | Cannot modify transactions in closed periods |
 | **Approval Hierarchy** | High-value JEs require Controller approval |
 | **Processing Window** | Heavy processing scheduled during off-peak hours |
 
 ### 6.3 Edge Cases and Handling
 
 | Edge Case | System Behavior |
 |-----------|-----------------|
 | **Late Data Arrival** | Re-run reconciliation when new data arrives; alert user |
 | **Integration Failure** | Mark affected accounts as "Blocked"; notify admin; continue with available data |
 | **Multiple Unmatched Items** | Group related items; suggest bulk resolution |
 | **Intercompany Mismatch** | Flag both sides; require coordinated resolution |
 | **Zero-Balance Account** | Auto-mark as reconciled if expected to be zero |
 | **Currency Conversion Timing** | Use period-end rates; flag significant FX impacts |
 | **Prior Period Adjustments** | Route to specialized approval workflow |
 | **System Crash Mid-Process** | Temporal.io ensures workflow resumes from last checkpoint |
 
 ### 6.4 Error Handling
 
 | Error Type | Response |
 |------------|----------|
 | **Data Validation Error** | Log error, skip item, flag for manual review |
 | **ERP API Timeout** | Retry with exponential backoff (max 3 retries) |
 | **Calculation Error** | Log details, flag account, prevent auto-posting |
 | **Concurrency Conflict** | Use optimistic locking; retry or escalate |
 
 ---
 
 ## 7. Audit and Compliance
 
 ### 7.1 Audit Trail Requirements
 
 Every close action generates audit records:
 
 | Action | Logged Data |
 |--------|-------------|
 | **Reconciliation** | Account, period, matched items, unmatched items, variance, timestamp |
 | **JE Posting** | Entry details, calculation method, support references, approver |
 | **Flux Narrative** | Original draft, any edits, final version, author |
 | **Close Approval** | Approver, timestamp, any notes |
 
 ### 7.2 Evidence Pack Contents
 
 Each reconciled account produces an evidence pack containing:
 
 1. **Reconciliation Summary** — Account, period, variance status
 2. **Match Details** — List of matched transactions with confidence scores
 3. **Unmatched Items** — Items requiring explanation
 4. **Supporting Documents** — Source statements, schedules
 5. **AI Decision Log** — What the AI did and why
 6. **Approval Record** — Human approvals if applicable
 
 ---
 
## 8. No-Code Workflow Builder

Finance teams can create and customize close workflows without developer assistance using the visual workflow builder.

### 8.1 Workflow Builder Interface

```
┌─────────────────────────────────────────────────────────────────┐
│                   NO-CODE WORKFLOW BUILDER                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                     Canvas Area                          │    │
│  │                                                          │    │
│  │  ┌─────────┐     ┌─────────┐     ┌─────────┐            │    │
│  │  │  Start  │────▶│  Bank   │────▶│  AR     │            │    │
│  │  │  Close  │     │  Recon  │     │  Recon  │            │    │
│  │  └─────────┘     └─────────┘     └─────────┘            │    │
│  │                       │               │                  │    │
│  │                       ▼               ▼                  │    │
│  │                  ┌─────────┐     ┌─────────┐            │    │
│  │                  │Generate │     │  Review │            │    │
│  │                  │Accruals │     │ Variances│            │    │
│  │                  └─────────┘     └─────────┘            │    │
│  │                       │               │                  │    │
│  │                       └───────┬───────┘                  │    │
│  │                               ▼                          │    │
│  │                         ┌─────────┐                      │    │
│  │                         │  Close  │                      │    │
│  │                         │ Period  │                      │    │
│  │                         └─────────┘                      │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Component Palette:                                             │
│  [Reconciliation] [Journal Entry] [Approval] [Notification]    │
│  [Condition] [Parallel] [Wait] [Manual Task]                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Available Components

| Component | Description | Configuration |
|-----------|-------------|---------------|
| **Reconciliation Task** | Auto-reconcile an account | Account, tolerance, auto-approve threshold |
| **Journal Entry** | Generate and post JE | Template, accounts, calculation |
| **Approval Gate** | Require human approval | Approver role, escalation time |
| **Notification** | Send alert | Recipients, channels, message template |
| **Condition** | Branch based on criteria | If/else logic, thresholds |
| **Parallel** | Run tasks simultaneously | Merge strategy (all/any) |
| **Wait** | Pause for time or event | Duration, trigger event |
| **Manual Task** | Assign to user | Assignee, instructions, due date |

### 8.3 Workflow Templates

| Template | Description | Steps |
|----------|-------------|-------|
| **Standard Month-End** | Default close workflow | 12 steps, 3 approval gates |
| **Quick Close** | Streamlined for mature processes | 8 steps, 1 approval gate |
| **Audit-Ready** | Extra documentation steps | 15 steps, 5 approval gates |
| **First Close** | Guided setup for new companies | 10 steps with tutorials |

### 8.4 Workflow Features

| Feature | Description |
|---------|-------------|
| **Drag-and-Drop** | Visual workflow construction |
| **Version Control** | Track changes, rollback to previous versions |
| **Testing Mode** | Dry-run workflow without posting |
| **Cloning** | Duplicate and modify existing workflows |
| **Import/Export** | Share workflows as JSON/YAML |
| **Scheduling** | Trigger automatically at period end |

---

## 9. Rollback and Undo

All close operations support rollback, enabling error correction without manual reversals.

### 9.1 Rollback Capabilities

| Operation | Rollback Action | Scope |
|-----------|-----------------|-------|
| **Journal Entry** | Generate reversing entry | Single JE |
| **Reconciliation** | Unreconcile, restore pending status | Single account |
| **Batch JE Posting** | Reverse all entries in batch | Batch |
| **Accrual Generation** | Reverse accruals for period | All accruals |
| **Period Close** | Reopen period (with approval) | Entire period |

### 9.2 Rollback Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                    ROLLBACK FLOW                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. User requests rollback                                      │
│     ├── Select item(s) to rollback                             │
│     └── Provide reason                                          │
│                                                                  │
│  2. System validates                                            │
│     ├── Check rollback eligibility (time window, dependencies) │
│     └── Preview impact (downstream effects)                    │
│                                                                  │
│  3. Approval (if required)                                      │
│     ├── Route to approver based on materiality                 │
│     └── Approver reviews impact and approves                   │
│                                                                  │
│  4. Execute rollback                                            │
│     ├── Generate compensating entries                          │
│     ├── Update status of affected items                        │
│     └── Notify relevant users                                  │
│                                                                  │
│  5. Audit trail                                                 │
│     ├── Log original action                                    │
│     ├── Log rollback action                                    │
│     └── Store reason and approver                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 9.3 Rollback Controls

| Control | Configuration |
|---------|---------------|
| **Time Window** | Rollback allowed within X hours (default: 24) |
| **Materiality Threshold** | Amounts above $X require approval |
| **Period Lock** | Cannot rollback in locked periods |
| **Dependency Check** | Warn if downstream items affected |
| **Audit Requirement** | Reason required for all rollbacks |

---

## 10. Related Documentation
 
 - [Automated Close Module Overview](../modules/automated-close.md)
 - [Audit-Ready Workflow](audit-ready-workflow.md)
 - [Exception Workflow](exception-workflow.md)
 - [Data Ingestion](data-ingestion.md)
 - [ERP Connectivity](../integrations/erp-connectivity.md)
