# Integrations Overview

ZeroDayClose connects to your existing finance stack without requiring system replacement.

---

## Integration Philosophy

We follow the [Sidecar Pattern](../architecture/sidecar-pattern.md):
- **Read** data from your systems
- **Process** with AI in the Unified Finance Context
- **Write back** validated results to your ERP

---

## Supported Systems

| Category | Systems |
|----------|---------|
| **ERPs** | NetSuite, Sage Intacct, SAP, Dynamics 365, Oracle, QBO, Xero |
| **Banks** | All major banks via Plaid/Teller, SWIFT/BAI2 support |
| **CRMs** | Salesforce, HubSpot |
| **Billing** | Stripe, Zuora, Chargebee |
| **Storage** | Google Drive, Gmail, Outlook, Slack |

---

## Quick Links

- [ERP Connectivity](erp-connectivity.md) — Connection strategies for each ERP
- [Supported Systems](supported-systems.md) — Complete list of integrations

---

## Integration Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      ZeroDayClose                                │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                 Integration Layer                        │    │
│  │            (Connectors + Orchestration)                  │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
        │           │           │           │           │
        ▼           ▼           ▼           ▼           ▼
   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
   │  ERPs  │  │ Banks  │  │  CRMs  │  │Billing │  │Storage │
   └────────┘  └────────┘  └────────┘  └────────┘  └────────┘
```

---

## Data Flow

1. **Ingest** — Pull data from source systems via APIs or file uploads
2. **Normalize** — Map to canonical internal schema
3. **Validate** — Check for duplicates, missing fields, format issues
4. **Store** — Add to Unified Finance Context
5. **Process** — AI analysis and automation
6. **Write Back** — Post journal entries, update records
