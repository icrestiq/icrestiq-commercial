import type { ResourcePage } from './types'

export const whatSize: ResourcePage = {
  slug: 'what-size-do-i-need',
  type: 'guide',
  label: 'What Size Do I Need?',
  title: 'What Size Commercial Pressure Washer Do I Need?',
  metaTitle: 'What Size Commercial Pressure Washer Do I Need? | iCrestiQ Commercial',
  metaDescription:
    'How to size a commercial pressure washer — the questions that actually determine PSI, GPM, and configuration, before you look at a single spec sheet.',
  eyebrow: 'Buying Guide',
  intro:
    "Sizing starts with the job, not the spec sheet. Four questions determine almost everything else: what are you cleaning, how often, where, and does it need to travel — get those right and the PSI/GPM range and configuration mostly fall out on their own.",
  blocks: [
    { type: 'h2', text: 'Four Questions to Answer First' },
    {
      type: 'ol',
      items: [
        'What are you actually cleaning? Grease and oil point toward hot water; dirt and general grime point toward cold water. See Hot Water vs. Cold Water.',
        'How often will it run? Occasional use tolerates a smaller, more affordable unit. Daily or continuous use needs equipment built for that duty cycle — see our Stationary Wash Systems page for continuous-use installations.',
        "What's the surface? Large flat areas (lots, floors) lean on GPM more than PSI — a surface cleaner attachment often matters more than raw pressure. See our PSI vs GPM guide.",
        "Does it need to travel? Multiple job sites in a day point toward a trailer or skid-mounted rig. One fixed location points toward a stationary system.",
      ],
    },
    { type: 'h2', text: 'Use the Selector Tool' },
    {
      type: 'p',
      text: "Rather than working through these questions manually, our Equipment Selector Tool asks them directly and gives you a specific recommendation in under a minute.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Is it better to size up "just in case"?',
          a: 'Not usually — oversizing means paying more upfront and, for hot water units, running more fuel cost than the job needs. Sizing to the actual job (with reasonable headroom, not double capacity) is more cost-effective than buying for a hypothetical future need.',
        },
        {
          q: 'What if my needs are mixed — some grease jobs, some general cleaning?',
          a: "Many operations run two systems rather than one oversized unit for everything — see our Fleet Washing page for a common example of this exact split.",
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['psi-gpm-guide', 'hot-water-vs-cold-water', 'fleet-washing'],
}
