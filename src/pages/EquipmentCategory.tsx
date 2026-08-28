import { Link, useParams } from 'react-router-dom'
import { SpecPlate, SpecRow } from '../components/SpecPlate'
import { StatusBadge } from '../components/CategoryCard'
import { getCategoryBySlug } from '../data/equipmentCategories'

export default function EquipmentCategory() {
  const { slug } = useParams<{ slug: string }>()
  const category = getCategoryBySlug(slug)

  if (!category) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-bold uppercase text-steel-900">Category Not Found</h1>
        <p className="mt-3 text-steel-700">
          That equipment category doesn't exist yet.
        </p>
        <Link to="/equipment" className="mt-6 inline-block font-display text-lg uppercase tracking-wide text-hydro-500 hover:text-hydro-400">
          ← Back to All Equipment
        </Link>
      </div>
    )
  }

  const isActive = category.status === 'active'

  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">
              {isActive ? 'Active Category' : 'Expanding Category'}
            </p>
            <StatusBadge status={category.status} tone="dark" />
          </div>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-cold-50">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gauge-300">{category.description}</p>
        </div>
      </section>

      {isActive ? (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {category.subcategories.map((s) => (
              <SpecPlate tone="light" key={s.name}>
                <h2 className="font-display text-2xl font-bold uppercase text-steel-900">{s.name}</h2>
                {s.description && <p className="mt-2 text-sm leading-relaxed text-steel-700">{s.description}</p>}
                {s.specs && (
                  <div className="mt-4 border-t border-gauge-300 pt-3">
                    {s.specs.map((spec) => (
                      <SpecRow key={spec.label} label={spec.label} value={spec.value} />
                    ))}
                  </div>
                )}
              </SpecPlate>
            ))}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-4xl px-6 py-16">
          <SpecPlate tone="light">
            <p className="font-mono text-xs uppercase tracking-widest text-gauge-600">Not Yet an Authorized Dealer</p>
            <p className="mt-2 text-sm leading-relaxed text-steel-700">
              iCrestiQ Commercial is not currently an authorized dealer for any {category.name.toLowerCase()}{' '}
              manufacturer. The list below describes the equipment types we're sourcing
              relationships for, not a confirmed catalog. If you have a need in this category,
              request a quote and we'll work it as a sourcing request.
            </p>
          </SpecPlate>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {category.subcategories.map((s) => (
              <li key={s.name} className="border-l-2 border-hydro-500 pl-4">
                <p className="font-display text-lg uppercase tracking-wide text-steel-900">{s.name}</p>
                {s.description && <p className="mt-1 text-sm leading-relaxed text-steel-700">{s.description}</p>}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="bg-steel-900 px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold uppercase text-cold-50">
            {isActive ? "Don't See Exactly What You Need?" : `Need ${category.name}?`}
          </h2>
          <p className="mt-3 text-gauge-300">
            {isActive
              ? "Tell us the application and we'll scope equipment to fit — no generic price list."
              : "Tell us what you're trying to accomplish and we'll work it as a sourcing request."}
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-block bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-cold-50 hover:text-steel-900"
          >
            {isActive ? 'Request a Quote' : 'Submit a Sourcing Request'}
          </Link>
        </div>
      </section>
    </div>
  )
}
