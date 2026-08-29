import type { ResourcePage } from './types'

export const facilityMaintenance: ResourcePage = {
  slug: 'facility-maintenance',
  type: 'application',
  label: 'Facility Maintenance',
  title: 'Pressure Washers for Facility Maintenance',
  metaTitle: 'Pressure Washers for Facility Maintenance | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for routine facility and building exterior maintenance — entryways, walkways, loading docks, and general upkeep for property and facilities teams.',
  eyebrow: 'Application',
  intro:
    "Facility maintenance is usually routine, recurring work — building exteriors, entryways, walkways, loading docks — where reliability and low running cost matter more than raw capability.",
  blocks: [
    { type: 'h2', text: 'What Facility Teams Typically Need' },
    {
      type: 'ul',
      items: [
        'General exterior washing — dirt, grime, weathering: cold water handles this efficiently. See Cold Water Pressure Washers.',
        'Entryways and walkways — often lower PSI, more about appearance than heavy-duty cleaning.',
        'Loading docks — higher traffic areas that may need more frequent attention and can benefit from a surface cleaner attachment.',
        'Occasional or scheduled use rather than continuous duty — a standard commercial-duty unit, not industrial, usually fits.',
      ],
    },
    { type: 'h2', text: 'Portable or Stationary?' },
    {
      type: 'p',
      text: "Property/facilities teams managing one site often do fine with a portable or skid-mounted unit — no need for a fixed installation if the wash points are limited and the schedule is manageable. Teams managing multiple properties benefit more from a trailer-mounted rig that travels between locations.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Is a residential-grade unit enough for light facility maintenance?',
          a: "No — even light-duty commercial facility work outpaces residential equipment's duty cycle. See our Industrial vs. Residential guide for why that distinction matters even for occasional-use jobs.",
        },
      ],
    },
  ],
  ctaEquipment: 'Cold Water Pressure Washers',
  relatedSlugs: ['cold-water', 'public-works', 'industrial-vs-residential'],
}
