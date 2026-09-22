import Reveal from '@/components/Reveal';
import { testimonials } from '@/lib/data';

/**
 * Intentionally renders nothing when `testimonials` is empty, rather than
 * showing placeholder/invented quotes. Add real ones to lib/data.js —
 * e.g. { quote: '...', name: 'Client Name', role: 'Their role / company' }
 * — and this section appears automatically.
 */
export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="bg-bone py-20 border-t border-maroon/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-4">Client Feedback</p>
          <h2 className="font-display text-3xl sm:text-4xl text-maroon-950 mb-12 max-w-lg">
            What clients say.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} variant="scale">
              <figure className="border-t-2 border-lime pt-6 h-full flex flex-col">
                <blockquote className="font-display italic text-lg text-maroon-950 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-mono text-xs tracking-wide uppercase text-ink/50">
                  {t.name}{t.role ? ` — ${t.role}` : ''}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
