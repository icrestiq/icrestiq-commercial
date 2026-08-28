import { StrictMode } from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.tsx'
import { routeMeta, getMetaForPath, notFoundMeta, SITE_URL } from './data/seo'

export { getMetaForPath, notFoundMeta, SITE_URL }

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}

// Every path the prerender script should generate a static HTML file for —
// derived from the same route-metadata source used for <title>/<meta>, so a
// new equipment category picked up in seo.ts is prerendered automatically.
export function getPrerenderPaths(): string[] {
  return routeMeta.map((r) => r.path)
}
