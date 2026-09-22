export const site = {
  name: 'Aghimien Favour',
  initials: 'AF',
  role: 'Graphic Designer & Web Developer',
  location: 'Benin City, Edo State, Nigeria',
  phone: '0916 730 2140',
  phoneHref: 'tel:+2349167302140',
  whatsappHref: 'https://wa.me/2349167302140',
  email: 'fayvor124@gmil.com',
  emailHref: 'mailto:fayvor124@gmil.com',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

// Three-colour system used across services + project tags so colour carries
// meaning (discipline) rather than being decorative: lime = design/brand,
// clay = web development, sage = 3D/interactive.
export const categoryStyles = {
  Design: { text: 'text-lime', border: 'border-lime/40', dot: 'bg-lime' },
  'Content & Brand': { text: 'text-lime', border: 'border-lime/40', dot: 'bg-lime' },
  Build: { text: 'text-clay', border: 'border-clay/40', dot: 'bg-clay' },
  'Web Development': { text: 'text-clay', border: 'border-clay/40', dot: 'bg-clay' },
  '3D / Three.js': { text: 'text-sage', border: 'border-sage/40', dot: 'bg-sage' },
  '3D / Interactive': { text: 'text-sage', border: 'border-sage/40', dot: 'bg-sage' },
};

export const services = [
  {
    title: 'Brand & Graphic Design',
    tag: 'Design',
    description:
      'Logos, brand marks, and visual identity systems built to hold up across a website, a social feed, and a printed card.',
    deliverables: ['Logo & brand mark', 'Colour & type system', 'Social & print templates'],
  },
  {
    title: 'Website Development',
    tag: 'Build',
    description:
      'Fast, responsive websites for businesses that need to look credible and convert visitors — from dealerships to barbershops.',
    deliverables: ['Custom responsive site', 'Mobile-first layout', 'Content & SEO setup'],
  },
  {
    title: 'Interactive 3D Web Experiences',
    tag: '3D / Three.js',
    description:
      'Three.js-driven product viewers, walkthroughs, and exploded-view animations that let visitors explore instead of just scroll.',
    deliverables: ['3D product/exploded views', 'Interactive walkthroughs', 'Scroll-driven animation'],
  },
];

export const process = [
  { step: '01', title: 'Discover', description: 'A short call to understand your brand, audience, and what the site needs to do.' },
  { step: '02', title: 'Design', description: 'Wireframes and visual direction — colour, type, and layout — signed off before build.' },
  { step: '03', title: 'Build', description: 'Development in Next.js and Tailwind, with 3D/interactive elements where they add value.' },
  { step: '04', title: 'Launch', description: 'Testing across devices, handover, and light support after go-live.' },
];

export const projects = [
  {
    slug: 'skyvora',
    title: 'SKYVORA',
    category: 'Web Development',
    year: '2026',
    url: 'https://sky-vora.vercel.app/',
    description:
      'A premium private-jet charter platform — fleet browsing, destinations, a multi-step charter request flow, and a live per-hour cost calculator, wrapped in a clear "Liquid Glass" interface.',
    tags: ['Next.js 14', 'TypeScript', 'Framer Motion', 'Supabase'],
    role: 'Design & Full-Stack Development',
    tools: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    overview:
      'SKYVORA needed to feel like the aviation brand it is — obsidian and champagne-gold, restrained, expensive. The brief called for a "Liquid Glass" interface inspired by Apple’s glass system: clear and refractive, not the heavy frosted-blur look most sites default to.',
    approach: [
      { title: 'A real glass system', description: 'Built a clear, non-frosted glass UI language from scratch and applied it consistently across the fleet, destinations, and booking flow — not just the hero.' },
      { title: 'Full booking flow', description: 'Built out fleet and destination detail pages, a multi-step charter request form, and a live per-hour cost calculator tied to each aircraft’s rate.' },
      { title: 'Production infrastructure', description: 'Connected the site to Supabase for charter requests, contact messages, and membership sign-ups, wired up analytics and search console, and shipped it as an installable PWA.' },
    ],
    result:
      'A production-grade charter platform, live at sky-vora.vercel.app, that carries the Liquid Glass language through every page rather than just the landing screen.',
  },
  {
    slug: 'zenith-drive',
    title: 'Zenith Drive',
    category: 'Web Development',
    year: '2026',
    url: 'https://zenithdrive.vercel.app/',
    description:
      'A full multi-page website for a real motor dealership in Benin City — inventory, vehicle detail pages, test drive booking, and a video hero — built around a butter, cream, and charcoal palette.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    role: 'Design & Development',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    overview:
      'Zenith Drive is a real dealership in Ugbowo, Benin City — "Peak Performance, Unmatched Luxury." The site needed to read as premium and minimal without ever letting the interface compete with the vehicles themselves.',
    approach: [
      { title: 'Rules before pixels', description: 'Worked from a detailed written spec covering every page — inventory, vehicle detail, services, test drive booking — including a firm rule that vehicle photos are never used as background imagery.' },
      { title: 'A restrained palette', description: 'Built the whole interface around butter, cream, brown, ash, and charcoal — a warm, minimal system that lets the cars carry the colour.' },
      { title: 'Motion as a finishing layer', description: 'Added a video hero and site-wide Framer Motion animation once the core structure was solid, so motion enhances the browsing experience rather than distracting from inventory.' },
    ],
    result:
      'A real, live dealership website at zenithdrive.vercel.app that reads as premium and considered across every page.',
  },
  {
    slug: 'veloura-patisserie',
    title: 'Veloura Pâtisserie',
    category: '3D / Interactive',
    year: '2026',
    url: 'https://veloura-indol.vercel.app/',
    description:
      'A highly animated bakery brand site built around anti-gravity floating pastries and a 3D signature croissant — Apple-style Liquid Glass, GSAP scroll storytelling, and Three.js.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'TypeScript'],
    role: 'Design & Development',
    tools: ['Next.js', 'TypeScript', 'Three.js / React Three Fiber', 'GSAP + ScrollTrigger', 'Lenis'],
    overview:
      'Veloura Pâtisserie — "Baked beautifully. Made to be remembered." — called for a site as crafted as the pastries themselves: cinematic scroll storytelling, ingredients and pastries that float as if weightless, and a real 3D croissant at the centre of it.',
    approach: [
      { title: '3D as centrepiece', description: 'Built a signature 3D croissant with Three.js and React Three Fiber — not a decorative model, but a central, interactive piece of the brand.' },
      { title: 'Anti-gravity motion language', description: 'Choreographed pastries and ingredients to float and drift with GSAP ScrollTrigger, paired with Lenis for smooth, cinematic scroll pacing throughout.' },
      { title: 'A warm, layered palette', description: 'Built the Liquid Glass interface in cream, vanilla, espresso, and chocolate, with caramel, honey, peach, and strawberry accents pulled directly from the pastries.' },
    ],
    result:
      'A cinematic, highly animated bakery site — live at veloura-indol.vercel.app — where the 3D and motion work is the brand experience, not a decoration on top of it.',
  },
  {
    slug: 'favor-autos',
    title: 'Favor Autos',
    category: 'Web Development',
    year: '2025',
    description:
      'A car dealership website built to showcase inventory clearly, with a fast, mobile-first browsing experience for buyers.',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive'],
    role: 'Design & Development',
    tools: ['Next.js', 'Tailwind CSS'],
    overview:
      'Favor Autos needed a dealership site where inventory is the star — buyers browsing on their phones between test drives, often on slower connections, needed to find and compare cars without friction.',
    approach: [
      { title: 'Structure first', description: 'Mapped the inventory browsing flow before any visual design — filters, listing density, and detail views were sketched to match how buyers actually shop.' },
      { title: 'Mobile-first build', description: 'Built and tested on small screens first, then scaled up — since most traffic to a dealership site happens on mobile.' },
      { title: 'Performance pass', description: 'Optimised images and layout so listing pages stay fast even on a weaker connection.' },
    ],
    result:
      'A responsive, fast-loading dealership site where buyers can browse and compare inventory cleanly on any device.',
  },
  {
    slug: 'orion-autos',
    title: 'Orion Autos',
    category: 'Web Development',
    year: '2025',
    description:
      'A companion dealership site in a clean white-and-grey palette, designed to feel premium without competing with the cars themselves.',
    tags: ['Web Design', 'UI/UX'],
    role: 'Design & Development',
    tools: ['Next.js', 'Tailwind CSS'],
    overview:
      'Where Favor Autos leans functional, Orion Autos called for a quieter, more premium feel — the palette needed to stay out of the way so the vehicle photography could carry the page.',
    approach: [
      { title: 'Restrained palette', description: 'Chose a white-and-grey system deliberately, testing how it reads next to vehicle photography of different colours and lighting.' },
      { title: 'Whitespace as structure', description: 'Used generous spacing rather than dividing lines to separate sections — a quieter way to organise a dense inventory page.' },
      { title: 'Consistent UI language', description: 'Built a small set of reusable card and button styles to keep the whole site feeling considered rather than assembled.' },
    ],
    result:
      'A premium-feeling companion dealership site that lets the cars do the talking.',
  },
  {
    slug: 'blade-and-bone',
    title: 'Blade & Bone',
    category: '3D / Interactive',
    year: '2025',
    description:
      'A premium animated barbershop site using GSAP and Three.js, with scroll-driven 3D interactions that give the brand a tactile feel.',
    tags: ['Three.js', 'GSAP', 'Scroll Animation'],
    role: 'Design & Development',
    tools: ['Three.js', 'GSAP', 'Next.js'],
    overview:
      'A barbershop brand wanted a site that felt as considered as the haircuts — not a template, something with the same tactile, hands-on craft feeling in the browser.',
    approach: [
      { title: 'Motion as identity', description: 'Used GSAP-driven scroll interactions as the core design language rather than a decorative add-on — motion had to earn its place on every section.' },
      { title: '3D as texture', description: 'Layered in Three.js elements to give depth and a tactile feel, keeping performance in mind so the animation never fights the page.' },
      { title: 'Restraint on mobile', description: 'Simplified the heavier interactions on smaller screens so the experience stays smooth rather than overwhelming.' },
    ],
    result:
      'An animated site with a tactile, premium feel that matches the brand’s craft-forward identity.',
  },
  {
    slug: '3d-house-walkthrough',
    title: '3D House Walkthrough',
    category: '3D / Interactive',
    year: '2025',
    description:
      'An interactive 3D walkthrough built from a video upload, letting visitors move through a property room by room in the browser.',
    tags: ['Three.js', '3D Web'],
    role: 'Design & Development',
    tools: ['Three.js'],
    overview:
      'A static floor plan or photo gallery only tells you so much about a property — this explored turning a simple video walkthrough into something a visitor could navigate themselves.',
    approach: [
      { title: 'Source from video', description: 'Worked from a video walkthrough as the base material rather than requiring specialised 3D scanning equipment.' },
      { title: 'Room-to-room navigation', description: 'Built simple, intuitive controls so visitors could move between rooms without needing instructions.' },
      { title: 'Browser-native', description: 'Kept the whole experience running in the browser — no app download, no plugin.' },
    ],
    result:
      'A browser-based walkthrough that lets a visitor explore a property at their own pace, room by room.',
  },
  {
    slug: 'building-explorer',
    title: 'Architectural Building Explorer',
    category: '3D / Interactive',
    year: '2025',
    description:
      'A multi-level building explorer with drill-down navigation between floors and rooms — a 3D alternative to a static floor plan.',
    tags: ['Three.js', 'Interaction Design'],
    role: 'Design & Development',
    tools: ['Three.js'],
    overview:
      'Multi-storey buildings are hard to explain with a single image. This explored a drill-down interaction model: start at the whole building, then move down into individual floors and rooms.',
    approach: [
      { title: 'Layered navigation', description: 'Designed an interaction model that moves from whole-building to floor to room, so a visitor is never lost in the structure.' },
      { title: 'Clear visual hierarchy', description: 'Used consistent highlighting and labelling so it’s always obvious what level of the building you’re looking at.' },
    ],
    result:
      'An interactive 3D alternative to a static floor plan, letting visitors drill down through a building at their own pace.',
  },
  {
    slug: 'product-exploded-view',
    title: 'Product Exploded-View Viewer',
    category: '3D / Interactive',
    year: '2025',
    description:
      'A 3D exploded-view product viewer that separates a product into its parts on interaction — informed by AI video exploded-view workflows.',
    tags: ['Three.js', 'Product Visualisation'],
    role: 'Design & Development',
    tools: ['Three.js'],
    overview:
      'Exploded-view diagrams are common in manufacturing and hardware marketing, but usually static. This explored making one interactive — letting a visitor pull a product apart themselves.',
    approach: [
      { title: 'Part separation logic', description: 'Worked out how a product should logically separate into parts on interaction, informed by AI-assisted video exploded-view references.' },
      { title: 'Smooth interaction', description: 'Tuned the motion so parts separate and reassemble smoothly rather than snapping, which matters a lot for how premium the viewer feels.' },
    ],
    result:
      'An interactive product viewer that lets visitors explore how something is built, part by part.',
  },
];

// Real client testimonials go here when available. The Testimonials
// section only renders when this array has entries — no placeholder or
// invented quotes are shown on the live site.
export const testimonials = [];

export const skills = [
  'Graphic Design', 'Logo Design', 'Brand Identity', 'Next.js', 'TypeScript',
  'React', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'GSAP',
  'Responsive Web Design', 'UI/UX',
];
