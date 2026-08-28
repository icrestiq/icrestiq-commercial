import { terms } from './terms'
import { privacy } from './privacy'
import { cookies } from './cookies'
import { aiDisclosure } from './aiDisclosure'
import { disclaimers } from './disclaimers'

export type { Policy, Block } from './types'

// Deliberately a shorter set than a membership platform would need — no
// Community Guidelines or Subscription Policy (this Site has no community
// features, accounts, or billing) and no DMCA/Copyright policy (excluded
// pending iCrestiQ LLC registering a copyright agent, same reasoning as the
// sibling GovCon Lab site).
export const POLICIES = [terms, privacy, cookies, aiDisclosure, disclaimers]

export function getPolicyBySlug(slug: string | undefined) {
  return POLICIES.find((p) => p.slug === slug)
}
