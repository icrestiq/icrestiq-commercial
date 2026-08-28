import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { getSupabase } from '../../lib/supabase'
import type { Company, Contact, ContactRole } from '../../lib/adminTypes'

const CONTACT_ROLES: ContactRole[] = ['decision_maker', 'purchasing', 'technical', 'operations', 'other']
const inputClass = 'w-full border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500'

export default function ContactsList() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: '', company_id: '', role_tag: 'other' as ContactRole, email: '', phone: '' })
  const [saving, setSaving] = useState(false)

  async function load() {
    setLoading(true)
    const [{ data: contactData }, { data: companyData }] = await Promise.all([
      getSupabase().from('contacts').select('*').order('name'),
      getSupabase().from('companies').select('*').order('name'),
    ])
    setContacts(contactData ?? [])
    setCompanies(companyData ?? [])
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  function companyName(id: string | null) {
    return companies.find((c) => c.id === id)?.name ?? '—'
  }

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    if (!form.name.trim()) return
    setSaving(true)
    await getSupabase().from('contacts').insert({
      name: form.name.trim(),
      company_id: form.company_id || null,
      role_tag: form.role_tag,
      email: form.email.trim() || null,
      phone: form.phone.trim() || null,
    })
    setForm({ name: '', company_id: '', role_tag: 'other', email: '', phone: '' })
    setSaving(false)
    load()
  }

  return (
    <div>
      <h1 className="font-display text-4xl font-bold uppercase text-steel-900">Contacts</h1>

      <form onSubmit={handleAdd} className="mt-6 grid gap-3 border border-gauge-300 bg-cold-100 p-4 sm:grid-cols-6">
        <input
          required
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        <select value={form.company_id} onChange={(e) => setForm({ ...form, company_id: e.target.value })} className={inputClass}>
          <option value="">No company</option>
          {companies.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <select value={form.role_tag} onChange={(e) => setForm({ ...form, role_tag: e.target.value as ContactRole })} className={inputClass}>
          {CONTACT_ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={saving}
          className="bg-orange-600 px-4 py-2 font-display text-sm uppercase tracking-wide text-cold-50 hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50"
        >
          Add Contact
        </button>
      </form>

      <div className="mt-6 border border-gauge-300">
        {loading ? (
          <p className="p-4 text-sm text-steel-700">Loading…</p>
        ) : contacts.length === 0 ? (
          <p className="p-4 text-sm text-steel-700">No contacts yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-cold-100 font-display uppercase tracking-wide text-steel-700">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} className="border-t border-gauge-300 hover:bg-cold-100">
                  <td className="px-4 py-2">
                    <Link to={`/admin/contacts/${c.id}`} className="text-hydro-500 hover:text-hydro-400">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-steel-700">{companyName(c.company_id)}</td>
                  <td className="px-4 py-2 text-steel-700">{c.role_tag}</td>
                  <td className="px-4 py-2 text-steel-700">{c.email ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
