import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDocumentHead } from '../hooks/useDocumentHead'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  useDocumentHead()

  useEffect(() => {
    // A route change with a #hash (e.g. the header's Resources link, which
    // targets /equipment/pressure-washing#buyer-resources) should land on
    // that section, not get force-reset to the top by the logic below —
    // scroll-margin-top on the target element (see EquipmentCategory.tsx)
    // handles clearing the sticky header. behavior: 'instant' for the same
    // reason as the plain-scroll case: this is a route change landing
    // somewhere, not a same-page smooth-scroll.
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) {
      target.scrollIntoView({ behavior: 'instant' })
    } else {
      // behavior: 'instant' overrides index.css's global `scroll-behavior:
      // smooth` (kept for same-page anchor links, e.g. the skip link) — a
      // full route change should land at the top immediately, not animate
      // there. Without this override, a visitor scrolled partway down one
      // page who clicks an internal link would see the reset itself animate
      // over the new page's content, landing short of the top for a beat.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
    // Move focus to main content on route change — there's no full page
    // reload in an SPA to reset focus/reading order for screen reader and
    // keyboard users, so without this a navigation is otherwise silent.
    // preventScroll: true stops the browser's default focus-triggered
    // scroll-into-view from re-scrolling the page after the explicit
    // scroll above — without it, <main> (sitting below the sticky
    // Header) got scrolled back into view beneath the header instead of
    // staying at the position just set.
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-cold-50">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" ref={mainRef} tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
