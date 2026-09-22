import CornerFrame from '@/components/CornerFrame';
import ContactForm from '@/components/ContactForm';
import Glow from '@/components/Glow';
import Reveal from '@/components/Reveal';
import { IconMail, IconPhone, IconPin } from '@/components/Icons';
import { site } from '@/lib/data';

export const metadata = {
  title: `Contact — ${site.name}`,
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-maroon-950 text-bone min-h-[70vh]">
      <Glow variant="clay" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-24 sm:pt-20 grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <Reveal variant="left">
          <p className="eyebrow-light mb-5">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] mb-6">
            Let&rsquo;s build something worth looking at.
          </h1>
          <p className="text-bone/70 leading-relaxed mb-10 max-w-sm">
            Tell me a little about your brand or project and I&rsquo;ll get
            back to you &mdash; usually within a day.
          </p>

          <CornerFrame className="border border-bone/15 p-7 space-y-5">
            <a href={site.phoneHref} className="flex items-center gap-4 group">
              <IconPhone className="h-5 w-5 text-lime flex-shrink-0" />
              <span className="text-sm text-bone/80 group-hover:text-lime transition-colors">
                {site.phone}
              </span>
            </a>
            <a href={site.emailHref} className="flex items-center gap-4 group">
              <IconMail className="h-5 w-5 text-lime flex-shrink-0" />
              <span className="text-sm text-bone/80 group-hover:text-lime transition-colors break-all">
                {site.email}
              </span>
            </a>
            <div className="flex items-center gap-4">
              <IconPin className="h-5 w-5 text-lime flex-shrink-0" />
              <span className="text-sm text-bone/80">{site.location}</span>
            </div>
          </CornerFrame>
        </Reveal>

        <Reveal delay={120} variant="right" className="border border-bone/15 p-7 sm:p-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
