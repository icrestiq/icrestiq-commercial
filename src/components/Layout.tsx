import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDocumentHead } from '../hooks/useDocumentHead'

export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  useDocumentHead()

  useEffect(() => {
    // behavior: 'instant' overrides index.css's global `scroll-behavior:
    // smooth` (kept for same-page anchor links, e.g. the skip link) — a
    // full route change should land at the top immediately, not animate
    // there. Without this override, a visitor scrolled partway down one
    // page who clicks an internal link would see the reset itself animate
    // over the new page's content, landing short of the top for a beat.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Move focus to main content on route change — there's no full page
    // reload in an SPA to reset focus/reading order for screen reader and
    // keyboard users, so without this a navigation is otherwise silent.
    // preventScroll: true stops the browser's default focus-triggered
    // scroll-into-view from re-scrolling the page after the explicit
    // scrollTo above — without it, <main> (sitting below the sticky
    // Header) got scrolled back into view beneath the header instead of
    // staying at true scrollY: 0.
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

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
