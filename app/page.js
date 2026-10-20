import Image from 'next/image';
import AppDownload from '@/components/AppDownload';
import ContactForm from '@/components/ContactForm';
import HeroForm from '@/components/HeroForm';
import { IconArrowDown, IconArrowUpRight, IconGithub } from '@/components/Icons';
import Magnetic from '@/components/Magnetic';
import ProjectMarquee from '@/components/ProjectMarquee';
import Reveal from '@/components/Reveal';
import ScrollWords from '@/components/ScrollWords';
import StackedProjects from '@/components/StackedProjects';
import { featuredProjects, nairaSense, services, site, tools, visibleProjects } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* ------------------------------ HERO ------------------------------ */}
      <section id="top" className="relative flex min-h-[100svh] flex-col justify-center pb-14 pt-28">
        <div className="wrap">
          <p className="fade-rise mb-6 text-sm text-mist-dim" style={{ '--d': '0ms' }}>
            {site.location} · Open to remote projects
          </p>

          <h1 className="font-display text-[clamp(2.75rem,11vw,9.5rem)] font-extrabold leading-[0.92]">
            <span className="mask-line">
              <span className="silver" style={{ '--d': '80ms' }}>Web designer</span>
            </span>
            <span className="mask-line">
              <span className="silver" style={{ '--d': '200ms' }}>
                &amp; developer<span className="text-electric">.</span>
              </span>
            </span>
          </h1>

          <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="fade-rise max-w-md text-lg leading-relaxed text-mist/85" style={{ '--d': '420ms' }}>
                I design and build responsive, user-friendly websites that help businesses establish a stronger
                online presence.
              </p>
              <div className="fade-rise mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ '--d': '560ms' }}>
                <Magnetic>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-electric px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-electric-600"
                  >
                    Start a project
                    <IconArrowUpRight className="h-4 w-4" />
                  </a>
                </Magnetic>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-mist underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                >
                  See the work
                  <IconArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="fade-rise lg:col-span-6 lg:col-start-7" style={{ '--d': '700ms' }}>
              <HeroForm />
            </div>
          </div>
        </div>

        <div className="wrap mt-10 hidden lg:block">
          <a href="#work" className="inline-flex items-center gap-3 text-sm text-mist-dim transition-colors hover:text-white">
            <span className="scroll-cue relative block h-10 w-px overflow-hidden bg-white/15" aria-hidden="true" />
            Scroll
          </a>
        </div>
      </section>

      {/* --------------------------- WORK MARQUEE --------------------------- */}
      <section id="work" className="border-t border-white/10 py-20 lg:py-28" aria-label="Websites I have built">
        <div className="wrap mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {visibleProjects.length} websites, live on the web.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-mist-dim">
            Independent redesign concepts and original portfolio builds. None were commissioned by, or are endorsed
            by, the businesses shown.
          </p>
        </div>
        <ProjectMarquee projects={visibleProjects} />
      </section>

      {/* ------------------------------ ABOUT ------------------------------ */}
      <section id="about" className="border-t border-white/10 py-24 lg:py-36">
        <div className="wrap">
          <Reveal>
            <h2 className="silver font-display text-[clamp(4rem,16vw,12rem)] font-extrabold leading-[0.9]">About</h2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
            <Reveal variant="left" className="lg:col-span-4">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 lg:mx-0">
                <Image
                  src="/images/favour-portrait.jpg"
                  alt={`Portrait of ${site.name}`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-8">
              <ScrollWords
                className="font-display text-[clamp(1.75rem,4.2vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white"
                text="I design and build responsive, user-friendly websites that help businesses establish a stronger online presence, from the first layout to the live deployment."
              />

              <Reveal className="mt-10 max-w-xl space-y-5 text-[17px] leading-relaxed text-mist/80">
                <p>
                  I&rsquo;m {site.name}, a web designer and developer in {site.location}, working with businesses
                  anywhere. Much of my portfolio is redesign work: taking an existing business website and building a
                  clearer, more confident version in Next.js, alongside original concepts where I can push motion and
                  3D further.
                </p>
                <ul className="flex flex-wrap gap-2 pt-2" aria-label="Tools I use">
                  {tools.map((t) => (
                    <li key={t} className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-mist/85">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- SERVICES ----------------------------- */}
      <section id="services" className="on-light bg-paper py-24 text-ink lg:py-36">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display text-[clamp(4rem,16vw,12rem)] font-extrabold leading-[0.9] text-ink">
              Services
            </h2>
          </Reveal>

          <ul className="mt-14 border-b border-ink/15 lg:mt-20">
            {services.map((s, i) => (
              <li key={s.title} className="border-t border-ink/15">
                <Reveal delay={i * 60}>
                  <div className="group grid gap-3 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10">
                    <span className="font-display text-xl font-bold tabular-nums text-ink/40 transition-colors group-hover:text-electric-600 md:col-span-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-3xl font-extrabold leading-[1.02] transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl md:col-span-6">
                      {s.title}
                    </h3>
                    <p className="max-w-md text-[16px] leading-relaxed text-ink/70 md:col-span-4">{s.description}</p>
                    <span className="hidden justify-self-end md:col-span-1 md:block" aria-hidden="true">
                      <IconArrowUpRight className="h-6 w-6 text-ink/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric-600" />
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------- PROJECTS ----------------------------- */}
      <section id="projects" className="py-24 lg:py-36">
        <div className="wrap">
          <Reveal>
            <h2 className="silver font-display text-[clamp(3.5rem,14vw,11rem)] font-extrabold leading-[0.9]">
              Projects
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mist/80">
              {featuredProjects.length} websites, each live and open to explore. These are independent redesign
              concepts and original portfolio builds, not commissioned work.
            </p>
          </Reveal>

          <div className="mt-14 lg:mt-20">
            <StackedProjects projects={featuredProjects} />
          </div>
        </div>
      </section>

      {nairaSense.available && <AppDownload />}

      {/* ----------------------------- CONTACT ----------------------------- */}
      <section id="contact" className="border-t border-white/10 py-24 lg:py-36">
        <div className="wrap">
          <Reveal>
            <h2 className="silver font-display text-[clamp(3rem,12vw,9.5rem)] font-extrabold leading-[0.92]">
              Have a project in mind?
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
            <Reveal variant="left" className="lg:col-span-5">
              <p className="max-w-md text-[17px] leading-relaxed text-mist/80">
                Tell me about your business and what you&rsquo;d like to build: a new website, a redesign, or
                something more interactive.
              </p>

              <ul className="mt-10 space-y-6">
                <li>
                  <p className="text-sm text-mist-dim">Email</p>
                  <a
                    href={site.emailHref}
                    className="mt-1 inline-block break-all text-xl font-semibold underline decoration-white/30 underline-offset-4 transition-colors hover:text-electric-300 sm:text-2xl"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="text-sm text-mist-dim">WhatsApp</p>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xl font-semibold underline decoration-white/30 underline-offset-4 transition-colors hover:text-electric-300 sm:text-2xl"
                  >
                    {site.phone}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <p className="text-sm text-mist-dim">Location</p>
                  <p className="mt-1 text-xl font-semibold sm:text-2xl">{site.location}</p>
                </li>
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-mist transition-colors hover:text-electric-300"
                  >
                    <IconGithub className="h-4 w-4" /> GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal variant="right" delay={120} className="lg:col-span-7">
              <div className="rounded-[2rem] border border-white/10 bg-ink-900 p-6 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
