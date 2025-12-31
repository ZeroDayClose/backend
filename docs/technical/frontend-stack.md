# Frontend Tech Stack

The frontend is built with React and TypeScript, optimized for professional finance users.

---

## Core Technologies

| Component | Technology |
|-----------|------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 |
| **UI Library** | shadcn/ui + Tailwind CSS |
| **State Management** | TanStack Query + Zustand |
| **Charts** | Recharts + D3.js |
| **Forms** | React Hook Form + Zod |
| **Routing** | React Router v6 |

---

## Design Principles

### 1. Accountant-First, Not Consumer-First

The UI is designed for finance professionals, not casual consumers:

| Principle | Implementation |
|-----------|----------------|
| **High-Density Interfaces** | Tables over cards; more data per screen |
| **Keyboard Shortcuts** | Power user navigation without mouse |
| **Professional Aesthetic** | Clean, corporate styling; not playful |
| **Speed Over Visual Flair** | Performance prioritized over animations |

---

### 2. Financial Slate Theme

<details>
<summary><strong>Design System Details</strong></summary>

| Aspect | Approach |
|--------|----------|
| **Color Palette** | Blues and grays (trust, professionalism) |
| **Typography** | Clear, readable fonts (Inter/Roboto) |
| **Spacing** | Dense but not cramped |
| **Data Prominence** | Numbers are heroes — large, bold, centered |

**Color Tokens:**
- Primary: `#1e3a5f` (Deep Navy)
- Secondary: `#64748b` (Slate Gray)
- Success: `#22c55e` (Green)
- Warning: `#f59e0b` (Amber)
- Error: `#ef4444` (Red)

</details>

---

## Component Architecture

### UI Components (shadcn/ui)

Pre-built, customizable components:
- Data tables with sorting/filtering
- Modal dialogs
- Form inputs with validation
- Navigation elements

### State Management

| Library | Use Case |
|---------|----------|
| **TanStack Query** | Server state (API data fetching, caching) |
| **Zustand** | Client state (UI state, preferences) |

---

## Data Visualization

| Library | Use Case |
|---------|----------|
| **Recharts** | Standard charts (line, bar, pie) |
| **D3.js** | Complex visualizations, custom charts |
| **React Flow** | Graph visualization (context graph) |

---

## Performance Optimizations

| Technique | Implementation |
|-----------|----------------|
| **Code Splitting** | Dynamic imports for routes |
| **Virtualization** | Virtual lists for large data tables |
| **Caching** | TanStack Query stale-while-revalidate |
| **Lazy Loading** | Images and heavy components |

---

## Development Workflow

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Lint and format
npm run lint
npm run format
```
