import { useEffect, useRef, useState } from 'react';

export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/** True when the visitor prefers reduced motion. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const on = (e) => setReduced(e.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

/**
 * Runs `callback` once on mount and then on scroll / resize, throttled to
 * one call per animation frame. The latest callback is always used.
 */
export function useScrollFrame(callback) {
  const cb = useRef(callback);
  cb.current = callback;
  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      cb.current();
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(run);
    };
    cb.current();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
