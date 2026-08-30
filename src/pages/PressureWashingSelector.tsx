import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

type BuyerType = 'Contractor' | 'Facilities / Property Management' | 'Government / Institutional'
type Application = 'Grease, oil, or food-service buildup' | 'Dirt, mud, or general grime' | 'Large flat surfaces (lots, floors)'
type DutyCycle = 'Occasional' | 'Daily' | 'Continuous / multi-shift'
type Portability = 'Needs to travel between job sites' | 'Fixed at one location'

interface Answers {
  buyerType: BuyerType | null
  application: Application | null
  duty: DutyCycle | null
  portability: Portability | null
}

interface Recommendation {
  equipment: string
  reason: string
}

const STEPS = ['Buyer Type', 'Application', 'Duty Cycle', 'Portability'] as const

function recommend(a: Answers): Recommendation {
  const needsHeat = a.application === 'Grease, oil, or food-service buildup'
  const largeSurface = a.application === 'Large flat surfaces (lots, floors)'
  const continuous = a.duty === 'Continuous / multi-shift'
  const traveling = a.portability === 'Needs to travel between job sites'
  const fixed = a.portability === 'Fixed at one location'

  if (largeSurface) {
    return {
      equipment: 'Surface Cleaning Equipment',
      reason: 'Large flat surfaces clean faster with a dedicated surface cleaner attachment or unit than a standard wand.',
    }
  }
  if (continuous && fixed) {
    return {
      equipment: 'Stationary Wash Systems',
      reason: 'Continuous, multi-shift use at a fixed location is what stationary wash-bay systems are built for.',
    }
  }
  if (traveling) {
    return {
      equipment: needsHeat ? 'Trailer-Mounted Systems' : 'Skid-Mounted Systems',
      reason: needsHeat
        ? 'Crews that travel between sites and need hot water for grease/oil typically run a trailer-mounted hot water rig with onboard tank and reels.'
        : 'Skid-mounted units fit a truck deck for crews moving between job sites without the footprint of a full trailer.',
    }
  }
  return {
    equipment: needsHeat ? 'Hot Water Pressure Washers' : 'Cold Water Pressure Washers',
    reason: needsHeat
      ? 'Grease, oil, or food-service buildup needs the heat a hot water unit provides — cold water alone will underperform.'
      : 'General dirt and grime clean fine with cold water, at a lower cost to buy and run than a hot water unit.',
  }
}

export default function PressureWashingSelector() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({ buyerType: null, application: null, duty: null, portability: null })
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Move focus to the new step's heading after each transition — matches
  // the route-change focus pattern in Layout.tsx (a useEffect after commit,
  // not a requestAnimationFrame call from inside the click handler, which
  // measurably failed to land focus: the browser's own click-then-focus
  // behavior on the just-clicked button, followed by React unmounting that
  // button for the next step, left focus stranded on the nearest ancestor
  // instead of the new heading). preventScroll avoids the same
  // focus-triggered scroll issue fixed earlier for route changes.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [step])

  function answer<K extends keyof Answers>(key: K, value: NonNullable<Answers[K]>) {
    setAnswers((a) => ({ ...a, [key]: value }))
    setStep((s) => s + 1)
  }

  function restart() {
    setAnswers({ buyerType: null, application: null, duty: null, portability: null })
    setStep(0)
  }

  const done = step >= STEPS.length
  const result = done ? recommend(answers) : null

  return (
    <div>
      <BreadcrumbSchema
        crumbs={[
          { name: 'Equipment', path: '/equipment' },
          { name: 'Pressure Washing', path: '/equipment/pressure-washing' },
          { name: 'Equipment Selector' },
        ]}
      />

      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-gauge-400">
            <Link to="/equipment" className="hover:text-cold-50">Equipment</Link>
            {' / '}
            <Link to="/equipment/pressure-washing" className="hover:text-cold-50">Pressure Washing</Link>
            {' / '}
            <span className="text-gauge-300">Equipment Selector</span>
          </nav>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-orange-400">Interactive Tool</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold uppercase text-cold-50 sm:text-5xl">
            Pressure Washer Equipment Selector
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gauge-300">
            Answer four quick questions and we'll point you to the equipment type that fits — then route you straight
            to a scoped quote request.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16">
        {!done && (
          <p className="font-mono text-xs uppercase tracking-widest text-gauge-600">
            Step {step + 1} of {STEPS.length} — {STEPS[step]}
          </p>
        )}

        {step === 0 && (
          <fieldset className="mt-4">
            <legend className="sr-only">Buyer Type</legend>
            <h2 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-bold uppercase text-steel-900 outline-none">
              What kind of buyer are you?
            </h2>
            <div className="mt-4 grid gap-3">
              {(['Contractor', 'Facilities / Property Management', 'Government / Institutional'] as const).map((opt) => (
                <ChoiceButton key={opt} label={opt} onClick={() => answer('buyerType', opt)} />
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="mt-4">
            <legend className="sr-only">Primary Application</legend>
            <h2 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-bold uppercase text-steel-900 outline-none">
              What are you mostly cleaning?
            </h2>
            <div className="mt-4 grid gap-3">
              {(['Grease, oil, or food-service buildup', 'Dirt, mud, or general grime', 'Large flat surfaces (lots, floors)'] as const).map((opt) => (
                <ChoiceButton key={opt} label={opt} onClick={() => answer('application', opt)} />
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="mt-4">
            <legend className="sr-only">Duty Cycle</legend>
            <h2 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-bold uppercase text-steel-900 outline-none">
              How often will it run?
            </h2>
            <div className="mt-4 grid gap-3">
              {(['Occasional', 'Daily', 'Continuous / multi-shift'] as const).map((opt) => (
                <ChoiceButton key={opt} label={opt} onClick={() => answer('duty', opt)} />
              ))}
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="mt-4">
            <legend className="sr-only">Portability</legend>
            <h2 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-bold uppercase text-steel-900 outline-none">
              Does it need to travel between sites?
            </h2>
            <div className="mt-4 grid gap-3">
              {(['Needs to travel between job sites', 'Fixed at one location'] as const).map((opt) => (
                <ChoiceButton key={opt} label={opt} onClick={() => answer('portability', opt)} />
              ))}
            </div>
          </fieldset>
        )}

        {done && result && (
          <div>
            <h2 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-bold uppercase text-steel-900 outline-none">
              Recommended: {result.equipment}
            </h2>
            <p className="mt-3 leading-relaxed text-steel-700">{result.reason}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to={`/quote?equipment=${encodeURIComponent(result.equipment)}`}
                className="inline-block bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-steel-900 hover:text-orange-400"
              >
                Request a Quote for This Equipment →
              </Link>
              <button
                type="button"
                onClick={restart}
                className="font-display text-lg uppercase tracking-wide text-hydro-500 hover:text-hydro-400"
              >
                ← Start Over
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

function ChoiceButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border border-gauge-300 bg-cold-50 px-5 py-4 text-left font-display text-lg uppercase tracking-wide text-steel-900 transition-colors hover:border-orange-500 hover:bg-cold-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      {label}
    </button>
  )
}
