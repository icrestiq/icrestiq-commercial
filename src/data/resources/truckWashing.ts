import type { ResourcePage } from './types'

export const truckWashing: ResourcePage = {
  slug: 'truck-washing',
  type: 'application',
  label: 'Truck Washing',
  title: 'Pressure Washers for Truck Washing',
  metaTitle: 'Pressure Washers for Truck and Tractor-Trailer Washing | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for washing trucks and tractor-trailers — large surface area, DOT appearance standards, and depot or wash-bay operations.',
  eyebrow: 'Application',
  intro:
    "Trucks and tractor-trailers bring one factor smaller fleet vehicles don't: sheer surface area. GPM does a lot of the work here — covering a trailer's flat sides efficiently matters as much as pressure for baked-on grime.",
  blocks: [
    { type: 'h2', text: 'What Makes Truck Washing Different' },
    {
      type: 'ul',
      items: [
        'Large flat surface area — trailer sides and roofs clean faster with higher GPM, similar logic to Commercial Surface Cleaners on flat ground.',
        'DOT and appearance standards — a consistent, even clean matters for roadside inspection appearance, not just cleanliness.',
        'Depot or wash-bay operations — high-volume truck washing is usually a fixed installation. See Stationary Wash Systems.',
        'Engine bays and undercarriages still need hot water for grease and road tar, same as other fleet vehicles.',
      ],
    },
    {
      type: 'p',
      text: 'If your operation runs a dedicated truck wash bay, this is one of the clearest cases for a stationary system built for continuous, high-volume use — see our Industrial Pressure Washers page if that\'s a multi-shift operation.',
    },
    {
      type: 'faq',
      items: [
        {
          q: "What's different about washing a full tractor-trailer versus a standard fleet vehicle?",
          a: 'Mainly scale — the surface area is much larger, so GPM and wash-bay throughput matter more than they do for a standard vehicle. See our Fleet Washing page for the general equipment split; truck-specific operations usually need a higher-GPM stationary setup to keep pace.',
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['stationary-systems', 'fleet-washing', 'psi-gpm-guide'],
}
