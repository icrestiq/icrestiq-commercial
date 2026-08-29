import { Link, useParams, Navigate } from 'react-router-dom'
import { getResourceBySlug, getResourcesBySlugs, type Block } from '../data/resources'
import PsiGpmTool from '../components/PsiGpmTool'

const TYPE_LABEL: Record<string, string> = {
  core: 'Core Equipment',
  application: 'Application',
  guide: 'Buying Guide',
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-10 font-display text-2xl font-bold uppercase text-steel-900 first:mt-0">{block.text}</h2>
    case 'h3':
      return <h3 className="mt-6 font-display text-lg font-bold uppercase text-steel-900">{block.text}</h3>
    case 'p':
      return <p className="mt-3 leading-relaxed text-steel-700">{block.text}</p>
    case 'ul':
      return (
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-steel-700">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    case 'ol':
      return (
        <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed text-steel-700">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      )
    case 'callout':
      return (
        <div className="mt-4 border-l-2 border-orange-500 bg-cold-100 px-4 py-3">
          <p className="leading-relaxed text-steel-900">{block.text}</p>
        </div>
      )
    case 'specTable':
      return (
        <div className="mt-4 overflow-x-auto border border-gauge-300">
          {block.caption && <p className="border-b border-gauge-300 bg-cold-100 px-4 py-2 font-mono text-xs text-gauge-600">{block.caption}</p>}
          <table className="w-full text-left text-sm">
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-gauge-300 first:border-t-0">
                  <th scope="row" className="w-1/3 px-4 py-2 font-display text-xs uppercase tracking-widest text-steel-700">{row.label}</th>
                  <td className="px-4 py-2 font-mono text-steel-900">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'compareTable':
      return (
        <div className="mt-4 overflow-x-auto border border-gauge-300">
          {block.caption && <p className="border-b border-gauge-300 bg-cold-100 px-4 py-2 font-mono text-xs text-gauge-600">{block.caption}</p>}
          <table className="w-full text-left text-sm">
            <thead className="bg-cold-100 font-display uppercase tracking-wide text-steel-700">
              <tr>
                <th scope="col" className="px-4 py-2"></th>
                {block.columns.map((col) => <th key={col} scope="col" className="px-4 py-2">{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-gauge-300">
                  <th scope="row" className="px-4 py-2 font-display text-xs uppercase tracking-widest text-steel-700">{row.label}</th>
                  {row.values.map((v, vi) => <td key={vi} className="px-4 py-2 text-steel-700">{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'faq':
      return (
        <div className="mt-4 space-y-4">
          {block.items.map((item, i) => (
            <div key={i} className="border-b border-gauge-300 pb-4 last:border-none">
              <p className="font-display text-base font-bold uppercase text-steel-900">{item.q}</p>
              <p className="mt-1 leading-relaxed text-steel-700">{item.a}</p>
            </div>
          ))}
        </div>
      )
    default:
      return null
  }
}

export default function ResourcePage() {
  const { slug } = useParams<{ slug: string }>()
  const resource = getResourceBySlug(slug)

  if (!resource) return <Navigate to="/equipment/pressure-washing" replace />

  const faqBlock = resource.blocks.find((b): b is Extract<Block, { type: 'faq' }> => b.type === 'faq')
  const related = getResourcesBySlugs(resource.relatedSlugs)

  return (
    <div>
      {faqBlock && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqBlock.items.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            }),
          }}
        />
      )}

      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-gauge-400">
            <Link to="/equipment" className="hover:text-cold-50">Equipment</Link>
            {' / '}
            <Link to="/equipment/pressure-washing" className="hover:text-cold-50">Pressure Washing</Link>
            {' / '}
            <span className="text-gauge-300">{resource.label}</span>
          </nav>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-orange-400">
            {TYPE_LABEL[resource.type] ?? resource.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase text-cold-50 sm:text-5xl">
            {resource.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gauge-300">{resource.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        {resource.slug === 'psi-gpm-guide' && (
          <div className="mb-10">
            <PsiGpmTool />
          </div>
        )}

        {resource.blocks.map((block, i) => <BlockRenderer key={i} block={block} />)}

        <div className="mt-12 border border-gauge-300 bg-cold-100 p-6 text-center">
          <p className="font-display text-xl font-bold uppercase text-steel-900">Need Help Choosing a System?</p>
          <p className="mt-2 text-steel-700">Tell us the application and we'll scope equipment to fit — no generic price list.</p>
          <Link
            to={resource.ctaEquipment ? `/quote?equipment=${encodeURIComponent(resource.ctaEquipment)}` : '/quote'}
            className="mt-4 inline-block bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-steel-900 hover:text-orange-400"
          >
            Request a Quote
          </Link>
        </div>

        {related.length > 0 && (
          <nav aria-label="Related resources" className="mt-16 border-t border-gauge-300 pt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gauge-600">Related</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/equipment/pressure-washing/${r.slug}`}
                    className="font-display text-base uppercase tracking-wide text-hydro-500 hover:text-hydro-400"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </section>
    </div>
  )
}
