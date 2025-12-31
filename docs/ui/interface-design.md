# Application Interface

> **Web-Based Unified Workspace**

The ZeroDayClose interface is a responsive web application serving as the central workspace for finance teams.

---

## Layout Overview

```
┌─────────────────────────────────────────────────────────────────┐
│  Logo    Search Bar                              User │ Alerts │
├─────────┬───────────────────────────────────────────────────────┤
│         │                                                       │
│  Side   │                   Main Content Area                   │
│   bar   │                                                       │
│         │   ┌─────────────────────────────────────────────┐    │
│  Close  │   │                                             │    │
│         │   │              Dashboard / Table /            │    │
│  Revenue│   │                Work Area                    │    │
│         │   │                                             │    │
│  Cash   │   └─────────────────────────────────────────────┘    │
│         │                                                       │
│  Consol │   ┌─────────────────────────────────────────────┐    │
│         │   │           Detail Panel / Evidence           │    │
│  Search │   └─────────────────────────────────────────────┘    │
│         │                                                       │
├─────────┴───────────────────────────────────────────────────────┤
│  Status Bar                                          Help │ ?  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Navigation

### Sidebar Modules

| Module | Description |
|--------|-------------|
| **Close** | Month-end close management |
| **Revenue** | Revenue recognition workflows |
| **Cash** | Treasury and cash management |
| **Consolidation** | Multi-entity consolidation |
| **Search** | Instant Answers query interface |
| **Reports** | Reporting and exports |
| **Settings** | Configuration and admin |

---

### Top Bar

| Element | Function |
|---------|----------|
| **Search Bar** | Natural language query input |
| **Notifications** | Alert bell with count indicator |
| **User Menu** | Profile, settings, logout |
| **Help** | Documentation and support |

---

## Core UI Components

### Data Tables

<details>
<summary><strong>Table Features</strong></summary>

| Feature | Description |
|---------|-------------|
| **Sorting** | Click headers to sort |
| **Filtering** | Column filters and search |
| **Column Customization** | Show/hide, reorder columns |
| **Inline Editing** | Edit values directly in table |
| **Bulk Actions** | Select multiple rows for action |
| **Export** | Export visible data to Excel |
| **Drill-Through** | Click values to see detail |

</details>

---

### AI Indicators

All AI-generated content is clearly marked:

| Indicator | Meaning |
|-----------|---------|
| **🤖 Icon** | This item was AI-generated |
| **Confidence Badge** | Shows AI confidence (e.g., 97%) |
| **"View Rationale"** | Link to see AI reasoning |
| **Computation Trail** | Step-by-step calculation logic |

<details>
<summary><strong>Example AI Entry Display</strong></summary>

```
┌─────────────────────────────────────────────────────────────────┐
│ 🤖 Journal Entry #12345                     Confidence: 97%    │
├─────────────────────────────────────────────────────────────────┤
│ Date: 2024-01-15                                                │
│ Description: Monthly accrual - Marketing                        │
│                                                                 │
│ Debit:  6100 Marketing Expense    $25,000.00                   │
│ Credit: 2100 Accrued Liabilities  $25,000.00                   │
│                                                                 │
│ [View Rationale] [Edit] [Approve] [Reject]                      │
└─────────────────────────────────────────────────────────────────┘
```

</details>

---

### Drill-Through

Click any number to explore deeper:

<details>
<summary><strong>Drill-Through Levels</strong></summary>

| Level | Example |
|-------|---------|
| **Summary** | Total Revenue: $5.2M |
| **Segment** | By Entity: US $2.1M, UK $1.8M, DE $1.3M |
| **Account** | By Account: Product $3M, Services $2.2M |
| **Transaction** | Individual invoices and entries |
| **Source** | Original document (PDF, email) |

</details>

---

## Dashboard Components

### Metric Cards

Display key metrics with context:

| Element | Description |
|---------|-------------|
| **Value** | Large, prominent number |
| **Label** | Clear description |
| **Trend** | Arrow indicating direction |
| **Comparison** | vs. prior period, vs. budget |
| **Sparkline** | Mini trend chart |

---

### Charts

| Chart Type | Use |
|------------|-----|
| **Line** | Trends over time |
| **Bar** | Period comparisons |
| **Waterfall** | Variance breakdown |
| **Pie** | Category distribution |
| **Heat Map** | Anomaly visualization |

All charts support:
- Hover tooltips
- Click to drill-down
- Export to image
- Full-screen mode

---

## Responsive Design

The interface adapts to different screen sizes:

| Device | Optimization |
|--------|--------------|
| **Desktop** | Full sidebar, multi-panel layout |
| **Tablet** | Collapsible sidebar, touch-friendly |
| **Mobile** | Focused view, essential actions |

---

## Customization

<details>
<summary><strong>Personalization Options</strong></summary>

| Option | Description |
|--------|-------------|
| **Dashboard Layout** | Arrange widgets by preference |
| **Default Views** | Set preferred module home page |
| **Column Settings** | Saved table configurations |
| **Theme** | Light/dark mode toggle |
| **Density** | Comfortable/compact display |

</details>

---

## Accessibility

| Feature | Description |
|---------|-------------|
| **Keyboard Navigation** | Full keyboard accessibility |
| **Screen Reader** | ARIA labels and landmarks |
| **Color Contrast** | WCAG 2.1 AA compliant |
| **Font Scaling** | Respects browser font settings |

---

## Related Features

- [Guided Workflows](guided-workflows.md) — Process checklists
- [Dashboards](../features/dashboards.md) — Dashboard details
- [Frontend Stack](../technical/frontend-stack.md) — Technical implementation
