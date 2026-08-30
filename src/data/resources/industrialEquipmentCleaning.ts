import type { ResourcePage } from './types'

export const industrialEquipmentCleaning: ResourcePage = {
  slug: 'industrial-equipment-cleaning',
  type: 'application',
  label: 'Industrial Equipment Cleaning',
  title: 'Industrial Equipment Cleaning Systems',
  metaTitle: 'Industrial Equipment Cleaning Systems | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for cleaning fixed industrial machinery — production lines, tanks, and processing equipment — as distinct from mobile heavy equipment or facility floors.',
  eyebrow: 'Application',
  typicalBuyers: ['Facilities / Property Management'],
  intro:
    "This is about cleaning the machinery itself — production line equipment, tanks, processing gear fixed inside a facility — not the mobile heavy equipment covered on our Heavy Equipment Cleaning page or the building/floor cleaning covered under Facility Maintenance.",
  blocks: [
    { type: 'h2', text: 'What Sets This Apart' },
    {
      type: 'ul',
      items: [
        'Fixed machinery, not mobile equipment — production lines, tanks, processing gear that stays in place.',
        'Often needs to fit into a maintenance or changeover window — reliable, ready-to-go equipment matters.',
        'Grease, residue, and process buildup frequently point toward hot water. See Pressure Washers for Grease and Oil.',
        'Usually paired with a fixed installation at the same facility — see Stationary Wash Systems.',
      ],
    },
    {
      type: 'p',
      text: 'Because this equipment is cleaned in place rather than brought to a wash bay, sizing usually comes down to reach (hose length, reel placement) and duty cycle as much as PSI and GPM — details worth working through on a quote request rather than guessing generically.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Is this different from your Industrial Pressure Washers page?',
          a: "Related but distinct — our Industrial Pressure Washers page covers industrial-*duty* equipment generally (continuous-use build quality). This page is about the specific application of cleaning fixed machinery in place, which industrial-duty equipment is often, but not always, the right fit for.",
        },
      ],
    },
  ],
  ctaEquipment: 'Hot Water Pressure Washers',
  relatedSlugs: ['industrial', 'stationary-systems', 'grease-and-oil'],
}
