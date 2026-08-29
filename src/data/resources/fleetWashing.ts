import type { ResourcePage } from './types'

export const fleetWashing: ResourcePage = {
  slug: 'fleet-washing',
  type: 'application',
  label: 'Fleet Washing',
  title: 'Pressure Washers for Fleet Washing',
  metaTitle: 'Commercial Pressure Washers for Fleet Washing | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for commercial fleet washing — exteriors, engine bays, and undercarriages — including which pressure washer type and PSI/GPM range fits daily fleet operations.',
  eyebrow: 'Application',
  intro:
    "Fleet washing usually means two different jobs wearing one name: exterior washing, where cold water and volume do the work, and engine bay/undercarriage cleaning, where grease and oil need hot water to actually break down. Sizing for one and expecting it to handle both is the most common mismatch we see.",
  blocks: [
    { type: 'h2', text: 'Matching Equipment to What You\'re Actually Washing' },
    {
      type: 'ul',
      items: [
        'Exteriors — dirt, road grime, general buildup: a cold water unit in the 2,500–3,500 PSI / 3–5 GPM range handles daily exterior washing efficiently.',
        'Engine bays and undercarriages — grease and oil: this is where hot water earns its cost. See our Commercial Hot Water Pressure Washers page.',
        'Mixed fleets, multiple sites per day: a trailer-mounted system brings both water supply and (often) hot water capability to wherever the vehicles are.',
        'Single fixed wash location: a stationary system built for continuous, multi-shift duty is more efficient than a portable unit running all day.',
      ],
    },
    { type: 'h2', text: 'A Common Setup' },
    {
      type: 'p',
      text: "Many fleet operations run cold water for routine exterior washing and reserve a hot water unit specifically for engine bay/undercarriage work or heavier grease jobs — rather than sizing one hot water system to handle everything, which usually means paying for capability that most of the wash volume doesn't need.",
    },
    {
      type: 'callout',
      text: 'If runoff needs to be captured — regulated wash areas, environmentally sensitive sites — a fixed wash bay paired with a water recovery system is worth scoping alongside the pressure washer itself.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'What PSI and GPM does daily fleet washing need?',
          a: 'Most daily exterior fleet washing falls in the 2,500–3,500 PSI / 3–5 GPM range — see our PSI vs GPM guide (with an interactive tool) for how those two specs map to different job types.',
        },
        {
          q: 'Is a trailer or stationary system better for fleet washing?',
          a: 'It depends on whether the fleet comes to one location or you need to bring the wash system to the vehicles across multiple sites. See our Stationary Wash Systems and Trailer-Mounted Systems pages for the trade-offs.',
        },
      ],
    },
  ],
  ctaEquipment: 'Cold Water Pressure Washers',
  relatedSlugs: ['hot-water', 'cold-water', 'trailer-systems', 'psi-gpm-guide'],
}
