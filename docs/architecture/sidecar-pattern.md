# The Sidecar Pattern

ZeroDayClose follows a "Sidecar" or "Overlay" architecture pattern that enables powerful automation without requiring customers to replace their existing systems.

---

## What is the Sidecar Pattern?

The Sidecar pattern means ZeroDayClose:

1. **Connects** to existing ERPs, banks, and other systems
2. **Ingests** data into a high-performance parallel data store (The Unified Finance Context)
3. **Performs** compute-heavy AI operations on the ingested data
4. **Writes back** results (Journal Entries, reconciliations) to the ERP

---

## Why This Approach?

### Avoids "Rip and Replace" Friction

Traditional finance software requires massive migration projects:
- Data migration from legacy systems
- Staff retraining on new interfaces
- Integration rebuilds for all connected systems

The Sidecar pattern eliminates this friction by working alongside existing infrastructure.

### Benefits

| Benefit | Description |
|---------|-------------|
| **Zero Migration** | Keep using NetSuite, SAP, Intacct — we connect to them |
| **Faster Deployment** | Days to weeks instead of months to years |
| **Lower Risk** | ERP remains the system of record |
| **Gradual Adoption** | Start with one module, expand over time |

---

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                      ZeroDayClose                                │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              Unified Finance Context                     │    │
│  │           (High-Performance Data Store)                  │    │
│  └─────────────────────────────────────────────────────────┘    │
│       ▲                    │                    │                │
│       │ READ               │ PROCESS           │ WRITE          │
│       │                    ▼                    ▼                │
│  ┌─────────┐        ┌─────────────┐      ┌───────────┐          │
│  │ Ingest  │        │  AI Agents  │      │ Write-back│          │
│  └─────────┘        └─────────────┘      └───────────┘          │
└───────┼─────────────────────────────────────────┼────────────────┘
        │                                         │
        ▼                                         ▼
┌───────────────────────────────────────────────────────────────┐
│                     Customer's ERP                             │
│              (NetSuite, SAP, Intacct, etc.)                   │
│                   System of Record                             │
└───────────────────────────────────────────────────────────────┘
```

---

## ERP Remains the System of Record

> **Important:** ZeroDayClose does not replace the ERP. The ERP remains the authoritative system of record for all financial data.

ZeroDayClose acts as an intelligent layer that:
- Accelerates data processing
- Provides AI-powered insights
- Automates routine tasks
- Writes validated results back to the ERP

This ensures compliance, auditability, and continuity with existing workflows.
