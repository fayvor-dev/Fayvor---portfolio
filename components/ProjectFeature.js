import BrowserFrame from '@/components/BrowserFrame';
import LivePreview from '@/components/LivePreview';
import Reveal from '@/components/Reveal';
import { IconArrowUpRight, IconGithub } from '@/components/Icons';
import { kindLabel } from '@/lib/data';

function Info({ project, number, wide = false }) {
  return (
    <div className={wide ? 'grid gap-8 lg:grid-cols-12' : ''}>
      <div className={wide ? 'lg:col-span-6' : ''}>
        <p className="label">
          <span className="tabular-nums">{number}</span>
          <span className="mx-2 text-charcoal/25">/</span>
          {project.categories.join(' · ')}
        </p>
        <h3 className="mt-3 font-display text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">{project.title}</h3>
        <p className="mt-3 text-sm text-muted">{kindLabel[project.kind]}</p>
      </div>
      <div className={wide ? 'lg:col-span-6 lg:pt-1' : 'mt-5'}>
        <p className="max-w-md text-[17px] leading-relaxed text-charcoal/80">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="border border-charcoal/20 px-2.5 py-1 text-[13px] text-charcoal/80">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live concept: ${project.title} (opens in a new tab)`}
            className="group/link inline-flex items-center gap-2 bg-charcoal px-5 py-3 text-[15px] font-semibold text-ivory transition-colors hover:bg-cobalt"
          >
            View live concept
            <IconArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source on GitHub: ${project.title} (opens in a new tab)`}
              className="link-line inline-flex items-center gap-2 text-[15px] font-medium"
            >
              <IconGithub className="h-4 w-4" /> Source on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * variant: 'full'  -> preview spans the full width, info underneath
 *          'left'  -> preview left, info right
 *          'right' -> info left, preview right
 */
export default function ProjectFeature({ project, number, variant }) {
  const frame = (
    <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
      <BrowserFrame url={project.url}>
        <LivePreview url={project.url} title={project.title} tone={project.tone} />
      </BrowserFrame>
    </div>
  );

  if (variant === 'full') {
    return (
      <article className="group">
        <Reveal>{frame}</Reveal>
        <Reveal delay={120} className="mt-10">
          <Info project={project} number={number} wide />
        </Reveal>
      </article>
    );
  }

  const frameFirst = variant === 'left';
  return (
    <article className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal
        variant={frameFirst ? 'left' : 'right'}
        className={`lg:col-span-7 ${frameFirst ? '' : 'lg:order-2'}`}
      >
        {frame}
      </Reveal>
      <Reveal
        variant={frameFirst ? 'right' : 'left'}
        delay={120}
        className={`lg:col-span-5 ${frameFirst ? '' : 'lg:order-1'}`}
      >
        <Info project={project} number={number} />
      </Reveal>
    </article>
  );
}
