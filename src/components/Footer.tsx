import { Link } from 'react-router-dom'
import logo from '../assets/brand/logo-lockup-footer.png'

export default function Footer() {
  return (
    <footer className="border-t border-steel-700 bg-steel-950 text-gauge-300">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-32">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="iCrestiQ Commercial" className="h-24 w-auto" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              A commercial equipment division of{' '}
              <a
                href="https://icrestiq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-orange-400"
              >
                iCrestiQ LLC
              </a>
              , sourcing commercial and industrial equipment for businesses, contractors,
              institutions, and government buyers — starting with pressure washing and
              expanding into material handling.
            </p>
          </div>

          <div>
            <p className="font-display text-sm uppercase tracking-widest text-gauge-400">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/equipment" className="hover:text-orange-400">Equipment</Link></li>
              <li><Link to="/government" className="hover:text-orange-400">Government &amp; Institutional</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm uppercase tracking-widest text-gauge-400">Get Started</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/quote" className="hover:text-orange-400">Request a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-steel-800 pt-6 font-mono text-xs text-gauge-400">
          <p>&copy; {new Date().getFullYear()} iCrestiQ LLC. All rights reserved.</p>
          <p className="mt-2 max-w-2xl">
            iCrestiQ Commercial is not currently an authorized dealer of any manufacturer
            named or referenced on this site unless explicitly stated. Product categories
            shown are representative of the equipment we source, not a confirmed catalog. See
            our <Link to="/policies/disclaimers" className="underline hover:text-orange-400">Disclaimers</Link> for more.
          </p>
          <nav aria-label="Policies" className="mt-4 flex gap-4">
            <Link to="/policies" className="hover:text-orange-400">Policies</Link>
            <Link to="/accessibility" className="hover:text-orange-400">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
