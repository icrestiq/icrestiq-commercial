import type { ResourcePage } from './types'

export const governmentProcurement: ResourcePage = {
  slug: 'government-procurement',
  type: 'guide',
  label: 'Government Procurement',
  title: 'Government Procurement for Pressure Washing Equipment',
  metaTitle: 'Government Procurement: Pressure Washing Equipment | iCrestiQ Commercial',
  metaDescription:
    'How government and institutional buyers request pressure washing equipment through iCrestiQ Commercial — RFQ handling, scoped quotes, and typical timelines.',
  eyebrow: 'Buying Guide',
  intro:
    "This page covers the buying process for pressure washing equipment specifically. For SAM.gov registration, UEI, CAGE code, and registered NAICS codes, see our Government & Institutional Sales page — this page won't repeat those, it picks up where that leaves off.",
  blocks: [
    { type: 'h2', text: 'What a Pressure Washing RFQ Typically Needs' },
    {
      type: 'ul',
      items: [
        'Application and volume — what\'s being cleaned, how often, at what scale (see our Buying Guide for the full decision path if this isn\'t already scoped).',
        'Configuration constraints — fixed installation vs. mobile, site power/water access.',
        'Delivery timeline and any fiscal-year budget constraints.',
        'Solicitation number and any specific technical requirements from the RFQ itself.',
      ],
    },
    { type: 'h2', text: 'Typical Timeline' },
    {
      type: 'p',
      text: "Quote turnaround depends on how fully specified the requirement is — a well-scoped RFQ with clear specs gets a faster response than one that needs back-and-forth to clarify application first. Equipment lead time varies by configuration: portable and skid-mounted units are typically faster to source than custom stationary installations, which involve site-specific planning.",
    },
    {
      type: 'callout',
      text: "Have an active solicitation or RFQ in hand? Submitting it directly (rather than describing it generically) gets you the fastest, most accurate response.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Do you respond to formal solicitations, not just informal RFQs?',
          a: "Yes — send the solicitation details through a quote request and we'll respond in the format your process requires.",
        },
        {
          q: 'Can you work within a specific fiscal year or budget cycle?',
          a: "Yes — tell us your timeline constraints on a quote request and we'll scope accordingly.",
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['buying-guide', 'public-works', 'what-size-do-i-need'],
}
