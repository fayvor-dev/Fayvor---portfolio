import Link from 'next/link';
import { IconArrow, IconCode, IconCube, IconDesign } from '@/components/Icons';
import { process, services, site } from '@/lib/data';

export const metadata = {
  title: `Services — ${site.name}`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-14 sm:pt-20">
          <p className="eyebrow-light mb-5">What I Offer</p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl leading-[1.05]">
            Design and development, under one roof.
          </h1>
          <p className="mt-6 max-w-lg text-cream/70 leading-relaxed">
            Whether you need a brand from scratch, a website rebuilt, or an
            interactive 3D experience your competitors don&rsquo;t have &mdash;
            here&rsquo;s how I can help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 grid gap-8">
        {services.map((s, i) => {
          const Icon = [IconDesign, IconCode, IconCube][i];
          return (
            <div
              key={s.title}
              className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:items-center border border-navy/10 p-8 hover:border-gold/50 transition-colors"
            >
              <Icon className="h-12 w-12 text-gold" />
              <div>
                <p className="eyebrow mb-2">{s.tag}</p>
                <h2 className="font-display text-2xl text-navy-950 mb-3">{s.title}</h2>
                <p className="text-ink/65 leading-relaxed mb-4 max-w-xl">{s.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="font-mono text-[11px] tracking-wide uppercase text-navy-950/70 border border-navy/15 px-3 py-1.5"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

      {/* Process — numbered because it is a real, ordered sequence */}
      <section className="bg-cream border-t border-navy/10 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 mb-12 max-w-lg">
            How a project moves from idea to launch.
          </h2>
          <div className="grid sm:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step}>
                <span className="font-display italic text-4xl text-gold">{p.step}</span>
                <h3 className="font-display text-lg text-navy-950 mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold text-navy-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl max-w-md leading-tight">
            Not sure which service you need?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-950 text-cream px-7 py-3.5 font-mono text-xs tracking-[0.15em] uppercase hover:bg-navy-900 transition-colors whitespace-nowrap"
          >
            Tell me about your project <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
