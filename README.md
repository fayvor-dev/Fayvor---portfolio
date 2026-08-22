# Aghimien Favour — Portfolio

A 5-page portfolio website (Home, About, Services, Projects, Contact) built with
Next.js (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js          Root layout — fonts, Navbar, Footer
  globals.css         Tailwind + custom styles (corner-frame motif, marquee)
  page.js              Home
  about/page.js         About
  services/page.js      Services
  projects/page.js      Projects
  contact/page.js       Contact
components/
  Navbar.js, Footer.js, CornerFrame.js, ContactForm.js, Icons.js
lib/
  data.js              All editable content: name, contact info, services, projects
```

## Editing your content

Almost everything on the site (name, phone, email, location, services,
projects, skills) lives in one place: `lib/data.js`. Edit that file and it
updates across every page automatically.

**Note:** double-check the email address in `lib/data.js` — it's currently set
to `fayvor124@gmil.com` exactly as provided. If that was meant to be
`@gmail.com`, update the `email` and `emailHref` fields there.

## Deploying

This is a standard Next.js app, so it deploys directly to
[Vercel](https://vercel.com/new) (recommended, zero config) or any Node
hosting provider that supports Next.js.

## Brand

- Colours: Navy (`#14294A` / `#081426`) and Gold (`#C9A227`)
- Fonts: Fraunces (headings), Inter (body), IBM Plex Mono (labels)
