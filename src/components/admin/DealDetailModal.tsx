import { useEffect, useRef, useState } from 'react'
import { getSupabase } from '../../lib/supabase'
import type { Company, Contact, Deal, DealCompanyRole, DealContactRole, DealStage } from '../../lib/adminTypes'
import EntityNotes from './EntityNotes'
import EntityTasks from './EntityTasks'

const inputClass = 'w-full border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500'

interface LinkedCompany extends Company {
  link_id: string
  role_on_deal: DealCompanyRole
}
interface LinkedContact extends Contact {
  link_id: string
  role_on_deal: DealContactRole
}

export default function DealDetailModal({
  dealId,
  stages,
  onClose,
  onChanged,
}: {
  dealId: string
  stages: DealStage[]
  onClose: () => void
  onChanged: () => void
}) {
  const [deal, setDeal] = useState<Deal | null>(null)
  const [linkedCompanies, setLinkedCompanies] = useState<LinkedCompany[]>([])
  const [linkedContacts, setLinkedContacts] = useState<LinkedContact[]>([])
  const [allCompanies, setAllCompanies] = useState<Company[]>([])
  const [allContacts, setAllContacts] = useState<Contact[]>([])
  const [addCompanyId, setAddCompanyId] = useState('')
  const [addContactId, setAddContactId] = useState('')
  const [saving, setSaving] = useState(false)

  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<Element | null>(null)

  async function load() {
    const supabase = getSupabase()
    const [{ data: dealData }, { data: dc }, { data: dcon }, { data: companies }, { data: contacts }] = await Promise.all([
      supabase.from('deals').select('*').eq('id', dealId).single(),
      supabase.from('deal_companies').select('id, role_on_deal, companies(*)').eq('deal_id', dealId),
      supabase.from('deal_contacts').select('id, role_on_deal, contacts(*)').eq('deal_id', dealId),
      supabase.from('companies').select('*').order('name'),
      supabase.from('contacts').select('*').order('name'),
    ])
    setDeal(dealData)
    setLinkedCompanies(
      (dc ?? []).map((row: any) => ({ ...row.companies, link_id: row.id, role_on_deal: row.role_on_deal })),
    )
    setLinkedContacts(
      (dcon ?? []).map((row: any) => ({ ...row.contacts, link_id: row.id, role_on_deal: row.role_on_deal })),
    )
    setAllCompanies(companies ?? [])
    setAllContacts(contacts ?? [])
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealId])

  // Dialog semantics: remember what had focus, move focus into the dialog,
  // close on Escape, trap Tab within the dialog, restore focus on close —
  // matches the accessibility bar set elsewhere on this site.
  useEffect(() => {
    previouslyFocused.current = document.activeElement
    closeButtonRef.current?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused.current instanceof HTMLElement) previouslyFocused.current.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSave() {
    if (!deal) return
    setSaving(true)
    await getSupabase()
      .from('deals')
      .update({
        title: deal.title,
        value_estimate: deal.value_estimate,
        stage_id: deal.stage_id,
        updated_at: new Date().toISOString(),
      })
      .eq('id', deal.id)
    setSaving(false)
    onChanged()
  }

  async function handleDelete() {
    if (!deal || !confirm(`Delete "${deal.title}"? This cannot be undone.`)) return
    await getSupabase().from('deals').delete().eq('id', deal.id)
    onChanged()
    onClose()
  }

  async function addCompany() {
    if (!addCompanyId) return
    await getSupabase().from('deal_companies').insert({ deal_id: dealId, company_id: addCompanyId, role_on_deal: 'customer' })
    setAddCompanyId('')
    load()
  }

  async function removeCompany(linkId: string) {
    await getSupabase().from('deal_companies').delete().eq('id', linkId)
    load()
  }

  async function addContact() {
    if (!addContactId) return
    await getSupabase().from('deal_contacts').insert({ deal_id: dealId, contact_id: addContactId, role_on_deal: 'other' })
    setAddContactId('')
    load()
  }

  async function removeContact(linkId: string) {
    await getSupabase().from('deal_contacts').delete().eq('id', linkId)
    load()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-steel-950/70 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={deal ? `Deal: ${deal.title}` : 'Deal'}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-steel-700 bg-cold-50 p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl font-bold uppercase text-steel-900">Deal Details</h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="border border-gauge-300 px-3 py-1 font-display text-sm uppercase text-steel-700 hover:border-steel-900"
          >
            Close
          </button>
        </div>

        {!deal ? (
          <p className="mt-4 text-steel-700">Loading…</p>
        ) : (
          <>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="font-display text-xs uppercase tracking-widest text-steel-700">Title</span>
                <input value={deal.title} onChange={(e) => setDeal({ ...deal, title: e.target.value })} className={inputClass + ' mt-1'} />
              </label>
              <label className="block">
                <span className="font-display text-xs uppercase tracking-widest text-steel-700">Value Estimate</span>
                <input
                  type="number"
                  value={deal.value_estimate ?? ''}
                  onChange={(e) => setDeal({ ...deal, value_estimate: e.target.value ? Number(e.target.value) : null })}
                  className={inputClass + ' mt-1'}
                />
              </label>
              <label className="block">
                <span className="font-display text-xs uppercase tracking-widest text-steel-700">Stage</span>
                <select value={deal.stage_id} onChange={(e) => setDeal({ ...deal, stage_id: e.target.value })} className={inputClass + ' mt-1'}>
                  {stages.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-3 flex gap-3">
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="bg-orange-600 px-5 py-2 font-display text-sm uppercase tracking-wide text-cold-50 hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50"
              >
                {saving ? 'Saving…' : 'Save'}
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="border border-gauge-500 px-5 py-2 font-display text-sm uppercase tracking-wide text-steel-700 hover:border-orange-600 hover:text-orange-600"
              >
                Delete Deal
              </button>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-sm font-bold uppercase text-steel-900">Linked Companies</h3>
                <ul className="mt-2 space-y-1">
                  {linkedCompanies.map((c) => (
                    <li key={c.link_id} className="flex items-center justify-between text-sm">
                      <span>{c.name} <span className="font-mono text-xs text-gauge-500">({c.role_on_deal})</span></span>
                      <button type="button" onClick={() => removeCompany(c.link_id)} className="text-xs text-orange-600 hover:underline">
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex gap-2">
                  <select value={addCompanyId} onChange={(e) => setAddCompanyId(e.target.value)} className={inputClass}>
                    <option value="">Add a company…</option>
                    {allCompanies.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <button type="button" onClick={addCompany} className="bg-steel-900 px-3 py-2 font-display text-xs uppercase text-cold-50">
                    Add
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-display text-sm font-bold uppercase text-steel-900">Linked Contacts</h3>
                <ul className="mt-2 space-y-1">
                  {linkedContacts.map((c) => (
                    <li key={c.link_id} className="flex items-center justify-between text-sm">
                      <span>{c.name} <span className="font-mono text-xs text-gauge-500">({c.role_on_deal})</span></span>
                      <button type="button" onClick={() => removeContact(c.link_id)} className="text-xs text-orange-600 hover:underline">
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex gap-2">
                  <select value={addContactId} onChange={(e) => setAddContactId(e.target.value)} className={inputClass}>
                    <option value="">Add a contact…</option>
                    {allContacts.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                  <button type="button" onClick={addContact} className="bg-steel-900 px-3 py-2 font-display text-xs uppercase text-cold-50">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <EntityNotes parentKey="deal_id" parentId={deal.id} />
              <EntityTasks parentKey="deal_id" parentId={deal.id} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
