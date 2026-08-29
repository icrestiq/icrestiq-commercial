import type { ResourcePage } from './types'

export const coldWater: ResourcePage = {
  slug: 'cold-water',
  type: 'core',
  label: 'Cold Water Pressure Washers',
  title: 'Commercial Cold Water Pressure Washers',
  metaTitle: 'Commercial Cold Water Pressure Washers | iCrestiQ Commercial',
  metaDescription:
    'Commercial cold water pressure washers for daily fleet washing, exterior maintenance, and general facility cleaning. Typical specs, where cold water is the right call, and how to get a scoped quote.',
  eyebrow: 'Core Equipment',
  intro:
    "A cold water pressure washer relies entirely on pressure and flow — no burner, no heated water — to move dirt, mud, and loose debris off a surface. For jobs that don't involve grease or oil, that's usually all you need, and it comes with a simpler, cheaper unit to buy and run.",
  blocks: [
    { type: 'h2', text: 'Where Cold Water Is the Right Call' },
    {
      type: 'p',
      text: 'Cold water units are the workhorse for exterior cleaning where the problem is loose material, not baked-on grime — dirt, mud, dust, and general surface buildup lift with pressure and flow alone. Without a burner to maintain or fuel to budget for, cold water units also cost less to buy and run than an equivalent hot water system.',
    },
    {
      type: 'ul',
      items: [
        'Daily fleet exterior washing (not engine bays or undercarriages)',
        'General facility and building exterior maintenance',
        'Parking lots, sidewalks, and other hardscape cleaning',
        'Construction and job-site equipment washdown where mud and dirt are the target',
      ],
    },
    { type: 'h2', text: 'Typical Specs' },
    {
      type: 'specTable',
      caption: 'Representative ranges for commercial cold water units — not a fixed catalog.',
      rows: [
        { label: 'PSI', value: '2,000–4,000' },
        { label: 'Flow', value: '3–8 GPM' },
        { label: 'Power', value: 'Gas or electric' },
        { label: 'Configuration', value: 'Portable, skid-mounted, trailer-mounted, or stationary' },
      ],
    },
    { type: 'h2', text: 'When to Step Up to Hot Water Instead' },
    {
      type: 'p',
      text: "If grease, oil, or cold-weather buildup is a regular part of the job, cold water will underperform no matter how much pressure or detergent you use — you'll spend more in labor and chemical trying to compensate than a hot water unit would have cost. See our Commercial Hot Water Pressure Washers page and the Hot Water vs Cold Water guide for the direct comparison.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Is cold water enough for daily commercial use?',
          a: "For most exterior washing — fleets, facilities, hardscape — yes. Cold water units are built for daily-use duty cycles, not just occasional homeowner-grade use. The deciding factor is what's actually on the surface, not how often you're cleaning.",
        },
        {
          q: "What's the real cost difference between cold and hot water units?",
          a: "Cold water units cost less up front and have lower running cost since there's no burner or fuel to account for. The trade-off only matters if your job actually involves grease or oil — otherwise cold water does the same job for less.",
        },
      ],
    },
  ],
  ctaEquipment: 'Cold Water Pressure Washers',
  relatedSlugs: ['hot-water', 'hot-water-vs-cold-water', 'psi-gpm-guide'],
}
