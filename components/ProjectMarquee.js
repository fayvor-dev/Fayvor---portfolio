'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { IconArrowUpRight } from '@/components/Icons';
import { clamp, useReducedMotion, useScrollFrame } from '@/lib/scroll';

const TRAVEL = 640; // px each track travels while the section crosses the screen

function Item({ project, hidden }) {
  const host = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const tone = project.tone || { bg: '#1B1B1B', fg: '#D7E2EA' };
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      aria-label={`${project.title}: view live site (opens in a new tab)`}
      className="group block w-[280px] shrink-0 sm:w-[360px]"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ background: tone.bg }}
      >
        {project.image ? (
          <Image src={project.image} alt="" fill sizes="360px" className="object-cover" loading="lazy" />
        ) : (
          <div className="flex h-full flex-col justify-between p-5" style={{ color: tone.fg }}>
            <span className="text-xs opacity-70">{host}</span>
            <span className="font-display text-2xl font-extrabold leading-none sm:text-3xl">{project.title}</span>
          </div>
        )}
      </div>
      <p className="mt-3 flex items-center justify-between text-sm text-mist-dim transition-colors group-hover:text-white">
        <span>{project.categories.join(' · ')}</span>
        <IconArrowUpRight className="h-4 w-4" />
      </p>
    </a>
  );
}

function Track({ projects, trackRef, reduced }) {
  const copies = reduced ? [false] : [false, true];
  return (
    <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
      {copies.map((isCopy) =>
        projects.map((p) => <Item key={`${isCopy}-${p.slug}`} project={p} hidden={isCopy} />)
      )}
    </div>
  );
}

/**
 * Two rows of project cards that slide in opposite directions as the page
 * scrolls. With reduced motion they become two ordinary scrollable rows.
 */
export default function ProjectMarquee({ projects }) {
  const section = useRef(null);
  const trackA = useRef(null);
  const trackB = useRef(null);
  const reduced = useReducedMotion();

  const rowA = projects.filter((_, i) => i % 2 === 0);
  const rowB = projects.filter((_, i) => i % 2 === 1);

  useScrollFrame(() => {
    if (!section.current || !trackA.current || !trackB.current) return;
    if (reduced) {
      trackA.current.style.transform = 'none';
      trackB.current.style.transform = 'none';
      return;
    }
    const r = section.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = clamp((vh - r.top) / (vh + r.height));
    trackA.current.style.transform = `translate3d(${-p * TRAVEL}px, 0, 0)`;
    trackB.current.style.transform = `translate3d(${(p - 1) * TRAVEL}px, 0, 0)`;
  });

  return (
    <div ref={section} className="space-y-6 py-2">
      <div className={reduced ? 'overflow-x-auto pb-2' : 'overflow-hidden'}>
        <div className="wrap">
          <Track projects={rowA} trackRef={trackA} reduced={reduced} />
        </div>
      </div>
      <div className={reduced ? 'overflow-x-auto pb-2' : 'overflow-hidden'}>
        <div className="wrap">
          <Track projects={rowB} trackRef={trackB} reduced={reduced} />
        </div>
      </div>
    </div>
  );
}
