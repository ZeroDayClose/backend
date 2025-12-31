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
