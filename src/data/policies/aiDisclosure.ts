import { EFFECTIVE_DATE, GENERAL_EMAIL, AI_PROVIDER } from './shared'
import type { Policy } from './types'

export const aiDisclosure: Policy = {
  slug: 'ai-disclosure',
  label: 'AI Transparency Disclosure',
  summary: 'This site was built with AI assistance; it does not use AI to interact with visitors.',
  effectiveDate: EFFECTIVE_DATE,
  blocks: [
    { type: 'h2', text: 'How AI was used to build this Site' },
    { type: 'p', text: `Portions of this Site — including layout, copy drafts, and code — were prepared with the assistance of ${AI_PROVIDER}, reviewed and approved by iCrestiQ before publishing. This is a disclosure about how the Site was built, not about a feature that runs live for visitors.` },

    { type: 'h2', text: 'What this Site does not do' },
    { type: 'ul', items: [
      'No chatbot, AI assistant, or automated response feature is exposed to visitors on this Site.',
      'Quote and sourcing requests submitted through the Site are reviewed and responded to by iCrestiQ staff, not generated automatically.',
      'Equipment specifications shown on the Site are representative/typical figures we compiled for the category, not AI-generated claims about a specific manufacturer or model.',
    ] },

    { type: 'h2', text: 'Questions' },
    { type: 'p', text: `If you have questions about how a specific piece of Site content was produced, contact ${GENERAL_EMAIL}.` },
  ],
}
