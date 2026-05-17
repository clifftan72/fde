# FDE Singapore

Category and community site for Forward Deployed Engineering in Singapore.

## Stack

- Vite + React + TypeScript
- React Router v6 (SPA)
- Vanilla CSS design system
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values before running locally.

```
VITE_WAITLIST_ENDPOINT=   # Your secure backend endpoint URL
```

Set these in the Vercel project settings (Settings → Environment Variables). Do not commit `.env` files.

## Deployment (Vercel)

1. Connect the GitHub repository to a Vercel project.
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables in Vercel dashboard.
6. `vercel.json` handles SPA routing fallback automatically.

## Waitlist Form

The waitlist form reads `VITE_WAITLIST_ENDPOINT` from environment at build time.

- If the variable is set: posts JSON `{ email, role }` to the endpoint.
- If the variable is not set: falls back gracefully to Tally.so with the email pre-filled.
- The form will never break in production — it degrades safely.

## Brand Architecture

| Site | Role |
|------|------|
| FDE Singapore (this site) | Category, market education, community, waitlist |
| Make Work Flow™ | Methodology and thinking |
| Harvest Point Consulting | Consulting and implementation practice |

## SEO

- `public/sitemap.xml` — update `<lastmod>` dates on content changes
- `public/robots.txt` — allows full crawling
- Meta tags in `index.html` — update OG image once one is created

## Information Guardrails

This site exposes only:
- What FDE means as a discipline
- Why FDE matters now
- What FDEs do at a high level
- Who the community is for
- How the brand ecosystem connects

It does not expose backend architecture, email providers, API integrations, client methodology, or commercial packaging.
