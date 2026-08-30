import { SITE_URL } from '../data/seo'

export interface Crumb {
  name: string
  /** Path relative to SITE_URL, e.g. "/equipment/pressure-washing". Omit
      (or leave undefined) for the current page — Google's own examples
      allow the last item to skip a URL since it's the page itself. */
  path?: string
}

// Renders BreadcrumbList JSON-LD matching the visible breadcrumb nav each
// caller already shows — Home is included as position 1 even though the
// visible UI starts at "Equipment", matching Google's own documented
// examples (schema represents the real hierarchy; it doesn't have to
// pixel-match the visible trail). Embedded directly in JSX (not injected
// via a DOM-mutation hook) so it's captured by prerendering automatically,
// same pattern as the FAQPage schema in ResourcePage.tsx.
export default function BreadcrumbSchema({ crumbs }: { crumbs: Crumb[] }) {
  const items = [{ name: 'Home', path: '/' }, ...crumbs]

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            ...(item.path ? { item: `${SITE_URL}${item.path === '/' ? '' : item.path}` } : {}),
          })),
        }),
      }}
    />
  )
}
