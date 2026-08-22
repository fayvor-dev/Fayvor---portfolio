import Link from 'next/link';
import { navLinks, site } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-cream/80 border-t-2 border-gold">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <span className="font-display text-2xl text-cream">{site.name}</span>
          <p className="mt-3 max-w-xs text-sm text-cream/60 leading-relaxed">
            {site.role} based in {site.location}. Building brands and
            interfaces that look considered and work everywhere.
          </p>
        </div>

        <div>
          <p className="eyebrow-light mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-gold transition-colors">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-gold transition-colors break-all">
                {site.email}
              </a>
            </li>
            <li className="text-cream/60">{site.location}</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow-light mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50 font-mono">
          <span>&copy; {year} {site.name}. All rights reserved.</span>
          <span>Benin City, Edo State &mdash; Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
