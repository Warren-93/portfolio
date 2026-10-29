# warren.digital

Mark Warren's developer portfolio, branded as <W/> warren.digital. React + Vite, Tailwind CSS, deployed on Vercel.

## Where things live

- `src/data/projects.js`: portfolio projects. `featured: true` puts a project on the home page.
- `src/data/skills.js` and `src/data/contact.js`: skills list and contact details.
- `src/index.css`: brand colours and fonts as Tailwind tokens (`ink`, `paper`, `amber-*`).
- `src/components/Logo.jsx`: the <W/> mark and warren.digital wordmark.

Email and phone in `contact.js` are `null` until filled in; the Contact page shows a "coming soon" placeholder until then.

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
