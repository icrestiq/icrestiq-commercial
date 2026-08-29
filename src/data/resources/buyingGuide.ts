import type { ResourcePage } from './types'

export const buyingGuide: ResourcePage = {
  slug: 'buying-guide',
  type: 'guide',
  label: 'Buying Guide',
  title: 'Commercial Pressure Washer Buying Guide',
  metaTitle: 'Commercial Pressure Washer Buying Guide | iCrestiQ Commercial',
  metaDescription:
    'Start here: the full decision path for buying a commercial pressure washer — hot vs cold water, PSI/GPM, configuration, duty cycle, and where to go next for each decision.',
  eyebrow: 'Buying Guide',
  intro:
    "Buying commercial pressure washing equipment comes down to a handful of decisions, in roughly this order. This page is the map — each section links to the guide that goes deep on that specific decision.",
  blocks: [
    { type: 'h2', text: '1. Hot Water or Cold Water?' },
    {
      type: 'p',
      text: "The first fork in the road. If grease, oil, or food-service buildup is part of the job, you need hot water — cold water alone will underperform no matter how much pressure you throw at it. If it's dirt, mud, and general grime, cold water does the job for less. See Hot Water vs. Cold Water and, if grease/oil is the specific driver, Pressure Washers for Grease and Oil.",
    },
    { type: 'h2', text: '2. What PSI and GPM?' },
    {
      type: 'p',
      text: 'PSI breaks material loose; GPM rinses it away and covers ground. Matching both to your surface and soil level matters more than maximizing either one. See PSI vs. GPM (with an interactive tool) and What Size Do I Need? for the full walkthrough.',
    },
    { type: 'h2', text: '3. What Configuration?' },
    {
      type: 'p',
      text: 'Portable, skid-mounted, trailer-mounted, or stationary — this depends on whether the equipment needs to travel between job sites and how much onboard capacity you need. See Trailer-Mounted Systems, Skid-Mounted Systems, Trailer vs. Skid-Mounted, and Stationary Wash Systems.',
    },
    { type: 'h2', text: '4. Commercial or Industrial Duty?' },
    {
      type: 'p',
      text: 'Regular heavy use fits standard commercial-duty equipment. Continuous, multi-shift operation needs industrial-duty components built to sustain that load. See Industrial Pressure Washers.',
    },
    { type: 'h2', text: '5. What Else Does the Job Need?' },
    {
      type: 'ul',
      items: [
        'Large flat surfaces (lots, floors) — Commercial Surface Cleaners',
        'Regulated wash areas or runoff concerns — Water Recovery Systems',
        'Upfitting or repairing existing equipment — Accessories',
      ],
    },
    {
      type: 'callout',
      text: "Don't want to work through this manually? Our Equipment Selector Tool asks the key questions directly and gives you a specific recommendation in under a minute.",
    },
    {
      type: 'faq',
      items: [
        {
          q: "I still don't know what I need — what's the fastest path?",
          a: 'Use the Equipment Selector Tool, or just request a quote and tell us the application — we\'ll ask the right follow-up questions rather than requiring you to self-diagnose first.',
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['hot-water-vs-cold-water', 'psi-gpm-guide', 'trailer-vs-skid', 'what-size-do-i-need'],
}
