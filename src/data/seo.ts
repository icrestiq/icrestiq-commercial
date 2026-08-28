import { equipmentCategories } from './equipmentCategories'
import { POLICIES } from './policies'

// Real domain, purchased 2026-08-28. Used for canonical URLs, Open Graph/
// Twitter absolute URLs, and sitemap.xml. Still needs DNS pointed at the
// Vercel deployment and the domain attached in the Vercel project before
// this URL actually resolves to the live site.
export const SITE_URL = 'https://icrestiqcommercial.com'
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

export const routeMeta: RouteMeta[] = [...staticRoutes, ...categoryRoutes, ...policyRoutes]

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
