import { EFFECTIVE_DATE, GENERAL_EMAIL, HOSTING_PROVIDER } from './shared'
import type { Policy } from './types'

export const cookies: Policy = {
  slug: 'cookies',
  label: 'Cookie & Tracking Notice',
  summary: 'This site does not currently use cookies, analytics, or tracking of any kind.',
  effectiveDate: EFFECTIVE_DATE,
  blocks: [
    { type: 'callout', text: 'iCrestiQ Commercial does not currently use cookies, analytics, advertising pixels, or any cross-site tracking technology. We are not asking for consent to tracking because none is deployed. If that changes — for example, if we add analytics to understand site traffic — this notice, and a cookie-preference control if one becomes necessary, will be updated before any such tracking goes live.' },

    { type: 'h2', text: 'What runs on this Site today' },
    { type: 'p', text: `The Site is a static set of pages served by ${HOSTING_PROVIDER}. Beyond the standard web server logs any host generates for security and operational purposes (see the Privacy Policy), nothing on the Site sets cookies, local storage tracking identifiers, or third-party scripts.` },

    { type: 'h2', text: 'Your choices' },
    { type: 'p', text: `Because there is nothing to opt out of yet, there’s no cookie-preference control on the Site right now. Where legally required once tracking is introduced, we will recognize Global Privacy Control or another recognized universal opt-out signal. Questions: ${GENERAL_EMAIL}.` },
  ],
}
