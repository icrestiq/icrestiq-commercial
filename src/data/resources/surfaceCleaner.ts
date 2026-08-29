import type { ResourcePage } from './types'

export const surfaceCleaner: ResourcePage = {
  slug: 'surface-cleaners',
  type: 'core',
  label: 'Commercial Surface Cleaners',
  title: 'Commercial Surface Cleaners',
  metaTitle: 'Commercial Surface Cleaner Attachments | iCrestiQ Commercial',
  metaDescription:
    'Flat-surface cleaning attachments and dedicated units for concrete, sidewalks, parking areas, and warehouse floors — faster and more even than a standard wand on large flat areas.',
  eyebrow: 'Core Equipment',
  intro:
    'A surface cleaner is a rotating, enclosed attachment (or dedicated unit) built specifically for flat, hard surfaces — concrete, sidewalks, parking lots, warehouse floors. It covers ground faster and more evenly than a wand, and keeps overspray contained.',
  blocks: [
    { type: 'h2', text: 'Why Not Just Use a Wand' },
    {
      type: 'p',
      text: "A standard wand cleans a narrow path and throws overspray in every direction — fine for detail work, inefficient and messy across a large flat area. A surface cleaner's rotating bar and enclosed housing cover a much wider path per pass, clean more evenly (no streaking from an inconsistent wand angle), and contain the spray instead of soaking everything nearby.",
    },
    {
      type: 'ul',
      items: [
        'Parking lots and large paved areas',
        'Sidewalks and walkways',
        'Warehouse and facility floors',
        'Any large, flat, hard surface where wand cleaning is impractically slow',
      ],
    },
    { type: 'h2', text: 'Typical Specs' },
    {
      type: 'specTable',
      caption: 'Representative ranges — not a fixed catalog.',
      rows: [
        { label: 'PSI', value: 'Up to 4,000' },
        { label: 'Deck Width', value: '15"–24"' },
        { label: 'Mount', value: 'Wand attachment or cart-mounted' },
      ],
    },
    {
      type: 'p',
      text: 'GPM matters more than PSI for surface cleaning work — a wider deck moving more water per minute clears ground faster than raw pressure alone. See our PSI vs GPM guide (with an interactive tool) for how the two specs trade off on large flat surfaces specifically.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Does a surface cleaner work with any pressure washer?',
          a: "Most wand-attachment surface cleaners connect to a standard pressure washer's output, though the pressure washer needs enough PSI and GPM to drive the deck effectively — this is exactly the kind of fit question we scope on a quote request.",
        },
        {
          q: "What's the difference between a surface cleaner attachment and a dedicated unit?",
          a: "An attachment connects to an existing pressure washer; a dedicated unit is a standalone machine built around the surface-cleaning deck. Attachments are more common for operations that also need a standard wand for other work.",
        },
      ],
    },
  ],
  ctaEquipment: 'Surface Cleaning Equipment',
  relatedSlugs: ['psi-gpm-guide', 'concrete-cleaning', 'accessories'],
}
