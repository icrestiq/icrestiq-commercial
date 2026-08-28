# iCrestiQ Commercial — Claude Instructions

## Durable Memory (Obsidian Vault)

This repository is paired with an Obsidian vault that serves as Keith Atkinson's durable, tool-independent memory system. Read these files before any significant implementation or business decision, and at the start of each session:

1. `C:\Users\Katki\Documents\Keith AI OS\AIOS\me.md`
2. `C:\Users\Katki\Documents\Keith AI OS\AIOS\AI Memory Rules.md`
3. `C:\Users\Katki\Documents\Keith AI OS\01 Projects\iCrestiQ Commercial\iCrestiQ Commercial.md`
4. `C:\Users\Katki\Documents\Keith AI OS\01 Projects\iCrestiQ Commercial\Project Status.md`
5. `C:\Users\Katki\Documents\Keith AI OS\01 Projects\iCrestiQ Commercial\Decisions.md`
6. Any relevant notes inside `C:\Users\Katki\Documents\Keith AI OS\01 Projects\iCrestiQ Commercial\Claude Session Imports`

Treat the current project notes in that vault as the source of truth for business context, supplier/manufacturer decisions, and prior architecture/UI decisions. If the current code conflicts with the vault, inspect the code first and reconcile the conflict before updating memory.

## Memory Contract

After completing a meaningful unit of work, update the appropriate Obsidian memory files:

- `iCrestiQ Commercial.md` — durable project context and overall strategy
- `Project Status.md` — current state, active work, completed milestones, blockers, next steps
- `Decisions.md` — significant decisions and the reasoning behind them
- `Claude Session Imports` — session summaries or imported context worth preserving

Do not clutter memory with temporary build logs, routine edits, failed commands, or trivial implementation details. Record durable decisions and milestones, not every minor edit.

Never store passwords, API keys, access tokens, credentials, private authentication data, or other secrets in Obsidian or in this repository.

## Business Rules

- iCrestiQ Commercial is a commercial equipment sales division of iCrestiQ LLC.
- **iCrestiQ Commercial is a multi-category commercial and industrial equipment platform, not a pressure-washing-only site.** Pressure washing is the first active vertical; material handling equipment is the next planned vertical (currently shown as "expanding," no catalog yet). Further categories are on a documented roadmap. See "Equipment Category Structure" and "Website Architecture Requirement" in `iCrestiQ Commercial.md` for the full, current durable requirement — treat that document as authoritative over this summary.
- Three planned sales channels: (1) Ecommerce / Buy Online, (2) Commercial B2B / Request a Quote, (3) Federal, state, and local government sales.
- Preferred supplier model: authorized dealer/reseller relationships that do not require significant inventory and allow direct-to-customer fulfillment where possible.
- The website is primarily a credibility, lead-generation, and dealer-outreach site in its initial phase.
- Do NOT imply that iCrestiQ is an authorized dealer for any manufacturer until authorization has actually been confirmed — this applies to every category, not just pressure washing.
- Do NOT use manufacturer logos, dealer-only assets, or copyrighted product materials unless authorization exists.

## Architecture Rules (do not regress these)

- Equipment categories and their subcategories live in one data model
  (`src/data/equipmentCategories.ts` as of 2026-08-28), with a `status` of
  `active` or `expanding`. Do not hardcode a category's content into a page
  component — add or edit an entry in the data model instead.
- Category browsing uses a generic overview page (`/equipment`) plus a single
  parameterized detail page (`/equipment/:slug`) that adapts its rendering by
  status. Do not create a new page file per equipment category — that's the
  pattern this architecture was specifically built to avoid.
- The quote form's equipment-category selector is generated from the same
  data model. If you add a category to the data model, it should appear in
  the quote form automatically — do not hand-maintain a separate options
  list.
- The homepage and site-wide branding present iCrestiQ Commercial as a
  commercial/industrial equipment platform first (see the "Commercial
  Equipment. Industrial Sourcing. Government Procurement." positioning in
  `iCrestiQ Commercial.md`), not as a single-product store — even while
  pressure washing remains the only fully built-out category.
- An `expanding`-status category must not claim specs, an in-stock catalog,
  or authorized-dealer status. It should read as a sourcing-request landing
  page, not a product catalog.
- **SEO/prerendering (added 2026-08-28):** `npm run build` runs a client
  build, an SSR build (`vite build --ssr src/entry-server.tsx --outDir
  dist-ssr`), then `node scripts/prerender.mjs`, which renders every route to
  a real static `dist/<route>/index.html` (plus `dist/404.html` and
  `dist/sitemap.xml`). This exists because the site is a client-rendered SPA
  by default, which most AI crawlers can't read (they don't execute JS) —
  see the matching `Decisions.md` entry for the full reasoning.
  - `src/entry-client.tsx` deliberately uses `createRoot(...).render(...)`,
    not `hydrateRoot`. Do not switch it back to `hydrateRoot` without solving
    the SSR/client hydration-mismatch risk that motivated this (see
    `Decisions.md`) — it previously threw React errors #418/#423.
  - Any new top-level page needs a route in `src/App.tsx` **and** an entry in
    `src/data/seo.ts`, or it will not be prerendered or appear in the
    sitemap. New equipment categories need no extra work — `seo.ts` derives
    their routes from `equipmentCategories.ts` automatically.
  - `SITE_URL` in `src/data/seo.ts` is the real domain
    (`https://icrestiqcommercial.com`, purchased 2026-08-28) — no longer a
    placeholder, but DNS/Vercel domain attachment may not be done yet; check
    `Project Status.md` for current deployment state.
  - Do not add a catch-all SPA-fallback rewrite (e.g. a `vercel.json` rule
    routing every path to `/index.html`) — it would defeat this work by
    serving the wrong content for every prerendered route. `dist/404.html`
    is the intended fallback for genuinely unknown paths. `vercel.json`
    (added 2026-08-28, live now) rewrites *only* `/admin` and
    `/admin/(.*)` to `/index.html` — `/admin` is never prerendered, so
    without this it 404s (harmlessly, since `404.html` carries the same JS
    bundle and client-side routing still recovers, but under the wrong HTTP
    status). Keep this rewrite scoped exactly to `/admin` — do not widen it.

## Accessibility and Legal Policies (do not regress these)

- This site targets **WCAG 2.2 Level AA**, matching the standard already set
  on the sibling GovCon Lab site (not a compliance guarantee — see
  `/accessibility`). When adding new UI: check color contrast for any new
  color pairing (4.5:1 normal text, 3:1 large text/UI components) — this
  codebase already found and fixed real failures once by assuming a color
  passed without computing it, don't repeat that. Use native form controls
  (`<input type="radio">`, `<select>`, etc.) over custom-styled
  `<div>`/`<button>` widgets where possible; they get correct keyboard/AT
  semantics for free.
- `SpecPlate.tsx`'s `SpecRow` and `CategoryCard.tsx`'s `StatusBadge` are
  tone-aware (dark vs. light background) via React Context / an explicit
  `tone` prop, specifically because a hardcoded color silently failed
  contrast on one of the two tones before this was caught. Any new shared
  component that can render on both dark and light site backgrounds needs
  the same tone-awareness — don't hardcode a single text color.
- Legal policies live at `src/data/policies/*.ts` (Terms of Use, Privacy,
  Cookie & Tracking Notice, AI Transparency Disclosure, Disclaimers),
  rendered generically by `src/pages/PolicyPage.tsx` at `/policies/:slug`.
  **If a change alters what data the site collects, how it's used, or adds
  cookies/analytics/a live AI feature, update the relevant policy file in
  the same change** — don't let the policies drift out of sync with what the
  site actually does. Community Guidelines and Subscription Policy were
  deliberately excluded (this site has no community features or
  subscriptions); DMCA/Copyright was excluded pending iCrestiQ LLC
  registering a copyright agent (same as GovCon Lab) — don't add either
  without checking `Decisions.md` first.

## Admin CRM (do not regress these — added 2026-08-28)

- Internal-only CRM at `/admin` (Companies, Contacts, Deals/Kanban, Tasks) —
  single admin user, backed by a **new Supabase project** (`ldfhlzkhgnnhsytesbpc`,
  actually the pre-existing but previously-empty "iCrestiQ E-commerce website"
  project, reused instead of paying for a new one — see `Decisions.md`).
  Separate from GovCon Lab's Supabase project; do not point this site at that
  one or vice versa.
- **Never add `/admin/*` paths to `src/data/seo.ts`.** That's the entire
  mechanism keeping the CRM out of prerendering/the sitemap — no other
  suppression exists. `public/robots.txt` also `Disallow: /admin` as
  defense-in-depth, not a substitute for the real auth guard (`AdminRoute`).
- **The whole admin app is code-split** via `React.lazy(() => import('./AdminApp'))`
  in `src/App.tsx` — `src/AdminApp.tsx` is the actual route tree (login +
  guarded CRUD pages) and is where `@supabase/supabase-js`/`@dnd-kit/core`
  and every admin page live. This exists because bundling it eagerly once
  measurably bloated the *public* bundle (524KB) that every marketing-page
  visitor downloads — keep new admin pages inside `AdminApp.tsx`'s import
  graph, not imported from `App.tsx` or any public page, or this regresses.
- `src/lib/supabase.ts`'s `getSupabase()` is a **lazy singleton** —
  `createClient(...)` never runs at module scope. Do not change this: since
  `entry-server.tsx` statically imports the whole app for SSR, an
  eager/module-scope client would throw during `vite build --ssr` if
  `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` were ever unset, breaking
  prerendering for the entire public site, not just `/admin`.
- Schema is single-tenant (no `profiles`/multi-user scoping — see
  `Decisions.md` for the full table list). RLS policy on every table is the
  same one-liner (`auth.role() = 'authenticated'`) — this is only safe
  because public sign-up is disabled in Supabase Auth settings; don't
  re-enable it.
- `deal_stages.stage_type = 'won'` is a deliberate hook for a future `orders`
  table (once dealer relationships exist) to FK against — no Orders/
  Shipments/Stripe integration exists yet, and none should be built without
  revisiting the plan in `Decisions.md` first (no public shopping cart was
  the explicit decision; per-order Stripe Payment Links from inside the
  admin panel is the intended future direction).
- **Request a Quote submits directly into the CRM (added 2026-08-28):**
  `src/pages/RequestQuote.tsx` submits into a `quote_requests` table instead
  of building a `mailto:` link. `src/pages/admin/QuoteRequestsList.tsx`
  (`/admin/quote-requests`) lists submissions and has a one-click "Convert to
  Company / Contact / Deal" action: it finds-or-creates the company (name,
  case-insensitive) and contact (email, case-insensitive), opens a deal in
  the first `stage_type = 'open'` stage, links both, and writes a `notes`
  row with whatever doesn't have its own CRM column (phone/quantity/
  timeline/details) so context isn't lost. `AdminLayout`'s nav shows a badge
  with the count of `status = 'new'` requests. On submission failure the
  form falls back to offering the old `mailto:` link rather than silently
  losing the lead.
- **Bot protection on Request a Quote, modeled on icrestiq-govcon-lab's real
  implementation (added 2026-08-28):** the form no longer talks to Supabase
  at all — it `fetch()`s `POST /api/quote/submit`, this site's **first-ever
  serverless function** (`api/quote/submit.js`, root-level `api/` directory,
  Vercel auto-detects it). That function is now the *only* writer to
  `quote_requests`, using `SUPABASE_SERVICE_ROLE_KEY` (bypasses RLS) — the
  table's earlier public `INSERT` policy is gone, so a bot can no longer
  write a row by hitting Supabase's REST API directly with the public anon
  key, which was possible before this change. Three checks run server-side,
  in order: (1) a honeypot field (`website`, rendered off-screen in
  `RequestQuote.tsx`, never `display:none` — some bots skip fields styled
  that way), (2) a minimum-fill-time check (`renderedAt`, rejects
  submissions faster than 1.5s), (3) a Cloudflare Turnstile challenge
  (`src/components/Turnstile.tsx`, loads Cloudflare's script on demand only
  when it mounts — not globally in `index.html` — so pages other than
  `/quote` don't pay for it). Turnstile needs `VITE_TURNSTILE_SITE_KEY`
  (client, public) and `TURNSTILE_SECRET_KEY` (server-only, Vercel env var)
  from a Cloudflare Turnstile site the user creates — **until both are set,
  the widget doesn't render and the server fails open** (skips Turnstile
  verification with a `console.warn`, same transitional pattern GovCon Lab
  used), so the form keeps working with honeypot + fill-time protection only
  in the meantime. See `.env.example` for exactly which vars are
  client-safe (`VITE_`-prefixed) vs. server-only. Do not add a public
  `INSERT` policy back to `quote_requests` — that's the exact hole this
  closed.
- `.env.local` (gitignored) holds `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY`
  — see `.env.example`. These must also be set in the Vercel project once
  deployment resumes, or the admin bundle will throw on first use (the
  public site is unaffected either way, per the lazy-client point above).

## Working Rules

- Separate confirmed facts from assumptions and recommendations.
- Preserve dates, sources, decisions, deadlines, and responsible people.
- Do not assume a task was completed without confirmation.
- Flag compliance, financial, or operational risks.
- Favor affordable, maintainable systems over unnecessary technical complexity.
