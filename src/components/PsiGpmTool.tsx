import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const PSI_MIN = 1500
const PSI_MAX = 4500
const GPM_MIN = 1
const GPM_MAX = 10

interface JobMatch {
  label: string
  note: string
  equipment: string
}

// Approximate bands matching the compareTable in src/data/resources/psiGpm.ts
// — illustrative, not a precision engineering calculator. GPM is checked
// first since it's the more distinguishing factor for surface-area jobs
// per that same table (large flat surfaces lean on GPM more than PSI).
function matchJob(psi: number, gpm: number): JobMatch {
  if (gpm >= 6) {
    return {
      label: 'Large Flat Surfaces',
      note: 'Parking lots, warehouse floors — GPM covers ground faster than extra PSI would here.',
      equipment: 'Surface Cleaning Equipment',
    }
  }
  if (psi >= 3000 && gpm >= 5) {
    return {
      label: 'Heavy Equipment / Industrial',
      note: 'Construction equipment, industrial degreasing — this range handles baked-on, stubborn material.',
      equipment: 'Hot Water Pressure Washers',
    }
  }
  if (psi >= 2500 || gpm >= 3) {
    return {
      label: 'General Fleet Washing',
      note: 'Daily vehicle exteriors and general grime — the most common commercial range.',
      equipment: 'Cold Water Pressure Washers',
    }
  }
  return {
    label: 'Light Commercial',
    note: 'Storefronts and light facility maintenance.',
    equipment: 'Cold Water Pressure Washers',
  }
}

export default function PsiGpmTool() {
  const [psi, setPsi] = useState(2800)
  const [gpm, setGpm] = useState(4)

  const match = useMemo(() => matchJob(psi, gpm), [psi, gpm])

  return (
    <div className="border border-gauge-300 bg-cold-100 p-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-600">Interactive</p>
      <h2 className="mt-2 font-display text-2xl font-bold uppercase text-steel-900">
        Find Your PSI / GPM Range
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-steel-700">
        Drag either slider to see which job type that range typically fits.
      </p>

      <div className="mt-6 space-y-6">
        <label className="block">
          <span className="flex items-baseline justify-between font-display text-sm uppercase tracking-widest text-steel-700">
            PSI
            <span className="font-mono text-lg font-medium text-steel-900">{psi.toLocaleString()}</span>
          </span>
          <input
            type="range"
            min={PSI_MIN}
            max={PSI_MAX}
            step={100}
            value={psi}
            onChange={(e) => setPsi(Number(e.target.value))}
            className="mt-2 w-full accent-orange-600"
            aria-describedby="psi-gpm-result"
          />
        </label>

        <label className="block">
          <span className="flex items-baseline justify-between font-display text-sm uppercase tracking-widest text-steel-700">
            GPM
            <span className="font-mono text-lg font-medium text-steel-900">{gpm.toLocaleString()}</span>
          </span>
          <input
            type="range"
            min={GPM_MIN}
            max={GPM_MAX}
            step={0.5}
            value={gpm}
            onChange={(e) => setGpm(Number(e.target.value))}
            className="mt-2 w-full accent-orange-600"
            aria-describedby="psi-gpm-result"
          />
        </label>
      </div>

      <div id="psi-gpm-result" role="status" className="mt-6 border-l-2 border-orange-500 bg-cold-50 p-4">
        <p className="font-mono text-xs uppercase tracking-widest text-gauge-600">Typically fits</p>
        <p className="mt-1 font-display text-xl font-bold uppercase text-steel-900">{match.label}</p>
        <p className="mt-1 text-sm leading-relaxed text-steel-700">{match.note}</p>
        <Link
          to={`/quote?equipment=${encodeURIComponent(match.equipment)}`}
          className="mt-4 inline-block bg-orange-600 px-5 py-2.5 font-display text-base uppercase tracking-wide text-cold-50 transition-colors hover:bg-steel-900 hover:text-orange-400"
        >
          Request a Quote for This Range →
        </Link>
      </div>
    </div>
  )
}
