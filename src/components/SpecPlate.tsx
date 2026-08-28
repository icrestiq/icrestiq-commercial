import { createContext, useContext, type ReactNode } from 'react'

type Tone = 'dark' | 'light'

const ToneContext = createContext<Tone>('dark')

export function SpecPlate({
  children,
  tone = 'dark',
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  const toneClasses =
    tone === 'dark'
      ? 'border-steel-700 bg-steel-900 text-cold-50'
      : 'border-gauge-300 bg-cold-100 text-steel-900'

  return (
    <ToneContext.Provider value={tone}>
      <div className={`spec-plate border px-6 py-5 ${toneClasses} ${className}`}>
        {children}
      </div>
    </ToneContext.Provider>
  )
}

export function SpecRow({ label, value, unit }: { label: string; value: string; unit?: string }) {
  const tone = useContext(ToneContext)
  // gauge-400 has enough contrast against the dark tone's steel-900 bg, but
  // not against the light tone's cold-100 bg — gauge-600 is the fix there.
  const labelClass = tone === 'dark' ? 'text-gauge-400' : 'text-gauge-600'

  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-steel-700/40 py-2 last:border-none">
      <span className={`font-mono text-xs uppercase tracking-widest ${labelClass}`}>{label}</span>
      <span className="font-mono text-lg font-medium">
        {value}
        {unit && <span className={`ml-1 text-sm ${labelClass}`}>{unit}</span>}
      </span>
    </div>
  )
}
