 ---
 sidebar_label: Instant Answers (Detailed)
 ---
 
 # Instant Answers & Search: Comprehensive Feature Documentation
 
 > **AI-Powered Natural Language Q&A for Finance — Complete Technical and Functional Reference**
 
 This document provides comprehensive coverage of the Instant Answers feature, including feature overview, functional behavior, user flows, technical details, implementation approach, and edge cases.
 
 ---
 
 ## 1. Feature Overview and Purpose
 
 ### 1.1 Core Objective
 
 The Instant Answers feature provides a natural language query interface for finance and operational data, delivering accurate answers in seconds with full source traceability. It enables executives and finance teams to ask questions in plain English and receive immediate, validated responses drawn from the unified data context.
 
 ### 1.2 Key Value Propositions
 
 | Value | Description |
 |-------|-------------|
 | **&lt;3 Second Responses** | Cross-silo answers delivered in seconds, not hours |
 | **99%+ Validated Accuracy** | Answers derived strictly from source data, no hallucination |
 | **Transparent Computation** | Every answer shows its calculation trail |
 | **Iterative Drill-Down** | Ask "why?" to understand root causes |
 | **Cross-System Intelligence** | Joins data from ERP, CRM, banks, and more |
 
 ### 1.3 Target Users
 
 | Role | Primary Use Case |
 |------|------------------|
 | **CFO** | Quick answers during meetings, board prep |
 | **Controller** | Investigate anomalies, verify calculations |
 | **FP&A Analyst** | Ad-hoc analysis, variance investigation |
 | **Auditor** | Verify reported figures, trace to source |
 | **Executive Team** | Strategic questions about financial performance |
 
 ---
 
 ## 2. Functional Behavior and Scope
 
 ### 2.1 Query Types Supported
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                    Instant Answers Engine                        │
 ├─────────────────┬─────────────────┬─────────────────┬───────────┤
 │     Data        │    Document     │   Calculation   │  Analysis │
 │   Retrieval     │    Search       │    Queries      │  Queries  │
 └─────────────────┴─────────────────┴─────────────────┴───────────┘
 ```
 
 #### Query Type Examples
 
 | Type | Example Questions |
 |------|------------------|
 | **Data Retrieval** | "What is our total revenue for Q3?" |
 | **Document Search** | "Find the contract with Acme Corp" |
 | **Calculation** | "What is our runway at current burn rate?" |
 | **Comparison** | "Compare marketing spend YoY by channel" |
 | **Root Cause** | "Why did travel expenses increase in September?" |
 | **Forecasting** | "What is projected cash balance next month?" |
 
 ### 2.2 Query Processing Pipeline
 
 ```
 ┌──────────────────┐
 │  User Question   │
 │ (Natural Lang.)  │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Intent Classif.  │
 │ (NLP Parser)     │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Entity Extraction│
 │ (Metrics, Dims)  │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Query Planning   │
 │ (SQL/GraphQL)    │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Data Retrieval   │
 │ (Execute Query)  │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Answer Synthesis │
 │ (Format + Trace) │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Response to User │
 │ (Text + Data)    │
 └──────────────────┘
 ```
 
 ### 2.3 Semantic Understanding
 
 #### Entity Recognition
 
 The system recognizes and maps natural language to data entities:
 
 | Natural Language | Mapped Entity | Example Mapping |
 |-----------------|---------------|-----------------|
 | "revenue", "sales", "top line" | Revenue metric | GL Account 4000 |
 | "Q3", "third quarter" | Time period | Jul 1 - Sep 30 |
 | "EMEA", "Europe" | Region dimension | Entity IDs: UK, DE, FR |
 | "marketing spend" | Expense category | GL Accounts 6100-6199 |
 | "gross margin" | Calculated metric | (Revenue - COGS) / Revenue |
 
 #### Synonym Mapping
 
 <details>
 <summary><strong>Finance Term Synonyms</strong></summary>
 
 | Canonical Term | Synonyms |
 |---------------|----------|
 | Revenue | Sales, Income, Top line, Bookings |
 | Expenses | Costs, Spend, Outflows |
 | EBITDA | Operating profit, Earnings |
 | Cash | Liquidity, Bank balance |
 | Burn rate | Cash burn, Monthly spend |
 | Runway | Months of cash, Cash runway |
 | ARR | Annual recurring revenue |
 | MRR | Monthly recurring revenue |
 
 </details>
 
 ### 2.4 Cross-Silo Data Access
 
 The engine joins data across systems seamlessly:
 
 **Example Query:** "Show revenue from Salesforce contracts that haven't been recognized in NetSuite"
 
 ```
 Query Execution Plan:
 1. Fetch closed-won opportunities from Salesforce CRM
 2. Fetch revenue schedules from Revenue Automation module
 3. Join on customer/contract identifiers
 4. Filter where contract.value > sum(recognized_revenue)
 5. Return gap analysis with drill-through links
 ```
 
 ### 2.5 Traceable Answers
 
 Every answer includes verification options:
 
 | Component | Description |
 |-----------|-------------|
 | **Answer Text** | Natural language response |
 | **Supporting Data** | Tables, charts showing underlying numbers |
 | **Calculation Trace** | Formula used, intermediate values |
 | **Source Links** | Click to see source transactions/documents |
 | **Query Transparency** | View the SQL/query used |
 
 #### Example Response
 
 ```
 USER: "What is the burn rate?"
 
 SYSTEM: "Your average monthly burn rate over the last 6 months is $127,500.
 
 This is calculated from:
 • Operating expenses: $95,000/month average
 • Payroll: $28,000/month average
 • Other costs: $4,500/month average
 
 [View detailed breakdown] [View source transactions] [View query]"
 
 ───────────────────────────────────────────────────────────
 CALCULATION TRACE (on click):
 
 Formula: Total Outflows (excl. transfers) / 6 months
 
 Month-by-Month:
 │ Month    │ Operating │ Payroll  │ Other   │ Total    │
 │ Jul 2024 │ $92,000   │ $28,000  │ $4,200  │ $124,200 │
 │ Aug 2024 │ $98,000   │ $28,000  │ $4,800  │ $130,800 │
 │ ...      │ ...       │ ...      │ ...     │ ...      │
 │ Average  │ $95,000   │ $28,000  │ $4,500  │ $127,500 │
 
 Data as of: January 15, 2025
 Source: Bank transactions (categorized)
 ```
 
 ### 2.6 Iterative Drill-Down ("Why?" Questions)
 
 The system maintains conversation context for follow-up questions:
 
 ```
 USER: "What are total expenses this month?"
 SYSTEM: "Total expenses for January 2025 are $485,000."
 
 USER: "Why is that higher than last month?"
 SYSTEM: "January expenses are $65,000 (15%) higher than December.
 
 Key drivers:
 • Marketing: +$40,000 (Q1 campaign launch)
 • Travel: +$18,000 (Sales kickoff event)
 • Cloud Infrastructure: +$7,000 (new service tier)
 
 [View by category] [View transactions]"
 
 USER: "Show me the travel expenses"
 SYSTEM: [Table of travel transactions for January]
 ```
 
 ---
 
 ## 3. User Flows and Interactions
 
 ### 3.1 CFO: Meeting Query Flow
 
 ```
 During Board Meeting:
 
 1. Open ZeroDayClose on laptop/mobile
 2. Click search bar (or keyboard shortcut)
 3. Type or speak: "What's our gross margin for Q4?"
 
 4. System responds (&lt;3 seconds):
    "Q4 2024 gross margin is 58.2%, down from 60.1% in Q3.
     [View by product] [View trend]"
 
 5. Board member asks about product breakdown
 6. Click [View by product] or ask:
    "Break that down by product line"
 
 7. System shows:
    │ Product   │ Gross Margin │ Change │
    │ Product A │ 62.0%        │ -1.5%  │
    │ Product B │ 51.0%        │ -2.8%  │
    │ Product C │ 55.5%        │ +0.5%  │
 
 8. Follow up: "Why did Product B margin decline?"
 9. System analyzes: "COGS increase due to supplier
    price increase in October (+8% on components)"
 ```
 
 ### 3.2 Controller: Anomaly Investigation Flow
 
 ```
 1. Receive alert: "Unusual spike in consulting expenses"
 
 2. Open Instant Answers
 3. Ask: "Show me consulting expenses for the last 3 months"
 
 4. System displays trend + transactions
 
 5. Notice spike in December
 6. Ask: "What caused the December spike?"
 
 7. System identifies:
    "Three large invoices from ABC Consulting:
    • Dec 5: $45,000 (Project Alpha)
    • Dec 12: $38,000 (Project Alpha)
    • Dec 20: $42,000 (Project Alpha)
    
    These represent 3x normal monthly spend."
 
 8. Click transaction to view invoice
 9. Verify legitimacy and close investigation
 ```
 
 ### 3.3 FP&A Analyst: Ad-Hoc Analysis Flow
 
 ```
 1. Preparing variance analysis for management
 
 2. Ask: "Compare this year's revenue to last year by quarter"
 
 3. System generates comparison table:
    │ Quarter │ 2024      │ 2023      │ Variance │ %      │
    │ Q1      │ $11.2M    │ $9.8M     │ +$1.4M   │ +14.3% │
    │ Q2      │ $12.5M    │ $10.5M    │ +$2.0M   │ +19.0% │
    │ Q3      │ $13.1M    │ $11.2M    │ +$1.9M   │ +17.0% │
    │ Q4      │ $13.8M    │ $12.0M    │ +$1.8M   │ +15.0% │
 
 4. Ask: "What drove Q2's outperformance?"
 
 5. System analyzes:
    "Q2 growth driven by:
    • Enterprise segment: +$1.2M (new logo wins)
    • Product A upsells: +$500K
    • EMEA expansion: +$300K"
 
 6. Export analysis to Excel for further work
 ```
 
 ---
 
 ## 4. Technical Details (High Level)
 
 ### 4.1 System Architecture
 
 ```
 ┌─────────────────────────────────────────────────────────────────┐
 │                   Instant Answers Service                        │
 │                      (FastAPI Application)                       │
 └───────────────────────────┬─────────────────────────────────────┘
                             │
          ┌─────────────────┬┴────────────────┬─────────────────┐
          ▼                 ▼                 ▼                 ▼
 ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌──────────────┐
 │   NLP Parser    │ │  Query Planner  │ │  Data Executor  │ │  Response    │
 │   (Intent +     │ │  (SQL/Graph     │ │  (Multi-Source  │ │  Synthesizer │
 │    Entities)    │ │   Generator)    │ │   Retrieval)    │ │              │
 └─────────────────┘ └─────────────────┘ └─────────────────┘ └──────────────┘
          │                 │                 │                     │
          └─────────────────┴────────┬────────┴─────────────────────┘
                                     ▼
              ┌──────────────────────────────────────────────┐
              │           Unified Data Context               │
              ├──────────────┬───────────────┬───────────────┤
              │ PostgreSQL   │ Vector DB     │ Graph DB      │
              │ (Structured) │ (Documents)   │ (Relationships│
              └──────────────┴───────────────┴───────────────┘
 ```
 
 ### 4.2 Key Components
 
 #### Semantic Layer
 
 A metadata layer that defines:
 
 | Component | Purpose |
 |-----------|---------|
 | **Metrics** | Defined calculations (e.g., Gross Margin = Revenue - COGS) |
 | **Dimensions** | Slicing attributes (Entity, Product, Region, Time) |
 | **Synonyms** | Alternative terms for entities |
 | **Relationships** | How entities relate (Customer → Invoices → Payments) |
 | **Access Rules** | Who can see what data |
 
 #### Query Execution
 
 | Step | Technology | Output |
 |------|------------|--------|
 | **Intent Classification** | Fine-tuned classifier or LLM | Query type + entities |
 | **Query Planning** | Rule engine + LLM | SQL/GraphQL query |
 | **Execution** | Database driver | Raw data |
 | **Synthesis** | Template + optional LLM | Natural language answer |
 
 ### 4.3 Key Data Entities
 
 | Entity | Purpose | Key Fields |
 |--------|---------|------------|
 | `QueryLog` | Record of all questions asked | query_id, user_id, question, answer, timestamp |
 | `MetricDefinition` | Defined metrics and formulas | metric_id, name, formula, synonyms |
 | `DimensionDefinition` | Dimensional attributes | dimension_id, name, values, hierarchy |
 | `SemanticMapping` | Term to entity mappings | term, entity_type, entity_id |
 | `AnswerCache` | Cached frequent answers | question_hash, answer, expiry |
 
 ### 4.4 Integration Points
 
 | System | Data Accessed |
 |--------|---------------|
 | **All Modules** | Revenue, Cash, Close, Reporting data |
 | **Vector DB** | Contract text, invoice details for RAG |
 | **Graph DB** | Relationship traversal for context |
 | **LLM API** | Query parsing, answer synthesis |
 
 ---
 
 ## 5. Implementation Approach
 
 ### 5.1 Core Classes and Interfaces
 
 #### NLP Parser
 
 ```
 Class: QueryParser
 ├── Method: parse(question) → ParsedQuery
 ├── Method: classify_intent(question) → Intent
 ├── Method: extract_entities(question) → List[Entity]
 ├── Method: resolve_time_period(text) → DateRange
 └── Method: map_synonyms(entities) → List[CanonicalEntity]
 
 Intent Types:
 ├── DATA_RETRIEVAL
 ├── DOCUMENT_SEARCH
 ├── CALCULATION
 ├── COMPARISON
 ├── ROOT_CAUSE
 └── FORECAST
 ```
 
 #### Query Planner
 
 ```
 Class: QueryPlanner
 ├── Method: plan(parsed_query) → ExecutionPlan
 ├── Method: generate_sql(plan) → SQLQuery
 ├── Method: generate_graphql(plan) → GraphQLQuery
 ├── Method: validate_access(user, plan) → Boolean
 └── Method: optimize(plan) → OptimizedPlan
 ```
 
 #### Data Executor
 
 ```
 Class: DataExecutor
 ├── Method: execute(plan) → RawData
 ├── Method: query_structured(sql) → DataFrame
 ├── Method: query_vector(embedding) → List[Document]
 ├── Method: query_graph(traversal) → GraphResult
 └── Method: merge_results(results) → UnifiedResult
 ```
 
 #### Response Synthesizer
 
 ```
 Class: ResponseSynthesizer
 ├── Method: synthesize(data, query) → Response
 ├── Method: format_answer(data) → String
 ├── Method: generate_trace(plan, data) → Trace
 ├── Method: create_visualizations(data) → List[Chart]
 └── Method: add_drill_options(data) → List[DrillOption]
 ```
 
 ### 5.2 Design Patterns Used
 
 | Pattern | Application |
 |---------|-------------|
 | **Chain of Responsibility** | Query processing pipeline |
 | **Strategy** | Different query execution strategies |
 | **Factory** | Creating appropriate query handlers |
 | **Mediator** | Coordinating multi-source queries |
 | **Memento** | Maintaining conversation context |
 
 ---
 
 ## 6. Dependencies, Constraints, and Edge Cases
 
 ### 6.1 Dependencies
 
 | Dependency | Type | Impact if Unavailable |
 |------------|------|----------------------|
 | **Unified Data Context** | Critical | Cannot answer questions |
 | **Semantic Layer Config** | Critical | Cannot map terms to data |
 | **LLM API** | High | Fallback to rule-based parsing |
 | **Vector DB** | Medium | Document search unavailable |
 | **Graph DB** | Medium | Relationship queries limited |
 
 ### 6.2 Constraints
 
 | Constraint | Description |
 |------------|-------------|
 | **Data Freshness** | Answers limited by last sync time |
 | **Access Control** | Users only see authorized data |
 | **Query Complexity** | Very complex queries may timeout |
 | **Calculation Scope** | Only defined metrics available |
 
 ### 6.3 Edge Cases and Handling
 
 | Edge Case | System Behavior |
 |-----------|-----------------|
 | **Ambiguous Question** | Ask clarifying question before answering |
 | **No Data Found** | State clearly; suggest alternative queries |
 | **Multiple Interpretations** | Show top interpretation; offer alternatives |
 | **Unauthorized Data** | Filter results; explain limitations |
 | **Stale Data** | Show timestamp; warn if significantly old |
 | **Complex Calculation** | Show intermediate steps in trace |
 | **Timeout Risk** | Simplify query; offer to run async |
 | **Unknown Terms** | Ask for clarification; suggest known terms |
 
 ### 6.4 Accuracy Safeguards
 
 | Safeguard | Implementation |
 |-----------|----------------|
 | **No Hallucination** | LLM only used for parsing/synthesis, not data generation |
 | **Source Attribution** | Every number linked to source |
 | **Confidence Threshold** | Low-confidence parses request clarification |
 | **Calculation Verification** | Double-check arithmetic operations |
 | **Audit Logging** | All queries and answers logged |
 
 ---
 
 ## 7. Performance Optimization
 
 ### 7.1 Response Time Targets
 
 | Query Type | Target | Strategy |
 |------------|--------|----------|
 | **Simple Retrieval** | &lt;1 second | Direct SQL, indexed tables |
 | **Standard Query** | &lt;3 seconds | Query optimization, caching |
 | **Complex Analysis** | &lt;10 seconds | Pre-aggregation, async option |
 | **Cross-System Join** | &lt;5 seconds | Materialized views |
 
 ### 7.2 Optimization Techniques
 
 | Technique | Description |
 |-----------|-------------|
 | **Query Caching** | Cache frequent question/answer pairs |
 | **Pre-Aggregation** | Maintain summary tables for common metrics |
 | **Index Optimization** | Appropriate indexes on filter columns |
 | **Connection Pooling** | Efficient database connections |
 | **Async Processing** | Long queries run in background |
 
 ---
 
## 8. Streaming Responses

For optimal user experience, Instant Answers streams responses in real-time as the LLM generates them.

### 8.1 Streaming Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                   STREAMING RESPONSE FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐   │
│  │  User   │────▶│ FastAPI │────▶│   LLM   │────▶│ Stream  │   │
│  │  Query  │     │Streaming│     │   API   │     │ Tokens  │   │
│  └─────────┘     │Response │     └─────────┘     └─────────┘   │
│                  └────┬────┘                          │         │
│                       │         SSE/WebSocket         │         │
│                       ▼                               ▼         │
│                  ┌─────────────────────────────────────┐        │
│                  │           Frontend Display          │        │
│                  │   "Your burn rate is $127,500..."   │        │
│                  │   [typing indicator]                │        │
│                  └─────────────────────────────────────┘        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Stream Event Types

| Event | Description | Example |
|-------|-------------|---------|
| `token` | Individual text token | "Your", "burn", "rate" |
| `thinking` | AI reasoning step | "Calculating 6-month average..." |
| `data` | Structured data payload | `{table: [...], chart: {...}}` |
| `source` | Source citation | `{source: "Bank transactions", link: "..."}` |
| `complete` | Response finished | `{total_tokens: 150, latency_ms: 2340}` |
| `error` | Error occurred | `{error: "Query timeout", code: 408}` |

### 8.3 Implementation

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Backend** | FastAPI StreamingResponse | Async generator for tokens |
| **Transport** | Server-Sent Events (SSE) | Unidirectional real-time stream |
| **Frontend** | EventSource API | Native browser SSE support |
| **Fallback** | Polling with complete response | Legacy browser support |

### 8.4 User Experience Benefits

- **Immediate Feedback** — Users see response within 200ms
- **Interruptible** — Cancel button stops generation mid-stream
- **Progress Visibility** — Show reasoning steps as they happen
- **Reduced Perceived Latency** — 3-second query feels instant

---

## 9. Voice-to-Query

Users can ask questions using voice input, enabling hands-free interaction during meetings or while multitasking.

### 9.1 Voice Input Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    VOICE-TO-QUERY FLOW                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐   │
│  │  Voice  │────▶│  Speech │────▶│  Text   │────▶│ Instant │   │
│  │  Input  │     │  to     │     │  Query  │     │ Answers │   │
│  │  (Mic)  │     │  Text   │     │         │     │ Engine  │   │
│  └─────────┘     └─────────┘     └─────────┘     └─────────┘   │
│                       │                               │         │
│            ┌──────────┴──────────┐                   │         │
│            ▼                     ▼                   ▼         │
│     ┌─────────────┐      ┌─────────────┐     ┌─────────────┐   │
│     │ Web Speech  │      │   Whisper   │     │  Streaming  │   │
│     │ API (Browser│      │   (Server)  │     │  Response   │   │
│     └─────────────┘      └─────────────┘     └─────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 9.2 Voice Input Methods

| Method | Technology | Use Case |
|--------|------------|----------|
| **Browser-Based** | Web Speech API | Quick queries, Chrome/Edge |
| **Server-Based** | OpenAI Whisper | Accuracy-critical, all browsers |
| **Mobile** | Native Speech APIs | iOS/Android apps |

### 9.3 Voice Commands

| Command Pattern | Example | Action |
|-----------------|---------|--------|
| **Direct Question** | "What is our burn rate?" | Execute query |
| **Follow-up** | "Break that down by month" | Continue conversation |
| **Navigation** | "Show me the cash dashboard" | Navigate to page |
| **Action** | "Approve this entry" | Trigger workflow |
| **Cancel** | "Stop" or "Cancel" | Interrupt current operation |

### 9.4 Voice Features

| Feature | Description |
|---------|-------------|
| **Wake Word (Optional)** | "Hey Zero, what's our runway?" |
| **Continuous Listening** | Toggle for meeting mode |
| **Transcription Display** | Show recognized text for confirmation |
| **Correction** | "No, I said gross margin" |
| **Language Support** | English (primary), Spanish, French, German |

### 9.5 Privacy and Security

| Control | Implementation |
|---------|----------------|
| **Opt-In Only** | Voice features disabled by default |
| **Local Processing** | Browser-based STT when possible |
| **No Storage** | Audio not retained after transcription |
| **Audit Log** | Voice queries logged as text only |

---

## 10. Related Documentation
 
 - [Semantic Search Overview](semantic-search.md)
 - [AI & Analysis](../technical/ai-analysis.md)
 - [Dashboards](dashboards.md)
 - [Data Ingestion](data-ingestion.md)
 - [Architecture Overview](../architecture/README.md)
