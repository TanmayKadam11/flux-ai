# Flux — AI SaaS Marketing Site

A flagship portfolio build by **Scalio Studio**: a full marketing site for a fictional AI
agent / workflow-automation platform, built to feel like a real Silicon Valley product —
in the visual language of Linear, Stripe, Vercel, Framer, Arc, and Raycast.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theme, no config file — see `app/globals.css`)
- **Framer Motion** for scroll reveals, page-load choreography, and micro-interactions
- **Lucide Icons**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx          Root layout, fonts, SEO metadata
  page.tsx             Assembles every section in order
  globals.css          Design tokens (@theme), keyframes, utilities
  sitemap.ts / robots.ts
components/
  navbar.tsx
  hero.tsx                    Signature "Agent Console" animation
  trusted-by.tsx
  features.tsx
  ai-workflow.tsx             5-step process visualization
  dashboard-preview.tsx       Full SaaS app mockup shell
  dashboard/
    tabs.tsx                  Analytics / Workspace / Copilot / Integrations / Billing / Settings
    charts.tsx                Hand-built SVG line, bar, and donut charts
  ai-agents.tsx                Interactive agent library
  automation.tsx               Node-based workflow builder visual
  pricing.tsx
  testimonials.tsx
  faq.tsx
  contact.tsx
  footer.tsx
  ui/                          Button, Container, SectionHeading, Kicker
lib/
  utils.ts                     `cn()` class merge helper
```

## Design system

Defined entirely in `app/globals.css` under `@theme`:

- **Ink** — near-black graphite background (`#0A0B0D`) with three raised surface tones
- **Paper** — warm off-white foreground (`#F3F1EA`)
- **Amber** (`#F0A202`) — the single signature accent, used deliberately and sparingly
- **Violet** — secondary accent reserved for AI/agent-related UI
- **Green / Red** — status and data-viz semantics only
- **Type** — Inter (UI/body), Instrument Serif italic (display accent), JetBrains Mono (data/console)

## Notes for deployment

- No external image assets are used — logos, avatars, and charts are all inline SVG or
  CSS, so there is nothing to swap before shipping.
- All copy is original (no lorem ipsum); replace company/product names as needed.
- Deploys to Vercel with zero configuration: `vercel deploy`.
