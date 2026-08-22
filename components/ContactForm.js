'use client';

import { useState } from 'react';
import { IconArrow } from '@/components/Icons';
import { site } from '@/lib/data';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry from ${form.name || 'website'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="eyebrow-light block mb-2">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border border-cream/25 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors"
            placeholder="Ada Lovelace"
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow-light block mb-2">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-cream/25 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="eyebrow-light block mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border border-cream/25 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors resize-none"
          placeholder="Tell me a bit about what you need — a logo, a website, a 3D experience..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-gold text-navy-950 px-7 py-3.5 font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-colors"
      >
        Send Message <IconArrow className="h-4 w-4" />
      </button>
      {sent && (
        <p className="font-mono text-xs text-gold pt-1">
          Opening your email app with this message pre-filled &mdash; hit send there to reach me.
        </p>
      )}
    </form>
  );
}
