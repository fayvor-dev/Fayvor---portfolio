import Reveal from '@/components/Reveal';
import { IconArrowDown } from '@/components/Icons';
import { nairaSense } from '@/lib/data';

/* Only rendered when nairaSense.available is true (see lib/data.js). */
export default function AppDownload() {
  const { name, version, apkUrl } = nairaSense;
  return (
    <section id="nairasense" className="border-t border-white/10 py-20">
      <div className="wrap">
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-ink-900 p-8 md:grid-cols-12 md:p-12">
            <div className="md:col-span-8">
              <p className="text-sm font-medium text-mist-dim">{name} · Early prototype, demo data only</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Know your money. Plan with confidence.
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-mist/80">
                A mobile money assistant concept for Nigerians: track income and expenses in naira, set budgets and
                savings goals. This early build is a design prototype. The numbers are sample data and nothing you
                enter is saved. It never asks for bank logins, PINs or card details.
              </p>
              <p className="mt-4 text-sm text-mist-dim">
                {name} is a budgeting and learning tool, not a bank or licensed financial adviser.{' '}
                <a href="/nairasense/privacy" className="text-electric-300 underline underline-offset-2">Privacy</a>
              </p>
            </div>
            <div className="flex flex-col items-start justify-end gap-3 md:col-span-4">
              <a
                href={apkUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-electric-600"
              >
                Download for Android (.apk) <IconArrowDown className="h-4 w-4" />
              </a>
              <span className="text-sm text-mist-dim">v{version} · Android only</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
