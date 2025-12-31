# Data Ingestion & Normalization

> **Unified Multi-Source Integration**

ZeroDayClose connects to all your financial systems and normalizes data into a unified format for AI processing.

---

## Overview

The platform supports high-throughput connectors for:
- ERPs (systems of record)
- Banks (cash data)
- CRMs (contract and customer data)
- Billing systems (revenue data)
- Communication tools (receipts and context)

---

## Supported Integrations

### ERPs

| System | Status |
|--------|--------|
| **NetSuite** | Supported |
| **Sage Intacct** | Supported |
| **SAP** | Supported |
| **Microsoft Dynamics 365** | Supported |
| **Oracle Fusion** | Supported |
| **QuickBooks Online** | Supported |
| **Xero** | Supported |

### Banking

| System | Method |
|--------|--------|
| **Direct Bank Feeds** | Plaid / Teller aggregators |
| **Enterprise Banking** | SWIFT / BAI2 file ingestion |
| **Credit Cards** | Statement parsing |

### CRMs

| System | Data Extracted |
|--------|----------------|
| **Salesforce** | Contracts, opportunities, customer data |
| **HubSpot** | Deals, customer data |

### Billing & Payment

| System | Data Extracted |
|--------|----------------|
| **Stripe** | Payments, invoices, subscriptions |
| **Zuora** | Subscriptions, revenue schedules |
| **Chargebee** | Subscriptions, invoices |

---

## Data Normalization

### The Canonical Model

The platform cannot have separate logic for each ERP. All external data is mapped to a **Canonical Internal Model**.

<details>
<summary><strong>How Mapping Works</strong></summary>

| Concept | Description |
|---------|-------------|
| **Mapping Engine** | Configurable layer mapping external fields to internal schema |
| **AI-Assisted Mapping** | During onboarding, AI analyzes ERP schema and suggests mappings |
| **Example** | NetSuite's `custbody_inv_date` → Internal `invoice_date` |

**Benefits:**
- Reduces implementation time from weeks to days
- Single codebase handles all ERPs
- Consistent data model for AI processing

</details>

---

## Continuous Sync

Near real-time data synchronization ensures the "Unified Finance Context" is always current:

| Sync Type | Frequency | Use Case |
|-----------|-----------|----------|
| **Real-Time** | Seconds | Bank transactions, invoices |
| **Incremental** | Minutes | ERP updates, CRM changes |
| **Full Sync** | Daily | Complete reconciliation |

---

## Data Collection Sources

### Email/Slack Receipt Mining

<details>
<summary><strong>How It Works</strong></summary>

- **Gmail/Outlook Integration:** Search for receipts and invoices
- **Slack Integration:** Extract documents from finance channels
- **AI Extraction:** Parse amounts, vendors, dates from attachments
- **Deduplication:** Prevent duplicate entries

</details>

---

### Bank Statement Parsing

<details>
<summary><strong>Supported Formats</strong></summary>

| Format | Support Level |
|--------|---------------|
| **CSV** | Native parsing |
| **PDF** | AI-powered extraction |
| **BAI2** | Enterprise format support |
| **OFX/QFX** | Financial exchange formats |

The system handles statements from all major banks:
- Chase, Wells Fargo, Bank of America
- Citibank, US Bank, PNC
- International banks via SWIFT

</details>

---

## Data Validation

All ingested data is validated before entering the system:

| Validation | Action |
|------------|--------|
| **Required Fields** | Date, vendor, amount, description |
| **Duplicate Detection** | Hash of (vendor, amount, date within 24 hours) |
| **Format Validation** | Dates, amounts, account codes |
| **Master Data Match** | Vendor/customer existence check |

Exceptions are flagged for human review.
