# Aghimien Favour — Portfolio

Next.js (App Router) + Tailwind CSS. One-page portfolio with a dark cinematic look:
hero, scrolling project showcase, About, Services, stacked Projects, Contact.

## Run locally
```bash
npm install
npm run dev
```

## Editing content
Almost everything lives in `lib/data.js`:
- `site` — name, email, phone, WhatsApp link, GitHub
- `projects` — order = order on the site. `featured: true` puts a project in the stacked cards;
  every non-hidden project appears in the scrolling showcase. `hidden: true` keeps it in the
  file but off the site. `repo` adds a GitHub link. A project with no `url` shows a
  non-clickable "Live link unavailable" button.
- `services`, `tools`, `nairaSense`

## Real screenshots
Put screenshots in `public/projects/` (see the README there) and add
`image: '/projects/<slug>.jpg'` to the project. Until then, stacked cards show the live site in a
browser frame (loaded lazily on desktop, tap-to-load on mobile) and the showcase shows a
name card.

## Contact form
Saves to Supabase (see `supabase/contact_submissions.sql`). Add `SUPABASE_URL` and
`SUPABASE_ANON_KEY` in `.env.local` and in Vercel Environment Variables.

## Motion
No animation library is used. Scroll effects run through one small hook (`lib/scroll.js`) and
respect `prefers-reduced-motion`: the showcase becomes scrollable rows and the project cards
become a normal list.
