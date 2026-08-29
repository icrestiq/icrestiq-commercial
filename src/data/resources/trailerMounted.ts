import type { ResourcePage } from './types'

export const trailerMounted: ResourcePage = {
  slug: 'trailer-systems',
  type: 'core',
  label: 'Trailer-Mounted Systems',
  title: 'Trailer-Mounted Pressure Washers',
  metaTitle: 'Trailer-Mounted Pressure Washers | iCrestiQ Commercial',
  metaDescription:
    'Self-contained trailer-mounted pressure washers with onboard water tanks and hose reels for crews that travel between job sites. Typical specs and when a trailer rig makes more sense than a skid unit.',
  eyebrow: 'Core Equipment',
  intro:
    "A trailer-mounted pressure washer is a self-contained rig — water tank, pump, reels, and (usually) a burner for hot water — built to tow behind a truck. It's the standard choice for a crew that needs full capability at multiple job sites in a day, without depending on a water hookup once they get there.",
  blocks: [
    { type: 'h2', text: 'Why a Trailer Instead of a Skid or Portable Unit' },
    {
      type: 'p',
      text: "The trailer's own tank is the whole point — it means the crew brings their water supply with them instead of relying on a hydrant, hose bib, or customer's water access at every site. Multiple reels let more than one operator work off the same rig, and the larger footprint (compared to a skid unit) supports a bigger tank and more onboard capability without eating into a truck bed.",
    },
    {
      type: 'ul',
      items: [
        'Crews serving multiple job sites per day with no reliable water access at each one',
        'Fleet washing operations that need to bring the wash system to the vehicles',
        'Construction and job-site cleanup where a fixed wash station isn\'t practical',
        'Operations needing more than one operator running off the same unit',
      ],
    },
    { type: 'h2', text: 'Typical Specs' },
    {
      type: 'specTable',
      caption: 'Representative ranges — not a fixed catalog.',
      rows: [
        { label: 'Tank Capacity', value: '200–500 gal' },
        { label: 'Reels', value: '1–3' },
        { label: 'Configuration', value: 'Single or dual gun' },
        { label: 'Water Type', value: 'Hot or cold, depending on build' },
      ],
    },
    { type: 'h2', text: 'Trailer vs. Skid-Mounted' },
    {
      type: 'p',
      text: 'A skid-mounted unit fits on a truck deck and takes up less space, but trades away tank capacity and reel count. If the job genuinely needs a bigger onboard water supply or more than one operator working at once, a trailer earns its larger footprint. See our Trailer vs. Skid-Mounted guide for the direct comparison.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Do trailer-mounted units come in hot water configurations?',
          a: 'Yes — trailer rigs are commonly built with an onboard burner for hot water, since the larger footprint has room for it. Cold-water-only trailer configurations exist too, typically at a lower cost.',
        },
        {
          q: 'What tow vehicle do I need?',
          a: "It depends on the tank size and overall trailer weight, which varies by configuration — this is exactly the kind of detail we scope out on a quote request rather than guess at generically.",
        },
      ],
    },
  ],
  ctaEquipment: 'Trailer-Mounted Systems',
  relatedSlugs: ['skid-systems', 'trailer-vs-skid', 'hot-water'],
}
