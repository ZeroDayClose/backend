# Configuration & Setup

> **Customize ZeroDayClose for Your Organization**

Configure the platform to match your company's structure, policies, and workflows.

---

## Overview

The Configuration interface allows administrators to:
- Connect integration endpoints
- Define entity structure
- Map chart of accounts
- Set automation policies and thresholds
- Configure scheduling

---

## Integration Setup

### Connecting Systems

<details>
<summary><strong>Connection Steps</strong></summary>

1. **Select Integration** — Choose from 100+ available connectors
2. **Authentication** — Enter API keys, OAuth credentials, or file path
3. **Test Connection** — Verify connectivity
4. **Map Fields** — Configure data mapping (often AI-assisted)
5. **Set Schedule** — Define sync frequency
6. **Activate** — Enable the integration

</details>

### Credential Management

| Feature | Description |
|---------|-------------|
| **Secure Storage** | Credentials encrypted at rest |
| **Access Control** | Only admins can view/edit credentials |
| **Rotation Reminders** | Alerts for credential expiration |
| **Connection Health** | Real-time status monitoring |

---

## Entity Structure

Define your organization's structure for multi-entity operations:

<details>
<summary><strong>Entity Configuration</strong></summary>

| Setting | Description |
|---------|-------------|
| **Entity Hierarchy** | Parent/child relationships between entities |
| **Base Currency** | Functional currency for each entity |
| **Intercompany Rules** | Define intercompany account mappings |
| **Elimination Rules** | Configure consolidation eliminations |
| **Segment Mapping** | Map entities to reporting segments |

**Example Structure:**
```
Parent Company (USD)
├── US Subsidiary (USD)
├── UK Subsidiary (GBP)
│   └── UK Division A
│   └── UK Division B
└── Germany Subsidiary (EUR)
```

</details>

---

## Chart of Accounts Mapping

Map your ERP's chart of accounts to ZeroDayClose's standard model:

<details>
<summary><strong>Mapping Features</strong></summary>

| Feature | Description |
|---------|-------------|
| **AI-Assisted Mapping** | System suggests mappings based on account names |
| **Account Classification** | Categorize as Asset, Liability, Equity, Revenue, Expense |
| **Sub-Account Support** | Handle hierarchical account structures |
| **Custom Attributes** | Add custom fields for reporting |
| **Consolidation Mapping** | Map subsidiary accounts to consolidated accounts |

</details>

---

## Automation Policies

### Approval Thresholds

<details>
<summary><strong>Threshold Configuration</strong></summary>

| Threshold | Description | Example |
|-----------|-------------|---------|
| **Materiality Threshold** | Amount above which human approval required | $50,000 |
| **Confidence Threshold** | Minimum AI confidence for auto-posting | 95% |
| **Variance Threshold** | Flag items with variance exceeding | 10% |
| **Journal Entry Limit** | Max auto-post amount | $100,000 |
| **Revenue Contract Limit** | Contracts requiring manual review | $500,000 TCV |

</details>

---

### Automation Rules

| Rule Type | Description |
|-----------|-------------|
| **Auto-Post Rules** | When to post automatically vs. queue for review |
| **Escalation Rules** | Auto-escalate items unresolved after X days |
| **Approval Chains** | Sequential or parallel approval workflows |
| **Policy Exceptions** | Override rules for specific scenarios |

---

## Scheduling

Configure when automation runs:

<details>
<summary><strong>Schedule Options</strong></summary>

| Task | Default Schedule | Configurable |
|------|-----------------|--------------|
| **Data Sync** | Continuous / Every 15 min | Yes |
| **Bank Feeds** | Daily at 6 AM | Yes |
| **Cash Forecast** | Daily at 7 AM | Yes |
| **Anomaly Detection** | Hourly | Yes |
| **Reconciliation** | Daily at 5 AM | Yes |
| **Report Generation** | On-demand / Scheduled | Yes |

**Custom Schedules:**
- Cron-style scheduling for advanced needs
- Timezone-aware scheduling
- Business day awareness
- Period-end specific schedules

</details>

---

## Notification Settings

Configure system-wide notification defaults:

| Setting | Options |
|---------|---------|
| **Default Channel** | Email, Slack, Teams, In-app |
| **Digest Frequency** | Immediate, Hourly, Daily |
| **Critical Alert Override** | Always immediate for critical |
| **Quiet Hours** | Suppress non-critical during off-hours |

---

## Data Settings

<details>
<summary><strong>Data Configuration</strong></summary>

| Setting | Description |
|---------|-------------|
| **Retention Period** | How long to keep historical data |
| **Archive Policy** | When to move data to cold storage |
| **Backup Frequency** | Automated backup schedule |
| **Export Formats** | Available formats for data export |
| **PII Handling** | Masking and anonymization rules |

</details>

---

## Environment Setup

For enterprise deployments:

| Setting | Description |
|---------|-------------|
| **Environments** | Production, Staging, Sandbox |
| **Data Isolation** | Separate data by environment |
| **Configuration Sync** | Copy settings between environments |
| **Testing Mode** | Dry-run without posting to ERP |

---

## Setup Wizard

For new customers, a guided setup wizard:

1. **Connect ERP** — Primary system of record
2. **Import Chart of Accounts** — Pull from ERP
3. **Define Entities** — Set up multi-entity structure
4. **Configure Policies** — Set thresholds and rules
5. **Connect Banks** — Link bank accounts
6. **Invite Team** — Add initial users
7. **Test Run** — Verify setup with sample data

---

## Related Features

- [User Management](user-management.md) — User and role configuration
- [Integrations Management](integrations-management.md) — Monitor connections
- [Supported Systems](../integrations/supported-systems.md) — Available integrations
