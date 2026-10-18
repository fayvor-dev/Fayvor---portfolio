'use client';

import { useRef } from 'react';
import BrowserFrame from '@/components/BrowserFrame';
import LivePreview from '@/components/LivePreview';

function Poster({ project }) {
  return (
    <div
      className="flex aspect-[16/10] items-center justify-center p-4 text-center"
      style={{ background: project.tone.bg, color: project.tone.fg }}
    >
      <span className="font-display text-2xl">{project.title}</span>
    </div>
  );
}

export default function HeroStack({ front, backOne, backTwo }) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty('--ry', `${x * 8}deg`);
    ref.current.style.setProperty('--rx', `${-y * 6}deg`);
  };
  const onLeave = () => {
    ref.current.style.setProperty('--ry', '0deg');
    ref.current.style.setProperty('--rx', '0deg');
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[560px]"
      style={{ perspective: '1400px', aspectRatio: '1 / 1.02' }}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
      >
        <div className="absolute left-0 top-0 w-[72%]" style={{ transform: 'rotate(-5deg) translateZ(-50px)' }}>
          <BrowserFrame url={backOne.url}>
            <Poster project={backOne} />
          </BrowserFrame>
        </div>
        <div className="absolute right-0 top-[20%] w-[70%]" style={{ transform: 'rotate(4deg) translateZ(-20px)' }}>
          <BrowserFrame url={backTwo.url}>
            <Poster project={backTwo} />
          </BrowserFrame>
        </div>
        <div className="absolute bottom-0 left-[4%] w-[88%]" style={{ transform: 'rotate(-1.5deg) translateZ(30px)' }}>
          <BrowserFrame url={front.url}>
            <LivePreview url={front.url} title={front.title} tone={front.tone} defer={1400} />
          </BrowserFrame>
        </div>
      </div>
    </div>
  );
}
