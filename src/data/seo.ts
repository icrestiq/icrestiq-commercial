import { equipmentCategories } from './equipmentCategories'
import { POLICIES } from './policies'
import { pressureWashingResources } from './resources'

// Real domain, purchased 2026-08-28, live since the same day. Used for
// canonical URLs, Open Graph/Twitter absolute URLs, and sitemap.xml.
// Deliberately the `www` form, not the apex — the apex domain 308-redirects
// to `www.icrestiqcommercial.com` (Vercel's domain config, not something
// this app controls), so declaring canonical/sitemap/OG URLs as `www`
// means they resolve directly with a 200 instead of pointing at a URL that
// immediately redirects elsewhere. Do not switch this back to the apex
// form unless the Vercel domain config's redirect direction changes too —
// they must always match.
export const SITE_URL = 'https://www.icrestiqcommercial.com'
export const SITE_NAME = 'iCrestiQ Commercial'

export interface RouteMeta {
  path: string
  title: string
  description: string
}

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'iCrestiQ Commercial | Commercial & Industrial Equipment Sourcing',
    description:
      'iCrestiQ Commercial sources commercial and industrial equipment for businesses, contractors, institutions, and government buyers — starting with pressure washing systems and expanding into material handling equipment.',
  },
  {
    path: '/equipment',
    title: 'Commercial & Industrial Equipment Categories | iCrestiQ Commercial',
    description:
      'Browse the equipment categories iCrestiQ Commercial sources: active pressure washing systems today, with material handling equipment and more categories expanding over time.',
  },
  {
    path: '/government',
    title: 'Government & Institutional Equipment Sales | iCrestiQ Commercial',
    description:
      'iCrestiQ Commercial supports federal, state, and local government and institutional buyers sourcing commercial and industrial equipment, including NAICS 423850.',
  },
  {
    path: '/quote',
    title: 'Request a Quote | iCrestiQ Commercial',
    description:
      'Request a scoped equipment quote from iCrestiQ Commercial — tell us the application, volume, and timeline and we will match equipment to the job.',
  },
  {
    path: '/about',
    title: 'About iCrestiQ Commercial',
    description:
      'iCrestiQ Commercial is the commercial equipment sales division of iCrestiQ LLC, building a multi-category commercial and industrial equipment platform.',
  },
  {
    path: '/contact',
    title: 'Contact | iCrestiQ Commercial',
    description:
      'Get in touch with iCrestiQ Commercial for equipment sourcing questions, manufacturer partnership inquiries, or general contact.',
  },
  {
    path: '/policies',
    title: 'Policies | iCrestiQ Commercial',
    description: 'The policies that govern iCrestiQ Commercial’s website.',
  },
  {
    path: '/accessibility',
    title: 'Accessibility Statement | iCrestiQ Commercial',
    description: 'iCrestiQ Commercial’s accessibility target and how to reach us about barriers you encounter.',
  },
]

const categoryRoutes: RouteMeta[] = equipmentCategories.map((c) => ({
  path: `/equipment/${c.slug}`,
  title: `${c.name} | iCrestiQ Commercial`,
  description: c.description,
}))

const policyRoutes: RouteMeta[] = POLICIES.map((p) => ({
  path: `/policies/${p.slug}`,
  title: `${p.label} | iCrestiQ Commercial`,
  description: p.summary,
}))

const resourceRoutes: RouteMeta[] = pressureWashingResources.map((r) => ({
  path: `/equipment/pressure-washing/${r.slug}`,
  title: r.metaTitle,
  description: r.metaDescription,
}))

const toolRoutes: RouteMeta[] = [
  {
    path: '/equipment/pressure-washing/selector',
    title: 'Pressure Washer Equipment Selector | iCrestiQ Commercial',
    description:
      'Answer four quick questions and get a recommended commercial pressure washer type, matched to your application, duty cycle, and job-site needs — then request a scoped quote.',
  },
  {
    path: '/equipment/pressure-washing/application-matrix',
    title: 'Application Matrix | iCrestiQ Commercial',
    description:
      'Every common commercial pressure-washing task, who typically runs into it, and the equipment category to start with — one lookup table linking to the full guide for each.',
  },
]

export const routeMeta: RouteMeta[] = [
  ...staticRoutes,
  ...categoryRoutes,
  ...policyRoutes,
  ...resourceRoutes,
  ...toolRoutes,
]

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: 'Page Not Found | iCrestiQ Commercial',
  description: 'The page you requested could not be found.',
}

export function isKnownPath(path: string): boolean {
  return routeMeta.some((r) => r.path === path)
}

export function getMetaForPath(path: string): RouteMeta {
  return routeMeta.find((r) => r.path === path) ?? notFoundMeta
}
