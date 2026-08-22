export const site = {
  name: 'Aghimien Favour',
  initials: 'AF',
  role: 'Graphic Designer & Web Developer',
  location: 'Benin City, Edo State, Nigeria',
  phone: '0916 730 2140',
  phoneHref: 'tel:+2349167202140',
  whatsappHref: 'https://wa.me/2349167202140',
  email: 'fayvor124@gmil.com',
  emailHref: 'mailto:fayvor124@gmail.com',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

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
  },
  {
    slug: 'orion-autos',
    title: 'Orion Autos',
    category: 'Web Development',
    year: '2025',
    description:
      'A companion dealership site in a clean white-and-grey palette, designed to feel premium without competing with the cars themselves.',
    tags: ['Web Design', 'UI/UX'],
  },
  {
    slug: 'blade-and-bone',
    title: 'Blade & Bone',
    category: '3D / Interactive',
    year: '2025',
    description:
      'A premium animated barbershop site using GSAP and Three.js, with scroll-driven 3D interactions that give the brand a tactile feel.',
    tags: ['Three.js', 'GSAP', 'Scroll Animation'],
  },
  {
    slug: '3d-house-walkthrough',
    title: '3D House Walkthrough',
    category: '3D / Interactive',
    year: '2025',
    description:
      'An interactive 3D walkthrough built from a video upload, letting visitors move through a property room by room in the browser.',
    tags: ['Three.js', '3D Web'],
  },
  {
    slug: 'building-explorer',
    title: 'Architectural Building Explorer',
    category: '3D / Interactive',
    year: '2025',
    description:
      'A multi-level building explorer with drill-down navigation between floors and rooms — a 3D alternative to a static floor plan.',
    tags: ['Three.js', 'Interaction Design'],
  },
  {
    slug: 'product-exploded-view',
    title: 'Product Exploded-View Viewer',
    category: '3D / Interactive',
    year: '2025',
    description:
      'A 3D exploded-view product viewer that separates a product into its parts on interaction — informed by AI video exploded-view workflows.',
    tags: ['Three.js', 'Product Visualisation'],
  },
  {
    slug: 'happy-giggles-club',
    title: 'Happy Giggles Club',
    category: 'Content & Brand',
    year: 'Ongoing',
    description:
      "A children's YouTube channel producing bright, interactive educational content for toddlers — brand, pacing, and Shorts formatting.",
    tags: ['Branding', 'Content Design'],
  },
];

export const skills = [
  'Graphic Design', 'Logo Design', 'Brand Identity', 'Next.js', 'React',
  'Tailwind CSS', 'Three.js', 'GSAP', 'Responsive Web Design', 'UI/UX',
];
