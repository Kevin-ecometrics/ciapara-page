# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

**Frontend (Next.js — root directory)**
```bash
bun dev          # dev server on http://localhost:3000
bun build        # static export → out/
bun lint         # eslint
```

**Backend (Express — `backend/` directory)**
```bash
cd backend
bun dev          # watch mode on http://localhost:4000
bun build        # bundles to backend/server.js
bun start:prod   # runs bundled server.js with node
```

## Architecture

This is a **static-export Next.js site** (`output: "export"` in `next.config.ts`) for artist Enrique Ciapara (`enriqueciapara.com`). The site exports to `out/` and is deployed as static HTML — no server-side rendering.

### Frontend structure

- `app/page.tsx` — root page (Spanish, `/`). Composes section components top-to-bottom: `IntroAnimation → Navbar → Hero → About → Collections → FooterReveal`.
- `app/en/page.tsx` — English mirror at `/en`. Same structure.
- `app/artist/` — separate artist detail page with its own layout.
- `app/about/` — standalone About page.
- `app/components/` — all UI sections as individual components.
- `app/lib/i18n.ts` — all UI copy in both `es` and `en`. Single source of truth for translations.
- `app/providers/i18nProvider.tsx` — React context that detects locale from pathname (`/en` = English, everything else = Spanish) and exposes `useI18n()` hook (`locale`, `t`, `setLocale`). Switching locale navigates between `/` and `/en`.

### Backend structure (`backend/`)

Standalone Express 5 server (runs on Bun in dev, Node in prod). Handles:
- `GET /api/health` — DB connectivity check.
- `POST /api/contact` — saves contact form submission to MySQL and sends emails via nodemailer (SMTP).

Config via `backend/.env.local` (dev) or `backend/.env` (prod): `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_TO`, `CORS_ORIGIN`, `PORT`.

### Styling

Tailwind CSS v4 (configured via `@tailwindcss/postcss`). Two custom fonts loaded via `next/font`: `--font-interstate` (local `.otf` files in `public/interstate/`) and `--font-open-sans` (Google Fonts).

### Animation

Uses `motion` (Framer Motion v12) for intro animation and scroll-based effects.
