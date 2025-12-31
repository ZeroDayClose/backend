# Supported Systems

Complete list of systems ZeroDayClose integrates with.

---

## ERPs (Systems of Record)

| System | Integration Method | Read | Write |
|--------|-------------------|------|-------|
| **NetSuite** | REST API / SuiteTalk / SuiteQL | Yes | Yes |
| **Sage Intacct** | XML SDK | Yes | Yes |
| **SAP** | File-based / API | Yes | Limited |
| **Microsoft Dynamics 365** | REST API | Yes | Yes |
| **Oracle Fusion** | REST API / File-based | Yes | Limited |
| **QuickBooks Online** | OAuth2 REST API | Yes | Yes |
| **Xero** | OAuth2 REST API | Yes | Yes |

---

## Banking & Treasury

| System | Integration Method | Description |
|--------|-------------------|-------------|
| **Plaid** | API | Bank account aggregation |
| **Teller** | API | Bank account aggregation |
| **SWIFT** | File ingestion | Enterprise banking messages |
| **BAI2** | File ingestion | Bank statement format |
| **OFX/QFX** | File ingestion | Financial data exchange |

**Supported Banks (via aggregators):**
- Chase, Wells Fargo, Bank of America
- Citibank, US Bank, PNC
- Capital One, TD Bank
- International banks via SWIFT

---

## CRMs

| System | Integration Method | Data Extracted |
|--------|-------------------|----------------|
| **Salesforce** | REST API | Contracts, opportunities, accounts, contacts |
| **HubSpot** | REST API | Deals, companies, contacts |

---

## Billing & Payment Processors

| System | Integration Method | Data Extracted |
|--------|-------------------|----------------|
| **Stripe** | REST API | Payments, invoices, subscriptions, customers |
| **Zuora** | REST API | Subscriptions, revenue schedules, invoices |
| **Chargebee** | REST API | Subscriptions, invoices, customers |

---

## Document Storage

| System | Integration Method | Use Case |
|--------|-------------------|----------|
| **Google Drive** | OAuth2 API | Contract storage, receipt uploads |
| **Dropbox** | OAuth2 API | Document storage |
| **Box** | OAuth2 API | Enterprise document storage |
| **SharePoint** | Microsoft Graph API | Enterprise document storage |

---

## Communication Tools

| System | Integration Method | Use Case |
|--------|-------------------|----------|
| **Gmail** | OAuth2 API | Receipt mining, invoice extraction |
| **Outlook** | Microsoft Graph API | Receipt mining, invoice extraction |
| **Slack** | OAuth2 API | Document sharing, notifications |

---

## Coming Soon

| System | Expected |
|--------|----------|
| **Workday** | Planned |
| **SAP S/4HANA** | Planned |
| **Oracle NetSuite Analytics** | Planned |
| **Coupa** | Planned |
| **Bill.com** | Planned |

---

## Custom Integrations

For systems not listed above:

| Option | Description |
|--------|-------------|
| **File Upload** | CSV, Excel, or PDF upload |
| **API Integration** | Custom connector development |
| **Webhook** | Push data to ZeroDayClose endpoints |

Contact your implementation team for custom integration options.
