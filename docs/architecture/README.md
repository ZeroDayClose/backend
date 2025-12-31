---
sidebar_label: Overview
---

# Architecture Overview

ZeroDayClose follows a four-layer architecture designed for scalability, security, and ERP-agnostic operation.

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    Frontend Layer                                │
│                  ("Command Center")                              │
│              React + TypeScript + Tailwind                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              Orchestration & AI Layer                            │
│               ("Audit-Ready Agent")                              │
│            FastAPI + LangGraph + LLM APIs                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Data Layer                                    │
│            ("Unified Finance Context")                           │
│      PostgreSQL + Snowflake + Vector DB + Neo4j                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                 Integration Layer                                │
│                   ("Connectors")                                 │
│              Airbyte + Temporal + Redis                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  ERPs    │   Banks    │   CRMs    │   Billing   │   Storage    │
│ NetSuite │   Plaid    │ Salesforce│   Stripe    │ Google Drive │
│  Intacct │   Teller   │  HubSpot  │   Zuora     │   Gmail      │
│   SAP    │  SWIFT/BAI │           │  Chargebee  │   Slack      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Key Design Patterns

| Pattern | Purpose | Learn More |
|---------|---------|------------|
| **Sidecar Pattern** | Overlay on ERP without replacement | [Sidecar Pattern](sidecar-pattern.md) |
| **Shadow Ledger** | Parallel accounting for high-performance ops | [Shadow Ledger](shadow-ledger.md) |
| **Doer/Critic** | Multi-agent validation workflow | [Audit-Ready Workflow](../features/audit-ready-workflow.md) |

---

## Explore Architecture

- [System Layers](system-layers.md) — Detailed breakdown of each layer
- [Sidecar Pattern](sidecar-pattern.md) — How we integrate without replacing
- [Shadow Ledger](shadow-ledger.md) — High-performance parallel ledger design
