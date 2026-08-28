import { Link } from 'react-router-dom'
import { GENERAL_EMAIL } from '../data/policies/shared'

export default function Accessibility() {
  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">Accessibility</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-cold-50">
            Our Accessibility Commitment
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="leading-relaxed text-steel-700">
          iCrestiQ LLC is working to make this site accessible to the widest possible audience,
          including people who use assistive technology such as screen readers, screen
          magnification, voice control, or keyboard-only navigation.
        </p>
        <p className="mt-4 leading-relaxed text-steel-700">
          Our technical accessibility target is <strong>WCAG 2.2 Level AA</strong>, the current Web
          Content Accessibility Guidelines published by the W3C. We review and improve the site
          against these guidelines on an ongoing basis — accessibility work is never fully "done,"
          and this statement reflects effort and intent, not a claim of complete or certified
          compliance.
        </p>
        <p className="mt-4 leading-relaxed text-steel-700">
          Some of what we've built in: a skip-to-content link, keyboard-focus indicators
          throughout, labeled form fields with autocomplete hints, a proper radio group for the
          buyer-type selector on the quote form, status messaging that's announced to screen
          readers after submitting a request, color choices checked against WCAG's 4.5:1 text
          contrast requirement, and support for reduced-motion preferences.
        </p>
        <p className="mt-4 leading-relaxed text-steel-700">
          If you use assistive technology and run into something on this site that doesn't work
          the way you'd expect, or that gets in the way of using it, please let us know. Specifics
          help — the page you were on, what you were trying to do, and what happened instead.
        </p>

        <p className="mt-8 border-t border-gauge-300 pt-6 text-sm leading-relaxed text-gauge-600">
          This statement describes our ongoing efforts, not a guarantee that every page or feature
          is fully accessible at all times, and it is not a legal or certification document.
        </p>

        <p className="mt-8">
          <a href={`mailto:${GENERAL_EMAIL}`} className="font-display text-lg uppercase tracking-wide text-hydro-500 hover:text-hydro-400">
            {GENERAL_EMAIL}
          </a>
        </p>
        <p className="mt-4">
          <Link to="/policies" className="font-display text-base uppercase tracking-wide text-hydro-500 hover:text-hydro-400">
            ← Back to Policies
          </Link>
        </p>
      </section>
    </div>
  )
}
