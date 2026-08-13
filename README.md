# Portfolio

Personal portfolio site — React + Vite, Tailwind CSS, deployed on Vercel.

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
