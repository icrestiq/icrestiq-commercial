import type { ResourcePage } from './types'

export const foodProcessing: ResourcePage = {
  slug: 'food-processing',
  type: 'application',
  label: 'Food Processing',
  title: 'Pressure Washers for Food Processing Facilities',
  metaTitle: 'Pressure Washers for Food Processing Facilities | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for food processing and food-service facility washdown — frequent sanitation cycles, grease and protein residue, and fixed installations.',
  eyebrow: 'Application',
  intro:
    "Food processing washdown happens often, needs to actually sanitize (not just rinse), and regularly deals with grease and protein residue that cold water won't touch — hot water is close to a default requirement here, not an option to weigh.",
  blocks: [
    { type: 'h2', text: 'What Food Processing Washdown Needs' },
    {
      type: 'ul',
      items: [
        'Hot water as the default — grease and protein residue need heat to break down, and sanitation cycles benefit from it too. See Pressure Washers for Grease and Oil.',
        'Frequent, often daily washdown cycles — a fixed stationary installation usually makes more sense than portable equipment run this often.',
        'Regulated wastewater discharge — food processing runoff is commonly subject to discharge requirements. See Water Recovery Systems.',
        'Reliable, continuous-duty equipment — downtime in a production environment has a real cost.',
      ],
    },
    {
      type: 'callout',
      text: "We source equipment, not compliance certification — if your facility has specific sanitation or regulatory standards (USDA, FDA, local health code), verify equipment specifications against those requirements directly. We can scope equipment to a spec you provide.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Do you provide equipment certified to specific food-safety standards?',
          a: "We source equipment matched to the specifications you provide, including any sanitation or regulatory requirements specific to your facility — tell us what's required on a quote request and we'll scope accordingly.",
        },
      ],
    },
  ],
  ctaEquipment: 'Hot Water Pressure Washers',
  relatedSlugs: ['hot-water', 'grease-and-oil', 'water-recovery', 'stationary-systems'],
}
