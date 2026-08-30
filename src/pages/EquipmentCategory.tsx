import { Link, useParams } from 'react-router-dom'
import { SpecPlate, SpecRow } from '../components/SpecPlate'
import { StatusBadge } from '../components/CategoryCard'
import { getCategoryBySlug } from '../data/equipmentCategories'
import { pressureWashingResources, type ResourceType } from '../data/resources'

const GROUP_LABEL: Record<ResourceType, string> = {
  core: 'Core Equipment',
  application: 'By Application',
  guide: 'Buying Guides',
}
const GROUP_ORDER: ResourceType[] = ['core', 'application', 'guide']

function ResourceCard({ to, label, interactive }: { to: string; label: string; interactive?: boolean }) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-1.5 border border-gauge-300 bg-cold-50 px-5 py-4 font-display text-lg uppercase tracking-wide text-steel-900 transition-colors hover:border-orange-500"
    >
      {interactive && (
        <span className="w-fit border border-orange-600 px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-orange-600">
          Interactive Tool
        </span>
      )}
      {label} →
    </Link>
  )
}

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

      {category.slug === 'pressure-washing' && (
        <section id="buyer-resources" className="scroll-mt-40 border-t border-gauge-300/40 bg-cold-100 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-600">Buyer Resources</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-steel-900">
              Not Sure Which System You Need?
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                to="/equipment/pressure-washing/selector"
                className="group flex flex-col gap-1.5 border border-orange-500 bg-cold-50 px-5 py-4 font-display text-lg uppercase tracking-wide text-steel-900 transition-colors hover:bg-orange-600 hover:text-cold-50"
              >
                <span className="w-fit border border-orange-600 px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-orange-600 transition-colors group-hover:border-cold-50 group-hover:text-cold-50">
                  Interactive Tool
                </span>
                Equipment Selector Tool →
              </Link>
              <Link
                to="/equipment/pressure-washing/application-matrix"
                className="flex flex-col gap-1.5 border border-gauge-300 bg-cold-50 px-5 py-4 font-display text-lg uppercase tracking-wide text-steel-900 transition-colors hover:border-orange-500"
              >
                Application Matrix →
              </Link>
            </div>

            {GROUP_ORDER.map((type) => {
              const items = pressureWashingResources.filter((r) => r.type === type)
              if (items.length === 0) return null
              return (
                <div key={type} className="mt-10 first:mt-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-gauge-600">{GROUP_LABEL[type]}</p>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((r) => (
                      <ResourceCard
                        key={r.slug}
                        to={`/equipment/pressure-washing/${r.slug}`}
                        label={r.label}
                        interactive={r.interactive}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
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
