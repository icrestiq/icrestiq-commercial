import { Link } from 'react-router-dom'
import type { EquipmentCategory } from '../data/equipmentCategories'
import { SpecPlate } from './SpecPlate'

export default function CategoryCard({ category }: { category: EquipmentCategory }) {
  const isActive = category.status === 'active'

  return (
    <SpecPlate tone="light" className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl font-bold uppercase text-steel-900">{category.name}</h3>
        <StatusBadge status={category.status} tone="light" />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-700">{category.description}</p>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-gauge-600">
        {category.subcategories.length} Equipment Types
      </p>
      <Link
        to={`/equipment/${category.slug}`}
        className="mt-3 inline-block font-display text-lg uppercase tracking-wide text-hydro-500 hover:text-hydro-400"
      >
        {isActive ? 'View Category →' : 'Learn More →'}
      </Link>
    </SpecPlate>
  )
}

export function StatusBadge({
  status,
  tone = 'light',
}: {
  status: EquipmentCategory['status']
  tone?: 'dark' | 'light'
}) {
  // orange-500/hydro-500 don't hit 4.5:1 on either surface — orange-400/
  // hydro-400 for the dark tone, orange-600/hydro-500 stays fine on light.
  if (status === 'active') {
    const cls = tone === 'dark' ? 'border-orange-400 text-orange-400' : 'border-orange-600 text-orange-600'
    return (
      <span className={`shrink-0 whitespace-nowrap border px-2 py-1 font-mono text-[11px] uppercase tracking-widest ${cls}`}>
        Active
      </span>
    )
  }
  const cls = tone === 'dark' ? 'border-hydro-400 text-hydro-400' : 'border-hydro-500 text-hydro-500'
  return (
    <span className={`shrink-0 whitespace-nowrap border px-2 py-1 font-mono text-[11px] uppercase tracking-widest ${cls}`}>
      Expanding
    </span>
  )
}
