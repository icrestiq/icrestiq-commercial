import type { ResourcePage } from './types'

export const publicWorks: ResourcePage = {
  slug: 'public-works',
  type: 'application',
  label: 'Public Works',
  title: 'Pressure Washers for Public Works',
  metaTitle: 'Pressure Washers for Public Works Departments | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for municipal and public works pressure washing — sidewalks, municipal vehicle fleets, and public facility maintenance, including government procurement.',
  eyebrow: 'Application',
  intro:
    "Public works covers a wide range in one department — municipal vehicle fleets, sidewalks and public spaces, facility maintenance — and often comes with procurement requirements standard commercial buyers don't deal with.",
  blocks: [
    { type: 'h2', text: 'Common Public Works Applications' },
    {
      type: 'ul',
      items: [
        'Municipal fleet washing — see Fleet Washing for the exterior/engine-bay split most operations run.',
        'Sidewalks, plazas, and public hardscape — see Commercial Surface Cleaners for large flat-area equipment.',
        'Public facility and building maintenance — general exterior washing, typically cold water.',
        'Graffiti and stain removal from public surfaces — often needs higher PSI and, depending on the stain, hot water.',
      ],
    },
    { type: 'h2', text: 'Procurement' },
    {
      type: 'p',
      text: "As a government/institutional buyer, your purchasing process likely differs from a standard commercial quote — scoped timelines, purchase orders, and procurement documentation. See our Government & Institutional Sales page for how we work with public-sector buyers, including our SAM.gov registration and NAICS codes.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Can you work with municipal purchase orders and procurement timelines?',
          a: 'Yes — tell us your procurement process on a quote request and we\'ll work within it. See our Government & Institutional Sales page for the specifics already on file.',
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['fleet-washing', 'surface-cleaners', 'facility-maintenance'],
}
