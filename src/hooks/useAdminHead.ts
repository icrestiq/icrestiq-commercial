import { useEffect } from 'react'

// Admin routes sit outside the public <Layout>, so they don't get
// useDocumentHead()'s title/meta management for free. They also should
// never be crawled at all — stricter than the public site's 404 fallback
// (noindex, follow) since there's no legitimate reason a bot should index
// or follow links from an internal admin section.
export function useAdminHead(title: string) {
  useEffect(() => {
    document.title = title

    let el = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('name', 'robots')
      document.head.appendChild(el)
    }
    const previous = el.getAttribute('content')
    el.setAttribute('content', 'noindex, nofollow')

    return () => {
      if (previous) el?.setAttribute('content', previous)
    }
  }, [title])
}
