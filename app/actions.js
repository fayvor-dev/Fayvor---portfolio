'use server';

import { getSupabaseServerClient } from '@/lib/supabaseServer';

export async function submitContactForm({ name, email, message }) {
  const cleanName = (name || '').trim();
  const cleanEmail = (email || '').trim();
  const cleanMessage = (message || '').trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return { status: 'error', message: 'Please fill in every field.' };
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase
      .from('contact_submissions')
      .insert({ name: cleanName, email: cleanEmail, message: cleanMessage });

    if (error) {
      console.error('Supabase insert error:', error.message);
      return {
        status: 'error',
        message: "Something went wrong saving your message — please email me directly instead.",
      };
    }

    return {
      status: 'success',
      message: "Thanks — your message has been received. I'll get back to you soon.",
    };
  } catch (err) {
    console.error('Contact form error:', err);
    return {
      status: 'error',
      message: "Something went wrong — please email me directly instead.",
    };
  }
}
