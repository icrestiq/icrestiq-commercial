import { useEffect, useState } from 'react'

// True only once the whole page — not just this component — has finished
// loading (the browser's `load` event: all resources, not just DOM ready).
// Used to defer starting background videos until after the initial paint,
// so they don't compete with critical-path resources (JS bundle, fonts,
// CSS) for bandwidth on first visit. Measured need for this: the homepage
// hit ~2.7s first-contentful-paint with videos loading immediately, vs.
// ~470ms on a video-free page — see Decisions.md.
//
// Starts `false` during SSR (`document` doesn't exist there) and during a
// fresh client render before `load` has fired, so the prerendered HTML
// simply omits the <video> tag entirely — no SEO cost, since it's
// decorative (aria-hidden) — and it mounts live once a real browser
// visitor's page finishes loading. Checks `document.readyState` up front
// too, so a component that mounts after `load` already fired (e.g. later
// client-side navigation back to this page) doesn't wait for an event
// that's already happened.
export function usePageLoaded() {
  const [loaded, setLoaded] = useState(
    () => typeof document !== 'undefined' && document.readyState === 'complete',
  )

  useEffect(() => {
    if (loaded) return
    const onLoad = () => setLoaded(true)
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [loaded])

  return loaded
}
