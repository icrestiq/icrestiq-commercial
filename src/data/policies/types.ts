// Flat, typed content blocks — mirrors how a policy document reads
// top-to-bottom, so each policy file stays simple to author and compare
// against a source draft, and PolicyPage.tsx can render any policy with one
// generic renderer instead of one bespoke page per policy.
export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'legalCaps'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; text: string }

export interface Policy {
  slug: string
  label: string
  summary: string
  effectiveDate: string
  blocks: Block[]
}
