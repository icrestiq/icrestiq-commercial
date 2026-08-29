import type { ResourcePage } from './types'

// This page doubles as buying guide #23 ("PSI vs GPM") and the interactive
// PSI/GPM tool — one page, not two, per the 2026-08-28 namespace decision
// (see Decisions.md). ResourcePage.tsx renders the interactive tool inline
// via the `interactive` field below, ahead of the static blocks.
export const psiGpm: ResourcePage = {
  slug: 'psi-gpm-guide',
  type: 'guide',
  label: 'PSI vs GPM',
  title: 'PSI vs. GPM: What Actually Cleans',
  metaTitle: 'PSI vs GPM Pressure Washer Guide | iCrestiQ Commercial',
  metaDescription:
    'PSI and GPM do different jobs on a pressure washer — PSI breaks bonded dirt loose, GPM rinses it away. Use the interactive chart to see which PSI/GPM range fits your application.',
  eyebrow: 'Buying Guide',
  interactive: true,
  intro:
    "PSI and GPM get talked about like one number, but they measure two different things. PSI (pounds per square inch) is the force that breaks dirt loose from a surface. GPM (gallons per minute) is how much water carries that dirt away and covers ground while doing it. A spec sheet with high PSI and low GPM cleans differently than one with the reverse — matching both to your actual job matters more than maximizing either one.",
  blocks: [
    { type: 'h2', text: 'What Each One Actually Does' },
    {
      type: 'ul',
      items: [
        'PSI — the force behind the spray. Higher PSI breaks loose bonded, baked-on, or stubborn material. It doesn\'t move much water on its own.',
        'GPM — the volume of water moving through the wand. Higher GPM rinses debris away faster and covers more surface area per minute, which matters more than PSI on large flat areas.',
        'Cleaning Units (PSI × GPM) is a rough way to compare overall cleaning power across two machines with different PSI/GPM splits — useful for comparison, not a spec you buy directly.',
      ],
    },
    { type: 'h2', text: 'Matching PSI/GPM to the Job' },
    {
      type: 'compareTable',
      caption: 'General starting points — actual sizing depends on your specific surface and soil level.',
      columns: ['Typical PSI', 'Typical GPM', 'Best For'],
      rows: [
        { label: 'Light commercial', values: ['2,000–2,500', '2–3', 'Storefronts, light facility maintenance'] },
        { label: 'General fleet washing', values: ['2,500–3,000', '3–5', 'Daily vehicle exteriors, general grime'] },
        {
          label: 'Heavy equipment / industrial',
          values: ['3,000–4,000', '5–8', 'Construction equipment, industrial degreasing'],
        },
        {
          label: 'Large flat surfaces',
          values: ['2,500–3,500', '6–10+', 'Parking lots, warehouse floors — GPM matters more than PSI here'],
        },
      ],
    },
    {
      type: 'callout',
      text: "More PSI isn't automatically better. Too much pressure on the wrong surface can etch concrete, strip paint, or damage equipment — matching PSI to the surface matters as much as matching it to the soil level.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Is higher PSI always better?',
          a: "No — PSI needs to match the surface as much as the dirt. Too much pressure can damage softer surfaces or delicate equipment. Higher PSI helps most on hard, tough soil (baked-on grease, tar); it's not a universal upgrade.",
        },
        {
          q: 'Why does GPM matter if PSI is what removes dirt?',
          a: "Because PSI alone doesn't clear a surface — GPM rinses what PSI loosens, and covers area. A high-PSI/low-GPM unit can leave you re-rinsing large surfaces repeatedly; a balanced or GPM-leaning unit clears the same area faster.",
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['hot-water', 'cold-water', 'hot-water-vs-cold-water'],
}
