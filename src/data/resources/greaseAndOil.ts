import type { ResourcePage } from './types'

export const greaseAndOil: ResourcePage = {
  slug: 'grease-and-oil',
  type: 'guide',
  label: 'Pressure Washers for Grease and Oil',
  title: 'Hot Water Pressure Washers for Grease and Oil',
  metaTitle: 'Best Pressure Washer for Grease and Oil | iCrestiQ Commercial',
  metaDescription:
    'Why grease and oil specifically need a hot water pressure washer, how much heat actually matters, and what to pair it with for shops, kitchens, and industrial degreasing.',
  eyebrow: 'Buying Guide',
  intro:
    "Grease and oil don't respond to pressure the way dirt does — they need heat to actually break the bond, not just force to push them around. This is the single clearest case for a hot water unit over cold water.",
  blocks: [
    { type: 'h2', text: 'Why Cold Water Struggles Here' },
    {
      type: 'p',
      text: "Cold water pressure can move loose grease around a surface, but it doesn't break the chemical bond holding baked-on grease or oil in place — you end up spreading it, not removing it, and burning through much more detergent trying to compensate. Heat is what actually does the work; pressure just helps rinse it away afterward.",
    },
    {
      type: 'ul',
      items: [
        'Engine bays and undercarriages — see our Fleet Washing guide for how this fits into a broader fleet operation',
        'Food-service kitchens and exhaust systems',
        'Industrial degreasing and parts cleaning ahead of paint, coating, or reassembly',
        'Automotive and shop floors with accumulated oil buildup',
      ],
    },
    { type: 'h2', text: 'What to Pair It With' },
    {
      type: 'p',
      text: 'Grease and oil jobs frequently need to happen at a regulated wash area — runoff carrying oil can\'t discharge directly in most jurisdictions. If the job is at a fixed location, pair a hot water unit with a Water Recovery System. If it travels between sites, a Trailer-Mounted System with onboard hot water is the common setup.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'How much heat does grease actually need?',
          a: "It depends on how baked-on the grease is — commercial hot water units typically reach up to 250°F, which handles the vast majority of grease and oil cleaning without needing specialty equipment. See our Commercial Hot Water Pressure Washers page for typical specs.",
        },
        {
          q: 'Can detergent substitute for hot water on grease jobs?',
          a: "Detergent helps, but it's not a substitute for heat on genuinely baked-on grease — you'll use significantly more chemical and more passes trying to compensate with cold water than a hot water unit needs in one pass.",
        },
      ],
    },
  ],
  ctaEquipment: 'Hot Water Pressure Washers',
  relatedSlugs: ['hot-water', 'hot-water-vs-cold-water', 'water-recovery'],
}
