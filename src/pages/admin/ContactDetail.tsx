import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getSupabase } from '../../lib/supabase'
import type { Company, Contact, ContactRole } from '../../lib/adminTypes'
import EntityNotes from '../../components/admin/EntityNotes'
import EntityTasks from '../../components/admin/EntityTasks'

const CONTACT_ROLES: ContactRole[] = ['decision_maker', 'purchasing', 'technical', 'operations', 'other']
const inputClass = 'w-full border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500'

export default function ContactDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [contact, setContact] = useState<Contact | null>(null)
  const [companies, setCompanies] = useState<Company[]>([])
  const [saving, setSaving] = useState(false)

  async function load() {
    if (!id) return
    const [{ data: contactData }, { data: companyData }] = await Promise.all([
      getSupabase().from('contacts').select('*').eq('id', id).single(),
      getSupabase().from('companies').select('*').order('name'),
    ])
    setContact(contactData)
    setCompanies(companyData ?? [])
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function handleSave() {
    if (!contact) return
    setSaving(true)
    await getSupabase()
      .from('contacts')
      .update({
        name: contact.name,
        company_id: contact.company_id,
        role_tag: contact.role_tag,
        email: contact.email,
        phone: contact.phone,
        updated_at: new Date().toISOString(),
      })
      .eq('id', contact.id)
    setSaving(false)
  }

  async function handleDelete() {
    if (!contact || !confirm(`Delete ${contact.name}? This cannot be undone.`)) return
    await getSupabase().from('contacts').delete().eq('id', contact.id)
    navigate('/admin/contacts')
  }

  if (!contact) return <p className="text-steel-700">Loading…</p>

  return (
    <div>
      <Link to="/admin/contacts" className="font-display text-sm uppercase tracking-wide text-hydro-500 hover:text-hydro-400">
        ← All Contacts
      </Link>

      <div className="mt-4 grid gap-4 border border-gauge-300 bg-cold-100 p-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Name</span>
          <input
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className={inputClass + ' mt-1'}
          />
        </label>
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Company</span>
          <select
            value={contact.company_id ?? ''}
            onChange={(e) => setContact({ ...contact, company_id: e.target.value || null })}
            className={inputClass + ' mt-1'}
          >
            <option value="">No company</option>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Role</span>
          <select
            value={contact.role_tag}
            onChange={(e) => setContact({ ...contact, role_tag: e.target.value as ContactRole })}
            className={inputClass + ' mt-1'}
          >
            {CONTACT_ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Email</span>
          <input
            value={contact.email ?? ''}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className={inputClass + ' mt-1'}
          />
        </label>
        <label className="block">
          <span className="font-display text-xs uppercase tracking-widest text-steel-700">Phone</span>
          <input
            value={contact.phone ?? ''}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
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
            Delete Contact
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <EntityNotes parentKey="contact_id" parentId={contact.id} />
        <EntityTasks parentKey="contact_id" parentId={contact.id} />
      </div>
    </div>
  )
}
