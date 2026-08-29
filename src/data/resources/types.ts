// Content-block system for SEO resource pages (core category, application/
// use-case, and buying-guide content under /equipment/pressure-washing/).
// Mirrors src/data/policies/types.ts's Block pattern deliberately — same
// codebase, same proven shape: flat typed blocks, one shared renderer
// (ResourcePage.tsx), content authored per-page as data rather than JSX, so
// adding a page never means writing a new page component.

export type ResourceType = 'core' | 'application' | 'guide'

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'specTable'; caption?: string; rows: { label: string; value: string }[] }
  | {
      type: 'compareTable'
      caption?: string
      columns: string[]
      rows: { label: string; values: string[] }[]
    }
  | { type: 'faq'; items: { q: string; a: string }[] }

export interface RelatedLink {
  slug: string
  label: string
}

export interface ResourcePage {
  slug: string
  type: ResourceType
  /** Nav/breadcrumb label — short. */
  label: string
  /** H1 + default document title base. */
  title: string
  metaTitle: string
  metaDescription: string
  /** Eyebrow line above the H1, e.g. "Buying Guide". */
  eyebrow: string
  /** Intro paragraph shown directly under the H1, before the blocks. */
  intro: string
  blocks: Block[]
  /** Equipment-category value to pre-select on the quote form's CTA. */
  ctaEquipment?: string
  relatedSlugs?: string[]
  /** True when the page embeds a hands-on interactive tool (e.g. the
      PSI/GPM sliders), not just static content — surfaced as a badge
      wherever this page is linked from a card grid. */
  interactive?: boolean
}
