# Supported Systems

> **100+ Pre-Built Integrations**

ZeroDayClose connects to over 100 systems including ERPs, banks, CRMs, billing platforms, and more via APIs, pulling data into a unified model and writing results back as needed.

---

## Integration Overview

| Category | Count | Examples |
|----------|-------|----------|
| **ERPs** | 15+ | NetSuite, SAP, Intacct, Dynamics, Oracle |
| **Banking** | 10,000+ | All major banks via Plaid/Teller |
| **CRMs** | 10+ | Salesforce, HubSpot, Pipedrive |
| **Billing** | 15+ | Stripe, Zuora, Chargebee, Recurly |
| **Payroll/HRIS** | 10+ | ADP, Workday, Gusto, Rippling |
| **Expense** | 10+ | Expensify, Brex, Ramp, Concur |
| **Storage** | 10+ | Google Drive, Box, Dropbox, SharePoint |
| **Communication** | 5+ | Gmail, Outlook, Slack, Teams |

---

## ERPs (Systems of Record)

<details>
<summary><strong>Full ERP Integration List</strong></summary>

| System | Integration Method | Read | Write |
|--------|-------------------|------|-------|
| **NetSuite** | REST API / SuiteTalk / SuiteQL | Yes | Yes |
| **Sage Intacct** | XML SDK | Yes | Yes |
| **SAP Business One** | Service Layer API | Yes | Yes |
| **SAP S/4HANA** | OData API / File-based | Yes | Limited |
| **SAP ECC** | RFC / File-based | Yes | Limited |
| **Microsoft Dynamics 365 F&O** | REST API | Yes | Yes |
| **Microsoft Dynamics GP** | File-based | Yes | Limited |
| **Microsoft Dynamics NAV** | OData / File-based | Yes | Limited |
| **Oracle Fusion Cloud** | REST API | Yes | Yes |
| **Oracle E-Business Suite** | File-based | Yes | Limited |
| **Oracle JD Edwards** | File-based | Yes | Limited |
| **QuickBooks Online** | OAuth2 REST API | Yes | Yes |
| **QuickBooks Desktop** | Web Connector | Yes | Yes |
| **Xero** | OAuth2 REST API | Yes | Yes |
| **FreshBooks** | REST API | Yes | Yes |
| **Sage 50** | File-based | Yes | Limited |
| **Acumatica** | REST API | Yes | Yes |

**Data Pulled from ERPs:**
- Chart of accounts
- Trial balances
- Journal entries
- Invoices (AR/AP)
- Vendor and customer master data
- Transaction history

**Data Written to ERPs:**
- Journal entries
- Adjustments
- Accruals
- Revenue recognition entries

</details>

---

## Banking & Treasury

<details>
<summary><strong>Bank Integrations</strong></summary>

### Aggregator Platforms

| Platform | Coverage | Description |
|----------|----------|-------------|
| **Plaid** | 10,000+ institutions | US and Canada |
| **Teller** | 5,000+ institutions | US focus, open banking |
| **Yodlee** | 15,000+ institutions | Global coverage |
| **MX** | 2,500+ institutions | Financial data platform |

### Enterprise Banking

| Format | Description |
|--------|-------------|
| **SWIFT MT940/MT942** | International bank statements |
| **BAI2** | US bank statement format |
| **CAMT.053** | ISO 20022 statement format |
| **OFX/QFX** | Open financial exchange |
| **CSV** | Any bank's CSV export |

### Supported Banks (Direct)

**Major US Banks:**
- Chase, Bank of America, Wells Fargo
- Citibank, US Bank, PNC
- Capital One, TD Bank, Truist
- Fifth Third, Regions, KeyBank

**Credit Cards & Corporate Cards:**
- American Express
- Brex, Ramp, Divvy
- Corporate Visa/Mastercard

**International:**
- HSBC, Barclays, Deutsche Bank
- Standard Chartered, UBS
- All SWIFT-connected banks

</details>

---

## CRMs & Sales Systems

<details>
<summary><strong>CRM Integrations</strong></summary>

| System | Integration Method | Data Extracted |
|--------|-------------------|----------------|
| **Salesforce** | REST API | Opportunities, contracts, accounts, contacts, custom objects |
| **HubSpot** | REST API | Deals, companies, contacts, quotes |
| **Pipedrive** | REST API | Deals, organizations, activities |
| **Zoho CRM** | REST API | Deals, accounts, contacts |
| **Microsoft Dynamics CRM** | REST API | Opportunities, accounts, contacts |
| **Close** | REST API | Leads, opportunities |
| **Copper** | REST API | Opportunities, contacts |

**Use Cases:**
- Pull contract data for revenue recognition
- Sync bookings vs. billings vs. revenue
- Customer data for AR matching

</details>

---

## Billing & Payment Processors

<details>
<summary><strong>Billing Integrations</strong></summary>

| System | Integration Method | Data Extracted |
|--------|-------------------|----------------|
| **Stripe** | REST API | Payments, invoices, subscriptions, customers, disputes |
| **Zuora** | REST API | Subscriptions, revenue schedules, invoices, usage |
| **Chargebee** | REST API | Subscriptions, invoices, customers, credit notes |
| **Recurly** | REST API | Subscriptions, invoices, transactions |
| **Paddle** | REST API | Transactions, subscriptions, payouts |
| **Bill.com** | REST API | Bills, payments, approvals |
| **Maxio (SaaSOptics)** | REST API | Revenue recognition, subscriptions |
| **PayPal** | REST API | Transactions, payouts |
| **Square** | REST API | Payments, invoices |
| **GoCardless** | REST API | Direct debit payments |

**Data Used For:**
- Revenue recognition (ASC 606)
- Cash flow forecasting
- Payment matching

</details>

---

## Payroll & HRIS

<details>
<summary><strong>Payroll Integrations</strong></summary>

| System | Integration Method | Data Extracted |
|--------|-------------------|----------------|
| **ADP** | API / File | Payroll runs, employee data |
| **Workday** | API | Payroll, employee expenses |
| **Gusto** | REST API | Payroll, contractors, benefits |
| **Rippling** | REST API | Payroll, expenses |
| **Paychex** | API / File | Payroll runs |
| **Paylocity** | API | Payroll data |
| **TriNet** | File-based | Payroll exports |
| **Justworks** | REST API | Payroll, benefits |

**Use Cases:**
- Payroll accruals
- Cash flow forecasting
- Expense categorization

</details>

---

## Expense Management

<details>
<summary><strong>Expense Integrations</strong></summary>

| System | Integration Method | Data Extracted |
|--------|-------------------|----------------|
| **Expensify** | REST API | Expense reports, receipts, policies |
| **Brex** | REST API | Transactions, receipts, budgets |
| **Ramp** | REST API | Transactions, receipts, categories |
| **Divvy (BILL)** | REST API | Transactions, budgets |
| **SAP Concur** | REST API | Expense reports, travel |
| **Navan (TripActions)** | REST API | Travel and expenses |
| **Airbase** | REST API | Spend management |
| **Spendesk** | REST API | Expenses, invoices |

**Use Cases:**
- Expense categorization
- Receipt matching
- Policy compliance
- Cash flow tracking

</details>

---

## Document Storage

<details>
<summary><strong>Storage Integrations</strong></summary>

| System | Integration Method | Use Case |
|--------|-------------------|----------|
| **Google Drive** | OAuth2 API | Contracts, receipts, documents |
| **Google Sheets** | API | Data import/export |
| **Dropbox** | OAuth2 API | Document storage |
| **Box** | OAuth2 API | Enterprise documents |
| **SharePoint** | Microsoft Graph API | Enterprise storage |
| **OneDrive** | Microsoft Graph API | Document storage |
| **AWS S3** | API | Data exports |

</details>

---

## Communication & Email

<details>
<summary><strong>Communication Integrations</strong></summary>

| System | Integration Method | Use Case |
|--------|-------------------|----------|
| **Gmail** | OAuth2 API | Receipt mining, invoice extraction |
| **Outlook** | Microsoft Graph API | Receipt mining, invoice extraction |
| **Slack** | OAuth2 API | Notifications, queries, alerts |
| **Microsoft Teams** | Microsoft Graph API | Notifications, approvals |
| **Intercom** | REST API | Customer communication context |

**Email Mining Features:**
- Search for missing receipts
- Extract invoices from attachments
- Parse amounts, vendors, dates

</details>

---

## Data & Analytics

<details>
<summary><strong>Analytics Integrations</strong></summary>

| System | Integration Method | Use Case |
|--------|-------------------|----------|
| **Snowflake** | SQL API | Data warehouse sync |
| **BigQuery** | API | Analytical queries |
| **Looker** | API | BI integration |
| **Tableau** | API | Visualization |
| **Power BI** | API | Microsoft BI |
| **Metabase** | API | Open source BI |

</details>

---

## External Data APIs

<details>
<summary><strong>Reference Data Integrations</strong></summary>

| Service | Use Case |
|---------|----------|
| **FX Rates (XE, Open Exchange)** | Currency conversion |
| **Address Validation** | Vendor/customer verification |
| **Business Data (D&B, Clearbit)** | Company enrichment |

</details>

---

## Coming Soon

| System | Category | Expected |
|--------|----------|----------|
| **Workday Financial Management** | ERP | Q2 2024 |
| **Oracle NetSuite Analytics** | Analytics | Q2 2024 |
| **Coupa** | Procurement | Q3 2024 |
| **Ariba** | Procurement | Q3 2024 |
| **DocuSign** | Documents | Q3 2024 |

---

## Custom Integrations

For systems not listed:

| Option | Description |
|--------|-------------|
| **File Upload** | CSV, Excel, PDF upload |
| **API Integration** | Custom connector development |
| **Webhook** | Push data to ZeroDayClose |
| **SFTP** | Automated file sync |

---

## Related Features

- [ERP Connectivity](erp-connectivity.md) — Connection strategies
- [Integrations Management](../admin/integrations-management.md) — Monitor connections
- [Data Ingestion](../features/data-ingestion.md) — How data flows in
