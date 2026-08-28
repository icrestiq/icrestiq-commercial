import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-orange-600">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold uppercase text-steel-900">Page Not Found</h1>
      <p className="mt-3 text-steel-700">
        That page doesn't exist. It may have moved, or the link may be out of date.
      </p>
      <Link to="/" className="mt-6 inline-block font-display text-lg uppercase tracking-wide text-hydro-500 hover:text-hydro-400">
        ← Back to Home
      </Link>
    </div>
  )
}
