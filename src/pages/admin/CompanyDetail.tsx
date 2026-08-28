import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getSupabase } from '../../lib/supabase'
import type { Company, CompanyType, Contact } from '../../lib/adminTypes'
import EntityNotes from '../../components/admin/EntityNotes'
import EntityTasks from '../../components/admin/EntityTasks'

const COMPANY_TYPES: CompanyType[] = ['prospect', 'customer', 'manufacturer', 'dealer', 'government']
const inputClass = 'w-full border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500'

export default function CompanyDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [company, setCompany] = useState<Company | null>(null)
  const [contacts, setContacts] = useState<Contact[]>([])
  const [saving, setSaving] = useState(false)

  async function load() {
    if (!id) return
    const [{ data: companyData }, { data: contactData }] = await Promise.all([
      getSupabase().from('companies').select('*').eq('id', id).single(),
      getSupabase().from('contacts').select('*').eq('company_id', id).order('name'),
    ])
    setCompany(companyData)
    setContacts(contactData ?? [])
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function handleSave() {
    if (!company) return
    setSaving(true)
    await getSupabase()
      .from('companies')
      .update({
        name: company.name,
        company_type: company.company_type,
        website: company.website,
        address: company.address,
        updated_at: new Date().toISOString(),
      })
      .eq('id', company.id)
    setSaving(false)
  }

  async function handleDelete() {
    if (!company || !confirm(`Delete ${company.name}? This cannot be undone.`)) return
    await getSupabase().from('companies').delete().eq('id', company.id)
    navigate('/admin/companies')
  }

  if (!company) return <p className="text-steel-700">Loading…</p>

  return (
    <div>
      <Link to="/admin/companies" className="font-display text-sm uppercase tracking-wide text-hydro-500 hover:text-hydro-400">
        ← All Companies
      </Link>

      <div className="mt-4 grid gap-4 border border-gauge-300 bg-cold-100 p-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Name</span>
          <input
            value={company.name}
            onChange={(e) => setCompany({ ...company, name: e.target.value })}
            className={inputClass + ' mt-1'}
          />
        </label>
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Type</span>
          <select
            value={company.company_type}
            onChange={(e) => setCompany({ ...company, company_type: e.target.value as CompanyType })}
            className={inputClass + ' mt-1'}
          >
            {COMPANY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Website</span>
          <input
            value={company.website ?? ''}
            onChange={(e) => setCompany({ ...company, website: e.target.value })}
            className={inputClass + ' mt-1'}
          />
        </label>
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Address</span>
          <input
            value={company.address ?? ''}
            onChange={(e) => setCompany({ ...company, address: e.target.value })}
            className={inputClass + ' mt-1'}
          />
        </label>
        <div className="flex gap-3 sm:col-span-2">
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
            Delete Company
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-display text-lg font-bold uppercase text-steel-900">Contacts</h2>
        <ul className="mt-3 space-y-1">
          {contacts.map((c) => (
            <li key={c.id}>
              <Link to={`/admin/contacts/${c.id}`} className="text-hydro-500 hover:text-hydro-400">
                {c.name}
              </Link>
              <span className="ml-2 font-mono text-xs text-gauge-500">{c.role_tag}</span>
            </li>
          ))}
          {contacts.length === 0 && <p className="text-sm text-steel-700">No contacts linked yet.</p>}
        </ul>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <EntityNotes parentKey="company_id" parentId={company.id} />
        <EntityTasks parentKey="company_id" parentId={company.id} />
      </div>
    </div>
  )
}
