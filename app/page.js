import Image from 'next/image';
import AppDownload from '@/components/AppDownload';
import HeroStack from '@/components/HeroStack';
import MoreProjects from '@/components/MoreProjects';
import ProjectFeature from '@/components/ProjectFeature';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { IconArrowDown, IconArrowRight, IconArrowUpRight } from '@/components/Icons';
import {
  featuredProjects,
  moreProjects,
  nairaSense,
  services,
  site,
  skillGroups,
  visibleProjects,
} from '@/lib/data';

const bySlug = (slug) => visibleProjects.find((p) => p.slug === slug);

export default function HomePage() {
  const heroFront = bySlug('zenith-drive');
  const heroBackOne = bySlug('skyvora');
  const heroBackTwo = bySlug('veloura-patisserie');

  return (
    <>
      {/* ------------------------------ HERO ------------------------------ */}
      <section id="top" className="relative">
        <div className="wrap grid items-center gap-14 py-12 lg:min-h-[calc(100svh-9.5rem)] lg:grid-cols-12 lg:gap-10 lg:py-16">
          <div className="lg:col-span-7">
            <p
              className="fade-rise inline-flex items-center gap-2.5 border border-charcoal/15 bg-ivory-50 px-3.5 py-1.5 text-sm"
              style={{ '--d': '0ms' }}
            >
              <span className="pulse-dot h-2 w-2 rounded-full bg-cobalt" aria-hidden="true" />
              Open to remote projects · Benin City, Nigeria
            </p>

            <h1 className="mt-7 text-[clamp(2.25rem,7vw,4rem)] font-semibold leading-[1.02] lg:text-[clamp(3rem,5vw,4.6rem)]">
              <span className="mask-line"><span style={{ '--d': '80ms' }}>Designing digital</span></span>
              <span className="mask-line"><span style={{ '--d': '160ms' }}>experiences that</span></span>
              <span className="mask-line"><span style={{ '--d': '240ms' }}>move businesses</span></span>
              <span className="mask-line">
                <span style={{ '--d': '320ms' }}>
                  <span className="font-display text-[1.08em] font-normal italic text-cobalt">forward.</span>
                </span>
              </span>
            </h1>

            <p className="fade-rise mt-7 max-w-lg text-lg leading-relaxed text-charcoal/75" style={{ '--d': '480ms' }}>
              I&rsquo;m {site.name}. I design and build websites, create brand identities, and develop interactive
              digital experiences for businesses that want to look as good as they work.
            </p>

            <div className="fade-rise mt-9 flex flex-wrap items-center gap-4" style={{ '--d': '600ms' }}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 bg-cobalt px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-cobalt-600"
              >
                Explore my work
                <IconArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border border-charcoal px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-charcoal hover:text-ivory"
              >
                Let&rsquo;s work together
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Desktop: layered browser panels. Mobile: a light list instead. */}
          <div className="fade-rise hidden lg:col-span-5 lg:block" style={{ '--d': '350ms' }}>
            <HeroStack front={heroFront} backOne={heroBackOne} backTwo={heroBackTwo} />
            <p className="mt-6 text-center text-sm text-muted">
              Live preview of{' '}
              <a
                href={heroFront.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-charcoal underline underline-offset-4 hover:text-cobalt"
              >
                {heroFront.title}
              </a>
            </p>
          </div>

          <div className="fade-rise lg:hidden" style={{ '--d': '700ms' }}>
            <p className="label mb-3">Recent concepts</p>
            <ul className="divide-y divide-charcoal/15 border-y border-charcoal/15">
              {[heroFront, heroBackOne, heroBackTwo].map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-4 font-display text-2xl"
                  >
                    <span>
                      {p.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                    <IconArrowUpRight className="h-5 w-5 text-cobalt" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="wrap hidden pb-10 lg:block">
          <a href="#work" className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-charcoal">
            <span className="scroll-cue relative block h-10 w-px overflow-hidden bg-charcoal/20" aria-hidden="true" />
            Scroll to see the work
          </a>
        </div>
      </section>

      {/* ------------------------------ WORK ------------------------------ */}
      <section id="work" className="border-t border-charcoal/10 py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="label">Selected work</p>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
                  Websites, designed and built end to end.
                </h2>
              </div>
              <p className="max-w-md text-[15px] leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
                Most of these are independent redesign concepts or original portfolio builds. None were commissioned
                by, or are endorsed by, the businesses shown. Every preview is the real deployed site.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 space-y-24 lg:mt-20 lg:space-y-32">
            {featuredProjects.map((p, i) => (
              <ProjectFeature
                key={p.slug}
                project={p}
                number={String(i + 1).padStart(2, '0')}
                variant={i === 0 ? 'full' : i % 2 === 1 ? 'left' : 'right'}
              />
            ))}
          </div>

          <div className="mt-28 lg:mt-36">
            <MoreProjects projects={moreProjects} startIndex={featuredProjects.length + 1} />
          </div>
        </div>
      </section>

      {/* ------------------------------ ABOUT ------------------------------ */}
      <section id="about" className="bg-ivory-200 py-24 lg:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="left" className="lg:col-span-5">
            <div className="relative mx-auto max-w-[420px] lg:mx-0">
              <div className="absolute -bottom-4 -right-4 h-full w-full bg-cobalt" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                <Image
                  src="/images/favour-portrait.jpg"
                  alt={`Portrait of ${site.name}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100} className="lg:col-span-7">
            <p className="label">About</p>
            <p className="mt-4 font-display text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
              I design and build websites that look considered and work properly on a phone.
            </p>
            <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-relaxed text-charcoal/80">
              <p>
                I&rsquo;m {site.name}, a web designer and developer in {site.location}, working with businesses
                anywhere. I combine visual design, practical frontend development and brand presentation to build
                websites for real businesses.
              </p>
              <p>
                Much of my portfolio is redesign work: taking a local or hospitality business and imagining a
                clearer, more confident website, then building it in Next.js. Alongside that I make original
                concepts like SKYVORA and Veloura Pâtisserie, where I can push motion, interaction and 3D further.
              </p>
              <p>
                I care about the practical parts too: layouts that hold up on small screens, text people can read
                comfortably, and a clear path to getting in touch.
              </p>
            </div>
            <dl className="mt-10 grid gap-6 border-t border-charcoal/15 pt-8 sm:grid-cols-3">
              <div>
                <dt className="label">Based in</dt>
                <dd className="mt-1 font-medium">Benin City, Nigeria</dd>
              </div>
              <div>
                <dt className="label">Availability</dt>
                <dd className="mt-1 font-medium">Open to remote projects</dd>
              </div>
              <div>
                <dt className="label">Focus</dt>
                <dd className="mt-1 font-medium">Design and development</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------- SERVICES ----------------------------- */}
      <section id="services" className="py-24 lg:py-32">
        <div className="wrap">
          <Reveal>
            <p className="label">Services</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
              What I can build for you.
            </h2>
          </Reveal>

          <ul className="mt-14 border-b border-charcoal/15">
            {services.map((s, i) => (
              <li key={s.title} className="border-t border-charcoal/15">
                <Reveal delay={i * 70}>
                  <div className="group grid gap-4 py-9 transition-colors md:grid-cols-12 md:gap-8">
                    <span className="text-sm tabular-nums text-muted md:col-span-1 md:pt-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-3xl leading-tight transition-colors group-hover:text-cobalt md:col-span-5 lg:text-4xl">
                      {s.title}
                    </h3>
                    <div className="md:col-span-6">
                      <p className="max-w-lg text-[17px] leading-relaxed text-charcoal/75">{s.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.keywords.map((k) => (
                          <li key={k} className="border border-charcoal/20 px-2.5 py-1 text-[13px] text-charcoal/80">
                            {k}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-20">
            <p className="label">Tools I work with</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((g) => (
                <div key={g.title} className="border-t-2 border-charcoal pt-4">
                  <h3 className="text-[17px] font-semibold">{g.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-[15px] text-charcoal/75">
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {nairaSense.available && <AppDownload />}

      {/* ----------------------------- CONTACT ----------------------------- */}
      <section id="contact" className="on-dark bg-charcoal py-24 text-ivory lg:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <Reveal variant="left" className="lg:col-span-6">
            <p className="text-sm font-medium text-ivory/55">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
              Have something{' '}
              <span className="font-display text-[1.08em] font-normal italic text-cobalt-300">worth building?</span>
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ivory/70">
              Tell me about your next website, brand identity or interactive experience, and I&rsquo;ll get back to
              you.
            </p>

            <ul className="mt-10 space-y-5">
              <li>
                <p className="text-sm text-ivory/50">Email</p>
                <a
                  href={site.emailHref}
                  className="mt-1 inline-block break-all text-xl font-medium underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-cobalt-300 sm:text-2xl"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-sm text-ivory/50">WhatsApp</p>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xl font-medium underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-cobalt-300 sm:text-2xl"
                >
                  {site.phone}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <p className="text-sm text-ivory/50">Location</p>
                <p className="mt-1 text-xl font-medium sm:text-2xl">{site.location}</p>
              </li>
            </ul>
          </Reveal>

          <Reveal variant="right" delay={120} className="lg:col-span-6">
            <div className="border border-ivory/15 p-6 sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
