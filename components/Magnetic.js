'use client';

import { useRef } from 'react';

/** Nudges its child toward the pointer. Only on fine pointers, never with reduced motion. */
export default function Magnetic({ children, strength = 0.3 }) {
  const area = useRef(null);
  const inner = useRef(null);

  const enabled = () =>
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e) => {
    if (!enabled()) return;
    const r = area.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    inner.current.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };
  const onLeave = () => {
    inner.current.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <div ref={area} onPointerMove={onMove} onPointerLeave={onLeave} className="-m-5 inline-block p-5">
      <div ref={inner} className="transition-transform duration-200 ease-out will-change-transform">
        {children}
      </div>
    </div>
  );
}
