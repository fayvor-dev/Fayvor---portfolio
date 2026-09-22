'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, site } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-maroon-950/95 backdrop-blur border-b border-lime/20">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-lime text-lime font-mono text-xs tracking-widest group-hover:bg-lime group-hover:text-maroon-950 transition-colors">
              {site.initials}
            </span>
            <span className="font-display text-lg text-bone tracking-tight">
              {site.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-mono text-[11px] tracking-[0.2em] uppercase pb-1 transition-colors ${
                      active ? 'text-lime' : 'text-bone/70 hover:text-bone'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-[1px] left-0 h-[1.5px] bg-lime transition-all ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-lime/40"
          >
            <span
              className={`block h-[1.5px] w-5 bg-lime transition-transform ${
                open ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-lime transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-lime transition-transform ${
                open ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden flex flex-col border-t border-lime/20 py-4 gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 font-mono text-xs tracking-[0.2em] uppercase ${
                      active ? 'text-lime' : 'text-bone/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
