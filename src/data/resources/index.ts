import { hotWater } from './hotWater'
import { coldWater } from './coldWater'
import { hotVsCold } from './hotVsCold'
import { psiGpm } from './psiGpm'
import { trailerMounted } from './trailerMounted'
import { skidMounted } from './skidMounted'
import { stationary } from './stationary'
import { waterRecovery } from './waterRecovery'
import { trailerVsSkid } from './trailerVsSkid'
import { fleetWashing } from './fleetWashing'
import type { ResourcePage } from './types'

export type { Block, ResourcePage, ResourceType, RelatedLink } from './types'

// Pressure-washing SEO resource pages, under /equipment/pressure-washing/.
// Adding a page means adding an entry here (and to seo.ts's derived routes,
// which reads this array) — not a new route or page component. Rolled out
// in stages per the durable "do not bulk-publish" rule in
// iCrestiQ Commercial.md — this is not the full 30-page set yet.
export const pressureWashingResources: ResourcePage[] = [
  hotWater,
  coldWater,
  hotVsCold,
  psiGpm,
  trailerMounted,
  skidMounted,
  stationary,
  waterRecovery,
  trailerVsSkid,
  fleetWashing,
]

export function getResourceBySlug(slug: string | undefined): ResourcePage | undefined {
  return pressureWashingResources.find((r) => r.slug === slug)
}

export function getResourcesBySlugs(slugs: string[] | undefined): ResourcePage[] {
  if (!slugs) return []
  return slugs.map((s) => getResourceBySlug(s)).filter((r): r is ResourcePage => Boolean(r))
}
