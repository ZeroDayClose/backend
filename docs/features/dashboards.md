# Dashboards & Visualizations

> **Real-Time Financial Intelligence**

ZeroDayClose provides rich dashboards for key stakeholders, offering real-time visibility into financial operations with drill-down capabilities.

---

## Overview

Every number in a dashboard can be clicked to see its source transactions (drill-through). AI-generated entries have indicators showing they're AI-produced with links to supporting rationale.

---

## Dashboard Types

### Close Status Dashboard

Real-time progress tracking for the month-end close:

<details>
<summary><strong>Dashboard Components</strong></summary>

| Component | Description |
|-----------|-------------|
| **Reconciliation Status** | Which accounts are reconciled (by AI or human) |
| **Outstanding Tasks** | Tasks remaining, assigned to whom |
| **Days to Close Countdown** | Visual countdown with progress bar |
| **Completion Percentage** | Overall close progress |
| **Bottleneck Alerts** | Blocked tasks requiring attention |
| **Historical Comparison** | Current close vs. previous periods |

</details>

---

### CFO Dashboard

Executive-level metrics aggregated in real-time:

<details>
<summary><strong>Dashboard Components</strong></summary>

| Component | Description |
|-----------|-------------|
| **Revenue vs. Cash** | Real-time revenue recognition vs. cash received |
| **Expense Overview** | Spend by category with variance to budget |
| **Key Metrics** | ARR, MRR, burn rate, runway |
| **Anomaly Highlights** | AI-detected unusual items requiring attention |
| **Entity Performance** | Breakdown by subsidiary/segment |
| **Trend Lines** | Month-over-month and year-over-year comparisons |

</details>

---

### Revenue Dashboard (CFO/Auditor)

Specialized view for revenue operations:

<details>
<summary><strong>Dashboard Components</strong></summary>

| Component | Description |
|-----------|-------------|
| **Recognized vs. Deferred** | Revenue recognition status visualization |
| **Contract Breakdown** | Drill-down by contract, customer, product |
| **ASC 606 Compliance** | Status of revenue recognition by contract type |
| **Waterfall View** | Revenue recognition timeline |
| **Booking vs. Billing vs. Revenue** | Three-way comparison |
| **Audit Evidence Links** | Quick access to supporting memos |

</details>

---

### Liquidity Dashboard

For treasurers and cash management:

<details>
<summary><strong>Dashboard Components</strong></summary>

| Component | Description |
|-----------|-------------|
| **Daily Cash by Account** | Balance breakdown across all accounts |
| **Upcoming Payments** | Scheduled outflows with dates |
| **Expected Collections** | Projected AR receipts |
| **13-Week Forecast Chart** | Visual forecast with confidence bands |
| **Burn Rate Trend** | Historical and projected burn |
| **Runway Indicator** | Months of runway remaining |

</details>

---

### Consolidation Dashboard

Multi-entity financial overview:

<details>
<summary><strong>Dashboard Components</strong></summary>

| Component | Description |
|-----------|-------------|
| **Entity Tree** | Hierarchical view of entities |
| **Elimination Status** | Intercompany elimination progress |
| **Currency Impact** | FX translation effects by entity |
| **Consolidated Statements** | Roll-up P&L, Balance Sheet, Cash Flow |
| **Segment Analysis** | Performance by product line, region |
| **Drill-Through** | Click any number to see by-entity breakdown |

</details>

---

## Visualization Features

### Charts & Graphs

| Chart Type | Use Case |
|------------|----------|
| **Line Charts** | Trends over time (burn rate, revenue) |
| **Bar Charts** | Comparisons (actual vs. budget, MoM) |
| **Waterfall Charts** | Reconciliation flows, variance breakdown |
| **Pie/Donut Charts** | Category distributions |
| **Sparklines** | Inline trend indicators |
| **Heat Maps** | Anomaly detection, variance magnitude |

---

### Drill-Through Capability

Every aggregated number supports drill-through:

```
Consolidated Revenue: $5.2M
        │
        ▼ Click to expand
┌─────────────────────────────┐
│ By Entity:                  │
│   Entity A: $2.1M          │
│   Entity B: $1.8M          │
│   Entity C: $1.3M          │
└─────────────────────────────┘
        │
        ▼ Click Entity A
┌─────────────────────────────┐
│ By Contract:                │
│   Contract 101: $1.2M      │
│   Contract 102: $0.9M      │
└─────────────────────────────┘
        │
        ▼ Click Contract 101
┌─────────────────────────────┐
│ Source Transactions:        │
│   Invoice #1234: $400K     │
│   Invoice #1235: $800K     │
└─────────────────────────────┘
```

---

### AI-Generated Commentary

Dashboards include narrative summaries:

| Feature | Description |
|---------|-------------|
| **Variance Narratives** | "Revenue up 10% MoM primarily due to Contract X renewal" |
| **Anomaly Callouts** | "Unusual spike in travel expenses detected in Entity B" |
| **Trend Insights** | "Burn rate has increased 15% over past 3 months" |
| **Action Recommendations** | "Review 3 contracts with revenue recognition pending" |

---

## Customization

<details>
<summary><strong>Dashboard Customization Options</strong></summary>

| Option | Description |
|--------|-------------|
| **Widget Arrangement** | Drag-and-drop layout customization |
| **Date Range Selection** | Flexible date range filters |
| **Saved Views** | Save custom configurations |
| **Scheduled Snapshots** | Auto-generate dashboard snapshots |
| **Export Options** | PDF, Excel, PowerPoint export |
| **Sharing** | Share views with team members |

</details>

---

## Related Features

- [Board Reporting](../modules/reporting.md) — Board-ready reports
- [Alerts & Notifications](alerts-notifications.md) — Threshold-based alerts
- [Instant Answers](semantic-search.md) — Natural language queries
