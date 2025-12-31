# Search & Query Interface

> **Natural Language Financial Intelligence**

The search interface provides a Google-like experience for querying financial data with **99%+ precise results**.

---

## Overview

Ask questions in natural language and get answers instantly:
- No SQL or report builder knowledge required
- Full drill-down to underlying data
- AI-generated explanations with citations

---

## Search Bar

A prominent search bar is always available:

```
┌─────────────────────────────────────────────────────────────────┐
│ 🔍  Ask anything about your financial data...                   │
│                                                                 │
│  Try: "What's our burn rate?" or "Revenue by product Q4"        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Query Examples

### Financial Metrics

| Query | Response |
|-------|----------|
| "What's our burn rate?" | Monthly burn with trend |
| "Show revenue by region for Q3" | Segmented revenue table |
| "What's our runway?" | Months remaining at current burn |
| "Compare expenses YoY" | Year-over-year comparison |

---

### Operational Questions

| Query | Response |
|-------|----------|
| "Which customers are overdue?" | AR aging by customer |
| "What's outstanding for Acme Corp?" | Customer account summary |
| "Show pending approvals" | List of items awaiting approval |
| "What contracts renew this quarter?" | Renewal schedule |

---

### Investigative Questions

| Query | Response |
|-------|----------|
| "Why did revenue increase 10% MoM?" | AI-generated variance explanation |
| "What's driving the expense spike in March?" | Anomaly analysis |
| "Show transactions over $50K this month" | Filtered transaction list |

---

## Response Format

### Answer Cards

<details>
<summary><strong>Response Layout</strong></summary>

```
┌─────────────────────────────────────────────────────────────────┐
│ Q: What's our burn rate?                                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Your average monthly burn rate is $127,500                      │
│                                                                 │
│ Breakdown:                                                      │
│   • Operating expenses: $95,000/month                           │
│   • Payroll: $28,000/month                                      │
│   • Other: $4,500/month                                         │
│                                                                 │
│ Trend: ↑ 5% vs. previous quarter                               │
│                                                                 │
│ [View by Month] [View Transactions] [Export]                    │
│                                                                 │
│ ────────────────────────────────────────────────────────        │
│ Sources: GL transactions Jan-Mar 2024                           │
│ Query: SUM(expenses) WHERE period IN (...)                      │
└─────────────────────────────────────────────────────────────────┘
```

</details>

---

### Citation Links

Every answer includes verifiable sources:

| Citation Type | Description |
|---------------|-------------|
| **Query** | The SQL or data query used |
| **Sources** | Systems and date ranges queried |
| **Transactions** | Link to view underlying data |
| **Calculation** | Step-by-step formula if applicable |

---

## Follow-Up Questions

Continue the conversation:

```
User: What's our burn rate?
System: Your average monthly burn rate is $127,500...

User: Why did it increase from last quarter?
System: Burn rate increased 5% primarily due to:
        • New SaaS subscriptions (+$3,200/month)
        • Contractor payments for Project X (+$2,800/month)
        [View Details]

User: Show me the new subscriptions
System: [Table of new recurring expenses added in Q1]
```

---

## Visualizations

Some answers include automatic visualizations:

| Query Type | Visualization |
|------------|---------------|
| Trends over time | Line chart |
| Category breakdowns | Pie or bar chart |
| Comparisons | Bar chart |
| Geographic data | Map or table |

---

## Proactive Insights

The system can proactively surface anomalies:

<details>
<summary><strong>Anomaly Callouts</strong></summary>

```
┌─────────────────────────────────────────────────────────────────┐
│ 💡 Insights Detected                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ⚠️ Travel expenses 40% higher than same period last year        │
│    [Investigate]                                                │
│                                                                 │
│ 📈 Revenue recognition ahead of forecast by $45K                │
│    [View Details]                                               │
│                                                                 │
│ ⏰ 3 contracts approaching renewal                              │
│    [View Contracts]                                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

</details>

---

## Cross-Silo Queries

The search spans all connected systems:

| Query | Systems Accessed |
|-------|------------------|
| "Bookings vs. Revenue this quarter" | CRM (Salesforce) + ERP (NetSuite) |
| "Cash collected for Contract #123" | Bank + AR + CRM |
| "Vendor spend by category" | AP + Expense system + Bank |

---

## Chatbot Mode

For complex exploration, switch to conversational mode:

<details>
<summary><strong>Chat Interface</strong></summary>

```
┌─────────────────────────────────────────────────────────────────┐
│ Finance Assistant                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🤖 How can I help you today?                                    │
│                                                                 │
│ You: I'm preparing for the board meeting. What should I know?   │
│                                                                 │
│ 🤖 Here are key items for your attention:                       │
│                                                                 │
│    📊 Revenue: $5.2M (+8% QoQ) - driven by enterprise deals     │
│    💰 Cash: $2.1M (14 months runway)                            │
│    ⚠️ AR aging increased 5 days - 3 major customers overdue     │
│    📈 Pipeline: $3.5M expected to close this quarter            │
│                                                                 │
│    Want me to dive deeper into any of these?                    │
│                                                                 │
│ You: Tell me more about the AR aging issue                      │
│                                                                 │
│ 🤖 Three customers are driving the AR aging increase...         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

</details>

---

## Slack Integration

Query from Slack directly:

```
@ZeroDayClose what's our current cash position?

ZeroDayClose Bot:
💰 Current cash position: $2,145,000

Breakdown by account:
• Operating: $1,850,000
• Payroll: $245,000
• Reserve: $50,000

[Open in App] [View Forecast]
```

---

## Related Features

- [Semantic Search](../features/semantic-search.md) — Technical details
- [Dashboards](../features/dashboards.md) — Visual analytics
- [Alerts](../features/alerts-notifications.md) — Proactive notifications
