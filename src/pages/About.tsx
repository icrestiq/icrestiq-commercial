import { Link } from 'react-router-dom'
import { SpecPlate } from '../components/SpecPlate'

export default function About() {
  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">About Us</p>
          <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-cold-50">
            iCrestiQ Commercial
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gauge-300">
            iCrestiQ Commercial is the commercial equipment sales division of iCrestiQ LLC, a
            South Carolina-based company. We're building a multi-category commercial and
            industrial equipment platform — pressure washing systems are our first active
            product line, with material handling equipment as our next planned category.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold uppercase text-steel-900">How We Approach Sourcing</h2>
        <p className="mt-4 leading-relaxed text-steel-700">
          Rather than carrying broad, unverified inventory, we're working toward direct
          relationships with manufacturers and distributors who support commercial and
          government resale. That means we can match equipment to your application instead
          of pushing whatever happens to be in stock — and it means we're upfront when a
          relationship with a given manufacturer isn't yet in place.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <ValueCard
            title="Right-Fit Equipment"
            body="We ask about the application before recommending a category or spec range."
          />
          <ValueCard
            title="Direct Sourcing"
            body="We prioritize manufacturer and distributor relationships over unverified resale stock."
          />
          <ValueCard
            title="Straight Answers"
            body="If we're not yet an authorized dealer for a brand, we'll say so."
          />
        </div>
      </section>

      <section className="border-y border-gauge-300/40 bg-cold-100 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold uppercase text-steel-900">Where We Are Today</h2>
          <p className="mt-4 leading-relaxed text-steel-700">
            iCrestiQ Commercial is in an early, active-development phase. We're establishing
            our sourcing relationships and building out a confirmed product catalog. The
            equipment categories on this site describe what we sell into, not a finalized
            list of in-stock brands or models — every quote request gets a real, scoped
            response from us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SpecPlate tone="dark" className="text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-cold-50">Questions Before You Request a Quote?</h2>
          <p className="mt-2 text-gauge-300">Reach out and we'll walk through what you need.</p>
          <Link
            to="/contact"
            className="mt-5 inline-block border border-orange-500 px-6 py-3 font-display text-lg uppercase tracking-wide text-orange-400 transition-colors hover:bg-cold-50 hover:text-steel-900"
          >
            Contact Us
          </Link>
        </SpecPlate>
      </section>
    </div>
  )
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-hydro-500 pl-4">
      <p className="font-display text-lg uppercase tracking-wide text-steel-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-steel-700">{body}</p>
    </div>
  )
}
