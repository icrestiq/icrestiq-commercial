import type { ResourcePage } from './types'

export const stationary: ResourcePage = {
  slug: 'stationary-systems',
  type: 'core',
  label: 'Stationary Wash Systems',
  title: 'Stationary Pressure Washing Systems',
  metaTitle: 'Stationary Pressure Washing Systems | iCrestiQ Commercial',
  metaDescription:
    'Fixed-installation pressure washing systems for wash bays, loading docks, and permanent equipment yards — built for continuous duty cycles, not mobility.',
  eyebrow: 'Core Equipment',
  intro:
    "A stationary system is a fixed installation — plumbed into a wash bay, dock, or yard, built to run continuously rather than travel anywhere. When the work comes to one location instead of the crew going to it, a stationary system trades mobility for duty cycle and, often, multi-station capacity.",
  blocks: [
    { type: 'h2', text: 'When a Fixed Installation Makes Sense' },
    {
      type: 'p',
      text: "If washing happens at one location — a wash bay, a fleet yard, a loading dock — a stationary system is built for the continuous, multi-shift use that a portable or trailer unit isn't designed to sustain. Multi-station configurations let more than one bay or line run off a shared installation.",
    },
    {
      type: 'ul',
      items: [
        'Dedicated wash bays for fleet or equipment cleaning',
        'Loading dock and yard installations with a fixed wash point',
        'Operations running continuous or multi-shift duty cycles',
        'Facilities that want multiple wash stations off one shared system',
      ],
    },
    { type: 'h2', text: 'Typical Specs' },
    {
      type: 'specTable',
      caption: 'Representative ranges — not a fixed catalog.',
      rows: [
        { label: 'Installation', value: 'Fixed / bay-mounted' },
        { label: 'Duty Cycle', value: 'Continuous' },
        { label: 'Configuration', value: 'Single or multi-station' },
      ],
    },
    {
      type: 'callout',
      text: 'A fixed installation is a bigger up-front commitment than a portable, skid, or trailer unit — plumbing, electrical, and site prep are all part of the project, not just the equipment. Worth scoping carefully before committing.',
    },
    {
      type: 'faq',
      items: [
        {
          q: "What's involved in installing a stationary system beyond the unit itself?",
          a: "Typically water supply plumbing, drainage (often tied to a water recovery/reclaim system for regulated wash areas), and electrical or fuel supply for the pump and any heating. We scope the full picture on a quote request, not just the equipment.",
        },
        {
          q: 'Does a stationary system need a water recovery system too?',
          a: 'Often, yes — a fixed wash bay generates runoff that regulated wash areas need to reclaim and filter rather than discharge directly. See our Water Recovery Systems page for what that involves.',
        },
      ],
    },
  ],
  ctaEquipment: 'Stationary Wash Systems',
  relatedSlugs: ['water-recovery', 'hot-water', 'trailer-systems'],
}
