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

## Keyboard Shortcuts

Power users can navigate and operate the entire application using keyboard shortcuts for faster workflow execution.

### Global Shortcuts

| Shortcut | Action | Context |
|----------|--------|---------|
| `Cmd/Ctrl + K` | Open command palette / search | Anywhere |
| `Cmd/Ctrl + /` | Open keyboard shortcuts help | Anywhere |
| `Cmd/Ctrl + .` | Toggle voice input | Anywhere |
| `Esc` | Close modal / cancel operation | Modals, forms |
| `?` | Open contextual help | Most pages |

### Navigation Shortcuts

| Shortcut | Action |
|----------|--------|
| `G then D` | Go to Dashboard |
| `G then C` | Go to Close module |
| `G then R` | Go to Revenue module |
| `G then $` | Go to Cash module |
| `G then S` | Go to Search / Instant Answers |
| `G then E` | Go to Exceptions queue |
| `G then N` | Go to Notifications |

### Table Shortcuts

| Shortcut | Action |
|----------|--------|
| `J` / `K` | Move down / up in list |
| `Enter` | Open selected item |
| `Space` | Toggle selection |
| `Cmd/Ctrl + A` | Select all |
| `X` | Mark item for bulk action |
| `E` | Edit selected item |
| `D` | View details panel |

### Exception Workflow Shortcuts

| Shortcut | Action |
|----------|--------|
| `A` | Approve selected exception |
| `R` | Reject selected exception |
| `M` | Modify and approve |
| `C` | Add comment |
| `@` | Start @mention in comment |
| `N` | Next exception |
| `P` | Previous exception |

### Search & Query Shortcuts

| Shortcut | Action |
|----------|--------|
| `/` | Focus search bar |
| `Cmd/Ctrl + Enter` | Execute query |
| `Up/Down` | Navigate query history |
| `Tab` | Accept autocomplete suggestion |
| `Cmd/Ctrl + .` | Toggle voice input |

### Customization

Users can customize shortcuts in Settings:
- View all available shortcuts
- Reassign keys to preferred combinations
- Export/import shortcut configurations
- Reset to defaults

---

## Collaborative Features

Real-time collaboration enables teams to work together on exceptions, reviews, and analysis.

### Presence Indicators

```
┌─────────────────────────────────────────────────────────────────┐
│  Exception #1234 - Payment Match Review                         │
│                                                                  │
│  Currently viewing:  [Avatar] Sarah  [Avatar] John  [+2]        │
│                       ▲ typing...                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Collaboration Components

| Component | Description |
|-----------|-------------|
| **Avatar Stack** | Shows who is viewing the same item |
| **Typing Indicator** | Shows when others are composing comments |
| **Cursor Presence** | See where others are looking (optional) |
| **Live Annotations** | See highlights and comments in real-time |
| **Notification Dot** | Indicates new activity on item |

### Real-Time Sync Technology

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Presence** | WebSocket + Redis Pub/Sub | Track active users per item |
| **Collaboration** | Liveblocks / Y.js | Real-time annotation sync |
| **Comments** | WebSocket | Instant comment delivery |
| **Conflict Resolution** | CRDT (Yjs) | Handle simultaneous edits |

### Collaboration Settings

| Setting | Options |
|---------|---------|
| **Presence Visibility** | Show me as active / Away / Invisible |
| **Notification Sound** | On / Off / Mentions only |
| **Cursor Sharing** | Enable / Disable |
| **Auto-refresh** | Real-time / 30s / Manual |

---

## Related Features

- [Guided Workflows](guided-workflows.md) — Process checklists
- [Dashboards](../features/dashboards.md) — Dashboard details
- [Frontend Stack](../technical/frontend-stack.md) — Technical implementation
- [Exception Workflow](../features/exception-workflow.md) — Collaborative annotations in action
