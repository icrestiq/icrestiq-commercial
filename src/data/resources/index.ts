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
import { industrial } from './industrial'
import { surfaceCleaner } from './surfaceCleaner'
import { accessories } from './accessories'
import { whatSize } from './whatSize'
import { cost } from './cost'
import { greaseAndOil } from './greaseAndOil'
import { buyingGuide } from './buyingGuide'
import { heavyEquipment } from './heavyEquipment'
import { constructionEquipment } from './constructionEquipment'
import { publicWorks } from './publicWorks'
import { facilityMaintenance } from './facilityMaintenance'
import { concreteCleaning } from './concreteCleaning'
import { bestForFleetWashing } from './bestForFleetWashing'
import { industrialVsResidential } from './industrialVsResidential'
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
  industrial,
  surfaceCleaner,
  accessories,
  whatSize,
  cost,
  greaseAndOil,
  buyingGuide,
  heavyEquipment,
  constructionEquipment,
  publicWorks,
  facilityMaintenance,
  concreteCleaning,
  bestForFleetWashing,
  industrialVsResidential,
]

export function getResourceBySlug(slug: string | undefined): ResourcePage | undefined {
  return pressureWashingResources.find((r) => r.slug === slug)
}

export function getResourcesBySlugs(slugs: string[] | undefined): ResourcePage[] {
  if (!slugs) return []
  return slugs.map((s) => getResourceBySlug(s)).filter((r): r is ResourcePage => Boolean(r))
}
