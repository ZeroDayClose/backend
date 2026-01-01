# ERP Connectivity

Each ERP has unique integration requirements. This page details our connection strategy for each system.

---

## NetSuite

<details>
<summary><strong>Connection Details</strong></summary>

| Method | Use Case |
|--------|----------|
| **SOAP (SuiteTalk)** | Required for older instances; robust but slow |
| **REST API** | Preferred for newer instances |
| **SuiteQL** | Essential for high-performance data extraction (read operations) |

**Considerations:**
- Token-based authentication preferred
- Manage API concurrency limits
- Use SuiteQL for bulk reads to minimize API calls

</details>

---

## Sage Intacct

<details>
<summary><strong>Connection Details</strong></summary>

| Method | Details |
|--------|---------|
| **XML SDK** | Primary integration method |
| **Web Services** | SOAP-based API |

**Considerations:**
- Session limits must be managed strictly
- Concurrency controls required
- Batch operations for efficiency

</details>

---

## SAP

<details>
<summary><strong>Connection Details</strong></summary>

SAP often lacks modern APIs in older installations.

| Method | Use Case |
|--------|----------|
| **File-Based (SFTP)** | CSV upload/download via SFTP |
| **Intermediate Data Bus** | Connect via middleware |
| **SAP API** | Available in newer S/4HANA installations |

**Considerations:**
- Direct API integration can be cost-prohibitive
- File-based integration is most common
- Schedule regular sync windows

</details>

---

## Oracle

<details>
<summary><strong>Connection Details</strong></summary>

| Method | Use Case |
|--------|----------|
| **Oracle Integration Cloud** | Preferred for Oracle Fusion |
| **File-Based (SFTP)** | For legacy Oracle systems |
| **REST API** | Oracle Cloud applications |

**Considerations:**
- Similar to SAP — file-based often most practical
- API licensing considerations
- Use Oracle-provided integration tools when available

</details>

---

## QuickBooks Online / Xero

<details>
<summary><strong>Connection Details</strong></summary>

| Method | Details |
|--------|---------|
| **OAuth2 REST APIs** | Standard connection method |
| **Webhooks** | Real-time change notifications |

**Considerations:**
- Easier integration than enterprise ERPs
- Rate limits are reasonable
- Less common in target mid-market/enterprise segment

</details>

---

## Data Mapping (The "Canonical Model")

The platform maps all external data to a Canonical Internal Model.

### How Mapping Works

| Component | Description |
|-----------|-------------|
| **Mapping Engine** | Configurable layer mapping external fields to internal schema |
| **Field Example** | NetSuite's `custbody_inv_date` → Internal `invoice_date` |
| **Entity Mapping** | Different "Invoice" objects normalized to single schema |

### AI-Assisted Mapping

During onboarding, an AI agent:

1. **Analyzes** the customer's ERP schema
2. **Suggests** field mappings based on names and data patterns
3. **Validates** sample data against expected formats
4. **Reduces** implementation time from weeks to days

---

## Write-Back Support

| ERP | Write Support |
|-----|---------------|
| **NetSuite** | Full (Journal Entries, Transactions) |
| **Sage Intacct** | Full (Journal Entries, Transactions) |
| **SAP** | Limited (via file upload) |
| **Oracle** | Limited (via file upload) |
| **QBO/Xero** | Full (Journal Entries) |

Write operations are always validated by the [Audit-Ready Workflow](../features/audit-ready-workflow.md) before execution.

---

## LLM Function Calling for ERP Integration

ZeroDayClose's AI agents can directly interact with ERP systems through structured function calls, enabling dynamic data retrieval and write-back operations.

### Function Calling Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                 LLM FUNCTION CALLING LAYER                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  User: "What's the payment status for invoice INV-1234?"        │
│                              │                                   │
│                              ▼                                   │
│                    ┌─────────────────┐                          │
│                    │   LLM Reasoning │                          │
│                    │   + Tool Choice │                          │
│                    └────────┬────────┘                          │
│                             │                                    │
│                             ▼                                    │
│                    ┌─────────────────┐                          │
│                    │  get_invoice()  │  ◀── Function Call       │
│                    └────────┬────────┘                          │
│                             │                                    │
│              ┌──────────────┼──────────────┐                    │
│              ▼              ▼              ▼                    │
│      ┌────────────┐  ┌────────────┐  ┌────────────┐            │
│      │  NetSuite  │  │   Intacct  │  │    SAP     │            │
│      │  Connector │  │  Connector │  │  Connector │            │
│      └────────────┘  └────────────┘  └────────────┘            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Available ERP Functions

| Function | Description | Read/Write |
|----------|-------------|------------|
| `get_invoice(invoice_id)` | Retrieve invoice details | Read |
| `get_vendor(vendor_id)` | Retrieve vendor information | Read |
| `get_customer(customer_id)` | Retrieve customer information | Read |
| `get_trial_balance(period)` | Retrieve trial balance for period | Read |
| `get_gl_transactions(filters)` | Query GL transactions | Read |
| `get_open_invoices(customer_id)` | List unpaid invoices | Read |
| `get_open_bills(vendor_id)` | List unpaid bills | Read |
| `post_journal_entry(entry)` | Post journal entry to ERP | Write |
| `create_invoice(invoice)` | Create new invoice | Write |
| `apply_payment(payment)` | Apply payment to invoice | Write |

### Function Definition Example

```
Function: get_invoice
├── Description: Retrieve invoice details from ERP
├── Parameters:
│   ├── invoice_id: string (required)
│   ├── include_line_items: boolean (default: true)
│   └── include_payments: boolean (default: false)
├── Returns:
│   ├── invoice_number: string
│   ├── customer_name: string
│   ├── amount: decimal
│   ├── due_date: date
│   ├── status: enum (open, partial, paid)
│   ├── line_items: array (if requested)
│   └── payments: array (if requested)
└── Permissions: Requires 'ar.read' scope
```

### Security and Controls

| Control | Implementation |
|---------|----------------|
| **Permission Scoping** | Each function requires specific RBAC permissions |
| **Rate Limiting** | Per-user and per-ERP rate limits enforced |
| **Audit Logging** | All function calls logged with parameters and results |
| **Sandbox Mode** | Read-only queries for exploration |
| **Write Approval** | Write operations require human approval via exception workflow |
| **Credential Isolation** | ERP credentials never exposed to LLM |

### ERP-Specific Adapters

Each ERP connector translates function calls to native API calls:

| ERP | Adapter | Example Translation |
|-----|---------|---------------------|
| **NetSuite** | SuiteQL + REST | `get_invoice()` → SuiteQL SELECT |
| **Intacct** | XML SDK | `get_invoice()` → XML readByQuery |
| **SAP** | OData/RFC | `get_invoice()` → BAPI_CUSTOMER call |
| **Oracle** | REST API | `get_invoice()` → AR Invoice REST endpoint |
| **QBO** | REST API | `get_invoice()` → /v3/invoice/[id] |

### Benefits

- **Natural Language ERP Queries** — Users ask questions, AI handles API complexity
- **Cross-ERP Abstraction** — Same functions work across all connected ERPs
- **Audit Trail** — Every query and action logged for compliance
- **Controlled Write Access** — Human approval gates for all write operations

---

## Related Documentation

- [Supported Systems](supported-systems.md) — Full integration list
- [Integrations Management](../admin/integrations-management.md) — Admin configuration
- [AI & Analysis](../technical/ai-analysis.md) — Function calling details
- [Audit-Ready Workflow](../features/audit-ready-workflow.md) — Write operation controls
