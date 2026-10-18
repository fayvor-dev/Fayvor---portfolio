# Aghimien Favour — Portfolio

Next.js (App Router) + Tailwind CSS. One-page portfolio: Home, Work, About, Services, Contact.

## Run locally
```bash
npm install
npm run dev
```

## Editing content
Everything lives in `lib/data.js`:
- `site` — name, email, phone, WhatsApp link, GitHub
- `projects` — order = order on the site. `featured: true` gets a large live preview;
  `hidden: true` keeps a project in the file but off the site; `repo` adds a GitHub link
- `services`, `skillGroups`, `nairaSense`

## Contact form
Saves to Supabase (see `supabase/contact_submissions.sql`). Add `SUPABASE_URL` and
`SUPABASE_ANON_KEY` in `.env.local` and in Vercel Environment Variables.

## Project previews
Each featured project shows the real deployed site in a scaled browser frame (lazy-loaded on
desktop, tap-to-load on mobile). If a site ever blocks framing, add a screenshot instead
and swap `LivePreview` for an `<Image>` in `components/ProjectFeature.js`.
