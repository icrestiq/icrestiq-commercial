import { Link } from 'react-router-dom'
import { POLICIES } from '../data/policies'

export default function PoliciesIndex() {
  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">Legal</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-cold-50">Policies</h1>
          <p className="mt-4 text-lg leading-relaxed text-gauge-300">
            The policies that govern this site, all effective {POLICIES[0].effectiveDate}. Select
            one below to read it in full.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {POLICIES.map((p) => (
            <Link
              key={p.slug}
              to={`/policies/${p.slug}`}
              className="border border-gauge-300 bg-cold-100 p-5 transition-colors hover:border-hydro-500"
            >
              <p className="font-display text-lg font-bold uppercase text-steel-900">{p.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-steel-700">{p.summary}</p>
            </Link>
          ))}
          <Link
            to="/accessibility"
            className="border border-gauge-300 bg-cold-100 p-5 transition-colors hover:border-hydro-500"
          >
            <p className="font-display text-lg font-bold uppercase text-steel-900">Accessibility Statement</p>
            <p className="mt-1 text-sm leading-relaxed text-steel-700">
              Our accessibility target and how to reach us about barriers you encounter.
            </p>
          </Link>
        </div>
      </section>
    </div>
  )
}
