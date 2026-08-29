import type { ResourcePage } from './types'

export const maintenance: ResourcePage = {
  slug: 'maintenance',
  type: 'guide',
  label: 'Maintenance',
  title: 'Commercial Pressure Washer Maintenance',
  metaTitle: 'Commercial Pressure Washer Maintenance Guide | iCrestiQ Commercial',
  metaDescription:
    'What actually keeps a commercial pressure washer running — routine upkeep for pumps, hoses, and burners, and when to repair versus replace a component.',
  eyebrow: 'Buying Guide',
  intro:
    "Commercial-duty equipment earns its higher price partly through better components — but even good components need routine care to hit their expected service life. None of this is complicated; most of it is just not skipping it.",
  blocks: [
    { type: 'h2', text: 'Routine Upkeep' },
    {
      type: 'ul',
      items: [
        'Inlet water filtration — debris in the water supply is one of the most common causes of pump wear. A clean, filtered supply protects the pump more than almost anything else.',
        'Detergent system flushing — chemical residue left in the system between uses can degrade seals over time.',
        'Hose and reel inspection — check for wear, kinks, and fitting integrity regularly; a hose failure mid-job is avoidable with routine inspection.',
        'Burner servicing (hot water units) — the burner is the component most likely to need professional service; follow the manufacturer\'s service interval rather than waiting for a failure.',
        'Winterization — any unit exposed to freezing temperatures needs proper winterization to avoid pump and line damage.',
      ],
    },
    { type: 'h2', text: 'Repair or Replace?' },
    {
      type: 'p',
      text: 'A worn pump, reel, or hose on an otherwise sound unit is usually worth repairing rather than replacing the whole system — see our Accessories page for the components we source for exactly this. A unit with multiple failing systems, or one that\'s reached the end of its expected service life, is often more cost-effective to replace outright.',
    },
    {
      type: 'faq',
      items: [
        {
          q: 'How often should a commercial unit be serviced?',
          a: "It depends on duty cycle and manufacturer recommendations — a unit running daily or continuously needs more frequent attention than one used occasionally. Follow the specific manufacturer's service schedule for your equipment.",
        },
        {
          q: 'Does hard water affect maintenance needs?',
          a: 'Yes — mineral buildup from hard water can affect pump and burner components over time. If your water supply is hard, more frequent inspection (and possibly water treatment) helps protect the equipment.',
        },
      ],
    },
  ],
  ctaEquipment: 'Hoses, Reels, Pumps, and Accessories',
  relatedSlugs: ['accessories', 'hot-water', 'buying-guide'],
}
