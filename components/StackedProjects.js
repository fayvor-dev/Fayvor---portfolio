'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import BrowserFrame from '@/components/BrowserFrame';
import LivePreview from '@/components/LivePreview';
import { IconArrowUpRight, IconGithub } from '@/components/Icons';
import { kindLabel } from '@/lib/data';
import { clamp, useReducedMotion, useScrollFrame } from '@/lib/scroll';

function Preview({ project, live }) {
  if (project.image) {
    return (
      <BrowserFrame url={project.url || 'preview'}>
        <div className="relative aspect-[16/10]">
          <Image src={project.image} alt={`${project.title} website screenshot`} fill sizes="(min-width: 768px) 56vw, 92vw" className="object-cover object-top" />
        </div>
      </BrowserFrame>
    );
  }
  return (
    <BrowserFrame url={project.url}>
      <LivePreview url={project.url} title={project.title} tone={project.tone} enabled={live} />
    </BrowserFrame>
  );
}

function Card({ project, index, total, cardRef, live }) {
  return (
    <div
      className="stack-wrap mb-6 md:sticky md:top-0 md:mb-0 md:h-screen md:pt-[calc(5.5rem_+_var(--off))]"
      style={{ '--off': `${index * 18}px` }}
    >
      <div
        ref={cardRef}
        style={{ transformOrigin: '50% 0%' }}
        className="stack-card grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 p-6 will-change-transform md:h-[min(78vh,640px)] md:grid-cols-12 md:gap-10 md:p-10"
      >
        <div className="flex flex-col justify-between md:col-span-5">
          <div>
            <p className="text-sm text-mist-dim">
              <span className="tabular-nums text-mist">{String(index + 1).padStart(2, '0')}</span>
              <span className="mx-2 text-white/20">/</span>
              <span className="tabular-nums">{String(total).padStart(2, '0')}</span>
              <span className="mx-3 text-white/20">·</span>
              {project.categories.join(' · ')}
            </p>
            <h3 className="silver mt-4 font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl lg:text-6xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-electric-300">{kindLabel[project.kind]}</p>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-mist/80">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-mist/85">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-0">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live site: ${project.title} (opens in a new tab)`}
                className="group/link inline-flex items-center gap-2 rounded-full bg-mist px-5 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-white"
              >
                View live site
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center rounded-full border border-white/15 px-5 py-3 text-[15px] text-mist-dim"
              >
                Live link unavailable
              </span>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source on GitHub: ${project.title} (opens in a new tab)`}
                className="inline-flex items-center gap-2 text-[15px] font-medium text-mist underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
              >
                <IconGithub className="h-4 w-4" /> Source on GitHub
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center md:col-span-7">
          <div className="w-full">
            <Preview project={project} live={live} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Sticky stacking cards. As each new card slides up, the ones beneath it
 * scale down slightly. On small screens or with reduced motion the cards
 * are an ordinary vertical list.
 */
export default function StackedProjects({ projects }) {
  const wrap = useRef(null);
  const cards = useRef([]);
  const reduced = useReducedMotion();
  const n = projects.length;
  // Only the card on top of the stack runs a live preview, plus the next card
  // once it has slid part-way in. Covered cards would otherwise keep their
  // embedded websites animating for nothing. `gated` is false for the plain
  // list layout (mobile / reduced motion), where each preview manages itself.
  const [live, setLive] = useState({ front: 0, end: 0 });
  const liveRef = useRef(live);
  const [gated, setGated] = useState(true);
  const gatedRef = useRef(true);

  useScrollFrame(() => {
    const el = wrap.current;
    if (!el) return;
    const desktop = window.matchMedia('(min-width: 768px)').matches;
    const isGated = desktop && !reduced;
    if (isGated !== gatedRef.current) {
      gatedRef.current = isGated;
      setGated(isGated);
    }
    if (!isGated) {
      cards.current.forEach((c) => c && (c.style.transform = ''));
      return;
    }
    const r = el.getBoundingClientRect();
    const total = r.height - window.innerHeight;
    const p = clamp(-r.top / (total > 0 ? total : 1));
    const seg = p * (n - 1);
    const front = n > 1 ? Math.min(n - 1, Math.floor(seg + 1e-6)) : 0;
    const end = front < n - 1 && seg - front > 0.4 ? front + 1 : front;
    if (front !== liveRef.current.front || end !== liveRef.current.end) {
      liveRef.current = { front, end };
      setLive(liveRef.current);
    }
    cards.current.forEach((c, i) => {
      if (!c) return;
      const start = n > 1 ? i / (n - 1) : 0;
      const target = 1 - (n - 1 - i) * 0.045;
      const local = i === n - 1 ? 0 : clamp((p - start) / (1 - start));
      c.style.transform = `scale(${1 - (1 - target) * local})`;
    });
  });

  return (
    <div ref={wrap}>
      {projects.map((p, i) => (
        <Card
          key={p.slug}
          project={p}
          index={i}
          total={n}
          live={!gated || i === live.front || i === live.end}
          cardRef={(node) => {
            cards.current[i] = node;
          }}
        />
      ))}
    </div>
  );
}
