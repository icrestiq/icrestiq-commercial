import type { ResourcePage } from './types'

export const bestForFleetWashing: ResourcePage = {
  slug: 'best-for-fleet-washing',
  type: 'guide',
  label: 'Best for Fleet Washing',
  title: 'Best Pressure Washer for Fleet Washing',
  metaTitle: 'Best Pressure Washer for Fleet Washing | iCrestiQ Commercial',
  metaDescription:
    'If you need one straightforward recommendation for daily fleet washing, here it is — and when your fleet actually needs something different from the default answer.',
  eyebrow: 'Buying Guide',
  intro:
    "If you want the short answer before reading a full breakdown: for most daily fleet exterior washing, a cold water unit in the 2,500–3,500 PSI / 3–5 GPM range is the right default. Here's why, and when your fleet is the exception.",
  blocks: [
    { type: 'h2', text: 'The Default Recommendation' },
    {
      type: 'p',
      text: "Most commercial fleets wash exteriors far more often than they deep-clean engine bays or undercarriages — so the equipment that runs daily should be sized for that, not for the occasional heavier job. A cold water unit in the 2,500–3,500 PSI / 3–5 GPM range handles daily exterior washing efficiently without paying for hot water capability most of the wash volume doesn't need.",
    },
    { type: 'h2', text: 'When the Default Is Wrong for Your Fleet' },
    {
      type: 'ul',
      items: [
        'Grease/oil is a regular part of the job (not just occasional) — you need a hot water unit as your primary system, not a supplement. See Pressure Washers for Grease and Oil.',
        'You wash at multiple sites, not one yard — a trailer-mounted or skid-mounted rig matters more than the water temperature question.',
        'You run continuous, high-volume washing — standard commercial-duty equipment may not hold up; see Industrial Pressure Washers.',
        'Your vehicles are heavy equipment, not standard fleet vehicles — see Heavy Equipment Cleaning instead.',
      ],
    },
    {
      type: 'p',
      text: 'For the full breakdown of how fleet operations typically split exterior and engine-bay/undercarriage work across two systems, see our Fleet Washing application page.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Is this recommendation different from your Fleet Washing page?',
          a: "This page gives one starting-point answer for the most common case. The Fleet Washing page covers the full picture — including when a fleet needs more than one system. Start here if you want a fast answer; read that page for the complete reasoning.",
        },
      ],
    },
  ],
  ctaEquipment: 'Cold Water Pressure Washers',
  relatedSlugs: ['fleet-washing', 'cold-water', 'hot-water'],
}
