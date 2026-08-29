import type { ResourcePage } from './types'

export const accessories: ResourcePage = {
  slug: 'accessories',
  type: 'core',
  label: 'Pressure Washer Accessories',
  title: 'Pressure Washer Accessories',
  metaTitle: 'Pressure Washer Hoses, Reels, Pumps & Accessories | iCrestiQ Commercial',
  metaDescription:
    'Replacement and upfit components for existing commercial pressure washer fleets — hose reels, high-pressure hose, and pumps matched to your system.',
  eyebrow: 'Core Equipment',
  intro:
    'Not every need is a new pressure washer. Reels, hose, and pumps wear out or need upgrading on units that are otherwise working fine — replacing or upfitting the right component keeps an existing system running instead of forcing a full replacement.',
  blocks: [
    { type: 'h2', text: 'What We Source' },
    {
      type: 'ul',
      items: [
        'Hose reels — manual and powered, matched to your existing rig',
        'High-pressure hose — rated to your system\'s PSI',
        'Pumps — replacement and upgrade options',
        'Other fleet upfit components as needed',
      ],
    },
    { type: 'h2', text: 'Typical Specs' },
    {
      type: 'specTable',
      caption: 'Components are matched to your existing system, not sold as a standalone spec.',
      rows: [
        { label: 'Type', value: 'Component (reel, hose, pump)' },
        { label: 'Rating', value: 'Matched to your system\'s PSI/GPM' },
        { label: 'Use Case', value: 'Repair or upfit of existing equipment' },
      ],
    },
    {
      type: 'callout',
      text: "Because these components need to match your existing system's specs, this is one of the few categories where we ask for your current equipment details upfront on a quote request, rather than sizing from scratch.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Can you source parts for equipment iCrestiQ didn\'t originally supply?',
          a: 'Yes — accessory and component sourcing isn\'t limited to systems we originally quoted. Tell us your existing equipment\'s specs on a quote request and we\'ll match the right component.',
        },
        {
          q: 'Is it worth replacing a pump versus buying a new unit?',
          a: "Often, yes — if the rest of the system is in good working order, replacing a worn pump or reel costs a fraction of a full replacement. We can help you weigh that against the age and condition of the rest of the unit.",
        },
      ],
    },
  ],
  ctaEquipment: 'Hoses, Reels, Pumps, and Accessories',
  relatedSlugs: ['maintenance', 'hot-water', 'cold-water'],
}
