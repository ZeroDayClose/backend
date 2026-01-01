# ZeroDayClose UI Screens Specification

> **Complete UI screens and flows for the ZeroDayClose platform**

This document specifies all user interface screens needed to implement the ZeroDayClose platform, based on comprehensive analysis of the platform's features, modules, and workflows.

---

## Table of Contents

1. [Global Navigation & Layout](#1-global-navigation--layout)
2. [Authentication Screens](#2-authentication-screens)
3. [Dashboard Screens](#3-dashboard-screens)
4. [Close Module Screens](#4-close-module-screens)
5. [Revenue Module Screens](#5-revenue-module-screens)
6. [Cash Module Screens](#6-cash-module-screens)
7. [Consolidation Module Screens](#7-consolidation-module-screens)
8. [Instant Answers / Search Screens](#8-instant-answers--search-screens)
9. [Reports Module Screens](#9-reports-module-screens)
10. [Exceptions & Workflow Screens](#10-exceptions--workflow-screens)
11. [Notifications & Alerts Screens](#11-notifications--alerts-screens)
12. [Settings & Administration Screens](#12-settings--administration-screens)
13. [Onboarding Screens](#13-onboarding-screens)
14. [Cross-Cutting UI Components](#14-cross-cutting-ui-components)

---

## 1. Global Navigation & Layout

### 1.1 Main Application Shell

**Purpose**: Core layout container for the entire application

**Components**:

- **Top Bar**
  - Logo (left)
  - Global search bar (center) - Natural language query input
  - Voice input button (microphone icon)
  - Notifications bell with count badge
  - User avatar with dropdown menu
  - Help icon (?)

- **Sidebar** (collapsible)
  - Module navigation icons/links:
    - Dashboard
    - Close
    - Revenue
    - Cash
    - Consolidation
    - Search / Instant Answers
    - Reports
    - Settings
  - Current period indicator
  - Collapse/expand toggle

- **Main Content Area**
  - Breadcrumb navigation
  - Page title and actions
  - Primary content
  - Optional detail panel (right drawer)

- **Status Bar** (bottom)
  - Sync status indicator
  - Last sync timestamp
  - Active integrations status
  - Help shortcut

### 1.2 Command Palette (Cmd+K)

**Purpose**: Quick navigation and action execution

**Components**:
- Search input with placeholder suggestions
- Recent actions list
- Quick navigation shortcuts
- Keyboard shortcut hints

---

## 2. Authentication Screens

### 2.1 Login Screen

**Purpose**: User authentication entry point

**Components**:
- Logo and branding
- Email input field
- Password input field
- "Remember me" checkbox
- Login button
- "Forgot password?" link
- SSO login buttons (Google, Okta, Azure AD)
- "Sign up" link (if applicable)

**Flows**:
- Email/Password login → Dashboard
- SSO redirect → IdP → Dashboard
- Error states for invalid credentials

### 2.2 SSO Redirect Screen

**Purpose**: Intermediate screen during SSO authentication

**Components**:
- Loading spinner
- "Redirecting to [Provider]..." message
- Cancel button

### 2.3 MFA Verification Screen

**Purpose**: Second factor authentication

**Components**:
- 6-digit code input fields
- "Resend code" link
- "Use different method" link
- Verify button
- Countdown timer for code expiry

### 2.4 Forgot Password Screen

**Purpose**: Password recovery initiation

**Components**:
- Email input field
- Submit button
- "Back to login" link
- Success message state

### 2.5 Reset Password Screen

**Purpose**: Set new password

**Components**:
- New password input
- Confirm password input
- Password strength indicator
- Reset button
- Password requirements list

---

## 3. Dashboard Screens

### 3.1 Home Dashboard (Controller View)

**Purpose**: Primary landing page with operational overview

**Components**:

- **Period Selector**: Dropdown for current/prior periods

- **Close Progress Card**
  - Circular progress indicator (e.g., 75% complete)
  - Days remaining countdown
  - "View Close Checklist" button

- **Key Metrics Row**
  - Cash Position (with trend sparkline)
  - Revenue (recognized this period)
  - Outstanding Exceptions
  - AR/AP Balance

- **Exception Summary Card**
  - Count by type (Low Confidence, High Materiality, etc.)
  - "View All Exceptions" link

- **Recent Activity Feed**
  - AI actions (auto-posted JEs, matches)
  - Team member actions
  - System notifications

- **Quick Actions**
  - Start Close
  - Review Exceptions
  - Generate Report

### 3.2 CFO Dashboard

**Purpose**: Executive-level financial overview

**Components**:

- **Financial Highlights Row**
  - Revenue vs. Cash card
  - Expense Overview card
  - Key Metrics (ARR, MRR, Burn Rate, Runway)

- **Anomaly Highlights Card**
  - AI-detected unusual items
  - Click to investigate

- **Entity Performance Table**
  - Subsidiary breakdown
  - Revenue, Expenses, Margin by entity

- **Trend Charts**
  - Revenue trend (line chart)
  - Expense trend (bar chart)
  - Cash flow (waterfall chart)

- **AI-Generated Commentary Section**
  - Variance narratives
  - Key takeaways

### 3.3 Liquidity Dashboard (Treasurer View)

**Purpose**: Cash and treasury management overview

**Components**:

- **Global Cash Position Card**
  - Total cash balance
  - By account breakdown (expandable)
  - By currency breakdown

- **Daily Cash by Account Chart**
  - Multi-line chart showing each account
  - Date range selector

- **13-Week Forecast Chart**
  - Line chart with confidence bands
  - Optimistic/Pessimistic toggles

- **Upcoming Payments Table**
  - Next 30 days outflows
  - Vendor, Amount, Due Date, Status

- **Expected Collections Table**
  - Projected AR receipts
  - Customer, Amount, Expected Date

- **Burn Rate Indicator**
  - Current burn rate
  - Trend arrow
  - Runway months remaining

- **Liquidity Alerts Panel**
  - Low balance warnings
  - Threshold breaches

### 3.4 Revenue Dashboard

**Purpose**: Revenue recognition status overview

**Components**:

- **Recognized vs. Deferred Card**
  - Donut chart showing split
  - Total amounts

- **Revenue Waterfall Chart**
  - Recognition timeline
  - Monthly breakdown

- **Contract Summary Table**
  - Active contracts
  - TCV, Recognized, Deferred columns
  - Status (Compliant, Needs Review)

- **Booking vs. Billing vs. Revenue Chart**
  - Three-way comparison

- **Audit Evidence Quick Links**
  - Recent audit memos
  - Supporting documentation

---

## 4. Close Module Screens

### 4.1 Close Overview / Checklist

**Purpose**: Month-end close progress tracking

**Components**:

- **Period Header**
  - Period name (e.g., "January 2024 Close")
  - Progress percentage
  - Start/Target dates

- **Progress Bar** (overall completion)

- **Phase Tabs**: Pre-Close | Reconciliations | Adjustments | Consolidation | Review | Close

- **Task Checklist**
  - Status icons (✅⏳⚠️⬜🔴❌)
  - Task name
  - Completed by (AI/User name)
  - Completion time
  - Confidence badge (if AI)
  - "View Details" link

- **Bottleneck Alerts Panel**
  - Blocked tasks
  - Dependencies

- **Actions**
  - Start Close Workflow
  - Skip to Phase
  - Undo Last Action
  - Mark Period Closed

**Flows**:
- Click task → Task Detail Modal
- Approve task → Updates status, next task starts
- View Rationale → AI reasoning modal

### 4.2 Task Detail View (Modal/Drawer)

**Purpose**: Detailed view of a close task

**Components**:

- **Header**
  - Task name
  - Status badge
  - AI indicator (if applicable)

- **Summary Section**
  - What the task accomplished
  - Completed by
  - Completion timestamp

- **Evidence Panel**
  - Source documents links
  - Calculation details
  - Screenshots/PDFs

- **AI Confidence Section** (if AI-completed)
  - Confidence score with breakdown
  - "View Rationale" expandable

- **Actions**
  - Approve
  - Approve with Edit
  - Reject
  - Reassign
  - Add Comment

- **Comments Thread**

### 4.3 Reconciliation Detail Screen

**Purpose**: View specific reconciliation results

**Components**:

- **Header**
  - Account name/number
  - Reconciliation type (Bank, AR, AP, Intercompany)
  - Status (Reconciled, Variance, Pending)

- **Summary Cards**
  - Book Balance
  - Bank/Sub-ledger Balance
  - Variance Amount

- **Reconciliation Table**
  - Line items
  - Matched/Unmatched indicator
  - Amount, Date, Reference

- **Variance Analysis Panel**
  - Unreconciled items list
  - AI-suggested explanations

- **Actions**
  - Mark as Reconciled
  - Create Adjustment JE
  - Flag for Review

### 4.4 Journal Entry Review Screen

**Purpose**: Review and approve AI-generated journal entries

**Components**:

- **JE Header**
  - JE Number
  - Date
  - AI Confidence badge
  - Status (Pending Review, Approved, Posted, Rejected)

- **Entry Details**
  - Description
  - Debit lines (Account, Amount)
  - Credit lines (Account, Amount)
  - Total debits = Total credits check

- **AI Rationale Panel**
  - Why this JE was created
  - Historical pattern reference
  - Similar past entries

- **Supporting Evidence**
  - Source documents
  - Calculation trace

- **Actions**
  - Approve (post to ERP)
  - Edit → Opens inline editor
  - Reject → Requires reason
  - Add Comment

### 4.5 Flux Analysis Screen

**Purpose**: Variance analysis between periods

**Components**:

- **Period Selector**
  - Compare period A vs. period B
  - MoM, QoQ, YoY presets

- **Summary Table**
  - Account
  - Period A Amount
  - Period B Amount
  - Variance ($)
  - Variance (%)
  - AI Explanation

- **Drill-Down View** (on row click)
  - Transaction-level detail
  - Contributing factors

- **Waterfall Chart**
  - Visual variance breakdown

- **AI Narrative Panel**
  - Auto-generated variance explanations

- **Export Options**
  - Excel, PDF

### 4.6 Workflow Builder Screen

**Purpose**: No-code workflow construction

**Components**:

- **Canvas Area**
  - Visual drag-and-drop workspace
  - Workflow nodes connected by arrows
  - Zoom controls
  - Mini-map navigator

- **Component Palette** (left sidebar)
  - Reconciliation
  - Journal Entry
  - Approval
  - Notification
  - Condition (if/else)
  - Parallel
  - Wait
  - Manual Task
  - Webhook

- **Properties Panel** (right sidebar)
  - Selected component configuration
  - Name, parameters, thresholds
  - Assignee selection
  - Failure handling options

- **Toolbar**
  - Save Draft
  - Test Workflow
  - Publish
  - Version History
  - Import/Export

- **Template Gallery** (modal)
  - Pre-built workflow templates
  - Preview and select

### 4.7 Workflow Execution Monitor

**Purpose**: Real-time workflow progress tracking

**Components**:

- **Workflow Diagram**
  - Live status on each node
  - Progress indicators
  - Error highlights

- **Execution Log**
  - Timestamped events
  - Success/failure status
  - Duration per step

- **Current Step Detail**
  - What's happening now
  - Estimated completion

- **Controls**
  - Pause/Resume
  - Skip Step
  - Retry Failed
  - Cancel Workflow

---

## 5. Revenue Module Screens

### 5.1 Revenue Overview Dashboard

**Purpose**: Revenue recognition status at a glance

**Components**:

- **Period Selector**

- **Summary Metrics Row**
  - Total Contracts
  - Total TCV
  - Recognized This Period
  - Deferred Balance

- **Recognition Status Chart**
  - Pie: Recognized vs. Deferred

- **Contracts by Status Table**
  - Status groups (Compliant, Needs Review, Pending)
  - Count and value per group

- **Quick Actions**
  - Add Contract
  - Run Recognition

### 5.2 Contract List Screen

**Purpose**: Browse and manage all contracts

**Components**:

- **Filters Bar**
  - Status (Active, Expired, Pending)
  - Customer
  - Date range
  - Value range
  - Search

- **Contract Table**
  - Contract ID/Name
  - Customer
  - Start/End Date
  - TCV
  - Recognized
  - Deferred
  - Status
  - Actions (View, Edit)

- **Bulk Actions**
  - Export
  - Bulk status update

- **Pagination**

### 5.3 Contract Detail Screen

**Purpose**: Full contract information and revenue schedule

**Components**:

- **Contract Header**
  - Contract name/ID
  - Customer name
  - Status badge
  - AI Confidence (if applicable)

- **Tabs**: Overview | Terms | Schedule | Journal Entries | Audit Memo | History

- **Overview Tab**
  - Contract summary
  - Total Contract Value
  - Term dates
  - Performance obligations list

- **Terms Tab**
  - Extracted terms (AI-powered)
  - Service dates
  - Payment terms
  - Termination clauses
  - Variable consideration
  - Original document viewer

- **Schedule Tab**
  - Revenue recognition schedule table
  - Month, Recognized Amount, Cumulative, Deferred
  - Visual timeline chart

- **Journal Entries Tab**
  - Posted JEs for this contract
  - Pending JEs

- **Audit Memo Tab**
  - Auto-generated technical accounting memo
  - ASC 606 five-step analysis
  - Download PDF

- **History Tab**
  - Modifications log
  - Status changes

- **Actions**
  - Edit Contract
  - Modify Recognition
  - Generate Memo
  - Archive

### 5.4 Contract Upload/Creation Screen

**Purpose**: Add new contracts to the system

**Components**:

- **Upload Zone**
  - Drag-and-drop PDF area
  - File browser button
  - Supported formats note

- **Processing Status**
  - Upload progress
  - OCR processing indicator
  - Extraction status

- **Extracted Data Review**
  - AI-extracted fields (editable)
  - Customer name
  - Contract value
  - Term dates
  - Performance obligations (add/remove)
  - Confidence indicators per field

- **Manual Entry Form** (alternative)
  - Full form for manual input

- **Actions**
  - Confirm & Create
  - Save as Draft
  - Cancel

### 5.5 SSP Allocation Screen

**Purpose**: Standalone Selling Price allocation for bundled contracts

**Components**:

- **Contract Reference**

- **Performance Obligations Table**
  - Obligation name
  - SSP Amount
  - Allocation %
  - Allocated Revenue

- **Allocation Method Selector**
  - Residual approach
  - Relative SSP
  - Custom

- **Calculation Details**
  - Breakdown of SSP determination
  - AI reasoning

- **Actions**
  - Apply Allocation
  - Override Values
  - View Audit Trail

---

## 6. Cash Module Screens

### 6.1 Cash Overview Dashboard

**Purpose**: Treasury and cash position overview

**Components**:

- **Global Cash Position Card**
  - Total cash (large number)
  - Trend indicator

- **By Account Breakdown**
  - Expandable list of bank accounts
  - Balance per account
  - Currency

- **Multi-Currency View**
  - Balances by currency
  - FX rates used

- **Quick Stats Row**
  - Auto-Match Rate
  - Exceptions Pending
  - Burn Rate
  - Runway Months

- **Quick Actions**
  - Sync Bank Feeds
  - Review Exceptions
  - View Forecast

### 6.2 Bank Accounts List Screen

**Purpose**: Manage connected bank accounts

**Components**:

- **Accounts Table**
  - Account Name
  - Bank Name
  - Account Number (masked)
  - Currency
  - Current Balance
  - Last Sync
  - Status (Connected, Error, Pending)

- **Actions per Account**
  - Sync Now
  - View Transactions
  - Disconnect
  - Edit Settings

- **Add Account Button**
  - Opens Plaid/Teller connection flow

### 6.3 Bank Transactions Screen

**Purpose**: View and manage bank transactions

**Components**:

- **Filters Bar**
  - Account selector
  - Date range
  - Amount range
  - Status (Matched, Unmatched, In Review)
  - Category
  - Search

- **Transactions Table**
  - Date
  - Description
  - Amount (color-coded debit/credit)
  - Category
  - Match Status (icon)
  - Matched To (invoice/bill reference)

- **Bulk Actions**
  - Categorize
  - Match Selected
  - Export

- **Row Actions**
  - View Details
  - Edit Category
  - Match Manually
  - Flag

### 6.4 Cash Application / Matching Queue

**Purpose**: Review and resolve payment matching exceptions

**Components**:

- **Queue Header**
  - Total pending items
  - Filter tabs: All | AR Payments | AP Payments | Unidentified

- **Queue Table**
  - Date
  - Amount
  - Payer/Payee
  - Reference
  - AI Confidence
  - Suggested Match
  - Status

- **Detail Panel** (on row select)
  - Payment details
  - Suggested matches (ranked by confidence)
  - Match reasoning
  - Similar historical matches
  - One-click actions: Approve Match, Reject, Manual Match

- **Manual Match Modal**
  - Search open invoices/bills
  - Select single or multiple
  - Handle partial payments
  - Handle overpayments (create credit memo)

### 6.5 Cash Matching Detail Screen

**Purpose**: Review specific payment match

**Components**:

- **Payment Info**
  - Amount, Date, Payer, Reference
  - Bank account source

- **Match Candidates**
  - Table of suggested invoices/bills
  - Confidence score per match
  - Amount comparison

- **AI Rationale**
  - Why each match was suggested
  - Historical patterns

- **Allocation Panel** (for multi-invoice payments)
  - Invoice, Allocated Amount, Remaining

- **Actions**
  - Approve Match
  - Modify Allocation
  - Reject All
  - Create Exception

### 6.6 Cash Flow Forecast Screen

**Purpose**: 13-week cash flow projection

**Components**:

- **Forecast Chart**
  - X-axis: Weeks
  - Y-axis: Cash balance
  - Projected line with confidence band
  - Actuals overlay (where available)
  - Threshold line (minimum balance)

- **Scenario Toggles**
  - Base case
  - Optimistic (faster collections)
  - Pessimistic (delayed collections)

- **Forecast Table**
  - Week
  - Opening Balance
  - Inflows
  - Outflows
  - Closing Balance

- **Assumptions Panel**
  - Key assumptions used
  - Editable parameters
  - "What-if" adjustments

- **Variance Analysis**
  - Actual vs. Prior Forecast
  - Explanations

- **Actions**
  - Export Forecast
  - Share with Stakeholders
  - Update Assumptions

### 6.7 Burn Rate Analysis Screen

**Purpose**: Expense burn and runway tracking

**Components**:

- **Burn Rate Card**
  - Monthly burn rate (large number)
  - Trend vs. prior periods

- **Runway Card**
  - Months remaining at current burn
  - Visual runway bar

- **Burn Trend Chart**
  - Line chart over time
  - Annotations for significant changes

- **Category Breakdown**
  - Pie chart by expense category
  - Drill-down to transactions

- **Scenario Modeling**
  - Adjust burn rate
  - See impact on runway

### 6.8 Expense Categorization Screen

**Purpose**: Manage transaction categories

**Components**:

- **Uncategorized Transactions Queue**
  - Transactions pending categorization
  - AI-suggested categories

- **Categorization Interface**
  - Transaction details
  - Category dropdown
  - Apply to similar checkbox
  - Save button

- **Category Rules Table**
  - Vendor patterns
  - Auto-assigned category
  - Rule source (AI learned, Manual)

- **Actions**
  - Create New Rule
  - Edit Rule
  - Delete Rule

---

## 7. Consolidation Module Screens

### 7.1 Consolidation Overview

**Purpose**: Multi-entity consolidation status

**Components**:

- **Entity Hierarchy Tree**
  - Parent/subsidiary structure
  - Expandable nodes
  - Status indicators per entity

- **Consolidation Status Cards**
  - Entities Ready
  - Pending Eliminations
  - Currency Translation Status

- **Timeline**
  - Close status per entity
  - Consolidation progress

- **Quick Actions**
  - Run Consolidation
  - View Eliminations
  - Generate Consolidated Statements

### 7.2 Entity Management Screen

**Purpose**: Configure entity structure

**Components**:

- **Entity Tree Editor**
  - Drag-and-drop hierarchy
  - Add/Remove entities

- **Entity Detail Panel**
  - Entity name
  - Base currency
  - Ownership percentage
  - ERP connection
  - Account mapping status

- **Actions**
  - Add Child Entity
  - Edit Entity
  - Delete Entity (with warnings)

### 7.3 Intercompany Transactions Screen

**Purpose**: View and manage intercompany transactions

**Components**:

- **Filters**
  - Entity pair
  - Transaction type
  - Date range
  - Status (Matched, Unmatched)

- **Transactions Table**
  - Date
  - From Entity
  - To Entity
  - Description
  - Amount
  - Match Status

- **Unmatched Queue**
  - Items requiring reconciliation
  - Suggested matches

- **Elimination Preview**
  - Proposed elimination entries

### 7.4 Elimination Entries Screen

**Purpose**: Review and approve elimination entries

**Components**:

- **Elimination Summary**
  - Total eliminations this period
  - By type (IC Receivables, IC Revenue, etc.)

- **Elimination Table**
  - Elimination type
  - Debit Account/Entity
  - Credit Account/Entity
  - Amount
  - Status

- **Detail View** (on row click)
  - Supporting IC transactions
  - Calculation basis

- **Actions**
  - Approve All
  - Approve Selected
  - Reject (with reason)
  - Manual Adjustment

### 7.5 Currency Translation Screen

**Purpose**: FX translation for foreign subsidiaries

**Components**:

- **Exchange Rates Table**
  - Currency pair
  - Period-end rate
  - Average rate
  - Source (API, Manual)

- **Translation Summary**
  - Entity
  - Functional Currency
  - Translation Gain/Loss

- **CTA Rollforward**
  - Opening CTA
  - Current period impact
  - Closing CTA

- **Translation Entries**
  - Generated translation JEs

- **Actions**
  - Override Rate
  - Recalculate Translation
  - View FX Impact Analysis

### 7.6 Consolidated Statements Screen

**Purpose**: View consolidated financial statements

**Components**:

- **Statement Selector**
  - Income Statement
  - Balance Sheet
  - Cash Flow Statement

- **Period/Comparison Selector**
  - Current period
  - Comparative periods

- **Statement View**
  - Account hierarchy
  - Consolidated amounts
  - Prior period comparison
  - Variance column

- **Drill-Through**
  - Click amount → By entity breakdown
  - Click entity → Transaction detail

- **Actions**
  - Export (Excel, PDF, PowerPoint)
  - Add Commentary
  - Share

### 7.7 Segment Performance Screen

**Purpose**: Performance by business segment

**Components**:

- **Segment Selector**
  - By Product Line
  - By Region
  - By Entity
  - Custom segments

- **Performance Table**
  - Segment name
  - Revenue
  - Expenses
  - Operating Income
  - Margin %

- **Comparison Chart**
  - Bar chart comparing segments

- **Trend View**
  - Segment performance over time

- **Drill-Through**
  - Segment → Entities → Transactions

---

## 8. Instant Answers / Search Screens

### 8.1 Search Home Screen

**Purpose**: Natural language query interface

**Components**:

- **Large Search Input**
  - "Ask anything about your financial data..."
  - Voice input button
  - Example queries below

- **Recent Queries**
  - Query history
  - Click to re-run

- **Suggested Questions**
  - Context-aware suggestions
  - Popular queries

- **Quick Stats Panel**
  - Key metrics for reference

### 8.2 Search Results Screen

**Purpose**: Display query results

**Components**:

- **Query Echo**
  - The question asked
  - Edit query link

- **Answer Card**
  - Primary answer (large, prominent)
  - Supporting data (table, breakdown)
  - Trend indicator
  - Visualization (chart if applicable)

- **Computation Trail Panel**
  - Query translation (what data was accessed)
  - Calculation steps
  - Source links

- **Follow-Up Actions**
  - "Break down by..." suggestions
  - "Compare to..." options
  - "Why?" drill-down

- **Related Insights**
  - AI-suggested related queries

- **Actions**
  - Export Answer
  - Share
  - Add to Dashboard

### 8.3 Conversational Chat Mode

**Purpose**: Multi-turn Q&A for complex exploration

**Components**:

- **Chat Thread**
  - Message bubbles (user and AI)
  - Embedded tables/charts in responses
  - Timestamps

- **Input Bar**
  - Text input
  - Voice button
  - Send button

- **Context Panel** (collapsible)
  - Current context summary
  - Clear context button

- **Quick Actions**
  - Export conversation
  - Start new chat

### 8.4 Voice Query Interface (Modal/Overlay)

**Purpose**: Voice input for queries

**Components**:

- **Microphone Visualization**
  - Audio waveform
  - Listening indicator

- **Real-Time Transcription**
  - Words appearing as spoken

- **Confirmation Panel**
  - Final transcribed query
  - Edit option
  - Submit button

- **Voice Commands Legend**
  - "Stop", "Cancel", "Go back" hints

---

## 9. Reports Module Screens

### 9.1 Reports Library

**Purpose**: Browse and manage all reports

**Components**:

- **Filters/Search**
  - Report type
  - Created by
  - Date range

- **Reports Grid/List**
  - Report name
  - Type (Financial, Management, Audit)
  - Last generated
  - Created by
  - Actions (View, Run, Edit, Delete)

- **Favorites Section**
  - Pinned reports

- **Quick Actions**
  - Create New Report
  - Schedule Report

### 9.2 Report Builder Screen

**Purpose**: Create custom reports

**Components**:

- **Report Type Selector**
  - Financial Statement
  - Management Report
  - Custom Analysis

- **Data Source Panel**
  - Available metrics/accounts
  - Drag to add

- **Layout Canvas**
  - Rows/columns configuration
  - Drag-and-drop arrangement

- **Filters Panel**
  - Period selection
  - Entity filter
  - Segment filter

- **Formatting Options**
  - Headers, footers
  - Column widths
  - Number formatting

- **Preview Panel**
  - Live preview of report

- **Actions**
  - Save Template
  - Generate Report
  - Schedule

### 9.3 Report Viewer Screen

**Purpose**: View generated report

**Components**:

- **Report Header**
  - Report title
  - Period
  - Generated timestamp

- **Report Content**
  - Financial tables
  - Charts (if included)
  - AI commentary sections

- **Drill-Through**
  - Clickable numbers
  - Expand to detail

- **Actions**
  - Export (PDF, Excel, PowerPoint)
  - Print
  - Share
  - Edit Report
  - Schedule

### 9.4 Board Package Generator

**Purpose**: Create board-ready presentation packages

**Components**:

- **Package Template Selector**
  - Standard Board Pack
  - Investor Update
  - Custom

- **Section Selector**
  - Executive Summary
  - Financial Statements
  - Variance Analysis
  - Cash Position
  - Key Metrics
  - Segment Performance
  - Appendix

- **AI Commentary Settings**
  - Auto-generate narratives
  - Tone (Formal/Conversational)
  - Focus areas

- **Preview**
  - Slide-by-slide preview

- **Actions**
  - Generate Package
  - Export to PowerPoint
  - Export to PDF

### 9.5 Report Scheduler

**Purpose**: Schedule recurring report generation

**Components**:

- **Report Selector**
  - Choose report template

- **Schedule Configuration**
  - Frequency (Daily, Weekly, Monthly, Custom)
  - Time
  - Timezone

- **Delivery Options**
  - Email recipients
  - Slack channel
  - Auto-save location

- **Active Schedules List**
  - Scheduled reports table
  - Enable/Disable toggle
  - Edit/Delete actions

---

## 10. Exceptions & Workflow Screens

### 10.1 Exception Queue

**Purpose**: Centralized view of all exceptions requiring attention

**Components**:

- **Queue Header**
  - Total exceptions count
  - Filter tabs: All | My Assigned | High Priority | Aging

- **Filters Bar**
  - Type (Low Confidence, High Materiality, Anomaly, etc.)
  - Module (Close, Revenue, Cash)
  - Date range
  - Assignee
  - Status

- **Exception Table**
  - Exception ID
  - Type (badge)
  - Description
  - Amount
  - Confidence
  - Assignee
  - Age (time since created)
  - SLA status
  - Priority

- **Bulk Actions**
  - Assign to
  - Approve All
  - Export

### 10.2 Exception Detail Screen

**Purpose**: Full exception review interface

**Components**:

- **Exception Header**
  - Exception ID
  - Type badge
  - Status badge
  - Priority indicator
  - Assigned to

- **Summary Panel**
  - What was flagged
  - Why it was flagged
  - Impact/Materiality

- **AI Recommendation Panel**
  - Proposed action
  - Confidence score with breakdown
  - Reasoning

- **Supporting Evidence Panel**
  - Source documents
  - Related transactions
  - Calculation logic
  - Historical similar cases

- **Collaboration Panel**
  - Comments thread
  - @mentions
  - File attachments
  - Presence indicators (who's viewing)

- **Actions Bar**
  - Approve (accept AI recommendation)
  - Approve with Edit (opens editor)
  - Reject (requires reason)
  - Reassign
  - Request More Info
  - Add Comment

### 10.3 Annotation Interface (Overlay on Exception)

**Purpose**: Collaborative review with annotations

**Components**:

- **Document/Data View**
  - Content being reviewed

- **Annotation Layer**
  - Highlight regions
  - Inline comments
  - Question markers
  - Correction suggestions

- **Annotation Sidebar**
  - List of all annotations
  - Filter by author, type
  - Resolve/unresolve toggles

- **Presence Indicators**
  - Avatar stack (who's viewing)
  - Typing indicators

### 10.4 Approval Workflow Status

**Purpose**: Track multi-step approval processes

**Components**:

- **Workflow Diagram**
  - Visual approval chain
  - Current step highlighted
  - Completed steps checked

- **Step Details**
  - Who approved
  - When
  - Comments

- **Pending Actions**
  - What's needed next
  - Who needs to act

- **History Log**
  - Full audit trail

---

## 11. Notifications & Alerts Screens

### 11.1 Notification Center (Dropdown/Panel)

**Purpose**: View all notifications

**Components**:

- **Notification List**
  - Icon (type indicator)
  - Title
  - Summary
  - Timestamp
  - Read/Unread indicator

- **Filter Tabs**
  - All
  - Exceptions
  - Approvals
  - System
  - @Mentions

- **Actions**
  - Mark all as read
  - Notification settings link

- **Individual Notification Actions**
  - Click to navigate
  - Dismiss
  - Mark as read

### 11.2 Notification Settings Screen

**Purpose**: Configure notification preferences

**Components**:

- **Channel Settings**
  - In-App (on/off per type)
  - Email (on/off per type, frequency)
  - Slack (on/off, channel selection)
  - Mobile Push (on/off per type)

- **Alert Type Matrix**
  - Rows: Alert types (Anomaly, Approval, Sync, etc.)
  - Columns: Channels
  - Toggles for each combination

- **Frequency Settings**
  - Immediate
  - Hourly digest
  - Daily digest

- **Quiet Hours**
  - Start/End time
  - Days of week

- **Escalation Rules**
  - Auto-escalate after X hours
  - Escalation recipient

### 11.3 Alert Configuration Screen (Admin)

**Purpose**: Configure system-wide alert rules

**Components**:

- **Alert Rules Table**
  - Rule name
  - Trigger condition
  - Recipients
  - Enabled toggle

- **Create/Edit Rule Form**
  - Rule name
  - Trigger type (Threshold, Event, Schedule)
  - Condition configuration
  - Recipient selection (roles, individuals)
  - Notification channels
  - Priority level

---

## 12. Settings & Administration Screens

### 12.1 Settings Overview

**Purpose**: Settings navigation hub

**Components**:
- **Settings Categories**
  - Profile & Preferences
  - Organization Settings
  - User Management
  - Integrations
  - Automation Policies
  - Security
  - API & Webhooks
  - Notifications

### 12.2 Profile Settings Screen

**Purpose**: Personal user settings

**Components**:

- **Profile Section**
  - Avatar upload
  - Name
  - Email
  - Phone

- **Preferences Section**
  - Theme (Light/Dark)
  - Density (Comfortable/Compact)
  - Default module home
  - Timezone
  - Date format
  - Number format

- **Keyboard Shortcuts**
  - View all shortcuts
  - Customize shortcuts

- **Security Section**
  - Change password
  - Enable/Disable 2FA
  - Active sessions
  - Log out all devices

### 12.3 Organization Settings Screen

**Purpose**: Company-wide configuration

**Components**:

- **Company Profile**
  - Company name
  - Logo upload
  - Fiscal year settings
  - Base currency

- **Entities**
  - Link to Entity Management

- **Chart of Accounts**
  - Link to CoA Mapping

### 12.4 User Management Screen

**Purpose**: Manage users and roles

**Components**:

- **Users Table**
  - Name
  - Email
  - Role
  - Status (Active, Invited, Deactivated)
  - Last login
  - Actions

- **Filters**
  - Role
  - Status
  - Search

- **Invite User Button**
  - Opens invite modal

- **User Detail Panel** (on row click)
  - User info
  - Role assignment
  - Entity access
  - Activity log
  - Actions (Deactivate, Reset Password, Force Logout)

### 12.5 Invite User Modal

**Purpose**: Send user invitation

**Components**:
- Email Input
- Role Selector
- Entity Access (multi-select)
- Send Invitation Button

### 12.6 Role Management Screen

**Purpose**: Configure roles and permissions

**Components**:

- **Roles List**
  - Role name
  - User count
  - Type (System/Custom)

- **Role Detail Panel**
  - Role name
  - Description
  - Permission matrix (by area and action)

- **Create Role Button**
- **Clone Role Button**

### 12.7 Integrations Hub Screen

**Purpose**: Manage all integrations

**Components**:

- **Connected Integrations**
  - List with status indicators
  - Last sync time
  - Actions (Sync Now, Configure, Disconnect)

- **Available Integrations**
  - Browse by category (ERP, Banking, CRM, etc.)
  - Search
  - Connect button

- **Connection Health Panel**
  - Overall status
  - Recent errors

### 12.8 Integration Detail Screen

**Purpose**: Configure specific integration

**Components**:

- **Connection Info**
  - Status indicator
  - Connection type
  - API endpoint

- **Credentials Section**
  - Masked credentials
  - Re-authenticate button
  - Rotation reminders

- **Sync Settings**
  - Frequency selector
  - Sync window
  - Data scope (what to sync)

- **Field Mapping**
  - Source fields → Target fields
  - AI-suggested mappings
  - Manual override

- **Sync History Table**
  - Timestamp
  - Records synced
  - Duration
  - Status
  - Errors

- **Error Log**
  - Recent errors
  - Error details
  - Retry button

### 12.9 Automation Policies Screen

**Purpose**: Configure AI automation thresholds

**Components**:

- **Threshold Settings**
  - Materiality threshold slider/input
  - Confidence threshold slider/input
  - Variance threshold slider/input
  - JE limit slider/input

- **Auto-Approval Rules**
  - Rule list
  - Conditions
  - Enable/Disable toggles

- **Approval Chains**
  - Configure approval workflows
  - By transaction type
  - By amount tier

- **Escalation Settings**
  - Auto-escalate after X hours
  - Escalation recipients

### 12.10 Security Settings Screen

**Purpose**: Security and compliance configuration

**Components**:

- **SSO Configuration**
  - Provider selector
  - SAML/OAuth settings
  - Test connection

- **MFA Settings**
  - Require for all users toggle
  - Allowed methods

- **Session Settings**
  - Timeout duration
  - Concurrent session limit

- **IP Allowlist**
  - Allowed IP ranges

- **Audit Log Access**
  - Link to audit log viewer

### 12.11 API & Webhooks Screen

**Purpose**: Manage API access and webhooks

**Components**:

- **API Keys Section**
  - Active keys table
  - Key name, created date, last used
  - Create new key
  - Revoke key

- **Webhooks Section**
  - Configured webhooks table
  - URL, events, status
  - Create webhook button

- **Create Webhook Modal**
  - URL input
  - Events multi-select
  - Secret input
  - Test button

- **API Documentation Link**
  - Link to API docs

### 12.12 Audit Log Viewer

**Purpose**: Review all system audit logs

**Components**:

- **Filters**
  - Date range
  - User
  - Action type
  - Resource type

- **Log Table**
  - Timestamp
  - User
  - Action
  - Resource
  - Details (expandable)
  - IP Address

- **Export Button**

- **Detail Modal** (on row click)
  - Full action details
  - Before/After values

---

## 13. Onboarding Screens

### 13.1 Welcome Screen

**Purpose**: First-time user welcome

**Components**:
- Welcome message
- Platform overview video/animation
- Get Started button

### 13.2 Setup Wizard - Step 1: Connect ERP

**Purpose**: Primary ERP connection

**Components**:

- **ERP Selection**
  - Grid of supported ERPs with logos
  - NetSuite, Intacct, SAP, etc.

- **Connection Form**
  - Credential inputs (varies by ERP)
  - Test connection button

- **Progress indicator**

### 13.3 Setup Wizard - Step 2: Import Chart of Accounts

**Purpose**: Pull and map chart of accounts

**Components**:

- **Import Status**
  - Progress bar
  - Accounts found count

- **Account List Preview**
  - Sample accounts
  - AI-suggested classifications

- **Classification Review**
  - Account name
  - Suggested category
  - Override dropdown

- **Confirm button**

### 13.4 Setup Wizard - Step 3: Define Entities

**Purpose**: Set up entity structure

**Components**:

- **Entity Builder**
  - Add parent entity
  - Add child entities
  - Set currencies
  - Set ownership percentages

- **Visual hierarchy preview**

- **Next button**

### 13.5 Setup Wizard - Step 4: Configure Policies

**Purpose**: Set automation thresholds

**Components**:

- **Threshold Sliders**
  - Materiality threshold
  - Confidence threshold
  - Auto-approval limit

- **Explanation text for each**

- **Recommended settings highlighted**

- **Next button**

### 13.6 Setup Wizard - Step 5: Connect Banks

**Purpose**: Link bank accounts

**Components**:

- **Bank Connection Interface**
  - Plaid/Teller flow
  - Or manual account entry

- **Connected Accounts List**

- **Verify balances**

- **Next button**

### 13.7 Setup Wizard - Step 6: Invite Team

**Purpose**: Add initial users

**Components**:

- **Email Input** (multiple)

- **Role selector per email**

- **Send Invites button**

- **Skip for now option**

### 13.8 Setup Wizard - Step 7: Test Run

**Purpose**: Verify setup with sample data

**Components**:

- **Test Run Button**

- **Progress indicator**
  - Syncing data...
  - Running reconciliation...
  - Testing matching...

- **Results Summary**
  - Records imported
  - Matches found
  - Any errors

- **Finish Setup button**

### 13.9 Guided Tour Overlay

**Purpose**: Interactive tour for new users

**Components**:

- **Tooltip Highlights**
  - Step-by-step feature introduction
  - Highlight specific UI elements

- **Progress indicator**
  - Current step / total steps

- **Next/Previous buttons**

- **Skip tour button**

- **End tour celebration**

---

## 14. Cross-Cutting UI Components

### Modals

- **Confirmation Modal** — "Are you sure?" dialogs
- **Error Modal** — "Something went wrong" with retry option
- **Success Toast** — "Action completed" notification
- **Info Modal** — Help content and documentation

### Loading States

- **Full-page loader** — Initial application load
- **Skeleton screens** — Content loading placeholders
- **Progress bars** — Long operations with progress
- **Spinner overlays** — Action pending indicator

### Empty States

- **No data illustrations** — Friendly empty state graphics
- **Call-to-action buttons** — Guide users to next steps
- **Help text** — Explain why empty and what to do

### Error States

- **Inline field errors** — Form validation feedback
- **Form validation summaries** — Multiple errors listed
- **API error messages** — User-friendly error text
- **Retry options** — Allow users to try again

### AI Indicators (Global Pattern)

- **Robot icon** — Marks AI-generated content
- **Confidence badges** — Percentage confidence display
- **"View Rationale" links** — Explain AI reasoning
- **Computation trail expandables** — Step-by-step logic

### Drill-Through Pattern

- **Clickable numbers/values** — Navigate to detail
- **Breadcrumb navigation** — Track drill path
- **Back button** — Return to previous level
- **Level indicator** — Show current depth

### Data Tables (Global Pattern)

- **Sorting** — Click headers to sort
- **Filtering** — Column filters and search
- **Column Customization** — Show/hide, reorder columns
- **Inline Editing** — Edit values directly in table
- **Bulk Actions** — Select multiple rows for action
- **Export** — Export visible data to Excel
- **Drill-Through** — Click values to see detail
- **Pagination** — Page controls and size selector

### Form Patterns

- **Inline validation** — Real-time feedback
- **Auto-save** — Draft saving
- **Required field indicators** — Asterisk marking
- **Help tooltips** — Context-sensitive help

---

## Summary

This document specifies **75+ distinct screens and flows** for the ZeroDayClose platform, organized across:

| Category | Screen Count |
|----------|-------------|
| Authentication | 5 |
| Dashboards | 4 |
| Close Module | 7 |
| Revenue Module | 5 |
| Cash Module | 8 |
| Consolidation Module | 7 |
| Instant Answers | 4 |
| Reports Module | 5 |
| Exceptions | 4 |
| Notifications | 3 |
| Settings/Admin | 12 |
| Onboarding | 9 |
| **Total** | **73+** |

Each screen includes detailed component specifications, flows, and actions to enable complete UI implementation.

---

## Related Documentation

- [Interface Design](interface-design.md) — UI components and patterns
- [Guided Workflows](guided-workflows.md) — Workflow UI details
- [Search Interface](search-interface.md) — Search/query UI details
- [Frontend Stack](../technical/frontend-stack.md) — Technical implementation
