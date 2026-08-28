import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Lazy singleton, deliberately NOT created at module scope. This module is
// reachable from the SSR bundle (src/entry-server.tsx statically imports
// App, which imports every admin page) — if createClient() ran eagerly at
// import time and VITE_SUPABASE_URL/ANON_KEY were ever missing during
// `vite build --ssr`, it would throw and break prerendering for the entire
// public marketing site, not just /admin. Deferring creation to first
// actual use means a missing env var only breaks the admin section it
// belongs to.
let client: SupabaseClient | undefined

export function getSupabase(): SupabaseClient {
  if (!client) {
    const url = import.meta.env.VITE_SUPABASE_URL
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
    if (!url || !anonKey) {
      throw new Error(
        'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY — set them in .env.local (see .env.example).',
      )
    }
    client = createClient(url, anonKey)
  }
  return client
}
