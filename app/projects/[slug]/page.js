import Link from 'next/link';
import { notFound } from 'next/navigation';
import CategoryTag from '@/components/CategoryTag';
import CornerFrame from '@/components/CornerFrame';
import Glow from '@/components/Glow';
import Reveal from '@/components/Reveal';
import { IconArrow } from '@/components/Icons';
import { projects, site } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.title} — ${site.name}` };
}

const glowVariant = (category) =>
  category === '3D / Interactive' ? 'sage' : category === 'Web Development' ? 'clay' : 'lime';

export default function ProjectCaseStudyPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === params.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative overflow-hidden bg-maroon-950 text-bone">
        <Glow variant={glowVariant(project.category)} />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-16 sm:pt-18">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-bone/60 hover:text-lime transition-colors mb-8"
            >
              <IconArrow className="h-3.5 w-3.5 rotate-180" /> All Projects
            </Link>
            <CategoryTag category={project.category} className="mb-5" />
            <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-bone/70 leading-relaxed">{project.overview}</p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 bg-lime text-maroon-950 px-6 py-3 font-mono text-xs tracking-[0.15em] uppercase hover:bg-lime-light transition-colors"
              >
                Visit Live Site <IconArrow className="h-4 w-4 -rotate-45" />
              </a>
            )}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid md:grid-cols-[1fr_1.6fr] gap-12">
        <Reveal variant="left">
          <CornerFrame className="border border-maroon/15 p-6 space-y-6 sticky top-24">
            <div>
              <p className="eyebrow mb-2">Role</p>
              <p className="text-maroon-950 text-sm">{project.role}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Tools</p>
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[11px] tracking-wide uppercase text-maroon-950/70 border border-maroon/15 px-2.5 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-2">Year</p>
              <p className="text-maroon-950 text-sm">{project.year}</p>
            </div>
          </CornerFrame>
        </Reveal>

        <div>
          <Reveal variant="right">
            <p className="eyebrow mb-4">Approach</p>
          </Reveal>
          <div className="space-y-8">
            {project.approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 100} variant="right">
                <div className="flex gap-5">
                  <span className="font-display italic text-3xl text-lime flex-shrink-0 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-maroon-950 mb-1.5">{a.title}</h3>
                    <p className="text-sm text-ink/65 leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="scale" className="mt-12">
            <div className="border-t-2 border-lime pt-6">
              <p className="eyebrow mb-3">Result</p>
              <p className="font-display italic text-xl text-maroon-950 leading-relaxed max-w-xl">
                {project.result}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-lime text-maroon-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-maroon-950/60 mb-2">Next Project</p>
            <h2 className="font-display text-2xl sm:text-3xl">{next.title}</h2>
          </div>
          <Link
            href={`/projects/${next.slug}`}
            className="inline-flex items-center gap-2 bg-maroon-950 text-bone px-7 py-3.5 font-mono text-xs tracking-[0.15em] uppercase hover:bg-maroon-900 transition-colors whitespace-nowrap"
          >
            View Case Study <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
