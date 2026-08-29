import type { ResourcePage } from './types'

export const hotWater: ResourcePage = {
  slug: 'hot-water',
  type: 'core',
  label: 'Hot Water Pressure Washers',
  title: 'Commercial Hot Water Pressure Washers',
  metaTitle: 'Commercial Hot Water Pressure Washers | iCrestiQ Commercial',
  metaDescription:
    'Commercial and industrial hot water pressure washers for degreasing, food-service equipment, and cold-weather wash-downs. Typical specs, when hot water is worth the extra cost, and how to get a scoped quote.',
  eyebrow: 'Core Equipment',
  intro:
    'A hot water pressure washer heats the outgoing water — usually with a diesel or oil-fired burner — before it hits the surface. That extra heat is what actually breaks down grease and oil, rather than just blasting it around, which is why hot water units are the standard choice anywhere grease, oil, or heavy grime is the real problem.',
  blocks: [
    { type: 'h2', text: 'When Hot Water Is Worth the Extra Cost' },
    {
      type: 'p',
      text: 'A cold water unit can move dirt and loose debris just fine. What it struggles with is anything bonded to a surface by heat or oil — engine grease, fryer grease, tar, and cold-weather grime that cold water just pushes around instead of lifting. Hot water breaks that bond chemically, not just with pressure, so it typically needs less detergent and fewer passes to get the same result.',
    },
    {
      type: 'ul',
      items: [
        'Fleet and heavy-equipment washing where engine grease and road tar are the target',
        'Food-service equipment and kitchen exhaust systems (grease is the whole job)',
        'Cold-climate wash-downs, where cold water loses effectiveness as ambient temperature drops',
        'Automotive and industrial parts cleaning ahead of paint, coating, or reassembly',
      ],
    },
    { type: 'h2', text: 'Typical Specs' },
    {
      type: 'specTable',
      caption: 'Representative ranges for commercial hot water units — not a fixed catalog.',
      rows: [
        { label: 'PSI', value: '2,000–4,000' },
        { label: 'Water Temperature', value: 'Up to 250°F' },
        { label: 'Burner', value: 'Diesel / oil-fired' },
        { label: 'Flow', value: '3–8 GPM' },
        { label: 'Configuration', value: 'Portable, skid-mounted, trailer-mounted, or stationary' },
      ],
    },
    { type: 'h2', text: 'What Drives the Decision' },
    {
      type: 'p',
      text: "Hot water units cost more up front and need more maintenance than cold water — a burner is another system that can fail, and running one means budgeting for fuel. The trade-off is real: if your actual job is grease, oil, or cold-weather buildup, a cold water unit will underperform no matter how much pressure or detergent you throw at it, and you'll spend more in labor and chemical than the hot water unit would have cost. If the job is mostly dirt, mud, and loose debris, cold water is the more economical choice — see our Hot Water vs Cold Water guide for a direct side-by-side.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Do I need hot water for general fleet washing?',
          a: 'It depends on what\'s actually on the vehicles. Road grime and dirt wash off fine with cold water. Engine bays, undercarriages, and anywhere grease has baked on benefit from hot water — many fleet operations run cold water for exterior washing and a hot water unit specifically for engine/undercarriage work.',
        },
        {
          q: 'How much more does a hot water unit cost to run than cold water?',
          a: "The unit itself typically costs more up front, and you'll have ongoing fuel cost for the burner that a cold water unit doesn't have. Against that, hot water usually cuts detergent use and cleaning time on grease/oil jobs enough to offset it — the math depends on your actual job mix, which is exactly what we scope out on a quote request.",
        },
      ],
    },
  ],
  ctaEquipment: 'Hot Water Pressure Washers',
  relatedSlugs: ['cold-water', 'hot-water-vs-cold-water', 'psi-gpm-guide'],
}
