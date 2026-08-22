-- Run this once in your Supabase project's SQL Editor.
-- Creates the table that stores contact form submissions, and locks it
-- down so the public website can only INSERT rows — never read, edit,
-- or delete other people's messages. You (the project owner) can still
-- see everything in the Table Editor, since that uses your own login,
-- not the public anon key.

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null
);

alter table contact_submissions enable row level security;

create policy "Allow public inserts only"
  on contact_submissions
  for insert
  to anon
  with check (true);
