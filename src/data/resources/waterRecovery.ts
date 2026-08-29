import type { ResourcePage } from './types'

export const waterRecovery: ResourcePage = {
  slug: 'water-recovery',
  type: 'core',
  label: 'Water Recovery Systems',
  title: 'Pressure Washer Water Recovery Systems',
  metaTitle: 'Pressure Washer Water Recovery Systems | iCrestiQ Commercial',
  metaDescription:
    'Water reclaim and filtration equipment that captures wash-water runoff for compliant discharge in regulated wash areas. When water recovery is required and what it involves.',
  eyebrow: 'Core Equipment',
  intro:
    "A water recovery system captures, filters, and manages wash-water runoff instead of letting it discharge directly — required in a growing number of jurisdictions for any wash area where runoff could carry oil, grease, or contaminants into storm drains.",
  blocks: [
    { type: 'h2', text: 'Why Water Recovery Matters' },
    {
      type: 'p',
      text: "Wash-water runoff from vehicles or equipment routinely carries oil, grease, and debris — discharging that directly into a storm drain is a regulatory problem in most municipalities, and an environmental one everywhere. A recovery system reclaims that runoff, filters it, and either recirculates or discharges it in a compliant way.",
    },
    {
      type: 'ul',
      items: [
        'Any fixed wash bay or stationary installation in a regulated area',
        'Fleet and equipment washing where runoff carries oil or grease',
        'Sites near storm drains or environmentally sensitive areas',
        'Operations that need to document compliant wastewater handling',
      ],
    },
    { type: 'h2', text: 'What It Involves' },
    {
      type: 'specTable',
      caption: 'General shape — actual sizing is site-specific.',
      rows: [
        { label: 'Function', value: 'Reclaim / filter' },
        { label: 'Sizing', value: 'Site-specific' },
        { label: 'Typical pairing', value: 'Stationary wash systems, fixed wash bays' },
      ],
    },
    {
      type: 'p',
      text: 'Water recovery is almost always paired with a stationary or fixed wash installation — it\'s built around capturing runoff at a specific location, not something that travels with a trailer or skid unit. Requirements vary significantly by jurisdiction and what\'s actually being washed, which is exactly why sizing is site-specific rather than off-the-shelf.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Is water recovery legally required?',
          a: "Requirements vary by jurisdiction and by what's being washed — many municipalities regulate wash-water discharge, especially where oil or grease is involved. We're not a substitute for your own compliance research, but we can scope equipment once you know your local requirement.",
        },
        {
          q: 'Does a water recovery system work with any pressure washer?',
          a: "It's paired with the wash installation, not the pressure washer's spray output specifically — it captures runoff after the fact, so it works alongside whatever pressure washer configuration is in use at that site.",
        },
      ],
    },
  ],
  ctaEquipment: 'Water Recovery Systems',
  relatedSlugs: ['stationary-systems', 'water-recovery-requirements', 'hot-water'],
}
