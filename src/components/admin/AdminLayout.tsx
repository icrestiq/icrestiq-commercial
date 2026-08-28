import { NavLink, Outlet } from 'react-router-dom'
import { useAdminHead } from '../../hooks/useAdminHead'
import { useAdminAuth } from '../../lib/AdminAuthContext'

const links = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/companies', label: 'Companies' },
  { to: '/admin/contacts', label: 'Contacts' },
  { to: '/admin/deals', label: 'Deals' },
  { to: '/admin/tasks', label: 'Tasks' },
]

export default function AdminLayout() {
  useAdminHead('Admin | iCrestiQ Commercial')
  const { user, signOut } = useAdminAuth()

  return (
    <div className="min-h-screen bg-cold-50">
      <header className="border-b border-steel-700 bg-steel-900">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-8">
            <p className="font-display text-xl font-bold uppercase tracking-wide text-cold-50">
              iCrestiQ <span className="text-orange-400">Admin</span>
            </p>
            <nav className="flex flex-wrap gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `font-display text-sm uppercase tracking-wide transition-colors ${
                      isActive ? 'text-orange-400' : 'text-gauge-300 hover:text-cold-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-gauge-400">{user?.email}</span>
            <button
              type="button"
              onClick={() => signOut()}
              className="border border-gauge-500 px-3 py-1.5 font-display text-sm uppercase tracking-wide text-gauge-300 transition-colors hover:border-cold-50 hover:text-cold-50"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}
