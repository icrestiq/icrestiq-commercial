import type { ResourcePage } from './types'

export const constructionEquipment: ResourcePage = {
  slug: 'construction-equipment-cleaning',
  type: 'application',
  label: 'Construction Equipment Cleaning',
  title: 'Pressure Washers for Construction Equipment',
  metaTitle: 'Pressure Washers for Construction Equipment Cleaning | iCrestiQ Commercial',
  metaDescription:
    'Equipment guidance for washing construction machinery and job-site vehicles — mobile rigs that travel between sites, mostly dirt and concrete rather than grease.',
  eyebrow: 'Application',
  typicalBuyers: ['Contractor'],
  intro:
    "Construction equipment cleaning is usually a mobility problem more than a cleaning-power problem — the machinery is at the job site, not at a wash bay, and the mess is mostly mud, dirt, and dried concrete rather than grease.",
  blocks: [
    { type: 'h2', text: 'What This Job Actually Needs' },
    {
      type: 'ul',
      items: [
        'Mobility — the wash system needs to come to the job site. See Trailer-Mounted Systems and Skid-Mounted Systems.',
        'Mostly cold water territory — dirt, mud, and dried concrete respond to pressure and volume, not heat. See Cold Water Pressure Washers.',
        'Dried concrete specifically can be stubborn — higher PSI in the industrial range helps here more than on routine dirt.',
        'Onboard water supply matters when job sites don\'t have reliable water access.',
      ],
    },
    { type: 'h2', text: 'Sizing the Rig' },
    {
      type: 'p',
      text: "Crews serving multiple job sites in a day typically run a trailer-mounted cold water system — the onboard tank means not depending on water access at each site. Smaller crews or single-machine operations often do fine with a skid-mounted unit on the truck they're already driving. See our Trailer vs. Skid-Mounted guide for the direct comparison.",
    },
    {
      type: 'faq',
      items: [
        {
          q: 'Do construction equipment jobs ever need hot water?',
          a: "Occasionally — if the equipment also picks up grease or hydraulic fluid (common on tracked machinery), hot water handles that better than cold. See our Heavy Equipment Cleaning page if that's a regular part of the job.",
        },
      ],
    },
  ],
  ctaEquipment: 'Cold Water Pressure Washers',
  relatedSlugs: ['cold-water', 'trailer-systems', 'trailer-vs-skid', 'public-works'],
}
