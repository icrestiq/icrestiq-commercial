import type { ResourcePage } from './types'

export const heavyEquipment: ResourcePage = {
  slug: 'heavy-equipment-cleaning',
  type: 'application',
  label: 'Heavy Equipment Cleaning',
  title: 'Pressure Washers for Heavy Equipment Cleaning',
  metaTitle: 'Pressure Washers for Heavy Equipment Cleaning | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for cleaning heavy machinery — undercarriages, tracks, and engine compartments where baked-on grease, mud, and hydraulic fluid all show up on the same job.',
  eyebrow: 'Application',
  intro:
    "Heavy equipment brings three problems to the same wash: baked-on grease and hydraulic fluid, packed mud and debris in tracks and undercarriages, and enough surface area that GPM matters as much as PSI. It's one of the more demanding applications on this site.",
  blocks: [
    { type: 'h2', text: 'What Makes This Different' },
    {
      type: 'ul',
      items: [
        'Grease and hydraulic fluid on engine compartments and joints — needs hot water, not cold. See Pressure Washers for Grease and Oil.',
        'Packed mud and debris in tracks and undercarriages — needs sustained PSI and volume, not a quick rinse.',
        'Large surface area per machine — GPM matters as much as PSI for reasonable wash times.',
        'Often done at a fixed yard rather than roaming between sites — see Stationary Wash Systems.',
      ],
    },
    { type: 'h2', text: 'A Typical Setup' },
    {
      type: 'p',
      text: "Heavy equipment yards commonly run a hot water unit in the higher end of the industrial range — see our Industrial Pressure Washers page — paired with a stationary or heavy trailer-mounted configuration depending on whether the equipment comes to one wash point or needs to be cleaned in the field.",
    },
    {
      type: 'callout',
      text: 'Runoff from heavy equipment washing routinely carries oil and hydraulic fluid — if this happens at a fixed location, pair it with a Water Recovery System.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Does heavy equipment need industrial-duty or standard commercial equipment?',
          a: "It depends on volume — a yard washing a handful of machines occasionally can run standard commercial-duty equipment. A high-volume operation running continuously needs industrial-duty components built to sustain that load. See Industrial Pressure Washers.",
        },
      ],
    },
  ],
  ctaEquipment: 'Hot Water Pressure Washers',
  relatedSlugs: ['hot-water', 'industrial', 'grease-and-oil', 'water-recovery'],
}
