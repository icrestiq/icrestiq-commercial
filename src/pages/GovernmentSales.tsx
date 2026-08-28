import { Link } from 'react-router-dom'
import { SpecPlate, SpecRow } from '../components/SpecPlate'

export default function GovernmentSales() {
  return (
    <div>
      <section className="border-b border-steel-700 bg-steel-900 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-400">
              Federal, State &amp; Local
            </p>
            <h1 className="mt-3 font-display text-5xl font-extrabold uppercase text-cold-50">
              Government &amp; Institutional Sales
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gauge-300">
              iCrestiQ Commercial is part of iCrestiQ LLC, a South Carolina small business,
              SAM.gov registered with an active government contracting practice. We're
              extending that same solicitation-ready approach to commercial and industrial
              equipment for federal, state, and local buyers — starting with pressure washing
              systems and expanding into additional equipment categories over time.
            </p>
            <a
              href="/iCrestiQ-Capabilities-Statement.pdf"
              className="mt-6 inline-block border border-orange-500 px-6 py-3 font-display text-lg uppercase tracking-wide text-orange-400 transition-colors hover:bg-cold-50 hover:text-steel-900"
            >
              Download Capabilities Statement (PDF)
            </a>
          </div>
          <SpecPlate tone="dark">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gauge-400">
              Procurement Reference
            </p>
            <SpecRow label="SAM.gov" value="Registered" />
            <SpecRow label="UEI" value="Q2QPX7DEQ1B6" />
            <SpecRow label="CAGE" value="21ZW9" />
            <SpecRow label="Primary NAICS" value="423850" />
            <SpecRow label="Entity" value="iCrestiQ LLC" />
            <p className="mt-3 border-t border-steel-700/40 pt-3 font-mono text-xs text-gauge-400">
              Also registered: 423830 · 423840 · 423710 · 423990
            </p>
          </SpecPlate>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-bold uppercase text-steel-900">
          Who We Support
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <GovCard
            title="Federal Agencies"
            body="Facilities, motor pool, and maintenance operations needing commercial and industrial equipment procured through standard federal channels."
          />
          <GovCard
            title="State & Local Government"
            body="Public works, fleet maintenance, and municipal facilities departments sourcing equipment for ongoing maintenance programs."
          />
          <GovCard
            title="Institutional Buyers"
            body="Schools, correctional facilities, and other institutions with recurring commercial cleaning and maintenance equipment needs."
          />
        </div>
      </section>

      <section className="border-y border-gauge-300/40 bg-cold-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold uppercase text-steel-900">
            How We Work With Government Buyers
          </h2>
          <ol className="mt-6 space-y-4">
            <Step n="01" title="Share requirements">
              Send a solicitation, RFQ, or a description of the equipment and quantities
              needed.
            </Step>
            <Step n="02" title="Scoped response">
              We match equipment to the requirement and return a quote with specs, lead
              time, and pricing.
            </Step>
            <Step n="03" title="Fulfillment">
              We work toward direct or dealer-network fulfillment appropriate to the
              purchasing agency's process.
            </Step>
          </ol>
        </div>
      </section>

      <section className="bg-steel-900 px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold uppercase text-cold-50">
            Have a Solicitation or RFQ?
          </h2>
          <p className="mt-3 text-gauge-300">
            Send the details and we'll respond with a scoped quote.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-block bg-orange-600 px-6 py-3 font-display text-lg uppercase tracking-wide text-cold-50 transition-colors hover:bg-cold-50 hover:text-steel-900"
          >
            Submit Requirements
          </Link>
        </div>
      </section>
    </div>
  )
}

function GovCard({ title, body }: { title: string; body: string }) {
  return (
    <SpecPlate tone="light">
      <h3 className="font-display text-xl font-bold uppercase text-steel-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel-700">{body}</p>
    </SpecPlate>
  )
}

function Step({ n, title, children }: { n: string; title: string; children: string }) {
  return (
    <li className="flex gap-5">
      <span className="font-mono text-2xl font-medium text-orange-600">{n}</span>
      <div>
        <p className="font-display text-xl uppercase tracking-wide text-steel-900">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-steel-700">{children}</p>
      </div>
    </li>
  )
}
