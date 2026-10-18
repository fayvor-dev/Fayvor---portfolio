'use client';

import { useEffect, useRef, useState } from 'react';

const W = 1280;
const H = 800;

/**
 * A real, scaled-down view of the deployed site inside a browser frame.
 * - Desktop: the iframe loads when the frame scrolls near the viewport
 *   (optionally after `defer` ms, so it never competes with first paint).
 * - Mobile / data-saver: nothing heavy loads until the visitor taps.
 * - Until the site loads (or if it cannot be framed) the placeholder
 *   shows only the project name, never a fake screenshot.
 */
export default function LivePreview({ url, title, tone, defer = 0 }) {
  const box = useRef(null);
  const [scale, setScale] = useState(0.4);
  const [canAuto, setCanAuto] = useState(false);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [requested, setRequested] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    setCanAuto(wide && !saveData);
  }, []);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!(canAuto && inView)) return;
    const t = setTimeout(() => setReady(true), defer);
    return () => clearTimeout(t);
  }, [canAuto, inView, defer]);

  const show = ready || requested;

  return (
    <div
      ref={box}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${W} / ${H}`, background: tone?.bg || '#161616' }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center"
        style={{ color: tone?.fg || '#F5F1E8' }}
      >
        <span className="font-display text-3xl sm:text-4xl">{title}</span>
        {!canAuto && !requested && (
          <button
            type="button"
            onClick={() => setRequested(true)}
            className="border px-4 py-2 text-sm font-medium"
            style={{ borderColor: 'currentColor' }}
          >
            Load live preview
          </button>
        )}
      </div>

      {show && (
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          className={`absolute left-0 top-0 origin-top-left border-0 bg-white transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: W, height: H, transform: `scale(${scale})`, pointerEvents: 'none' }}
        />
      )}
    </div>
  );
}
