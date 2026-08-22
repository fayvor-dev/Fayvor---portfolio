'use client';

import { useEffect, useState } from 'react';
import { IconWhatsApp } from '@/components/Icons';
import { site } from '@/lib/data';

export default function WhatsAppButton() {
  const [shown, setShown] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // Small entrance delay so it doesn't compete with the hero on first paint.
    const t = setTimeout(() => setShown(true), 600);
    return () => clearTimeout(t);
  }, []);

  const message = encodeURIComponent(
    `Hi ${site.name}, I found your portfolio and I'd like to talk about a project.`
  );

  return (
    <a
      href={`${site.whatsappHref}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-0.5 ${
        shown ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <span className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <IconWhatsApp className="relative h-7 w-7" />
      </span>
      <span
        className={`overflow-hidden whitespace-nowrap font-mono text-xs tracking-wide uppercase transition-all duration-300 ${
          hover ? 'max-w-[160px] pr-5 opacity-100' : 'max-w-0 pr-0 opacity-0'
        }`}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
