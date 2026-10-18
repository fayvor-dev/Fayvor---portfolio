'use client';

import { useEffect, useState } from 'react';
import { IconWhatsApp } from '@/components/Icons';
import { site } from '@/lib/data';

export default function WhatsAppButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 800);
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
      aria-label="Chat on WhatsApp (opens in a new tab)"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
