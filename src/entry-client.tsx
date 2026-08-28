import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// The prerender step (scripts/prerender.mjs) renders each route to static
// HTML purely so crawlers get real content without running JS. The client
// re-renders from scratch on top of it rather than hydrating — deliberate:
// true hydration requires the server and client render trees to match
// exactly, which is fragile across an app this size, and a full client
// render is imperceptible to users while keeping 100% of the SEO benefit
// (crawlers only ever see the server-rendered HTML, not this re-render).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
