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
// meaning (discipline) rather than being decorative: gold = design/brand,
// copper = web development, teal = 3D/interactive.
export const categoryStyles = {
  Design: { text: 'text-gold', border: 'border-gold/40', dot: 'bg-gold' },
  'Content & Brand': { text: 'text-gold', border: 'border-gold/40', dot: 'bg-gold' },
  Build: { text: 'text-copper', border: 'border-copper/40', dot: 'bg-copper' },
  'Web Development': { text: 'text-copper', border: 'border-copper/40', dot: 'bg-copper' },
  '3D / Three.js': { text: 'text-teal', border: 'border-teal/40', dot: 'bg-teal' },
  '3D / Interactive': { text: 'text-teal', border: 'border-teal/40', dot: 'bg-teal' },
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
      'An animated site with a tactile, premium feel that matches the brand\u2019s craft-forward identity.',
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
      { title: 'Browser-native', description: 'Kept the whole experience running in the browser \u2014 no app download, no plugin.' },
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
      { title: 'Clear visual hierarchy', description: 'Used consistent highlighting and labelling so it\u2019s always obvious what level of the building you\u2019re looking at.' },
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
      'Exploded-view diagrams are common in manufacturing and hardware marketing, but usually static. This explored making one interactive \u2014 letting a visitor pull a product apart themselves.',
    approach: [
      { title: 'Part separation logic', description: 'Worked out how a product should logically separate into parts on interaction, informed by AI-assisted video exploded-view references.' },
      { title: 'Smooth interaction', description: 'Tuned the motion so parts separate and reassemble smoothly rather than snapping, which matters a lot for how premium the viewer feels.' },
    ],
    result:
      'An interactive product viewer that lets visitors explore how something is built, part by part.',
  },
  {
    slug: 'happy-giggles-club',
    title: 'Happy Giggles Club',
    category: 'Content & Brand',
    year: 'Ongoing',
    description:
      "A children's YouTube channel producing bright, interactive educational content for toddlers — brand, pacing, and Shorts formatting.",
    tags: ['Branding', 'Content Design'],
    role: 'Brand & Content Design',
    tools: ['Branding', 'Video Editing'],
    overview:
      'An ongoing children\u2019s YouTube channel producing bright, educational content for toddlers \u2014 brand identity, pacing, and short-form formatting all had to work together to hold a very young audience\u2019s attention.',
    approach: [
      { title: 'Bright, legible brand system', description: 'Built a colourful, simple visual identity that reads clearly even to very young viewers.' },
      { title: 'Pacing for attention span', description: 'Shaped how content is paced and formatted for Shorts, where the first two seconds decide whether a toddler (or their parent) keeps watching.' },
    ],
    result:
      'An ongoing content brand with a consistent, recognisable visual identity across every upload.',
  },
];

// Real client testimonials go here when available. The Testimonials
// section only renders when this array has entries — no placeholder or
// invented quotes are shown on the live site.
export const testimonials = [];

export const skills = [
  'Graphic Design', 'Logo Design', 'Brand Identity', 'Next.js', 'React',
  'Tailwind CSS', 'Three.js', 'GSAP', 'Responsive Web Design', 'UI/UX',
];
