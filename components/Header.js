'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { nav, site } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('top');
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Subtle header change on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: which section is currently in the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!els.length) return;
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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-charcoal/10 bg-ivory/85 backdrop-blur' : 'border-b border-transparent bg-ivory'
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/#top" className="flex items-center gap-2 text-[17px] font-semibold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 bg-cobalt" aria-hidden="true" />
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const current = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={current ? 'location' : undefined}
                    className={`relative py-1 text-[15px] font-medium transition-colors ${
                      current ? 'text-charcoal' : 'text-muted hover:text-charcoal'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-cobalt transition-all duration-300 ${
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
          className="md:hidden -mr-2 flex h-11 items-center gap-2 px-2 text-[15px] font-medium"
        >
          Menu
          <span className="flex flex-col gap-[5px]" aria-hidden="true">
            <span className="block h-[1.5px] w-5 bg-charcoal" />
            <span className="block h-[1.5px] w-5 bg-charcoal" />
          </span>
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="on-dark fixed inset-0 z-[60] flex flex-col bg-charcoal text-ivory md:hidden"
        >
          <div className="wrap flex h-16 items-center justify-between">
            <span className="text-[17px] font-semibold tracking-tight">{site.name}</span>
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
          <ul className="wrap mt-6 flex flex-1 flex-col gap-1">
            {nav.map((item) => (
              <li key={item.id} className="border-b border-ivory/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-4xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="wrap pb-8 text-sm text-ivory/60">
            {site.location} · Open to remote projects
          </p>
        </div>
      )}
    </header>
  );
}
