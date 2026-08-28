import { EFFECTIVE_DATE, GENERAL_EMAIL, MAILING_ADDRESS } from './shared'
import type { Policy } from './types'

export const terms: Policy = {
  slug: 'terms',
  label: 'Terms of Use',
  summary: 'The rules for using this site — what it does, what it doesn’t guarantee, and how disputes are handled.',
  effectiveDate: EFFECTIVE_DATE,
  blocks: [
    { type: 'h2', text: '1. Agreement and operator' },
    { type: 'p', text: `These Terms of Use ("Terms") govern access to icrestiqcommercial.com and related pages (the "Site"). The Site is operated by iCrestiQ LLC, a South Carolina limited liability company ("iCrestiQ Commercial," "we," "us," or "our"). By using the Site, you agree to these Terms. If you do not agree, do not use the Site.` },

    { type: 'h2', text: '2. What this Site provides' },
    { type: 'p', text: 'iCrestiQ Commercial sources commercial and industrial equipment — currently pressure washing systems, with material handling equipment and additional categories planned. The Site is a credibility and lead-generation resource: it describes equipment categories we source or are sourcing relationships for, and lets you submit a quote or sourcing request. The Site does not operate an online store or checkout, and no purchase or payment happens on the Site itself.' },

    { type: 'h2', text: '3. Not a confirmed catalog; not an authorized dealer unless stated' },
    { type: 'p', text: 'Equipment categories, subcategories, and any specifications shown on the Site are representative and typical for a category, not a confirmed, in-stock catalog of specific products or models. iCrestiQ Commercial is not an authorized dealer, reseller, or representative of any manufacturer named or implied on the Site unless that is explicitly and specifically stated. Do not treat anything on the Site as a manufacturer endorsement, warranty, or confirmed pricing.' },

    { type: 'h2', text: '4. Quote and sourcing requests are not binding offers' },
    { type: 'p', text: 'Submitting the Request a Quote form, or otherwise contacting us about equipment, is an inquiry, not a purchase, order, or binding offer by either party. Any actual sale, quote, pricing, availability, delivery, or contract terms are established separately, in writing, once we respond — not by anything on the Site itself.' },

    { type: 'h2', text: '5. No guarantee of pricing, availability, or results' },
    { type: 'p', text: 'We do not guarantee equipment pricing, availability, lead times, specifications, or that any particular manufacturer relationship, government contract vehicle, or dealer authorization will be obtained or maintained. Equipment specs, availability, and manufacturer relationships change; always confirm current details with us directly before relying on them.' },

    { type: 'h2', text: '6. Acceptable use' },
    { type: 'p', text: 'You may use the Site only for lawful purposes related to genuinely evaluating or requesting commercial/industrial equipment. You may not:' },
    { type: 'ul', items: [
      'Submit false, fraudulent, or knowingly inaccurate information through the Site’s forms.',
      'Misrepresent your identity, organization, or authority to request a quote on behalf of a business or agency.',
      'Scrape, mass-download, or use automated tools against the Site except through interfaces we authorize in writing.',
      'Attempt to interfere with, disrupt, or gain unauthorized access to the Site or its infrastructure.',
      'Use the Site to violate any applicable law, procurement rule, sanctions regime, or export control.',
    ] },

    { type: 'h2', text: '7. Government and institutional buyers' },
    { type: 'p', text: 'Content aimed at federal, state, and local government or institutional buyers is general informational material, not a representation that iCrestiQ Commercial holds any specific certification, set-aside status, or contract vehicle unless explicitly stated elsewhere with current documentation. Verify any procurement-relevant fact (registration status, NAICS classification, socio-economic certifications) directly with us before relying on it in a solicitation response.' },

    { type: 'h2', text: '8. Intellectual property' },
    { type: 'p', text: 'The Site’s design, branding, original text, and compilation are owned by iCrestiQ LLC or its licensors. You may view and use the Site for its intended purpose (learning about our equipment sourcing and submitting inquiries); you may not copy, republish, or commercially exploit Site content except as the Site itself invites (e.g., submitting a quote request). Nothing on the Site grants rights to any third-party manufacturer’s trademarks, logos, or materials.' },

    { type: 'h2', text: '9. Third-party links' },
    { type: 'p', text: 'The Site may link to third-party sites (for example, a manufacturer’s own site). We do not control and are not responsible for third-party content, availability, or practices.' },

    { type: 'h2', text: '10. Disclaimers' },
    { type: 'legalCaps', text: 'To the maximum extent permitted by law, the Site is provided "as is" and "as available," without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do not warrant that the Site will be uninterrupted, secure, or error-free.' },

    { type: 'h2', text: '11. Limitation of liability' },
    { type: 'legalCaps', text: 'To the maximum extent permitted by law, iCrestiQ LLC and its members, employees, and contractors will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or business, arising from or related to use of the Site. Nothing in these Terms limits liability for actual equipment purchases, which will be governed by their own separate written terms once a transaction is agreed.' },

    { type: 'h2', text: '12. Governing law and disputes' },
    { type: 'p', text: `These Terms are governed by South Carolina law, without regard to conflict-of-law principles. Any dispute arising from these Terms or use of the Site will be brought in the state or federal courts located in South Carolina, except where applicable law requires otherwise. Before filing any claim, please contact us at ${GENERAL_EMAIL} — most concerns can be resolved directly.` },

    { type: 'h2', text: '13. Changes and contact' },
    { type: 'p', text: `We may update these Terms as the Site and business evolve; the date above reflects the current version. Questions: ${GENERAL_EMAIL}, iCrestiQ LLC, ${MAILING_ADDRESS}.` },
  ],
}
