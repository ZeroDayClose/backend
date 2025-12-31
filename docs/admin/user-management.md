# User Management & Access Control

> **Enterprise-Grade Identity and Permissions**

ZeroDayClose provides comprehensive user management with role-based access control aligned with enterprise security requirements.

---

## Overview

- Enterprise-grade authentication (SSO via SAML/OAuth)
- Role-based access control (RBAC)
- Fine-grained permissions by module and data
- Complete audit trail of user actions

---

## Authentication

### Single Sign-On (SSO)

<details>
<summary><strong>Supported Identity Providers</strong></summary>

| Provider | Protocol |
|----------|----------|
| **Okta** | SAML 2.0, OAuth 2.0 |
| **Azure AD** | SAML 2.0, OAuth 2.0 |
| **Google Workspace** | OAuth 2.0 |
| **OneLogin** | SAML 2.0 |
| **Auth0** | OAuth 2.0, OIDC |
| **Custom SAML** | Any SAML 2.0 compliant IdP |

</details>

---

### Multi-Factor Authentication (2FA)

| Method | Description |
|--------|-------------|
| **Authenticator App** | TOTP via Google Authenticator, Authy, etc. |
| **SMS** | Code via text message |
| **Email** | Code via email |
| **Hardware Keys** | FIDO2/WebAuthn support |

Administrators can **require 2FA** for all users or specific roles.

---

## Roles & Permissions

### Pre-Built Roles

<details>
<summary><strong>Default Role Definitions</strong></summary>

| Role | Description | Typical Users |
|------|-------------|---------------|
| **Admin** | Full system access, user management, configuration | Finance Director, IT Admin |
| **CFO** | All financial data, approvals, reporting | CFO, VP Finance |
| **Controller** | Close management, journal entries, reconciliations | Controller, Assistant Controller |
| **Accountant** | Day-to-day operations, limited approvals | Staff Accountant, AP/AR Clerk |
| **Analyst** | Read-only access to reports and dashboards | FP&A Analyst |
| **Auditor** | Read-only access with audit trail visibility | External Auditor |

</details>

---

### Permission Matrix

<details>
<summary><strong>Permissions by Area</strong></summary>

| Area | Read | Write | Approve | Admin |
|------|------|-------|---------|-------|
| **Transactions** | View transactions | Edit/categorize | Approve entries | Delete |
| **Journal Entries** | View JEs | Create JEs | Post to ERP | Void entries |
| **Reconciliations** | View status | Mark reconciled | Approve recons | Reset recons |
| **Revenue** | View schedules | Modify contracts | Approve recognition | Delete contracts |
| **Reports** | View reports | Create reports | Export data | Delete reports |
| **Users** | View users | — | — | Manage users |
| **Settings** | View settings | — | — | Modify settings |

</details>

---

### Custom Roles

Create custom roles for specific needs:

| Feature | Description |
|---------|-------------|
| **Clone Role** | Start from an existing role |
| **Granular Permissions** | Enable/disable specific actions |
| **Module Access** | Limit access to specific modules |
| **Entity Access** | Restrict to specific entities/subsidiaries |
| **Data Filters** | Limit visible data by criteria |

---

## Segregation of Duties (SoD)

Built-in controls for compliance:

| Control | Description |
|---------|-------------|
| **Self-Approval Prevention** | Users cannot approve their own entries |
| **Maker-Checker** | Different people must create and approve |
| **Dual Approval** | High-value items require two approvers |
| **Conflict Detection** | Alert if role assignments create SoD conflicts |

---

## User Lifecycle

### Onboarding

| Step | Description |
|------|-------------|
| **Invite User** | Send invitation email |
| **Assign Role** | Select appropriate role |
| **SSO Link** | Auto-provision via SSO if enabled |
| **Training** | Optional guided onboarding tour |

### Offboarding

| Step | Description |
|------|-------------|
| **Deactivate** | Immediately revoke access |
| **Reassign Tasks** | Move pending items to another user |
| **Audit Trail** | Preserve complete activity history |
| **Data Retention** | Data remains, access removed |

---

## Session Management

| Setting | Description |
|---------|-------------|
| **Session Timeout** | Auto-logout after inactivity (configurable) |
| **Concurrent Sessions** | Limit simultaneous logins |
| **Session History** | View active and past sessions |
| **Force Logout** | Admin can terminate user sessions |

---

## Audit Logging

All user actions are logged:

| Logged Data | Description |
|-------------|-------------|
| **Action** | What was done |
| **User** | Who did it |
| **Timestamp** | When it happened |
| **IP Address** | Where the request came from |
| **Before/After** | Values changed |
| **Resource** | What was affected |

<details>
<summary><strong>Example Audit Log Entry</strong></summary>

```json
{
  "action": "journal_entry.approve",
  "user_id": "user_12345",
  "user_email": "controller@company.com",
  "timestamp": "2024-01-15T14:32:00Z",
  "ip_address": "192.168.1.100",
  "resource": {
    "type": "journal_entry",
    "id": "je_67890"
  },
  "details": {
    "amount": 125000.00,
    "accounts_affected": ["6100", "2100"]
  }
}
```

</details>

---

## Related Features

- [Configuration](configuration.md) — System settings
- [Security & Compliance](../compliance/security-compliance.md) — Security standards
