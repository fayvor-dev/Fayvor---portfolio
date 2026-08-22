'use client';

import { useState, useTransition } from 'react';
import { IconArrow } from '@/components/Icons';
import { submitContactForm } from '@/app/actions';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState(null); // { status: 'success' | 'error', message }
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(null);
    startTransition(async () => {
      const res = await submitContactForm(form);
      setResult(res);
      if (res.status === 'success') {
        setForm({ name: '', email: '', message: '' });
      }
    });
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
            disabled={isPending}
            className="w-full bg-transparent border border-cream/25 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors disabled:opacity-50"
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
            disabled={isPending}
            className="w-full bg-transparent border border-cream/25 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors disabled:opacity-50"
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
          disabled={isPending}
          className="w-full bg-transparent border border-cream/25 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors resize-none disabled:opacity-50"
          placeholder="Tell me a bit about what you need — a logo, a website, a 3D experience..."
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-2 bg-gold text-navy-950 px-7 py-3.5 font-mono text-xs tracking-[0.15em] uppercase hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? 'Sending…' : 'Send Message'} <IconArrow className="h-4 w-4" />
      </button>
      {result && (
        <p
          role="status"
          className={`font-mono text-xs pt-1 ${
            result.status === 'success' ? 'text-gold' : 'text-red-400'
          }`}
        >
          {result.message}
        </p>
      )}
    </form>
  );
}
