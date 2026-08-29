import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SpecPlate } from '../components/SpecPlate'
import { equipmentCategories } from '../data/equipmentCategories'
import Turnstile, { type TurnstileHandle } from '../components/Turnstile'

const OTHER_OPTION = 'Not sure / need guidance'

// Fallback inbox shown only if the direct submission below fails (network
// issue, etc.) — the primary path posts to api/quote/submit.js, which
// verifies the submission server-side (honeypot, fill-time, Turnstile) and
// writes into the admin CRM's quote_requests table with the service-role
// key. Nothing here talks to Supabase directly anymore.
const QUOTE_INBOX = 'quotes@icrestiq.com'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined

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

// Every valid value the equipment <select> can hold, so a query param can't
// inject an option that doesn't exist in the dropdown (e.g. from a stale or
// hand-edited link) — falls back to OTHER_OPTION if it doesn't match.
const KNOWN_EQUIPMENT = new Set(
  equipmentCategories.flatMap((c) => c.subcategories.map((s) => s.name)).concat(OTHER_OPTION),
)

// SEO resource pages and the equipment selector link here with
// ?equipment=<name> (see src/data/resources and PressureWashingSelector.tsx)
// so a visitor who already got a recommendation doesn't have to re-pick it.
function initialEquipmentFrom(searchParams: URLSearchParams): string {
  const requested = searchParams.get('equipment')
  return requested && KNOWN_EQUIPMENT.has(requested) ? requested : OTHER_OPTION
}

export default function RequestQuote() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState<FormState>(() => ({
    ...initialState,
    equipment: initialEquipmentFrom(searchParams),
  }))
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [failed, setFailed] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Honeypot — real visitors never see or fill this field (off-screen, out
  // of tab order). Any value present flags the submission as automated.
  const [website, setWebsite] = useState('')
  const renderedAt = useRef(Date.now())

  const [captchaToken, setCaptchaToken] = useState('')
  const turnstileRef = useRef<TurnstileHandle>(null)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setFailed(false)
    setErrorMessage('')

    if (TURNSTILE_SITE_KEY && !captchaToken) {
      setFailed(true)
      setErrorMessage('Please complete the verification challenge.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/quote/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          buyerType: form.buyerType,
          equipment: form.equipment,
          quantity: form.quantity.trim(),
          timeline: form.timeline.trim(),
          details: form.details.trim(),
          website,
          renderedAt: renderedAt.current,
          turnstileToken: captchaToken,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setSent(true)
    } catch (err) {
      setFailed(true)
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      // Turnstile tokens are single-use — whether the server rejected this
      // one or something else failed, it's already spent, so the widget
      // needs a fresh challenge before the next submit attempt can work.
      turnstileRef.current?.reset()
      setCaptchaToken('')
    } finally {
      setSubmitting(false)
    }
  }

  function handleMailtoFallback() {
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
              <h2 className="font-display text-2xl font-bold uppercase text-steel-900">Request Received</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">
                Thanks — your request has been sent straight to our sales team and we'll
                follow up shortly. If it's urgent, you can also reach us directly at{' '}
                <a href={`mailto:${QUOTE_INBOX}`} className="text-hydro-500 underline">
                  {QUOTE_INBOX}
                </a>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSent(false)
                setForm(initialState)
                setCaptchaToken('')
                turnstileRef.current?.reset()
                renderedAt.current = Date.now()
              }}
              className="mt-4 font-display text-lg uppercase tracking-wide text-orange-600 hover:underline"
            >
              ← Submit Another Request
            </button>
          </SpecPlate>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {failed && (
              <div role="alert" className="border border-orange-600 bg-orange-50 px-4 py-3">
                <p className="text-sm text-steel-900">
                  {errorMessage || 'Something went wrong sending your request.'} You can try again, or{' '}
                  <button
                    type="button"
                    onClick={handleMailtoFallback}
                    className="text-hydro-500 underline hover:text-hydro-400"
                  >
                    email us directly
                  </button>{' '}
                  instead.
                </p>
              </div>
            )}

            {/*
              Honeypot field. Visually hidden and pulled out of tab order so
              real visitors never see or reach it, but bots that blindly
              fill every input on the page will populate it — which flags
              the submission as automated server-side (see
              api/quote/submit.js). Do not add `display: none` or
              `type="hidden"`; some bots skip fields styled that way.
              Off-screen positioning plus aria-hidden is the more robust
              pattern.
            */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
              <label htmlFor="quote-website">Website (leave this blank)</label>
              <input
                id="quote-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

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

            <Turnstile ref={turnstileRef} onVerify={setCaptchaToken} />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-orange-600 px-6 py-4 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50 sm:w-auto"
            >
              {submitting ? 'Sending…' : 'Send Quote Request'}
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
