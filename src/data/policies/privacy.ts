import { EFFECTIVE_DATE, GENERAL_EMAIL, MAILING_ADDRESS, HOSTING_PROVIDER, RETENTION_TEXT } from './shared'
import type { Policy } from './types'

export const privacy: Policy = {
  slug: 'privacy',
  label: 'Privacy Policy',
  summary: 'What information we actually collect through this site (it’s less than you might expect), and your privacy rights.',
  effectiveDate: EFFECTIVE_DATE,
  blocks: [
    { type: 'h2', text: '1. Scope and controller' },
    { type: 'p', text: `This Privacy Policy explains how iCrestiQ LLC collects and handles personal information through icrestiqcommercial.com. iCrestiQ LLC is the business responsible for the practices described here. Contact: ${GENERAL_EMAIL}, ${MAILING_ADDRESS}.` },

    { type: 'callout', text: 'The short version: this Site has no accounts, no checkout, and no cookies or analytics as of the effective date above. The only personal information involved is what you choose to type into the Request a Quote or Contact forms — and even then, it goes through your own email application, not our servers, unless you send it.' },

    { type: 'h2', text: '2. Information we collect' },
    { type: 'ul', items: [
      'Quote request information: name, company or agency, email, phone, buyer type, equipment category, quantity, timeline, and project details you enter into the Request a Quote form.',
      'Contact information: whatever you include if you email us directly.',
      'Standard web server logs from our hosting provider (' + HOSTING_PROVIDER + '): IP address, browser/device information, pages requested, and timestamps — generated automatically by any web request, not specific to this Site.',
    ] },
    { type: 'p', text: 'We do not currently use cookies, analytics, advertising trackers, or any AI feature that processes visitor data — see the Cookie & Tracking Notice and AI Transparency Disclosure for detail. We do not collect payment information; the Site has no checkout.' },

    { type: 'h2', text: '3. How the Request a Quote form actually works' },
    { type: 'p', text: 'The Request a Quote form does not submit your information to our servers or a database. When you click "Send Quote Request," your browser opens your own email application with a pre-filled message addressed to us — the information only reaches iCrestiQ Commercial if and when you send that email yourself. If your device doesn’t have an email application configured, nothing will happen; the page also shows our email address directly as a fallback.' },

    { type: 'h2', text: '4. Why we use information' },
    { type: 'ul', items: [
      'To respond to your quote or sourcing request and follow up with relevant information.',
      'To operate, secure, and troubleshoot the Site (server logs).',
      'To comply with law and protect our legal rights where necessary.',
    ] },

    { type: 'h2', text: '5. Disclosure' },
    { type: 'p', text: `We do not sell personal information. We may disclose information to our hosting provider (${HOSTING_PROVIDER}) as necessary to operate the Site, to professional advisers where required, or when necessary to comply with law or protect rights and safety. We do not run advertising or ad-tracking, so nothing on this Site currently counts as a "sale" or "sharing" of personal information under state privacy laws — if that changes, this Policy will be updated first.` },

    { type: 'h2', text: '6. Retention' },
    { type: 'p', text: RETENTION_TEXT },

    { type: 'h2', text: '7. Security' },
    { type: 'p', text: 'We use reasonable safeguards appropriate to the limited information involved. No system is completely secure. Avoid including sensitive information (government identifiers, financial account numbers, classified or export-controlled information) in a quote request — none of that is needed to get a quote.' },

    { type: 'h2', text: '8. Your privacy rights' },
    { type: 'p', text: `Depending on where you live, you may have rights to know what information we hold about you, correct it, or request deletion. Because quote-request data usually only exists in your own sent-mail and our email inbox (see Section 3), the most effective way to exercise these rights is to contact us directly at ${GENERAL_EMAIL} and describe your request; we will respond consistent with applicable law.` },

    { type: 'h2', text: '9. Children' },
    { type: 'p', text: `The Site is intended for business and government purchasing contacts, not children. We do not knowingly collect personal information from children under 13. If you believe a child submitted information, contact ${GENERAL_EMAIL}.` },

    { type: 'h2', text: '10. Changes and contact' },
    { type: 'p', text: `We may update this Policy as the Site changes — for example, if we later add analytics, a real form backend, or online payments, this Policy (and the Cookie Notice) will be updated first. Questions or requests: ${GENERAL_EMAIL}, iCrestiQ LLC, ${MAILING_ADDRESS}.` },
  ],
}
