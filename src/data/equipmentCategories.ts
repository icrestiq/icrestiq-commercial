// Single source of truth for the site's equipment category structure.
//
// iCrestiQ Commercial is a multi-category commercial/industrial equipment
// platform, not a pressure-washing-only site. Pressure washing is the first
// active vertical; material handling is the next planned vertical, shown as
// "expanding" until a real catalog exists. Adding a new category — active,
// expanding, or planned — should only require adding an entry here; pages,
// nav, and the quote form all read from this file rather than hardcoding a
// single vertical.

export type CategoryStatus = 'active' | 'expanding'

export interface Spec {
  label: string
  value: string
}

export interface Subcategory {
  name: string
  description?: string
  specs?: Spec[]
}

export interface EquipmentCategory {
  slug: string
  name: string
  status: CategoryStatus
  /** Short phrase shown on cards/badges, e.g. "First active category". */
  tagline: string
  /** Longer description used on the category detail page. */
  description: string
  subcategories: Subcategory[]
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing Systems',
    status: 'active',
    tagline: 'Our first active equipment category',
    description:
      'Commercial and industrial pressure-washing equipment for contractors, facilities, and government buyers — our first active product line.',
    subcategories: [
      {
        name: 'Hot Water Pressure Washers',
        description:
          'Heated units for degreasing, food-service equipment, and cold-weather wash-downs where cold water underperforms.',
        specs: [
          { label: 'PSI', value: '2,000–4,000' },
          { label: 'Water Temp', value: 'Up to 250°F' },
          { label: 'Burner', value: 'Diesel / Oil-fired' },
        ],
      },
      {
        name: 'Cold Water Pressure Washers',
        description:
          'Cold-water units sized for daily commercial use — fleet washing, exterior maintenance, and general facility cleaning.',
        specs: [
          { label: 'PSI', value: '2,000–4,000' },
          { label: 'Flow', value: '3–8 GPM' },
          { label: 'Power', value: 'Gas / Electric' },
        ],
      },
      {
        name: 'Trailer-Mounted Systems',
        description:
          'Self-contained mobile units with onboard water tanks and hose reels for crews that travel between job sites.',
        specs: [
          { label: 'Tank Capacity', value: '200–500 gal' },
          { label: 'Reels', value: '1–3' },
          { label: 'Config', value: 'Single / Dual gun' },
        ],
      },
      {
        name: 'Skid-Mounted Systems',
        description:
          'Compact deck-mounted units for trucks and utility vehicles, built for tighter footprints than a full trailer rig.',
        specs: [
          { label: 'Footprint', value: 'Deck-mount' },
          { label: 'Tank Capacity', value: '100–300 gal' },
          { label: 'Config', value: 'Hot / Cold' },
        ],
      },
      {
        name: 'Stationary Wash Systems',
        description:
          'Fixed-installation systems for wash bays, loading docks, and permanent equipment yards.',
        specs: [
          { label: 'Install', value: 'Fixed / Bay-mounted' },
          { label: 'Duty Cycle', value: 'Continuous' },
          { label: 'Config', value: 'Single / Multi-station' },
        ],
      },
      {
        name: 'Surface Cleaning Equipment',
        description:
          'Flat-surface attachments and dedicated units for concrete, sidewalks, parking areas, and warehouse floors.',
        specs: [
          { label: 'PSI', value: 'Up to 4,000' },
          { label: 'Deck Width', value: '15"–24"' },
          { label: 'Mount', value: 'Wand / Cart' },
        ],
      },
      {
        name: 'Water Recovery Systems',
        description:
          'Reclaim and filtration equipment that captures and manages wash-water runoff for compliant discharge.',
        specs: [
          { label: 'Function', value: 'Reclaim / Filter' },
          { label: 'Sizing', value: 'Site-specific' },
          { label: 'Use Case', value: 'Regulated wash areas' },
        ],
      },
      {
        name: 'Hoses, Reels, Pumps, and Accessories',
        description:
          'Replacement and upfit components — reels, high-pressure hose, and pumps — for existing wash-system fleets.',
        specs: [
          { label: 'Type', value: 'Component' },
          { label: 'Rating', value: 'Matched to system' },
          { label: 'Use Case', value: 'Repair / Upfit' },
        ],
      },
    ],
  },
  {
    slug: 'material-handling',
    name: 'Material Handling Equipment',
    status: 'expanding',
    tagline: 'Expanding into this category',
    description:
      'iCrestiQ Commercial is expanding into material handling equipment for warehouses, dock operations, and facility material flow. This category is not yet a confirmed catalog — tell us what you need and we will scope a sourcing request.',
    subcategories: [
      { name: 'Pallet Trucks', description: 'Manual and powered pallet trucks for moving palletized loads.' },
      { name: 'Electric Stackers', description: 'Powered stackers for lifting and stacking loads in tighter spaces than a forklift.' },
      { name: 'Lift Tables', description: 'Hydraulic and powered lift tables for ergonomic positioning at workstations and loading areas.' },
      { name: 'Carts', description: 'Platform, tugger, and utility carts for moving material through a facility.' },
      { name: 'Drum Handling Equipment', description: 'Drum dollies, lifters, and rotators for safe drum handling.' },
      { name: 'Dock Equipment', description: 'Dock plates, levelers, and related loading-dock equipment.' },
      { name: 'Work Positioning Equipment', description: 'Lifts and positioners that bring the work to an ergonomic height.' },
      { name: 'Related Warehouse and Facility Equipment', description: 'Additional warehouse and facility material-handling equipment.' },
    ],
  },
]

// Categories referenced in project strategy for future expansion, but not
// yet built out as pages. Listed for transparency and to keep the roadmap
// visible in code; do not render full detail pages for these until a
// category entry is added to `equipmentCategories` above.
export const plannedCategories: string[] = [
  'Commercial cleaning equipment',
  'Shop equipment',
  'Air compressors',
  'Automotive & service equipment',
  'Facility maintenance equipment',
  'Other industrial and commercial equipment',
]

export function getCategoryBySlug(slug: string | undefined): EquipmentCategory | undefined {
  return equipmentCategories.find((c) => c.slug === slug)
}
