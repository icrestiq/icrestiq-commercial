import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/brand/logo-lockup-header.png'

const links = [
  { to: '/equipment', label: 'Equipment' },
  { to: '/equipment/pressure-washing#buyer-resources', label: 'Resources' },
  { to: '/government', label: 'Government & Institutional' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-steel-700 bg-steel-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="iCrestiQ Commercial" className="h-28 w-auto" />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-display text-base uppercase tracking-wide transition-colors ${
                  isActive ? 'text-orange-400' : 'text-gauge-300 hover:text-cold-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/quote"
            className="border border-orange-500 px-4 py-2 font-display text-base uppercase tracking-wide text-orange-400 transition-colors hover:bg-cold-50 hover:text-steel-900"
          >
            Request a Quote
          </NavLink>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-cold-50 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-cold-50 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-cold-50 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-steel-700 bg-steel-900 px-6 py-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="border-b border-steel-800 py-3 font-display text-lg uppercase tracking-wide text-gauge-300 last:border-none"
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/quote"
            onClick={() => setOpen(false)}
            className="mt-4 border border-orange-500 px-4 py-3 text-center font-display text-lg uppercase tracking-wide text-orange-400"
          >
            Request a Quote
          </NavLink>
        </nav>
      )}
    </header>
  )
}
