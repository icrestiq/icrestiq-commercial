import type { ResourcePage } from './types'

export const agriculture: ResourcePage = {
  slug: 'agriculture',
  type: 'application',
  label: 'Agriculture',
  title: 'Pressure Washers for Agriculture',
  metaTitle: 'Pressure Washers for Agricultural Facilities | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for agricultural and livestock facility washdown — barns, milking parlors, and equipment, where sanitation and water recovery both matter.',
  eyebrow: 'Application',
  intro:
    "Agricultural washdown covers a lot of ground — livestock facilities, milking parlors, equipment yards — and often combines sanitation requirements with heavy organic soil, which points toward hot water and a real plan for runoff.",
  blocks: [
    { type: 'h2', text: 'Common Agricultural Applications' },
    {
      type: 'ul',
      items: [
        'Livestock facility and barn washdown — organic material and sanitation needs typically call for hot water.',
        'Milking parlors and dairy equipment — frequent washdown cycles, sanitation-grade cleaning.',
        'Farm equipment and vehicle washing — dirt and mud, similar to construction equipment cleaning.',
        'Fixed facility installations — a stationary system fits recurring washdown at one location better than portable equipment.',
      ],
    },
    { type: 'h2', text: 'Water Recovery Is Often Part of the Picture' },
    {
      type: 'p',
      text: "Agricultural washdown runoff is frequently regulated, especially for livestock operations near waterways — see our Water Recovery Requirements guide for what typically triggers that requirement, and our Water Recovery Systems page for the equipment itself.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Does farm equipment washing need hot or cold water?',
          a: "It depends on what's being removed — general dirt and mud clean fine with cold water, but organic buildup and sanitation-grade cleaning (barns, dairy equipment) typically need hot water. See Hot Water vs. Cold Water for the full comparison.",
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['hot-water', 'water-recovery', 'stationary-systems'],
}
