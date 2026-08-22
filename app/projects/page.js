import CornerFrame from '@/components/CornerFrame';
import Reveal from '@/components/Reveal';
import { projects, site } from '@/lib/data';

export const metadata = {
  title: `Projects — ${site.name}`,
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy-950 text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
          <Reveal>
            <p className="eyebrow-light mb-5">Selected Work</p>
            <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-[1.05]">
              A few things I&rsquo;ve designed and built.
            </h1>
            <p className="mt-6 max-w-lg text-cream/70 leading-relaxed">
              From dealership websites to interactive 3D product viewers &mdash;
              a look at recent design and development work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <CornerFrame
                className="border border-navy/10 bg-white p-7 flex flex-col h-full hover:border-gold/60 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="eyebrow mb-3">{p.category}</p>
                <h2 className="font-display text-xl text-navy-950 mb-3">{p.title}</h2>
                <p className="text-sm text-ink/65 leading-relaxed flex-1">{p.description}</p>
                <div className="mt-6 pt-5 border-t border-navy/10 flex items-center justify-between">
                  <ul className="flex flex-wrap gap-x-3 gap-y-1">
                    {p.tags.map((tag) => (
                      <li key={tag} className="font-mono text-[10px] tracking-wide uppercase text-navy-950/50">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="font-mono text-[10px] tracking-wide text-gold-dark whitespace-nowrap ml-3">
                    {p.year}
                  </span>
                </div>
              </CornerFrame>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
