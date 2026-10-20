'use client';

import { useRef } from 'react';
import { clamp, useReducedMotion, useScrollFrame } from '@/lib/scroll';

/** Text whose words brighten one by one as it scrolls into view. The text stays real, selectable text. */
export default function ScrollWords({ text, className = '' }) {
  const box = useRef(null);
  const reduced = useReducedMotion();
  const words = text.split(' ');

  useScrollFrame(() => {
    const el = box.current;
    if (!el) return;
    const spans = el.querySelectorAll('[data-w]');
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = reduced ? 1 : clamp((vh * 0.85 - r.top) / (r.height + vh * 0.3));
    const n = spans.length;
    spans.forEach((s, i) => {
      s.style.opacity = String(0.22 + 0.78 * clamp(p * (n + 3) - i));
    });
  });

  return (
    <p ref={box} className={className}>
      {words.map((w, i) => (
        <span key={i} data-w className="reveal-word transition-opacity duration-150" style={{ opacity: 0.3 }}>
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  );
}
