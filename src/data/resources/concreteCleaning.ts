import type { ResourcePage } from './types'

export const concreteCleaning: ResourcePage = {
  slug: 'concrete-cleaning',
  type: 'application',
  label: 'Concrete Cleaning',
  title: 'Pressure Washers for Concrete Cleaning',
  metaTitle: 'Pressure Washers for Concrete Cleaning | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for cleaning concrete surfaces — parking lots, warehouse floors, and sidewalks — including why higher PSI can damage concrete if it\'s not matched to the job.',
  eyebrow: 'Application',
  intro:
    "Concrete is forgiving compared to painted or delicate surfaces, but it's not infinitely so — too much PSI at close range can etch or pit concrete, and large concrete areas clean far more efficiently with the right attachment than a bare wand.",
  blocks: [
    { type: 'h2', text: 'Matching Equipment to Concrete Work' },
    {
      type: 'ul',
      items: [
        'Large flat areas (lots, warehouse floors) — a surface cleaner attachment covers ground faster and more evenly than a wand. See Commercial Surface Cleaners.',
        'Oil and grease stains on concrete (common in shop floors and parking areas) — needs hot water to actually break the stain, not just cold water pressure. See Pressure Washers for Grease and Oil.',
        'General dirt and weathering — cold water in the standard commercial range handles this without issue.',
        'Regulated sites — concrete runoff can carry oil and chemical residue; see Water Recovery Systems if discharge is regulated at your location.',
      ],
    },
    {
      type: 'callout',
      text: "More PSI isn't automatically better on concrete — excessive pressure at close range can etch or pit the surface. Matching PSI to the job, not maximizing it, protects the surface you're cleaning.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Can pressure washing damage concrete?',
          a: 'Yes, if PSI is too high for the concrete\'s condition and the wand or surface cleaner is held too close for too long. Older or already-damaged concrete is more vulnerable. See our PSI vs GPM guide for how to match pressure to the job rather than just maximizing it.',
        },
      ],
    },
  ],
  ctaEquipment: 'Surface Cleaning Equipment',
  relatedSlugs: ['surface-cleaners', 'psi-gpm-guide', 'grease-and-oil'],
}
