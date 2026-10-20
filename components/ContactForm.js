'use client';

import { useState, useTransition } from 'react';
import { IconArrowRight } from '@/components/Icons';
import { submitContactForm } from '@/app/actions';

const field =
  'w-full rounded-lg border border-white/15 bg-ink-900 px-4 py-3 text-[15px] text-mist placeholder:text-mist-dim/60 outline-none transition-colors focus:border-electric-300 disabled:opacity-50';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(null);
    startTransition(async () => {
      const res = await submitContactForm(form);
      setResult(res);
      if (res.status === 'success') setForm({ name: '', email: '', message: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-mist-dim">Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} disabled={isPending} className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-mist-dim">Your email</label>
          <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} disabled={isPending} className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-mist-dim">About your project</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          disabled={isPending}
          className={`${field} resize-none`}
          placeholder="A new website, a redesign, something interactive..."
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-electric-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Sending…' : 'Send message'} <IconArrowRight className="h-4 w-4" />
      </button>
      {result && (
        <p role="status" className={`text-sm ${result.status === 'success' ? 'text-electric-300' : 'text-red-300'}`}>
          {result.message}
        </p>
      )}
    </form>
  );
}
