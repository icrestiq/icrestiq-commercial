import type { ResourcePage } from './types'

export const skidMounted: ResourcePage = {
  slug: 'skid-systems',
  type: 'core',
  label: 'Skid-Mounted Systems',
  title: 'Skid-Mounted Pressure Washers',
  metaTitle: 'Skid-Mounted Pressure Washers | iCrestiQ Commercial',
  metaDescription:
    'Compact skid-mounted pressure washers built for truck and utility vehicle decks — smaller footprint than a trailer rig, for crews that need mobility without full trailer capacity.',
  eyebrow: 'Core Equipment',
  intro:
    'A skid-mounted pressure washer is a deck-mount unit — pump, tank, and (often) a burner, built into a compact frame that sits on a truck bed or utility vehicle instead of towing behind one. It trades some tank capacity for a smaller footprint and no separate trailer to store, insure, or maneuver.',
  blocks: [
    { type: 'h2', text: 'Where a Skid Unit Fits Better Than a Trailer' },
    {
      type: 'p',
      text: "A skid unit rides on the vehicle you're already driving, not something you hitch up separately — that matters for crews working tight sites, doing frequent stop-and-go work, or who just don't want to manage a trailer day-to-day. The trade-off is a smaller onboard tank and typically one operator per unit, rather than the multi-reel capacity a larger trailer can support.",
    },
    {
      type: 'ul',
      items: [
        'Utility and service trucks that need washing capability without towing a trailer',
        'Tight job sites where trailer maneuvering is impractical',
        'Single-operator work where a large onboard tank isn\'t necessary',
        'Fleets that want washing capability spread across more vehicles rather than centralized on one trailer rig',
      ],
    },
    { type: 'h2', text: 'Typical Specs' },
    {
      type: 'specTable',
      caption: 'Representative ranges — not a fixed catalog.',
      rows: [
        { label: 'Footprint', value: 'Deck-mount' },
        { label: 'Tank Capacity', value: '100–300 gal' },
        { label: 'Configuration', value: 'Hot or cold water, depending on build' },
      ],
    },
    { type: 'h2', text: 'Skid-Mounted vs. Trailer-Mounted' },
    {
      type: 'p',
      text: "If the job needs more onboard water, multiple reels, or several operators working off the same rig, a trailer's larger footprint pays for itself. If the priority is mobility and not managing a separate trailer, a skid unit does the job with less overhead. See our Trailer vs. Skid-Mounted guide for the direct comparison.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Will a skid unit fit any truck?',
          a: "Deck/bed size and payload capacity both matter — a skid unit needs to physically fit and the vehicle needs to safely carry its weight plus a full water tank. This is exactly the kind of fit question we work through on a quote request.",
        },
        {
          q: 'Can a skid-mounted unit run hot water?',
          a: 'Yes, many skid configurations include a burner — though the compact footprint means less room than a trailer rig, so hot water skid units run smaller tanks than their trailer-mounted equivalents.',
        },
      ],
    },
  ],
  ctaEquipment: 'Skid-Mounted Systems',
  relatedSlugs: ['trailer-systems', 'trailer-vs-skid', 'hot-water'],
}
