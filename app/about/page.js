import Image from 'next/image';
import CornerFrame from '@/components/CornerFrame';
import Reveal from '@/components/Reveal';
import { skills, site } from '@/lib/data';

export const metadata = {
  title: `About — ${site.name}`,
};

const facts = [
  { label: 'Based in', value: site.location },
  { label: 'Focus', value: 'Design + Development' },
  { label: 'Tools', value: 'Next.js, Tailwind, Three.js' },
  { label: 'Availability', value: 'Open to remote clients' },
];

const values = [
  {
    title: 'Clarity first',
    description: 'A design only works if it\u2019s understood in three seconds. I design for clarity before I design for style.',
  },
  {
    title: 'Built to be used',
    description: 'Every site I ship is tested on a real phone, on a slow connection, before it\u2019s called done.',
  },
  {
    title: 'One craft, two tools',
    description: 'I design and I build \u2014 which means nothing gets lost in translation between the mockup and the site.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 text-cream overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 sm:pt-20 grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <Reveal>
            <CornerFrame className="relative border border-cream/15 bg-navy-900 aspect-[4/5] overflow-hidden group">
              <Image
                src="/images/favour-portrait.jpg"
                alt={`${site.name}, ${site.role}`}
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </CornerFrame>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow-light mb-5">About Me</p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.05]">
              Hi, I&rsquo;m {site.name}.
            </h1>
            <p className="mt-6 max-w-lg text-cream/70 leading-relaxed">
              I&rsquo;m a graphic designer and web developer based in{' '}
              {site.location}, working with businesses who need a brand and a
              website that actually match. My work spans logo and identity
              design, responsive web development, and interactive 3D web
              experiences built with Three.js &mdash; from dealership sites to
              exploded-view product viewers.
            </p>
            <p className="mt-4 max-w-lg text-cream/70 leading-relaxed">
              I also produce content for Happy Giggles Club, a children&rsquo;s
              YouTube channel, which keeps me sharp on pacing, visual clarity,
              and holding an audience&rsquo;s attention &mdash; skills that
              carry straight into how I design for the web.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid sm:grid-cols-4 gap-6 border-b border-navy/10">
        {facts.map((f, i) => (
          <Reveal key={f.label} delay={i * 80}>
            <p className="eyebrow mb-2">{f.label}</p>
            <p className="font-display text-lg text-navy-950">{f.value}</p>
          </Reveal>
        ))}
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <Reveal>
          <p className="eyebrow mb-4">How I Work</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 mb-12 max-w-lg">
            Three things that guide every project.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="border-t-2 border-gold pt-5 h-full">
                <h3 className="font-display text-xl text-navy-950 mb-3">{v.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-navy-950 text-cream py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow-light mb-6">Skills &amp; Tools</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-cream/20 px-4 py-2 font-mono text-xs tracking-wide uppercase text-cream/80 hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
