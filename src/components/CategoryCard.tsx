import { Link } from 'react-router-dom'
import type { EquipmentCategory } from '../data/equipmentCategories'
import { SpecPlate } from './SpecPlate'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function CategoryCard({
  category,
  videoSrc,
}: {
  category: EquipmentCategory
  videoSrc?: string
}) {
  const isActive = category.status === 'active'
  const hasVideo = Boolean(videoSrc)
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <SpecPlate tone={hasVideo ? 'dark' : 'light'} className="relative flex flex-col overflow-hidden">
      {hasVideo && (
        <>
          {/* Purely decorative ambient loop — conveys no information beyond
              what the text already states, so aria-hidden with no
              captions/alt is correct here. */}
          {!prefersReducedMotion && (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          )}
          {/* Scrim keeps text at the same verified contrast as every other
              dark-tone panel on the site, regardless of what's in the
              footage underneath. */}
          <div className="absolute inset-0 bg-steel-900/70" aria-hidden="true" />
        </>
      )}

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-display text-2xl font-bold uppercase ${hasVideo ? 'text-cold-50' : 'text-steel-900'}`}>
            {category.name}
          </h3>
          <StatusBadge status={category.status} tone={hasVideo ? 'dark' : 'light'} />
        </div>
        <p className={`mt-2 flex-1 text-sm leading-relaxed ${hasVideo ? 'text-gauge-300' : 'text-steel-700'}`}>
          {category.description}
        </p>
        <p className={`mt-4 font-mono text-xs uppercase tracking-widest ${hasVideo ? 'text-gauge-400' : 'text-gauge-600'}`}>
          {category.subcategories.length} Equipment Types
        </p>
        <Link
          to={`/equipment/${category.slug}`}
          className={`mt-3 inline-block font-display text-lg uppercase tracking-wide ${
            hasVideo ? 'text-orange-400 hover:text-orange-300' : 'text-hydro-500 hover:text-hydro-400'
          }`}
        >
          {isActive ? 'View Category →' : 'Learn More →'}
        </Link>
      </div>
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
