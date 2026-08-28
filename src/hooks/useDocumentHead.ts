import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMetaForPath, isKnownPath, SITE_URL } from '../data/seo'

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useDocumentHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getMetaForPath(pathname)
    const url = `${SITE_URL}${pathname}`

    document.title = meta.title
    setMetaTag('name', 'description', meta.description)
    setMetaTag('name', 'robots', isKnownPath(pathname) ? 'index, follow' : 'noindex, follow')
    setCanonical(url)

    setMetaTag('property', 'og:title', meta.title)
    setMetaTag('property', 'og:description', meta.description)
    setMetaTag('property', 'og:url', url)

    setMetaTag('name', 'twitter:title', meta.title)
    setMetaTag('name', 'twitter:description', meta.description)
  }, [pathname])
}
