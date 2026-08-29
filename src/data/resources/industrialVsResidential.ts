import type { ResourcePage } from './types'

export const industrialVsResidential: ResourcePage = {
  slug: 'industrial-vs-residential',
  type: 'guide',
  label: 'Industrial vs. Residential',
  title: 'Commercial/Industrial vs. Residential Pressure Washers',
  metaTitle: 'Commercial vs Residential Pressure Washer: What\'s the Difference? | iCrestiQ Commercial',
  metaDescription:
    'How commercial and industrial pressure washers actually differ from residential/consumer-grade equipment — duty cycle, build quality, and who each one is built for.',
  eyebrow: 'Buying Guide',
  intro:
    "If you're comparing a residential unit from a hardware store against commercial equipment, the honest answer is: they're built for different jobs, and the gap is mostly duty cycle, not top-line PSI.",
  blocks: [
    { type: 'h2', text: 'Side-by-Side' },
    {
      type: 'compareTable',
      caption: 'General guidance — specific units vary.',
      columns: ['Commercial / Industrial', 'Residential'],
      rows: [
        { label: 'Duty cycle', values: ['Built for daily or continuous use', 'Built for occasional, short-duration use'] },
        { label: 'Component quality', values: ['Heavier-duty pumps, motors, frames', 'Lighter components sized for infrequent use'] },
        { label: 'Typical buyer', values: ['Contractors, facilities, fleets, government', 'Homeowners, occasional DIY use'] },
        { label: 'Support', values: ['Built for repair and long service life', 'Often more economical to replace than repair'] },
        { label: 'Upfront cost', values: ['Higher', 'Lower'] },
      ],
    },
    { type: 'h2', text: "Why This Matters More Than It Looks Like It Should" },
    {
      type: 'p',
      text: "A residential unit run at commercial frequency doesn't just wear out faster — it tends to fail outright, often mid-job, because the components simply aren't rated for that duty cycle. The PSI number on the box can look similar to a commercial unit's, but PSI alone doesn't capture whether the pump and motor underneath were built to run that hard, that often.",
    },
    {
      type: 'callout',
      text: "If you're washing something for your business — even occasionally — commercial-grade equipment is almost always the right call once you account for reliability and total cost over time, not just the sticker price.",
    },
    {
      type: 'faq',
      items: [
        {
          q: "I only wash occasionally for my business — do I really need commercial-grade equipment?",
          a: "Usually, yes — \"occasional\" business use still adds up to more running hours per year than most residential units are built for, and a mid-job failure costs more in downtime than the price difference. If your use is genuinely light and rare, talk to us about it on a quote request — we'll give you a straight answer, not a sales pitch.",
        },
        {
          q: "Does iCrestiQ Commercial sell residential-grade equipment?",
          a: 'No — we source commercial and industrial equipment. If your need is genuinely residential-scale, a hardware store or home-improvement retailer is a better fit than what we carry.',
        },
      ],
    },
  ],
  ctaEquipment: 'Not sure / need guidance',
  relatedSlugs: ['buying-guide', 'what-size-do-i-need', 'facility-maintenance'],
}
