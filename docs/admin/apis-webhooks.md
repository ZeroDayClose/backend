# APIs & Webhooks

> **Programmatic Access and Extensibility**

ZeroDayClose exposes APIs and webhooks for integration with external systems, custom workflows, and data pipelines.

---

## Overview

| Feature | Description |
|---------|-------------|
| **REST API** | Full programmatic access to platform data and actions |
| **Webhooks** | Real-time notifications of events to external systems |
| **GraphQL** | Flexible querying for complex data needs |

---

## REST API

### Authentication

| Method | Description |
|--------|-------------|
| **API Key** | Long-lived key for server-to-server |
| **OAuth 2.0** | Token-based for user context |
| **JWT** | Short-lived tokens for web apps |

<details>
<summary><strong>Authentication Example</strong></summary>

```bash
# API Key Authentication
curl -X GET "https://api.zerodayclose.com/v1/transactions" \
  -H "Authorization: Bearer your_api_key_here"

# OAuth 2.0 Token
curl -X GET "https://api.zerodayclose.com/v1/transactions" \
  -H "Authorization: Bearer oauth_access_token"
```

</details>

---

### API Endpoints

<details>
<summary><strong>Available Endpoints</strong></summary>

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `/v1/transactions` | GET, POST | Transaction data |
| `/v1/journal-entries` | GET, POST | Journal entries |
| `/v1/accounts` | GET | Chart of accounts |
| `/v1/vendors` | GET, POST | Vendor master data |
| `/v1/customers` | GET, POST | Customer master data |
| `/v1/reconciliations` | GET | Reconciliation status |
| `/v1/reports` | GET, POST | Generate and retrieve reports |
| `/v1/forecasts` | GET | Cash flow forecasts |
| `/v1/search` | POST | Instant Answers query |
| `/v1/close-status` | GET | Month-end close progress |

</details>

---

### Request/Response Format

All requests and responses use JSON:

<details>
<summary><strong>Example Request</strong></summary>

```bash
# Get transactions
curl -X GET "https://api.zerodayclose.com/v1/transactions?date_from=2024-01-01&date_to=2024-01-31" \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json"
```

</details>

<details>
<summary><strong>Example Response</strong></summary>

```json
{
  "success": true,
  "data": {
    "transactions": [
      {
        "id": "txn_12345",
        "date": "2024-01-15",
        "vendor": "Acme Corp",
        "amount": 1500.00,
        "currency": "USD",
        "category": "Software",
        "status": "posted"
      }
    ],
    "pagination": {
      "page": 1,
      "per_page": 50,
      "total": 1250
    }
  },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

</details>

---

### Rate Limits

| Plan | Rate Limit |
|------|------------|
| **Standard** | 100 requests/minute |
| **Enterprise** | 1000 requests/minute |
| **Custom** | Negotiable |

Rate limit headers included in responses:
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

---

## Webhooks

### Event Types

<details>
<summary><strong>Available Events</strong></summary>

| Event | Description |
|-------|-------------|
| `close.completed` | Month-end close finished |
| `close.progress` | Close progress updated |
| `transaction.created` | New transaction ingested |
| `journal_entry.posted` | JE posted to ERP |
| `exception.created` | New exception flagged |
| `exception.resolved` | Exception resolved |
| `forecast.updated` | Cash forecast regenerated |
| `reconciliation.completed` | Account reconciled |
| `anomaly.detected` | Anomaly identified |
| `sync.completed` | Integration sync finished |
| `sync.failed` | Integration sync failed |

</details>

---

### Webhook Configuration

<details>
<summary><strong>Setup Steps</strong></summary>

1. **Create Endpoint** — Provide your receiving URL
2. **Select Events** — Choose which events to receive
3. **Set Secret** — Configure webhook signing secret
4. **Test** — Send test event to verify
5. **Activate** — Enable the webhook

</details>

---

### Webhook Payload

<details>
<summary><strong>Example Payload</strong></summary>

```json
{
  "event": "journal_entry.posted",
  "timestamp": "2024-01-15T14:30:00Z",
  "data": {
    "id": "je_67890",
    "date": "2024-01-15",
    "amount": 25000.00,
    "description": "Monthly accrual - Marketing",
    "accounts": [
      {"account": "6100", "debit": 25000.00},
      {"account": "2100", "credit": 25000.00}
    ],
    "status": "posted",
    "posted_by": "ai_agent",
    "confidence": 0.97
  },
  "signature": "sha256=..."
}
```

</details>

---

### Webhook Security

| Feature | Description |
|---------|-------------|
| **Signature Verification** | HMAC-SHA256 signed payloads |
| **Retry Logic** | Auto-retry failed deliveries |
| **Timeout** | 30 second timeout for delivery |
| **Logging** | Full delivery history |

---

## GraphQL API

For complex queries requiring flexible data selection:

<details>
<summary><strong>Example Query</strong></summary>

```graphql
query GetRevenueContracts {
  contracts(status: ACTIVE, limit: 10) {
    id
    customer {
      name
      industry
    }
    totalValue
    recognizedRevenue
    deferredRevenue
    schedules {
      month
      amount
    }
  }
}
```

</details>

---

## Common Use Cases

| Use Case | Implementation |
|----------|----------------|
| **Data Warehouse Sync** | API to pull data into Snowflake/BigQuery |
| **Custom Dashboards** | API for custom BI visualization |
| **Slack Notifications** | Webhook to Slack for alerts |
| **Workflow Automation** | Trigger external workflows on events |
| **ERP Custom Integration** | API for unsupported ERPs |
| **Audit Export** | API to export data for auditors |

---

## SDK & Libraries

| Language | Status |
|----------|--------|
| **Python** | Available |
| **Node.js** | Available |
| **Ruby** | Coming Soon |
| **Go** | Coming Soon |

<details>
<summary><strong>Python SDK Example</strong></summary>

```python
from zerodayclose import Client

client = Client(api_key="your_api_key")

# Get transactions
transactions = client.transactions.list(
    date_from="2024-01-01",
    date_to="2024-01-31"
)

# Trigger close
client.close.trigger(period="2024-01")

# Query with Instant Answers
answer = client.search.query("What is our burn rate?")
print(answer.text)
```

</details>

---

## API Documentation

Full OpenAPI (Swagger) documentation available at:
- **Interactive Docs:** `https://api.zerodayclose.com/docs`
- **OpenAPI Spec:** `https://api.zerodayclose.com/openapi.json`

---

## Related Features

- [Integrations Management](integrations-management.md) — Monitor API connections
- [Supported Systems](../integrations/supported-systems.md) — Pre-built integrations
