'use client';

import { useRef } from 'react';

function Wire({ z, accent, rows }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 h-[64%] w-[64%] rounded-xl border border-white/20 bg-ink/85 p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]"
      style={{ transform: `translate(-50%, -50%) translateZ(${z}px)` }}
    >
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      </div>
      <div className={`mt-3 h-[38%] rounded-md ${accent ? 'bg-electric' : 'bg-white/[0.08]'}`} />
      <div className="mt-3 space-y-2">
        {rows.map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-white/[0.12]" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

/**
 * Decorative stack of three wireframe screens. It only reacts to the pointer
 * (no constant motion) and is hidden from assistive technology.
 */
export default function HeroForm() {
  const wrap = useRef(null);
  const inner = useRef(null);

  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = wrap.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    inner.current.style.setProperty('--rz', `${x * 16}deg`);
    inner.current.style.setProperty('--rx', `${-y * 10}deg`);
  };
  const onLeave = () => {
    inner.current.style.setProperty('--rz', '0deg');
    inner.current.style.setProperty('--rx', '0deg');
  };

  return (
    <div
      ref={wrap}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-hidden="true"
      className="relative mx-auto h-[250px] w-full max-w-[520px] sm:h-[310px] lg:ml-auto lg:h-[340px]"
      style={{ perspective: '1100px' }}
    >
      <div
        ref={inner}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(calc(58deg + var(--rx, 0deg))) rotateZ(calc(-36deg + var(--rz, 0deg)))',
        }}
      >
        <Wire z={0} rows={[80, 55, 68]} />
        <Wire z={44} rows={[60, 78, 40]} />
        <Wire z={88} accent rows={[72, 46, 62]} />
      </div>
    </div>
  );
}
