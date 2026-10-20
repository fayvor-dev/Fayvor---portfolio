import Link from 'next/link';
import { IconGithub } from '@/components/Icons';
import { nav, site } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">{site.name}</p>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-mist-dim">
            {site.role} in {site.location}. Open to remote projects.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-sm font-medium text-mist-dim">Explore</p>
          <ul className="space-y-2.5 text-[15px]">
            {nav.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="transition-colors hover:text-electric-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-sm font-medium text-mist-dim">Get in touch</p>
          <ul className="space-y-2.5 text-[15px]">
            <li>
              <a href={site.emailHref} className="break-all transition-colors hover:text-electric-300">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-electric-300"
              >
                WhatsApp {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-electric-300"
              >
                <IconGithub className="h-4 w-4" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-5 text-sm text-mist-dim sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} {site.name}</span>
          <span>Redesign concepts are independent portfolio work, not affiliated with the businesses shown.</span>
        </div>
      </div>
    </footer>
  );
}
