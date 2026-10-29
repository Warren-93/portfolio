# warren.digital

Site for Warren Digital (Mark Warren): fixed-price websites for grassroots football clubs and small businesses, plus a developer portfolio. React + Vite, Tailwind CSS, deployed on Vercel.

## Where things live

- `src/data/offer.js`: packages, prices, Care Plan, add-ons, founding offer, steps and contact details. Change business details here only.
- `src/data/projects.js`: portfolio projects. `featured: true` puts a project on the home page.
- `src/index.css`: brand colours and fonts as Tailwind tokens (`ink`, `paper`, `amber-*`, `pitch`).
- `src/components/Logo.jsx` and `ClubMark.jsx`: the primary and club marks.

Email and phone in `offer.js` are `null` until filled in; the site shows a "coming soon" placeholder until then.

## Tech stack

- React 19 + Vite
- React Router
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- react-icons

## Running locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deployment

Deployed on Vercel. `vercel.json` rewrites all paths to `index.html` so client-side routing (deep links, refreshes) works correctly on a static host.
