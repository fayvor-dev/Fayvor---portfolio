import Link from 'next/link';
import CategoryTag from '@/components/CategoryTag';
import CornerFrame from '@/components/CornerFrame';
import Glow from '@/components/Glow';
import Reveal from '@/components/Reveal';
import { IconArrow } from '@/components/Icons';
import { projects, site } from '@/lib/data';

export const metadata = {
  title: `Projects — ${site.name}`,
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon-950 text-bone">
        <Glow variant="lime" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
          <Reveal>
            <p className="eyebrow-light mb-5">Selected Work</p>
            <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-[1.05]">
              A few things I&rsquo;ve designed and built.
            </h1>
            <p className="mt-6 max-w-lg text-bone/70 leading-relaxed">
              From dealership websites to interactive 3D product viewers &mdash;
              a look at recent design and development work. Open a project
              for the full case study.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100} variant={i % 2 === 0 ? 'up' : 'scale'}>
              <Link href={`/projects/${p.slug}`} className="block h-full group">
                <CornerFrame
                  className="border border-maroon/10 bg-white p-7 flex flex-col h-full hover:border-lime/60 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <CategoryTag category={p.category} />
                    {p.url && (
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-clay-dark/70 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-clay animate-pulse" /> Live
                      </span>
                    )}
                  </div>
                  <h2 className="font-display text-xl text-maroon-950 mb-3">{p.title}</h2>
                  <p className="text-sm text-ink/65 leading-relaxed flex-1">{p.description}</p>
                  <div className="mt-6 pt-5 border-t border-maroon/10 flex items-center justify-between">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1">
                      {p.tags.map((tag) => (
                        <li key={tag} className="font-mono text-[10px] tracking-wide uppercase text-maroon-950/50">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-wide text-clay-dark whitespace-nowrap ml-3 group-hover:gap-2 transition-all">
                      Case study <IconArrow className="h-3 w-3" />
                    </span>
                  </div>
                </CornerFrame>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
