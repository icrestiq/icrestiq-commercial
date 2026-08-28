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
    window.scrollTo(0, 0)
    // Move focus to main content on route change — there's no full page
    // reload in an SPA to reset focus/reading order for screen reader and
    // keyboard users, so without this a navigation is otherwise silent.
    mainRef.current?.focus()
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
