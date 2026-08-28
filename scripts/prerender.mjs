// Prerenders every route to a static HTML file so crawlers that don't
// execute JavaScript (many AI crawlers, some search bots) get real content
// and correct per-page <title>/meta/canonical/OG tags in the initial
// response, not an empty <div id="root">. Also generates sitemap.xml from
// the same route list. Run after `vite build` and the SSR build — see
// package.json's "build" script.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const distDir = path.join(root, 'dist')
const template = await readFile(path.join(distDir, 'index.html'), 'utf-8')

const { render, getPrerenderPaths, getMetaForPath, notFoundMeta, SITE_URL } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
)

function injectMeta(html, meta, url, robots = 'index, follow') {
  let out = html
  out = out.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(meta.title)}</title>`)
  out = out.replace(
    /<meta name="description" content=".*?" \/>/s,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
  )
  out = out.replace(/<meta name="robots" content=".*?" \/>/s, `<meta name="robots" content="${robots}" />`)
  out = out.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${url}" />`)
  out = out.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`)
  out = out.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`)
  out = out.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${url}" />`)
  out = out.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`)
  out = out.replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`)
  return out
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

async function writeRoute(routePath) {
  const meta = getMetaForPath(routePath)
  const appHtml = render(routePath)
  const url = `${SITE_URL}${routePath}`
  const html = injectMeta(template, meta, url).replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )

  const outDir = routePath === '/' ? distDir : path.join(distDir, routePath)
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true })
  await writeFile(path.join(outDir, 'index.html'), html, 'utf-8')
  return url
}

async function writeNotFoundPage() {
  // Most static hosts (Vercel, Netlify, GitHub Pages, S3) automatically serve
  // /404.html for a path that has no matching file, giving unknown/typo'd
  // URLs a real branded page + 404 status instead of the wrong route's
  // content or a bare host error.
  const appHtml = render('/this-path-does-not-exist')
  const html = injectMeta(template, notFoundMeta, `${SITE_URL}/404`, 'noindex, follow').replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )
  await writeFile(path.join(distDir, '404.html'), html, 'utf-8')
}

async function writeSitemap(urls) {
  const body = urls
    .map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`)
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
  await writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf-8')
}

const routePaths = getPrerenderPaths()
const urls = []
for (const routePath of routePaths) {
  urls.push(await writeRoute(routePath))
}
await writeNotFoundPage()
await writeSitemap(urls)

console.log(`Prerendered ${routePaths.length} routes, wrote 404.html and sitemap.xml:`)
for (const u of urls) console.log(' -', u)
