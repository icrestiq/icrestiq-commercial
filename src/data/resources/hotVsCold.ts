import type { ResourcePage } from './types'

export const hotVsCold: ResourcePage = {
  slug: 'hot-water-vs-cold-water',
  type: 'guide',
  label: 'Hot Water vs Cold Water',
  title: 'Hot Water vs. Cold Water Pressure Washers',
  metaTitle: 'Hot Water vs Cold Water Pressure Washer: Which Do You Need? | iCrestiQ Commercial',
  metaDescription:
    'A direct comparison of hot water and cold water commercial pressure washers — cost, what each actually cleans well, and how to decide which one fits your application.',
  eyebrow: 'Buying Guide',
  intro:
    "The hot-water-or-cold-water decision comes down to one question: is grease or oil actually part of what you're cleaning? Everything else — cost, maintenance, fuel — follows from that answer.",
  blocks: [
    { type: 'h2', text: 'Side-by-Side' },
    {
      type: 'compareTable',
      caption: 'General guidance — actual equipment sizing depends on your specific application.',
      columns: ['Hot Water', 'Cold Water'],
      rows: [
        { label: 'Best at', values: ['Grease, oil, baked-on grime', 'Dirt, mud, loose debris'] },
        { label: 'Upfront cost', values: ['Higher', 'Lower'] },
        { label: 'Running cost', values: ['Higher — burner fuel', 'Lower — no burner'] },
        { label: 'Maintenance', values: ['More — burner is another system', 'Less'] },
        { label: 'Cold-weather performance', values: ['Holds up', 'Drops off'] },
        {
          label: 'Typical use',
          values: ['Fleet engine bays, food-service, parts cleaning', 'Fleet exteriors, facilities, hardscape'],
        },
      ],
    },
    { type: 'h2', text: 'The Real Trade-Off' },
    {
      type: 'p',
      text: 'A cold water unit is cheaper to buy and cheaper to run — but only if it can actually do the job. If grease or oil is part of the picture, cold water will need more detergent, more passes, and more labor to get the same result a hot water unit gets in one pass, and past a certain point that difference in labor and chemical cost outweighs what you saved on the equipment. If your job is genuinely just dirt and loose debris, that extra hot water capability is money spent on a problem you don\'t have.',
    },
    {
      type: 'ul',
      items: [
        'Choose hot water if: grease, oil, or food-service buildup is a regular part of the job, or you operate in cold climates where cold water loses effectiveness.',
        'Choose cold water if: the job is dirt, mud, dust, or general surface buildup — no grease or oil involved.',
        "Not sure? Many operations run both — cold water for general exterior work, hot water for the specific tasks that need it.",
      ],
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Can a hot water unit also be used cold?',
          a: 'Yes — most hot water units can run without the burner engaged, functioning as a cold water unit when heat isn\'t needed. That flexibility is part of why some operations standardize on hot water units even for mixed-use fleets, despite the higher upfront cost.',
        },
        {
          q: "What's the actual PSI/GPM difference between the two?",
          a: "Not much — PSI and GPM ranges overlap heavily between hot and cold water units at a given size class. The real difference is the burner and water temperature, not pressure or flow. See our PSI vs GPM guide for how those two specs actually affect cleaning performance.",
        },
      ],
    },
  ],
  ctaEquipment: 'Hot Water Pressure Washers',
  relatedSlugs: ['hot-water', 'cold-water', 'psi-gpm-guide'],
}
