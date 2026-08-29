import type { ResourcePage } from './types'

export const cost: ResourcePage = {
  slug: 'how-much-does-it-cost',
  type: 'guide',
  label: 'How Much Does It Cost?',
  title: 'How Much Does a Commercial Pressure Washer Cost?',
  metaTitle: 'How Much Does a Commercial Pressure Washer Cost? | iCrestiQ Commercial',
  metaDescription:
    'What actually drives commercial pressure washer pricing — hot vs cold water, PSI/GPM, configuration, and duty cycle — and why we scope a real number instead of publishing a generic price list.',
  eyebrow: 'Buying Guide',
  intro:
    "We don't publish a generic price list, and honestly, neither should anyone selling commercial equipment — the real cost depends on a handful of choices that vary a lot from job to job. Here's what actually moves the number, so a quote request makes sense before you get one.",
  blocks: [
    { type: 'h2', text: "What Drives the Cost" },
    {
      type: 'ul',
      items: [
        'Hot water vs. cold water — a burner and heating system add real cost, both upfront and in ongoing fuel. See Hot Water vs. Cold Water.',
        'PSI and GPM — higher-capacity pumps and motors cost more than light-duty equivalents.',
        'Configuration — portable, skid-mounted, trailer-mounted, and stationary installations have very different cost profiles; a stationary system includes site plumbing and installation, not just the unit.',
        'Duty cycle — industrial-duty components built for continuous operation cost more than standard commercial-duty equivalents rated for regular but not continuous use.',
        'Add-ons — water recovery systems, surface cleaner attachments, and accessories are separate line items on top of the base unit.',
      ],
    },
    { type: 'h2', text: 'Why We Scope Instead of List Prices' },
    {
      type: 'p',
      text: "A generic price list either undersells a job that actually needs more capability, or scares off a buyer with a number padded for a job they don't have. We'd rather ask what you're actually trying to accomplish and come back with equipment — and a real number — matched to that, not a shelf price disconnected from your application.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Do you offer financing?',
          a: "Financing and purchasing details are part of what we work out on a quote request — tell us what you need and we'll walk through the options available.",
        },
        {
          q: "What's the fastest way to get a real number?",
          a: 'Request a quote with your application, volume, and timeline — that\'s the direct path to actual pricing instead of guessing from a generic range.',
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['what-size-do-i-need', 'hot-water-vs-cold-water', 'buying-guide'],
}
