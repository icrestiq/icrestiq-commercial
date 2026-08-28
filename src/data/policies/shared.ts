// Shared facts referenced across the policy pages, so a future correction
// (a changed email, a new vendor) happens in one place instead of being
// hunted down across every policy document.
//
// EFFECTIVE_DATE: set to the date this policy package was authored. Update
// it (and the content it governs) together if the policies are revised.
export const EFFECTIVE_DATE = 'August 28, 2026'

// Real inboxes as of 2026-08-28. There is no separate legal/privacy/security
// address the way the sibling GovCon Lab site uses plus-addressing — general
// contact and privacy/legal requests both route to GENERAL_EMAIL. Sales
// quote requests have their own address (QUOTE_EMAIL), matching how the
// Request a Quote form and Contact page already work.
export const GENERAL_EMAIL = 'info@icrestiq.com'
export const QUOTE_EMAIL = 'quotes@icrestiq.com'

// Same legal entity as iCrestiQ GovCon Lab (icrestiq-govcon-lab), which
// already publishes this address on its own policy pages — reused here
// rather than invented.
export const MAILING_ADDRESS = '461 Black Snake Road, Easley, SC 29640'

export const HOSTING_PROVIDER = 'Vercel'
export const AI_PROVIDER = 'Anthropic (Claude)'

export const RETENTION_TEXT =
  'Quote requests submitted through the site are not stored on our servers at all — the Request a Quote form opens your own email application with the details pre-filled, and nothing reaches us unless you choose to send that message yourself. Once you do, the resulting email is retained in our business mailbox under our normal email retention practices. Standard web server logs (see Cookie & Tracking Notice) are kept only as long as needed for security and operational purposes, typically a matter of weeks to a few months.'
