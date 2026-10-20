'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { nav, site } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  // Mobile menu: lock scroll, trap focus, close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () => [...menuRef.current.querySelectorAll('a, button')];
    focusables()[0]?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab') {
        const f = focusables();
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/#top" className="font-display text-lg font-bold tracking-tight text-mist">
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => {
              const current = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={current ? 'location' : undefined}
                    className={`relative py-1 text-[15px] font-medium transition-colors ${
                      current ? 'text-white' : 'text-mist-dim hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-electric transition-all duration-300 ${
                        current ? 'w-full' : 'w-0'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          className="-mr-2 flex h-11 items-center gap-2 px-2 text-[15px] font-medium text-mist md:hidden"
        >
          Menu
          <span className="flex flex-col gap-[5px]" aria-hidden="true">
            <span className="block h-[1.5px] w-5 bg-mist" />
            <span className="block h-[1.5px] w-5 bg-mist" />
          </span>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ink md:hidden"
        >
          <div className="wrap flex h-16 items-center justify-between">
            <span className="font-display text-lg font-bold tracking-tight">{site.name}</span>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="-mr-2 flex h-11 items-center px-2 text-[15px] font-medium"
            >
              Close
            </button>
          </div>
          <ul className="wrap mt-6 flex flex-1 flex-col">
            {nav.map((item) => (
              <li key={item.id} className="border-b border-white/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="silver block py-4 font-display text-5xl font-extrabold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="wrap pb-8 text-sm text-mist-dim">{site.location} · Open to remote projects</p>
        </div>
      )}
    </header>
  );
}
