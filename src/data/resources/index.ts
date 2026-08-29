import { hotWater } from './hotWater'
import { coldWater } from './coldWater'
import { hotVsCold } from './hotVsCold'
import { psiGpm } from './psiGpm'
import type { ResourcePage } from './types'

export type { Block, ResourcePage, ResourceType, RelatedLink } from './types'

// Pressure-washing SEO resource pages, under /equipment/pressure-washing/.
// Adding a page means adding an entry here (and to seo.ts's derived routes,
// which reads this array) — not a new route or page component. Rolled out
// in stages per the durable "do not bulk-publish" rule in
// iCrestiQ Commercial.md — this is the first slice, not the full 30-page set.
export const pressureWashingResources: ResourcePage[] = [hotWater, coldWater, hotVsCold, psiGpm]

export function getResourceBySlug(slug: string | undefined): ResourcePage | undefined {
  return pressureWashingResources.find((r) => r.slug === slug)
}

export function getResourcesBySlugs(slugs: string[] | undefined): ResourcePage[] {
  if (!slugs) return []
  return slugs.map((s) => getResourceBySlug(s)).filter((r): r is ResourcePage => Boolean(r))
}
