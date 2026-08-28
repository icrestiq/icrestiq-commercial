import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdminAuth } from '../../lib/AdminAuthContext'

export default function AdminRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAdminAuth()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-steel-900">
        <p className="font-mono text-sm uppercase tracking-widest text-gauge-400">Loading…</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}
