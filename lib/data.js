/* ------------------------------------------------------------------ */
/*  All editable site content lives in this file.                      */
/* ------------------------------------------------------------------ */

export const site = {
  name: 'Aghimien Favour',
  role: 'Web Designer & Developer',
  location: 'Benin City, Edo State, Nigeria',
  email: 'samprec133@gmail.com',
  emailHref: 'mailto:samprec133@gmail.com',
  phone: '+234 916 720 2140',
  phoneHref: 'tel:+2349167202140',
  whatsappHref: 'https://wa.me/2349167202140',
  github: 'https://github.com/fayvor-dev',
};

export const nav = [
  { label: 'Home', href: '/#top', id: 'top' },
  { label: 'Work', href: '/#work', id: 'work' },
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Services', href: '/#services', id: 'services' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
];

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/*  - Order in this array = order on the site.                         */
/*  - featured: true  -> large preview in the "Selected work" section. */
/*  - hidden: true    -> kept here but NOT shown on the site.          */
/*  - kind: 'original' = portfolio concept / own brand                 */
/*          'redesign' = independent redesign of a real business       */
/*  - repo is optional. tone is the colour of the preview placeholder. */
/* ------------------------------------------------------------------ */

export const kindLabel = {
  original: 'Portfolio concept',
  redesign: 'Independent redesign concept',
};

export const projects = [
  {
    slug: 'zenith-drive',
    title: 'Zenith Drive',
    kind: 'original',
    featured: true,
    categories: ['Web Design', 'Development'],
    url: 'https://zenithdrive.vercel.app/',
    repo: 'https://github.com/fayvor-dev/Zenith-Drive',
    description:
      'A premium motor dealership website concept focused on automotive presentation, vehicle listings, modern layouts and a polished customer experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    tone: { bg: '#EFE3BE', fg: '#2B2622' },
  },
  {
    slug: 'skyvora',
    title: 'SKYVORA',
    kind: 'original',
    featured: true,
    categories: ['Web Design', 'Development', 'Interactive'],
    url: 'https://sky-vora.vercel.app/',
    description:
      'A private aircraft charter concept built around a clear "Liquid Glass" interface, with fleet and destination pages and a charter request flow.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    tone: { bg: '#0C0D10', fg: '#E9DCB6' },
  },
  {
    slug: 'veloura-patisserie',
    title: 'Veloura Pâtisserie',
    kind: 'original',
    featured: true,
    categories: ['Web Design', 'Development', 'Interactive'],
    url: 'https://veloura-indol.vercel.app/',
    description:
      'A highly animated bakery brand concept: floating pastries, cinematic scroll storytelling and a 3D signature croissant.',
    tags: ['Next.js', 'TypeScript', 'GSAP', 'Three.js', 'Lenis'],
    tone: { bg: '#F2E8D8', fg: '#3B2418' },
  },
  {
    slug: 'punch-bowl-inn',
    title: 'The Punch Bowl Inn',
    kind: 'redesign',
    featured: true,
    categories: ['Web Design', 'Development'],
    url: 'https://punch-bowl-inn-nextjs-2.vercel.app/',
    description:
      'A hospitality website concept for a Swaledale inn, aiming for a more contemporary, stylish and engaging online presence.',
    tags: ['Next.js'],
    tone: { bg: '#1E2420', fg: '#EDE6D6' },
  },
  {
    slug: 'top-house-inn',
    title: 'The Top House Inn',
    kind: 'redesign',
    featured: true,
    categories: ['Web Design', 'Development'],
    url: 'https://top-house-inn.vercel.app/',
    description:
      'A redesign concept for a Cornish inn that refines and modernises an existing website.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    tone: { bg: '#16262F', fg: '#EDE6D6' },
  },
  {
    slug: 'men-the-babershop',
    title: 'MEN the Babershop',
    kind: 'redesign',
    featured: true,
    categories: ['Web Design', 'Development'],
    url: 'https://men-barbershop.vercel.app/',
    description:
      'A barbershop website concept giving a local business a more polished digital presence, with clear services, gallery and directions.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    tone: { bg: '#0A0A0A', fg: '#F2F2F2' },
  },

  /* ---- More concepts (shown in the list under the featured work) ---- */
  {
    slug: 'blacksmiths-arms',
    title: 'The Blacksmiths Arms',
    kind: 'redesign',
    categories: ['Web Design', 'Development'],
    url: 'https://blacksmiths-arms.vercel.app/',
    description:
      'A traditional country pub concept that keeps the character and hospitality of the place while improving its digital presentation.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'manor-farm-cafe',
    title: 'Manor Farm Cafe',
    kind: 'redesign',
    categories: ['Web Design', 'Development'],
    url: 'https://manor-farm-cafe-biker-nextjs.vercel.app/',
    description:
      'A countryside, biker-friendly café concept with a more inviting atmosphere and a clearer food-and-venue presentation.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'fox-and-rabbit-inn',
    title: 'Fox & Rabbit Inn',
    kind: 'redesign',
    categories: ['Web Design', 'Development'],
    url: 'https://fox-and-rabbit-inn.vercel.app/',
    description:
      'An inn website concept that modernises the visitor experience while keeping a welcoming hospitality feel.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'yorkshire-tea-room',
    title: 'The Yorkshire Tea Room',
    kind: 'redesign',
    categories: ['Web Design', 'Development'],
    url: 'https://yorkshire-tearoom.vercel.app/',
    description: 'A multi-page redesign concept for an independent tearoom.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'greenhouse-tearoom',
    title: 'The Greenhouse Tearoom',
    kind: 'redesign',
    categories: ['Web Design', 'Development'],
    url: 'https://greenhouse-tearoom.vercel.app/',
    description: 'A website concept for a garden-centre tearoom.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'no-14-the-salon',
    title: 'No 14 The Salon',
    kind: 'redesign',
    categories: ['Web Design', 'Development'],
    url: 'https://no14-salon.vercel.app/',
    description: 'An editorial-style website concept for an independent hair salon.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'la-hair-studio',
    title: 'L A Hair Studio',
    kind: 'redesign',
    categories: ['Web Design', 'Development'],
    url: 'https://la-hair-studio-nextjs.vercel.app/',
    description: 'A clean website concept for a ladies\u2019 and gents\u2019 hairdresser, focused on services and an easy call to action.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'dp-decorating',
    title: 'D&P Decorating',
    kind: 'redesign',
    categories: ['Web Design', 'Development'],
    url: 'https://dp-decorating-nextjs.vercel.app/',
    description: 'A premium, editorial website concept for a family-run interior and exterior decorator.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },

  /* ---- HIDDEN until fixed (see notes) ---- */
  {
    slug: 'cape-cod-yoga-school',
    title: 'Cape Cod Yoga School',
    kind: 'redesign',
    hidden: true, // live link returned 404 when checked
    categories: ['Web Design', 'Development'],
    url: 'https://cape-cod-yoga-school-v2-nextjs-1.vercel.app/',
    description: 'A yoga school website concept with a warm, welcoming identity and a refined teacher-training experience.',
    tags: ['Next.js'],
  },
  {
    slug: 'just-for-you-personal-training',
    title: 'Just For You Personal Training',
    kind: 'redesign',
    hidden: true, // live link returned 404 when checked
    categories: ['Web Design', 'Development'],
    url: 'https://just-for-you-personal-training.vercel.app/',
    description: 'A personal training website concept built around clear messaging and encouraging visitors to take action.',
    tags: ['Next.js'],
  },
  {
    slug: 'malt-shovel',
    title: 'The Malt Shovel',
    kind: 'redesign',
    hidden: true, // live page still shows "Photo needed" placeholder text
    categories: ['Web Design', 'Development'],
    url: 'https://malt-shovel.vercel.app/',
    description: 'A pub website concept with a stronger visual identity and a more engaging hero.',
    tags: ['Next.js'],
  },
  {
    slug: 'old-school-tea-room',
    title: 'The Old School Tea Room',
    kind: 'redesign',
    hidden: true, // live page still shows "Photo placeholder" blocks
    categories: ['Web Design', 'Development'],
    url: 'https://old-school-tea-room.vercel.app/',
    description: 'A tea room website concept for a Yorkshire Dales schoolhouse venue.',
    tags: ['Next.js'],
  },
];

export const visibleProjects = projects.filter((p) => !p.hidden);
export const featuredProjects = visibleProjects.filter((p) => p.featured);
export const moreProjects = visibleProjects.filter((p) => !p.featured);

/* ------------------------------------------------------------------ */

export const services = [
  {
    title: 'Web Design',
    description:
      'Responsive layouts, visual systems, information architecture and interaction design, shaped around what the visitor needs to do.',
    keywords: ['Layout & hierarchy', 'Visual systems', 'User experience'],
  },
  {
    title: 'Web Development',
    description:
      'Modern frontend builds with reusable components, performance in mind, and deployment handled properly.',
    keywords: ['Next.js & React', 'Responsive build', 'Deployment'],
  },
  {
    title: 'Brand Identity & Graphic Design',
    description:
      'Logos, identity systems, typography and colour, plus the supporting assets a brand needs to look consistent.',
    keywords: ['Logo design', 'Identity systems', 'Brand assets'],
  },
  {
    title: 'Interactive & 3D Web Experiences',
    description:
      'Motion design, scroll-based storytelling and 3D web experiments, used where they genuinely improve the experience.',
    keywords: ['Motion design', 'Scroll storytelling', '3D with Three.js'],
  },
];

export const skillGroups = [
  { title: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'] },
  { title: 'Motion & 3D', items: ['Framer Motion', 'GSAP', 'Three.js'] },
  { title: 'Workflow', items: ['Git & GitHub', 'Vercel', 'Supabase'] },
  { title: 'Design', items: ['UI design', 'Brand identity', 'Logo design', 'Typography'] },
];

/* NairaSense Android download. Hidden until the APK is actually hosted:
   set available: true and make sure apkUrl opens a real file. */
export const nairaSense = {
  available: false,
  name: 'NairaSense',
  version: '0.1.0',
  apkUrl: '/downloads/nairasense-v0.1.0.apk',
};
