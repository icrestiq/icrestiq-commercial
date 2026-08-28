import { Link, useParams, Navigate } from 'react-router-dom'
import { POLICIES, getPolicyBySlug, type Block } from '../data/policies'

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-10 font-display text-2xl font-bold uppercase text-steel-900 first:mt-0">{block.text}</h2>
    case 'h3':
      return <h3 className="mt-6 font-display text-lg font-bold uppercase text-steel-900">{block.text}</h3>
    case 'p':
      return <p className="mt-3 leading-relaxed text-steel-700">{block.text}</p>
    case 'legalCaps':
      return <p className="mt-3 font-medium uppercase leading-relaxed text-steel-900">{block.text}</p>
    case 'ul':
      return (
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-steel-700">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    case 'callout':
      return (
        <div className="mt-4 border-l-2 border-orange-500 bg-cold-100 px-4 py-3">
          <p className="leading-relaxed text-steel-900">{block.text}</p>
        </div>
      )
    default:
      return null
  }
}

export default function PolicyPage() {
  const { slug } = useParams<{ slug: string }>()
  const policy = getPolicyBySlug(slug)

  if (!policy) return <Navigate to="/policies" replace />

  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">Policy</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase text-cold-50 sm:text-5xl">{policy.label}</h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-gauge-300">Effective {policy.effectiveDate}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        {policy.blocks.map((block, i) => <BlockRenderer key={i} block={block} />)}

        <nav aria-label="Other policies" className="mt-16 border-t border-gauge-300 pt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-gauge-600">Other Policies</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {POLICIES.filter((p) => p.slug !== slug).map((p) => (
              <li key={p.slug}>
                <Link to={`/policies/${p.slug}`} className="font-display text-base uppercase tracking-wide text-hydro-500 hover:text-hydro-400">
                  {p.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/accessibility" className="font-display text-base uppercase tracking-wide text-hydro-500 hover:text-hydro-400">
                Accessibility Statement
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  )
}
