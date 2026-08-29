import type { ResourcePage } from './types'

export const industrial: ResourcePage = {
  slug: 'industrial',
  type: 'core',
  label: 'Industrial Pressure Washers',
  title: 'Industrial Pressure Washers',
  metaTitle: 'Industrial Pressure Washers | iCrestiQ Commercial',
  metaDescription:
    'Heavy-duty industrial pressure washers built for continuous, high-volume duty cycles — manufacturing, processing, and industrial facility cleaning beyond standard commercial use.',
  eyebrow: 'Core Equipment',
  intro:
    '"Industrial" describes duty cycle and build quality more than any single spec — equipment sized to run continuously, day after day, in a manufacturing or processing environment, not equipment sized for periodic commercial use that happens to run hot or cold water.',
  blocks: [
    { type: 'h2', text: 'What Separates Industrial From Commercial' },
    {
      type: 'p',
      text: "A commercial unit is built for regular, heavy use — daily fleet washing, routine facility maintenance. An industrial unit is built for continuous, high-volume operation: manufacturing floors, processing plants, and facilities where the pressure washer runs for a full shift or longer without a break. That means heavier-duty pumps, more robust burners, and components sized for a duty cycle a standard commercial unit isn't built to sustain.",
    },
    {
      type: 'ul',
      items: [
        'Manufacturing and processing facility cleaning',
        'Continuous multi-shift operations',
        'Heavy industrial degreasing and equipment cleaning',
        'Facilities where downtime for equipment failure has a real production cost',
      ],
    },
    { type: 'h2', text: 'Typical Configuration' },
    {
      type: 'specTable',
      caption: 'Representative ranges — actual sizing is application-specific.',
      rows: [
        { label: 'PSI', value: 'Up to 5,000' },
        { label: 'Flow', value: 'Up to 10 GPM' },
        { label: 'Duty Cycle', value: 'Continuous' },
        { label: 'Configuration', value: 'Typically stationary or heavy skid-mounted' },
      ],
    },
    {
      type: 'callout',
      text: "If the equipment will run continuously at a fixed location, pair this with our Stationary Wash Systems page — most industrial-duty installations are fixed, not portable.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Is "industrial" just a higher PSI commercial unit?',
          a: "No — PSI overlaps significantly between commercial and industrial units. The real difference is duty cycle and build: industrial-duty components are sized to run continuously without the wear a standard commercial unit would take under the same load.",
        },
        {
          q: 'Do industrial units need water recovery systems?',
          a: 'Often, yes — high-volume industrial wash operations frequently fall under the same regulated-discharge requirements as any fixed wash bay. See our Water Recovery Systems page.',
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['stationary-systems', 'water-recovery', 'hot-water'],
}
