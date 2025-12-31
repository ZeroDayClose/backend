---
sidebar_label: Overview
---

# Modules Overview

ZeroDayClose is organized into four core automation modules, each targeting a specific area of the finance close process.

---

## Module Summary

| Module | Focus Area | Key Benefit |
|--------|------------|-------------|
| [Revenue Automation](revenue-automation.md) | ASC 606 / IFRS 15 compliance | Automate complex revenue recognition |
| [Cash Automation](cash-automation.md) | Treasury & liquidity management | Real-time cash positioning |
| [Automated Close](automated-close.md) | Month-end close process | 90% reduction in close time |
| [Board Reporting](reporting.md) | Executive & investor reporting | Board-ready financials on demand |

---

## How Modules Work Together

```
┌─────────────────────────────────────────────────────────────────┐
│                        Data Ingestion                            │
│           (ERPs, Banks, CRMs, Billing Systems)                   │
└─────────────────────────────────────────────────────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│     Module A    │ │     Module B    │ │     Module C    │
│     Revenue     │ │      Cash       │ │      Close      │
│   Automation    │ │   Automation    │ │   Automation    │
└─────────────────┘ └─────────────────┘ └─────────────────┘
          │                   │                   │
          └───────────────────┼───────────────────┘
                              ▼
                    ┌─────────────────┐
                    │     Module D    │
                    │  Board-Ready    │
                    │   Reporting     │
                    └─────────────────┘
```

---

## Explore Modules

Each module can be deployed independently or as part of the complete platform:

- [Module A: Revenue Automation](revenue-automation.md) — Contract ingestion, ASC 606 compliance, revenue schedules
- [Module B: Cash Automation](cash-automation.md) — Cash positioning, AR/AP matching, forecasting
- [Module C: Automated Close](automated-close.md) — GL reconciliation, journal entries, anomaly detection
- [Module D: Board Reporting](reporting.md) — Multi-entity consolidation, strategic reporting, AI commentary
