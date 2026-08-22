import { createClient } from '@supabase/supabase-js';

/**
 * Creates a Supabase client using server-only environment variables.
 * This file is only ever imported from server-side code (Server Actions),
 * so these values never reach the browser bundle.
 */
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables. ' +
      'Add them to .env.local (locally) and to your Vercel project settings (in production).'
    );
  }

  return createClient(url, key);
}
