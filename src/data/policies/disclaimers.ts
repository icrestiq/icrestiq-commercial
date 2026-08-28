import { EFFECTIVE_DATE, GENERAL_EMAIL } from './shared'
import type { Policy } from './types'

export const disclaimers: Policy = {
  slug: 'disclaimers',
  label: 'Disclaimers',
  summary: 'Authorized-dealer status, equipment specs, and professional-advice disclaimers, gathered in one place.',
  effectiveDate: EFFECTIVE_DATE,
  blocks: [
    { type: 'h2', text: 'Dealer and manufacturer authorization' },
    { type: 'p', text: 'iCrestiQ Commercial is not currently an authorized dealer, reseller, or representative of any manufacturer named or referenced on this Site unless that is explicitly and specifically stated for that manufacturer. We do not use manufacturer logos, dealer-only assets, or copyrighted product materials unless authorization to do so has been confirmed. Where a manufacturer is named as a category we source equipment for, that describes intent and outreach, not a confirmed dealer relationship.' },

    { type: 'h2', text: 'Equipment specifications' },
    { type: 'p', text: 'PSI, flow rate, capacity, and other specifications shown on the Site are typical or representative ranges for an equipment category — compiled to give a general sense of what’s available, not a confirmed spec sheet for an in-stock product. Actual specifications, availability, and pricing for any specific unit are confirmed only through a direct quote from us.' },

    { type: 'h2', text: 'No professional or engineering advice' },
    { type: 'p', text: 'Site content is general informational material about equipment categories and sourcing, not professional, engineering, safety, regulatory, or legal advice. Equipment selection, installation, and operation should be reviewed against the manufacturer’s official documentation and any applicable code, regulation, or professional guidance for your specific application.' },

    { type: 'h2', text: 'Government and institutional content' },
    { type: 'p', text: 'References to government or institutional procurement (including any NAICS code) describe our positioning and intent, not a claim of a specific active contract vehicle, certification, or set-aside status unless separately and explicitly documented with current, verifiable information.' },

    { type: 'h2', text: 'Contact' },
    { type: 'p', text: `Questions about any of the above: ${GENERAL_EMAIL}.` },
  ],
}
