import { Link } from 'react-router-dom'
import { pressureWashingResources } from '../data/resources'

// Buyer type is informational only here — confirmed with the user that the
// recommended equipment doesn't change based on who's asking, only which
// buyers commonly encounter a given task. If that ever stops being true,
// this page (not the underlying application pages) is where a real
// buyer-type-aware recommendation would need to live.
export default function ApplicationMatrix() {
  const applications = pressureWashingResources.filter((r) => r.type === 'application')

  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-gauge-400">
            <Link to="/equipment" className="hover:text-cold-50">Equipment</Link>
            {' / '}
            <Link to="/equipment/pressure-washing" className="hover:text-cold-50">Pressure Washing</Link>
            {' / '}
            <span className="text-gauge-300">Application Matrix</span>
          </nav>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-orange-400">Buying Guide</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase text-cold-50 sm:text-5xl">
            Application Matrix
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gauge-300">
            Every common cleaning task we cover, who typically runs into it, and the equipment category to start
            with — each row links to the full page for that application.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="overflow-x-auto border border-gauge-300">
          <table className="w-full text-left text-sm">
            <thead className="bg-cold-100 font-display uppercase tracking-wide text-steel-700">
              <tr>
                <th scope="col" className="px-4 py-3">Task</th>
                <th scope="col" className="px-4 py-3">Typical Buyer(s)</th>
                <th scope="col" className="px-4 py-3">Recommended Equipment</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((r) => (
                <tr key={r.slug} className="border-t border-gauge-300">
                  <td className="px-4 py-3">
                    <Link
                      to={`/equipment/pressure-washing/${r.slug}`}
                      className="font-display uppercase tracking-wide text-hydro-500 hover:text-hydro-400"
                    >
                      {r.label} →
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-steel-700">{(r.typicalBuyers ?? []).join(', ') || '—'}</td>
                  <td className="px-4 py-3 text-steel-700">{r.ctaEquipment ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-steel-600">
          "Recommended Equipment" is a starting point, not a fixed rule — the right equipment for your specific job
          depends on volume, duty cycle, and site conditions. Use the Equipment Selector Tool for a recommendation
          matched to your actual answers, or request a quote and we'll scope it directly.
        </p>

        <div className="mt-12 border border-gauge-300 bg-cold-100 p-6 text-center">
          <p className="font-display text-xl font-bold uppercase text-steel-900">Don't See Your Task Here?</p>
          <p className="mt-2 text-steel-700">Tell us the application and we'll scope equipment to fit — no generic price list.</p>
          <Link
            to="/quote"
            className="mt-4 inline-block bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-steel-900 hover:text-orange-400"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
