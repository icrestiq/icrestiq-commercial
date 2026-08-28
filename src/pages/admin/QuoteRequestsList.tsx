import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSupabase } from '../../lib/supabase'
import type { QuoteRequest, QuoteRequestStatus } from '../../lib/adminTypes'

const inputClass = 'w-full border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500'

const STATUS_LABEL: Record<QuoteRequestStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  converted: 'Converted',
  archived: 'Archived',
}

const STATUS_TONE: Record<QuoteRequestStatus, string> = {
  new: 'bg-orange-600 text-cold-50',
  contacted: 'bg-hydro-500 text-cold-50',
  converted: 'bg-steel-900 text-orange-400',
  archived: 'border border-gauge-400 text-gauge-600',
}

export default function QuoteRequestsList() {
  const [requests, setRequests] = useState<QuoteRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<QuoteRequestStatus | 'all'>('all')
  const [openId, setOpenId] = useState<string | null>(null)
  const [converting, setConverting] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const { data } = await getSupabase().from('quote_requests').select('*').order('created_at', { ascending: false })
    setRequests(data ?? [])
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function setStatus(id: string, status: QuoteRequestStatus) {
    await getSupabase().from('quote_requests').update({ status }).eq('id', id)
    load()
  }

  // Promotes a submission into the CRM in one step: finds-or-creates the
  // company (case-insensitive name match) and contact (case-insensitive
  // email match under that company), opens a deal in the first "open" stage
  // linking both, and drops a note on the deal with everything from the
  // submission that doesn't have its own CRM field (quantity/timeline/
  // details/phone) so that context isn't lost once it leaves this list.
  async function convertToCrm(request: QuoteRequest) {
    setConverting(request.id)
    const supabase = getSupabase()

    let companyId: string | null = null
    if (request.company) {
      const { data: existingCompany } = await supabase
        .from('companies')
        .select('id')
        .ilike('name', request.company)
        .limit(1)
        .maybeSingle()
      if (existingCompany) {
        companyId = existingCompany.id
      } else {
        const companyType = request.buyer_type === 'Government / Institutional' ? 'government' : 'prospect'
        const { data: newCompany } = await supabase
          .from('companies')
          .insert({ name: request.company, company_type: companyType })
          .select('id')
          .single()
        companyId = newCompany?.id ?? null
      }
    }

    let contactId: string | null = null
    const { data: existingContact } = await supabase
      .from('contacts')
      .select('id')
      .ilike('email', request.email)
      .limit(1)
      .maybeSingle()
    if (existingContact) {
      contactId = existingContact.id
    } else {
      const { data: newContact } = await supabase
        .from('contacts')
        .insert({
          company_id: companyId,
          name: request.name,
          role_tag: 'other',
          email: request.email,
          phone: request.phone,
        })
        .select('id')
        .single()
      contactId = newContact?.id ?? null
    }

    const { data: openStage } = await supabase
      .from('deal_stages')
      .select('id')
      .eq('stage_type', 'open')
      .order('sort_order')
      .limit(1)
      .maybeSingle()

    let dealId: string | null = null
    if (openStage) {
      const dealTitle = `${request.equipment ?? 'Quote Request'} — ${request.company || request.name}`
      const { data: newDeal } = await supabase
        .from('deals')
        .insert({ title: dealTitle, stage_id: openStage.id })
        .select('id')
        .single()
      dealId = newDeal?.id ?? null

      if (dealId) {
        if (companyId) {
          await supabase.from('deal_companies').insert({ deal_id: dealId, company_id: companyId, role_on_deal: 'customer' })
        }
        if (contactId) {
          await supabase.from('deal_contacts').insert({ deal_id: dealId, contact_id: contactId, role_on_deal: 'primary_contact' })
        }

        const noteLines = [
          `Submitted via Request a Quote (${request.buyer_type}).`,
          request.phone ? `Phone: ${request.phone}` : null,
          request.quantity ? `Quantity / volume: ${request.quantity}` : null,
          request.timeline ? `Timeline: ${request.timeline}` : null,
          request.details ? `Details: ${request.details}` : null,
        ].filter(Boolean)
        await supabase.from('notes').insert({ deal_id: dealId, body: noteLines.join('\n') })
      }
    }

    await supabase
      .from('quote_requests')
      .update({
        status: 'converted',
        converted_company_id: companyId,
        converted_contact_id: contactId,
        converted_deal_id: dealId,
      })
      .eq('id', request.id)

    setConverting(null)
    load()
  }

  const visible = filter === 'all' ? requests : requests.filter((r) => r.status === filter)
  const newCount = requests.filter((r) => r.status === 'new').length

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold uppercase text-steel-900">Quote Requests</h1>
          {newCount > 0 && (
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-orange-600">
              {newCount} new, unreviewed
            </p>
          )}
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as QuoteRequestStatus | 'all')}
          className={inputClass + ' w-auto'}
        >
          <option value="all">All Statuses</option>
          {(Object.keys(STATUS_LABEL) as QuoteRequestStatus[]).map((s) => (
            <option key={s} value={s}>{STATUS_LABEL[s]}</option>
          ))}
        </select>
      </div>

      <div className="mt-6 border border-gauge-300">
        {loading ? (
          <p className="p-4 text-sm text-steel-700">Loading…</p>
        ) : visible.length === 0 ? (
          <p className="p-4 text-sm text-steel-700">No quote requests yet.</p>
        ) : (
          <ul>
            {visible.map((r) => (
              <li key={r.id} className="border-t border-gauge-300 first:border-t-0">
                <button
                  type="button"
                  onClick={() => setOpenId(openId === r.id ? null : r.id)}
                  className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-3 text-left hover:bg-cold-100"
                >
                  <span className="flex flex-wrap items-center gap-3">
                    <span className="font-display font-bold text-steel-900">{r.name}</span>
                    {r.company && <span className="text-sm text-steel-700">{r.company}</span>}
                    <span className="font-mono text-xs text-gauge-500">{r.equipment ?? '—'}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 font-display text-xs uppercase tracking-wide ${STATUS_TONE[r.status]}`}>
                      {STATUS_LABEL[r.status]}
                    </span>
                    <span className="font-mono text-xs text-gauge-500">
                      {new Date(r.created_at).toLocaleDateString()}
                    </span>
                  </span>
                </button>

                {openId === r.id && (
                  <div className="border-t border-gauge-300 bg-cold-100 px-4 py-4">
                    <div className="grid gap-2 text-sm text-steel-700 sm:grid-cols-2">
                      <p><span className="font-display uppercase tracking-wide text-steel-900">Email:</span> <a href={`mailto:${r.email}`} className="text-hydro-500 hover:text-hydro-400">{r.email}</a></p>
                      <p><span className="font-display uppercase tracking-wide text-steel-900">Phone:</span> {r.phone || '—'}</p>
                      <p><span className="font-display uppercase tracking-wide text-steel-900">Buyer Type:</span> {r.buyer_type}</p>
                      <p><span className="font-display uppercase tracking-wide text-steel-900">Quantity:</span> {r.quantity || '—'}</p>
                      <p><span className="font-display uppercase tracking-wide text-steel-900">Timeline:</span> {r.timeline || '—'}</p>
                    </div>
                    {r.details && (
                      <p className="mt-3 text-sm text-steel-700">
                        <span className="font-display uppercase tracking-wide text-steel-900">Details:</span> {r.details}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      {r.status === 'converted' ? (
                        <span className="text-sm text-steel-700">
                          Converted —{' '}
                          {r.converted_company_id && (
                            <Link to={`/admin/companies/${r.converted_company_id}`} className="text-hydro-500 hover:text-hydro-400">
                              company
                            </Link>
                          )}
                          {r.converted_company_id && r.converted_contact_id && ', '}
                          {r.converted_contact_id && (
                            <Link to={`/admin/contacts/${r.converted_contact_id}`} className="text-hydro-500 hover:text-hydro-400">
                              contact
                            </Link>
                          )}
                          {(r.converted_company_id || r.converted_contact_id) && r.converted_deal_id && ', '}
                          {r.converted_deal_id && (
                            <Link to="/admin/deals" className="text-hydro-500 hover:text-hydro-400">
                              deal on pipeline
                            </Link>
                          )}
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => convertToCrm(r)}
                          disabled={converting === r.id}
                          className="bg-orange-600 px-4 py-2 font-display text-sm uppercase tracking-wide text-cold-50 hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50"
                        >
                          {converting === r.id ? 'Converting…' : 'Convert to Company / Contact / Deal'}
                        </button>
                      )}
                      {r.status === 'new' && (
                        <button
                          type="button"
                          onClick={() => setStatus(r.id, 'contacted')}
                          className="border border-gauge-500 px-4 py-2 font-display text-sm uppercase tracking-wide text-steel-700 hover:border-steel-900"
                        >
                          Mark Contacted
                        </button>
                      )}
                      {r.status !== 'archived' && (
                        <button
                          type="button"
                          onClick={() => setStatus(r.id, 'archived')}
                          className="border border-gauge-500 px-4 py-2 font-display text-sm uppercase tracking-wide text-steel-700 hover:border-orange-600 hover:text-orange-600"
                        >
                          Archive
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
