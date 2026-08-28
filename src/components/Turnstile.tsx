import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string
      remove: (widgetId: string) => void
      reset: (widgetId: string) => void
    }
  }
}

const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

export interface TurnstileHandle {
  reset: () => void
}

// Loads Cloudflare's Turnstile script on demand — only when a page that
// actually renders this component mounts — instead of globally in
// index.html, so pages that never show a challenge (everything except
// /quote today) don't pay for it. Same code-splitting principle already
// used for the admin bundle and the quote form's Supabase access.
function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT_SRC}"]`)
  if (existing) {
    return new Promise((resolve) => {
      if (window.turnstile) resolve()
      else existing.addEventListener('load', () => resolve(), { once: true })
    })
  }
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = TURNSTILE_SCRIPT_SRC
    script.async = true
    script.defer = true
    script.addEventListener('load', () => resolve(), { once: true })
    document.head.appendChild(script)
  })
}

// Renders a Cloudflare Turnstile challenge and reports the resulting token
// via onVerify. Renders nothing if VITE_TURNSTILE_SITE_KEY isn't set — the
// site doesn't have a Cloudflare Turnstile site yet, so callers must treat
// a missing token as "challenge not configured" rather than "failed",
// matching the server's own fail-open behavior in api/quote/submit.js.
const Turnstile = forwardRef<TurnstileHandle, { onVerify: (token: string) => void }>(function Turnstile(
  { onVerify },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined

  useEffect(() => {
    if (!siteKey) return
    let cancelled = false

    loadTurnstileScript().then(() => {
      if (cancelled || !containerRef.current || !window.turnstile) return
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        size: window.innerWidth < 400 ? 'compact' : 'flexible',
        theme: 'light',
        callback: (token: string) => onVerify(token),
        'expired-callback': () => onVerify(''),
        'error-callback': () => onVerify(''),
      })
    })

    return () => {
      cancelled = true
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey])

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current)
      }
    },
  }))

  if (!siteKey) return null
  return <div ref={containerRef} className="my-2" />
})

export default Turnstile
