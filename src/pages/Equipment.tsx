import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import { equipmentCategories, plannedCategories } from '../data/equipmentCategories'

export default function Equipment() {
  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">Equipment Platform</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-cold-50">
            Commercial &amp; Industrial Equipment
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gauge-300">
            iCrestiQ Commercial sources commercial and industrial equipment across multiple
            categories. Pressure washing is our first active line; material handling is next.
            Specs shown are typical ranges for a category, not a confirmed product catalog —
            request a quote for equipment matched to your application.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {equipmentCategories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>

      <section className="border-t border-gauge-300/40 bg-cold-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-600">Roadmap</p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase text-steel-900">
            More Categories on the Way
          </h2>
          <p className="mt-3 max-w-2xl text-steel-700">
            As iCrestiQ Commercial grows, we plan to add categories like the ones below. None
            of these are active yet — this is a roadmap, not a catalog.
          </p>
          <ul className="mt-4 grid gap-2 text-steel-700 sm:grid-cols-2 lg:grid-cols-3">
            {plannedCategories.map((f) => (
              <li key={f} className="border-l-2 border-gauge-400 pl-3">{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-steel-900 px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold uppercase text-cold-50">
            Don't See Exactly What You Need?
          </h2>
          <p className="mt-3 text-gauge-300">
            Tell us the application and we'll scope equipment to fit — no generic price list.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-block bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-cold-50 hover:text-steel-900"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
