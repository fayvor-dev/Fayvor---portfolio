import Link from 'next/link';
import Image from 'next/image';
import CornerFrame from '@/components/CornerFrame';
import Reveal from '@/components/Reveal';
import { IconArrow, IconCube, IconCode, IconDesign } from '@/components/Icons';
import { services, projects, skills, site } from '@/lib/data';

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 text-cream">
        <div className="pointer-events-none absolute inset-0 bg-noise" style={{ '--noise-image': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")" }} />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 grid md:grid-cols-[1.3fr_1fr] gap-12 items-end relative">
          <div className="animate-fadeUp">
            <p className="eyebrow-light mb-6">Portfolio &mdash; {site.location}</p>
            <h1 className="font-display text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl tracking-tight">
              Design &amp;
              <br />
              <span className="italic font-light text-gold">code,</span> built
              <br />
              to be used.
            </h1>
            <p className="mt-7 max-w-md text-cream/70 text-[15px] leading-relaxed">
              I&rsquo;m {site.name}, a graphic designer and web developer
              turning brand ideas into logos, responsive websites, and
              interactive 3D experiences that hold up in the real world.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-gold text-navy-950 px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-colors"
              >
                View Projects <IconArrow className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-cream/30 px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>

          <CornerFrame className="border border-cream/15 bg-navy-800/60 p-6 self-stretch">
            <p className="eyebrow-light mb-5">Currently Working In</p>
            <ul className="space-y-3 font-display text-xl italic text-cream/90">
              <li>Brand Identity</li>
              <li>Web Development</li>
              <li>Three.js / 3D Web</li>
            </ul>
            <div className="mt-8 pt-6 border-t border-cream/10 font-mono text-[11px] text-cream/50 tracking-wide">
              Based in Benin City, Edo State &mdash; open to remote clients
            </div>
          </CornerFrame>
        </div>

        {/* Skills marquee */}
        <div className="border-t border-gold/20 bg-navy-900 overflow-hidden">
          <div className="marquee-track py-4">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="mx-5 font-mono text-xs tracking-[0.2em] uppercase text-gold/80 whitespace-nowrap"
              >
                {skill} <span className="text-cream/20 ml-5">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-center overflow-hidden">
        <Reveal>
          <CornerFrame className="relative border border-navy/15 bg-navy-950 aspect-[4/5] overflow-hidden group">
            <Image
              src="/images/favour-portrait.jpg"
              alt={site.name}
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </CornerFrame>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight">
            A designer&rsquo;s eye, a developer&rsquo;s follow-through.
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            I work across brand design, front-end development, and 3D web
            experiences &mdash; from a car dealership&rsquo;s website to an
            interactive exploded-view product viewer. Every project starts
            the same way: understand what the brand needs to say, then build
            it so it actually works on a phone.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-navy-950 border-b border-gold pb-1 hover:text-gold-dark transition-colors"
          >
            More about me <IconArrow className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </section>

      {/* SERVICES TEASER */}
      <section className="bg-navy-950 text-cream py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <p className="eyebrow-light mb-4">What I Do</p>
                <h2 className="font-display text-3xl sm:text-4xl">Services</h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-gold border-b border-gold/50 pb-1 hover:border-gold transition-colors"
              >
                All services <IconArrow className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = [IconDesign, IconCode, IconCube][i];
              return (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="border border-cream/15 p-7 h-full hover:border-gold/60 hover:-translate-y-1 transition-all duration-300">
                    <Icon className="h-9 w-9 text-gold mb-6" />
                    <p className="eyebrow-light mb-2">{s.tag}</p>
                    <h3 className="font-display text-xl mb-3">{s.title}</h3>
                    <p className="text-sm text-cream/60 leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS TEASER */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="eyebrow mb-4">Selected Work</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-950">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-navy-950 border-b border-gold pb-1 hover:text-gold-dark transition-colors"
            >
              View all <IconArrow className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <CornerFrame className="border border-navy/10 bg-navy-950 text-cream p-6 flex flex-col justify-between min-h-[220px] hover:border-gold/40 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <p className="eyebrow-light mb-3">{p.category}</p>
                  <h3 className="font-display text-xl">{p.title}</h3>
                </div>
                <p className="mt-6 text-xs text-cream/50 font-mono">{p.year}</p>
              </CornerFrame>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold text-navy-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl max-w-md leading-tight">
            Have a brand or a website that needs building?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-950 text-cream px-7 py-3.5 font-mono text-xs tracking-[0.15em] uppercase hover:bg-navy-900 transition-colors whitespace-nowrap"
          >
            Let&rsquo;s Talk <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
