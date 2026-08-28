import { useState, type FormEvent, type ReactNode } from 'react'
import { SpecPlate } from '../components/SpecPlate'
import { equipmentCategories } from '../data/equipmentCategories'

const OTHER_OPTION = 'Not sure / need guidance'

// Real, confirmed inbox (2026-08-28). mailto is still an interim submission
// path — consider a real form backend (Formspree/Netlify Forms) later so
// quote requests don't depend on the visitor's own email client sending.
const QUOTE_INBOX = 'quotes@icrestiq.com'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  buyerType: 'Commercial / B2B' | 'Government / Institutional'
  equipment: string
  quantity: string
  timeline: string
  details: string
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  buyerType: 'Commercial / B2B',
  equipment: OTHER_OPTION,
  quantity: '',
  timeline: '',
  details: '',
}

export default function RequestQuote() {
  const [form, setForm] = useState<FormState>(initialState)
  const [sent, setSent] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const subject = `Quote Request — ${form.equipment} (${form.buyerType})`
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Buyer type: ${form.buyerType}`,
      `Equipment category: ${form.equipment}`,
      `Quantity / volume: ${form.quantity}`,
      `Timeline: ${form.timeline}`,
      '',
      'Details:',
      form.details,
    ].join('\n')

    window.location.href = `mailto:${QUOTE_INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">Get a Scoped Quote</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-cold-50">Request a Quote</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gauge-300">
            Tell us what you're trying to accomplish and we'll come back with equipment
            matched to the job — not a generic price list.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        {sent ? (
          <SpecPlate tone="light">
            <div role="status">
              <h2 className="font-display text-2xl font-bold uppercase text-steel-900">Request Ready to Send</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">
                Your email app should have opened with the details filled in — send it from
                there and we'll follow up. If nothing opened, email us directly at{' '}
                <a href={`mailto:${QUOTE_INBOX}`} className="text-hydro-500 underline">
                  {QUOTE_INBOX}
                </a>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-4 font-display text-lg uppercase tracking-wide text-orange-600 hover:underline"
            >
              ← Edit Request
            </button>
          </SpecPlate>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Company / Agency" required>
                <input
                  required
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>

            <fieldset>
              <legend className="font-display text-sm uppercase tracking-widest text-steel-700">
                Buyer Type<span className="ml-1 text-orange-600" aria-hidden="true">*</span>
              </legend>
              <div className="mt-2 flex gap-3">
                {(['Commercial / B2B', 'Government / Institutional'] as const).map((opt) => (
                  <label
                    key={opt}
                    className={`flex-1 cursor-pointer border px-4 py-3 text-center font-display text-base uppercase tracking-wide transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-orange-500 ${
                      form.buyerType === opt
                        ? 'border-orange-600 bg-orange-600 text-cold-50'
                        : 'border-gauge-300 text-steel-700 hover:border-steel-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="buyerType"
                      value={opt}
                      checked={form.buyerType === opt}
                      onChange={() => update('buyerType', opt)}
                      className="sr-only"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Equipment Category" required>
                <select
                  value={form.equipment}
                  onChange={(e) => update('equipment', e.target.value)}
                  className={inputClass}
                >
                  <option value={OTHER_OPTION}>{OTHER_OPTION}</option>
                  {equipmentCategories.map((cat) => (
                    <optgroup key={cat.slug} label={cat.name}>
                      {cat.subcategories.map((s) => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </Field>
              <Field label="Quantity / Volume">
                <input
                  value={form.quantity}
                  onChange={(e) => update('quantity', e.target.value)}
                  placeholder="e.g. 3 units, 1 fleet bay"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Timeline">
              <input
                value={form.timeline}
                onChange={(e) => update('timeline', e.target.value)}
                placeholder="e.g. Within 30 days, fiscal year budget, no rush"
                className={inputClass}
              />
            </Field>

            <Field label="Project Details" required>
              <textarea
                required
                rows={5}
                value={form.details}
                onChange={(e) => update('details', e.target.value)}
                placeholder="What are you trying to accomplish, how often, and any constraints (power/utility access, site conditions, load sizes)?"
                className={inputClass}
              />
            </Field>

            <button
              type="submit"
              className="w-full bg-orange-600 px-6 py-4 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-steel-900 hover:text-orange-400 sm:w-auto"
            >
              Send Quote Request
            </button>
          </form>
        )}
      </section>
    </div>
  )
}

const inputClass =
  'w-full border border-gauge-300 bg-cold-50 px-4 py-3 text-steel-900 placeholder:text-gauge-600 focus:border-orange-500'

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="font-display text-sm uppercase tracking-widest text-steel-700">
        {label}
        {required && <span className="ml-1 text-orange-600" aria-hidden="true">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}
