import type { ResourcePage } from './types'

export const trailerVsSkid: ResourcePage = {
  slug: 'trailer-vs-skid',
  type: 'guide',
  label: 'Trailer vs. Skid-Mounted',
  title: 'Trailer-Mounted vs. Skid-Mounted Pressure Washers',
  metaTitle: 'Trailer vs Skid-Mounted Pressure Washer: Which Fits Your Fleet? | iCrestiQ Commercial',
  metaDescription:
    'A direct comparison of trailer-mounted and skid-mounted commercial pressure washers — tank capacity, mobility, and which fits a job-site crew better.',
  eyebrow: 'Buying Guide',
  intro:
    "Both trailer and skid-mounted units bring the wash system to the job site — the real question is how much onboard capacity you need versus how much you value not managing a separate trailer.",
  blocks: [
    { type: 'h2', text: 'Side-by-Side' },
    {
      type: 'compareTable',
      caption: 'General guidance — actual equipment sizing depends on your specific application.',
      columns: ['Trailer-Mounted', 'Skid-Mounted'],
      rows: [
        { label: 'Tank capacity', values: ['200–500 gal', '100–300 gal'] },
        { label: 'Footprint', values: ['Separate towed unit', 'Rides on the truck deck'] },
        { label: 'Reels / operators', values: ['1–3 reels, multi-operator capable', 'Typically single-operator'] },
        { label: 'Maneuvering', values: ['Needs towing and trailer parking', 'No separate trailer to manage'] },
        {
          label: 'Best for',
          values: [
            'Multi-operator crews, larger onboard water needs',
            'Tight sites, single-operator work, fleets spreading capability across vehicles',
          ],
        },
      ],
    },
    { type: 'h2', text: 'The Real Trade-Off' },
    {
      type: 'p',
      text: "A trailer's bigger tank and reel count matter when the job genuinely needs that capacity — multiple operators, longer runs without refilling, or a bigger onboard water supply. A skid unit gives up some of that capacity in exchange for never having to hitch up, back up, or store a separate trailer, which matters more for crews doing frequent stop-and-go work at tight sites.",
    },
    {
      type: 'ul',
      items: [
        'Choose a trailer if: you need multiple reels/operators, a larger onboard tank, or run longer jobs between refills.',
        'Choose a skid unit if: mobility and site access matter more than tank size, or you\'d rather not manage a separate trailer.',
      ],
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Can a skid unit be upgraded to trailer-level capacity later?',
          a: "Not really — the two are fundamentally different builds around different footprints. If capacity needs are likely to grow, it's worth sizing for that upfront rather than planning to swap platforms later.",
        },
        {
          q: 'Which costs more, a trailer or a skid unit?',
          a: "It depends heavily on tank size, reel count, and hot vs. cold configuration — not just trailer vs. skid as a category. We scope real numbers on a quote request rather than quoting a generic price range here.",
        },
      ],
    },
  ],
  ctaEquipment: 'Trailer-Mounted Systems',
  relatedSlugs: ['trailer-systems', 'skid-systems', 'hot-water-vs-cold-water'],
}
