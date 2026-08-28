import { Link } from 'react-router-dom'
import { SpecPlate, SpecRow } from '../components/SpecPlate'

// Real, confirmed inbox (2026-08-28).
const CONTACT_EMAIL = 'info@icrestiq.com'

export default function Contact() {
  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">Get In Touch</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-cold-50">Contact</h1>
          <p className="mt-4 text-lg leading-relaxed text-gauge-300">
            Have a general question, a manufacturer partnership inquiry, or something outside
            a standard quote request? Reach out directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-[1fr_1fr]">
          <SpecPlate tone="light">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gauge-600">
              Contact Details
            </p>
            <SpecRow label="Email" value={CONTACT_EMAIL} />
            <SpecRow label="Entity" value="iCrestiQ LLC" />
            <SpecRow label="Location" value="South Carolina" />
          </SpecPlate>

          <div className="flex flex-col justify-center gap-4">
            <p className="text-steel-700">
              Looking for pricing on specific equipment? Use the quote form instead — it
              routes the details straight to us and gets you a faster, more accurate
              response.
            </p>
            <Link
              to="/quote"
              className="inline-block self-start bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-steel-900 hover:text-orange-400"
            >
              Request a Quote
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block self-start border border-gauge-400 px-6 py-3 font-display text-lg uppercase tracking-wide text-steel-900 hover:border-steel-900"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
