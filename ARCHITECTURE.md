# Architecture

This document separates **what exists today** from **what is planned**.

## 1. Current prototype (this repository)

A server-rendered **Next.js 15 App Router** front end. There is no backend or database yet.

```
Browser
  │
  ▼
Next.js 15 (React 19, TypeScript)
  ├─ app/page.tsx                       landing page (static sections)
  ├─ app/knowledge-worlds-hub           six worlds, learner stats, progress chart (Recharts)
  ├─ app/knowledge-world-adventure      quest map, active quest, badges, lore
  ├─ app/sign-up-login-screen           forms (react-hook-form), simulated submit
  └─ components/                        Topbar, AppLayout, Modal, Badge, ProgressBar
  │
  ▼
Tailwind CSS + design tokens (saffron / indigo palette), next/font (Plus Jakarta Sans)
```

| Layer | Current state |
|---|---|
| UI | Next.js 15, React 19, TypeScript, Tailwind CSS |
| State and data | Sample data inside components; no persistence |
| Forms | `react-hook-form`; submit is simulated, with `// BACKEND:` comments marking the planned endpoints |
| Charts and icons | Recharts, Lucide |
| Auth | Simulated. The demo accounts on the login screen are fake |
| Backend, database, AI | None yet |

Planned endpoints already marked in the code:

- `POST /api/waitlist`
- `POST /api/auth/signup` and `POST /api/auth/login`
- `POST /api/quests/:id/start`

## 2. Planned architecture (MVP and beyond)

```
Child / parent / teacher (web, later mobile)
          │
          ▼
AI layer (existing APIs, no custom foundation models)
   adaptive difficulty · plant identification · speech recognition
   Q&A grounded in expert-approved content only
          │
          ▼
Backend: Next.js API routes or FastAPI
   auth · progress · quest content · waitlist
   PostgreSQL (for example via Supabase)
          │
          ▼
Teacher / parent dashboard

Content pipeline (in parallel):
Domain expert council → review → child-safety check → published Knowledge World
```

## 3. Key design decisions

| Decision | Reason |
|---|---|
| Content stored as structured data (see `data/`) | New worlds are added as content, not new code |
| Expert-validated content pipeline | IKS topics are easy to get wrong (health claims, attribution) |
| Use existing AI APIs, not custom models | Low fixed cost and faster to ship |
| Offline-friendly, lightweight visuals | Government-school devices and connectivity are limited |
| Minimal data, no biometric or emotion tracking | Children's data protection (DPDP Act 2023) |
| Story quests use a stop-and-decide pattern | The child chooses before seeing the outcome, which builds decision-making |

## 4. Security and privacy

- No real personal data in this repository.
- Secrets belong in environment variables (`.env` is git-ignored; copy `.env.example`).
- A parental-consent flow is required before any child account exists (planned).

## 5. Known gaps

- No backend, real authentication or persistence
- No automated tests
- Content not yet expert-reviewed
- `next.config.mjs` currently ignores TypeScript and ESLint errors at build time, which should be switched off before production
