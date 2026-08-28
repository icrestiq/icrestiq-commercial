import { useEffect, useState } from 'react'

// WCAG 2.2.2 (Pause, Stop, Hide): any purely decorative autoplaying video
// that loops longer than 5s needs a way to not auto-play for visitors who
// have asked for reduced motion. Callers that mount a background <video>
// should skip it entirely when this returns true.
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const onChange = () => setReduced(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])
  return reduced
}
