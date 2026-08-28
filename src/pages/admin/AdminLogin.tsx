import { useState, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdminHead } from '../../hooks/useAdminHead'
import { useAdminAuth } from '../../lib/AdminAuthContext'

export default function AdminLogin() {
  useAdminHead('Admin Login | iCrestiQ Commercial')
  const { user, loading, signIn } = useAdminAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  if (!loading && user) return <Navigate to="/admin" replace />

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const { error } = await signIn(email, password)
    setSubmitting(false)
    if (error) setError(error)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-steel-900 px-6">
      <div className="w-full max-w-sm border border-steel-700 bg-steel-950 p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-orange-400">iCrestiQ Commercial</p>
        <h1 className="mt-2 font-display text-3xl font-bold uppercase text-cold-50">Admin Sign In</h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          {error && (
            <p role="alert" className="border-l-2 border-orange-500 bg-steel-900 px-3 py-2 text-sm text-cold-50">
              {error}
            </p>
          )}

          <label className="block">
            <span className="font-display text-sm uppercase tracking-widest text-gauge-300">Email</span>
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border border-steel-700 bg-steel-900 px-4 py-3 text-cold-50 focus:border-orange-500"
            />
          </label>

          <label className="block">
            <span className="font-display text-sm uppercase tracking-widest text-gauge-300">Password</span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border border-steel-700 bg-steel-900 px-4 py-3 text-cold-50 focus:border-orange-500"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-cold-50 hover:text-steel-900 disabled:opacity-50"
          >
            {submitting ? 'Signing In…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
