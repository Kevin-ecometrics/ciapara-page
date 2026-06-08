# Ciapara — Enrique Ciapara website (MVP)

Presentation website for the painter Enrique Ciapara (Tijuana, Baja California), built with [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This is an **MVP version**: structure, content, and components are still subject to change.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Current project structure

- `app/layout.tsx` — root layout: defines metadata, global fonts, and mounts the `NavBar`.
- `app/page.tsx` — main (Home) page. Currently renders `About`; `Hero` is commented out / pending use.
- `app/Components/NavBar.tsx` — fixed navigation bar with the artist's name and a link to Home.
- `app/Components/Home/Hero.tsx` — hero section for the home page (in progress).
- `app/Components/Home/About.tsx` — biography/about section for the artist.
- `app/globals.css` — global styles, theme variables (Tailwind), and font configuration.
- `public/interstate/` — Interstate font files (titles/headings).
- `public/hoefler-text/` — Hoefler Text font file (body text/paragraphs).

## Fonts

The project uses [`next/font/local`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load and optimize two local font families (not Google Fonts), defined in `app/layout.tsx`:

- **Interstate** (`--font-interstate`) — used for **titles and headings** (`h1`–`h6`). Multiple weights and styles are loaded (light, regular, bold, black, and italics) from `public/interstate/`.
- **Hoefler Text** (`--font-hoefler-text`) — used for **body text and paragraphs**. Loaded from `public/hoefler-text/hoefler-text.ttf`.

Both CSS variables are exposed on `<html>` and mapped in `app/globals.css`:

- `--font-sans` → Hoefler Text (general text / Tailwind `font-sans`)
- `--font-heading` → Interstate (available for explicit use, e.g. `font-[family-name:var(--font-heading)]`)
- `body` uses Hoefler Text by default, and headings (`h1`–`h6`) automatically use Interstate.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
