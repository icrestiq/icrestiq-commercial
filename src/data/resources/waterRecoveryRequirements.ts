import type { ResourcePage } from './types'

export const waterRecoveryRequirements: ResourcePage = {
  slug: 'water-recovery-requirements',
  type: 'guide',
  label: 'Water Recovery Requirements',
  title: 'Pressure Washer Water Recovery Requirements',
  metaTitle: 'Pressure Washer Water Recovery Requirements | iCrestiQ Commercial',
  metaDescription:
    'What typically triggers a water recovery requirement for commercial wash operations, and how to figure out whether your site needs one — general guidance, not a compliance guarantee.',
  eyebrow: 'Buying Guide',
  intro:
    "Whether a wash area legally needs water recovery depends on your jurisdiction and what's being washed — there's no single national answer. Here's what typically drives the requirement, so you know what to check.",
  blocks: [
    { type: 'h2', text: 'What Typically Triggers a Requirement' },
    {
      type: 'ul',
      items: [
        'Runoff carrying oil, grease, or automotive/industrial fluids — the most common trigger across jurisdictions.',
        'Proximity to storm drains or waterways — sites near environmentally sensitive drainage are more likely to be regulated.',
        'Facility type — vehicle maintenance, food processing, and industrial sites are more commonly subject to discharge rules than general exterior washing.',
        'Local and state stormwater ordinances — these vary significantly; a requirement in one municipality may not apply in another.',
      ],
    },
    {
      type: 'callout',
      text: "We source equipment, not compliance determinations — verify your specific requirement with your local environmental or public works authority before finalizing a system. We're glad to scope equipment once you know what's required.",
    },
    { type: 'h2', text: 'If You\'re Not Sure' },
    {
      type: 'p',
      text: 'A safe default for any fixed wash bay handling vehicles, equipment, or industrial material: assume recovery will be required and confirm with local authorities before committing to a site plan without one. Retrofitting a wash bay for recovery after the fact costs more than planning for it upfront.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Does a mobile trailer-mounted unit need water recovery too?',
          a: "Usually not in the same way — water recovery is almost always tied to a fixed wash location, not mobile equipment. If a trailer rig regularly washes at the same site, that site may still need its own recovery infrastructure, independent of the pressure washer itself.",
        },
        {
          q: 'What equipment handles water recovery?',
          a: 'See our Water Recovery Systems page for the reclaim and filtration equipment itself, once you\'ve confirmed what your site requires.',
        },
      ],
    },
  ],
  ctaEquipment: 'Water Recovery Systems',
  relatedSlugs: ['water-recovery', 'stationary-systems', 'food-processing'],
}
