'use client';

import { useState } from 'react';
import { IconArrowUpRight } from '@/components/Icons';
import { kindLabel } from '@/lib/data';

const INITIAL = 5;

export default function MoreProjects({ projects, startIndex }) {
  const [open, setOpen] = useState(false);
  const shown = open ? projects : projects.slice(0, INITIAL);
  const hidden = projects.length - INITIAL;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">More concepts</h3>
        <p className="text-sm text-muted">{projects.length} further live sites</p>
      </div>

      <ul id="more-projects" className="border-b border-charcoal/15">
        {shown.map((p, i) => (
          <li key={p.slug}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-4 border-t border-charcoal/15 px-1 py-5 transition-colors hover:bg-ivory-200/60 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.3fr)_auto]"
            >
              <span className="text-sm tabular-nums text-muted">{String(startIndex + i).padStart(2, '0')}</span>
              <span>
                <span className="block font-display text-2xl leading-tight sm:text-[1.75rem]">{p.title}</span>
                <span className="mt-1 block text-sm text-muted">
                  {p.categories.join(' · ')} · {kindLabel[p.kind]}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-charcoal/70 md:hidden">{p.description}</span>
              </span>
              <span className="hidden text-[15px] leading-relaxed text-charcoal/70 md:block">{p.description}</span>
              <span className="flex items-center gap-2 text-sm font-medium">
                <span className="hidden sm:inline">View live</span>
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="sr-only">{p.title} (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="more-projects"
          className="mt-8 inline-flex items-center gap-2 border border-charcoal px-5 py-3 text-[15px] font-semibold transition-colors hover:bg-charcoal hover:text-ivory"
        >
          {open ? 'Show fewer' : `Show all ${projects.length} concepts`}
        </button>
      )}
    </div>
  );
}
