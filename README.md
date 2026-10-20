# linkstoayaz

A link-in-bio page for Ayaz Mirza: portfolio, resume, projects and contacts in one place.

**Live:** https://linkstoayaz.vercel.app

## Features

- Profile header with location, availability status and social icon row
- Featured links (portfolio, resume download) and a one-tap "copy email" action
- Projects list with live search and category filters (AI, Dev tools, Web & fun)
- Light / dark theme (follows the system, remembers your choice, no flash on load)
- Native share sheet on mobile, copy-link fallback on desktop
- Accessible: keyboard focus styles, ARIA labels, respects `prefers-reduced-motion`
- Vercel Analytics

## Editing links

All links live in arrays at the top of `src/App.tsx`:

- `socials` — icon row under the name
- `featured` — the highlighted cards
- `projects` — the searchable list (each has a `category`)
- `elsewhere` — other profiles and archives

The resume is served from `public/AyazResume.pdf`.

## Development

```bash
npm install
npm run dev      # start dev server
npm run lint     # eslint
npm run build    # production build to dist/
npm run preview  # serve the build
```

Built with React, TypeScript, Vite and lucide-react icons.
