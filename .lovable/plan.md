
# Eonix Studio — ML Engineer Portfolio

A premium 2-page portfolio site for Emmanuel, positioned as an AI analytics startup brand. Stripe-inspired SaaS aesthetic with mock dashboards instead of code.

## Design system
- **Background**: warm off-white `#FAFAF7`
- **Accent**: warm orange gradient (amber → orange) for CTAs, highlights, chart fills
- **Surfaces**: white rounded cards with soft layered shadows
- **Type**: bold display headings, clean neutral body
- **Motion**: subtle fade-in on scroll, hover-lift on cards, smooth transitions
- **Visuals**: SVG-based mock dashboards, gauges, bar/line charts, data-flow diagrams (no real chart lib needed — clean custom SVG keeps it crisp and on-brand)

## Routes
- `/` — Landing page
- `/case-study` — Case study page

Each route gets its own `head()` metadata (title, description, og tags).

## Shared layout
- **Header** (sticky, translucent on scroll): "Eonix Studio" wordmark left · Home / Case Study center · LinkedIn + Email icon buttons right
- **Footer**: brand block, Emmanuel — ML Engineer, mailto + LinkedIn, © 2026 Eonix Studio

## Page 1 — Landing (`/`)
1. **Hero** — "Eonix Studio" eyebrow, large headline, Emmanuel subtitle, description paragraph, two CTAs (View Case Study → `/case-study`, Contact → scroll), small LinkedIn/Email quick links. Right side: floating abstract dashboard mock with gradient glow.
2. **Focus areas** — two large hover-lift cards: Customer Churn Prediction & Fraud Detection, each with custom SVG data graphic.
3. **Featured project** — Telecom Churn Prediction presented as a product: problem → solution → outputs (3 mini stat cards: Churn Risk Model, Retention Prediction, Confidence Score). Mock dashboard panel containing churn-probability gauge, feature-importance bar chart, customer-activity line chart.
4. **About** — short narrative block with subtle accent.
5. **Contact** — CTA "Let's build intelligent systems from data", email + LinkedIn buttons, simple inline contact form (name, email, message — client-side, opens mailto).

## Page 2 — Case Study (`/case-study`)
1. **Hero** — "Case Study" eyebrow, "Telecom Churn Prediction System" title, breadcrumb back to home.
2. **Problem / Solution / Approach** — three structured sections with numbered markers and clean typographic hierarchy.
3. **Visual section** — churn risk dashboard (low/med/high segmented cards with counts), confusion-matrix-style 2×2 grid, feature importance bar chart, horizontal data-flow diagram (Data → Feature Engineering → Model → Prediction → Business Action).
4. **Impact** — highlighted callout block with key business outcome framing.
5. **Fraud Detection System** — second case section with Problem / Solution / Approach + visuals: fraud risk scoring dashboard, anomaly detection scatter plot, transaction risk distribution chart.
6. **Closing CTA** — link back to contact.

## Components to build
- `Header`, `Footer`, `Logo`
- `DashboardMock` (hero visual)
- `ChurnGauge`, `BarChart`, `LineChart`, `ScatterChart`, `DistributionChart`, `ConfusionMatrix`, `DataFlowDiagram` — all custom SVG
- `FocusCard`, `StatCard`, `SectionHeading`, `ContactForm`
- Reusable `FadeIn` wrapper using IntersectionObserver

## Technical notes
- Tailwind v4 tokens extended with warm neutrals + orange gradient utilities in `styles.css`
- All routes SSR-ready with proper meta tags
- Replaces existing placeholder `index.tsx`
- Lucide icons for LinkedIn, Mail, ArrowRight, etc.
