import { Link } from 'react-router-dom'
import { SpecPlate, SpecRow } from '../components/SpecPlate'
import CategoryCard from '../components/CategoryCard'
import { equipmentCategories } from '../data/equipmentCategories'

// Homepage-only decoration — deliberately not part of the equipmentCategories
// data model. This is a presentation choice for this one page (Equipment.tsx
// renders the same CategoryCard for the same categories without video), not
// category content, so it doesn't belong in the shared data model per the
// site's own "don't hardcode content into a page, don't decorate the data
// model" split.
const HOME_CARD_VIDEOS: Record<string, string> = {
  'pressure-washing': '/videos/pressure-washing-card-bg.mp4',
  'material-handling': '/videos/material-handling-card-bg.mp4',
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-steel-700 bg-steel-900">
        <svg
          className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 opacity-[0.07]"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 400 L260 40" stroke="#5A8EA3" strokeWidth="3" />
          <path d="M40 400 L300 20" stroke="#5A8EA3" strokeWidth="2" />
          <path d="M80 400 L340 0" stroke="#D9491B" strokeWidth="2" />
        </svg>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">
              A Commercial &amp; Industrial Equipment Platform
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-cold-50 sm:text-5xl lg:text-6xl">
              Commercial Equipment.
              <br />
              Industrial Sourcing.
              <br />
              <span className="text-orange-500">Government Procurement.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gauge-300">
              iCrestiQ Commercial serves businesses, contractors, institutions, and government
              buyers by sourcing commercial and industrial equipment from established
              manufacturers and distributors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-cold-50 hover:text-steel-900"
              >
                Request a Quote
              </Link>
              <Link
                to="/government"
                className="border border-gauge-500 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:border-cold-50"
              >
                Government &amp; Institutional
              </Link>
            </div>
          </div>

          <SpecPlate tone="dark" className="justify-self-start md:justify-self-end">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gauge-400">
              Equipment Platform Status
            </p>
            <SpecRow label="Pressure Washing" value="Active" />
            <SpecRow label="Material Handling" value="Expanding" />
            <SpecRow label="Government Ready" value="NAICS 423850" />
            <SpecRow label="More Categories" value="Planned" />
          </SpecPlate>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-gauge-300/40 bg-cold-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
          <TrustItem
            label="Sourcing Approach"
            body="We work toward direct manufacturer and distributor relationships rather than reselling from unverified stock."
          />
          <TrustItem
            label="Built for B2B & Gov"
            body="Quoting supports commercial purchasing workflows and government/institutional procurement across our equipment categories."
          />
          <TrustItem
            label="Straightforward Quoting"
            body="Tell us the application and volume; we return a scoped quote instead of a generic price list."
          />
        </div>
      </section>

      {/* Category grid */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-600">Equipment Categories</p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase text-steel-900">What We Source</h2>
          </div>
          <Link to="/equipment" className="hidden font-display text-lg uppercase tracking-wide text-hydro-500 hover:text-hydro-400 sm:block">
            View All Equipment →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {equipmentCategories.map((c) => (
            <CategoryCard key={c.slug} category={c} videoSrc={HOME_CARD_VIDEOS[c.slug]} />
          ))}
        </div>

        <Link to="/equipment" className="mt-8 block font-display text-lg uppercase tracking-wide text-hydro-500 hover:text-hydro-400 sm:hidden">
          View All Equipment →
        </Link>
      </section>

      {/* Two-channel CTA */}
      <section className="grid border-y border-steel-700 sm:grid-cols-2">
        <div className="bg-steel-900 px-6 py-16 text-cold-50 sm:px-12">
          <p className="font-mono text-xs uppercase tracking-widest text-orange-400">Channel 01</p>
          <h3 className="mt-3 font-display text-3xl font-bold uppercase">Commercial &amp; B2B</h3>
          <p className="mt-4 max-w-md text-gauge-300">
            Contractors, property managers, and facilities teams: request a quote scoped to
            your application, volume, and timeline.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-block border border-orange-500 px-5 py-3 font-display text-lg uppercase tracking-wide text-orange-400 transition-colors hover:bg-cold-50 hover:text-steel-900"
          >
            Request a Quote
          </Link>
        </div>
        <div className="bg-hydro-600 px-6 py-16 text-cold-50 sm:px-12">
          <p className="font-mono text-xs uppercase tracking-widest text-cold-100">Channel 02</p>
          <h3 className="mt-3 font-display text-3xl font-bold uppercase">Government &amp; Institutional</h3>
          <p className="mt-4 max-w-md text-cold-100">
            Federal, state, and local buyers: see how we approach procurement-ready sourcing
            and solicitation response.
          </p>
          <Link
            to="/government"
            className="mt-6 inline-block border border-cold-50 px-5 py-3 font-display text-lg uppercase tracking-wide text-cold-50 hover:bg-cold-50 hover:text-hydro-600"
          >
            Government Sales
          </Link>
        </div>
      </section>
    </div>
  )
}

function TrustItem({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-l-2 border-orange-500 pl-4">
      <p className="font-display text-lg uppercase tracking-wide text-steel-900">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-steel-700">{body}</p>
    </div>
  )
}
