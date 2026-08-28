import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { getSupabase } from '../../lib/supabase'
import type { Company, CompanyType } from '../../lib/adminTypes'

const COMPANY_TYPES: CompanyType[] = ['prospect', 'customer', 'manufacturer', 'dealer', 'government']

const inputClass = 'w-full border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500'

export default function CompaniesList() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<CompanyType | 'all'>('all')
  const [form, setForm] = useState({ name: '', company_type: 'prospect' as CompanyType, website: '', address: '' })
  const [saving, setSaving] = useState(false)

  async function load() {
    setLoading(true)
    const { data } = await getSupabase().from('companies').select('*').order('name')
    setCompanies(data ?? [])
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    if (!form.name.trim()) return
    setSaving(true)
    await getSupabase().from('companies').insert({
      name: form.name.trim(),
      company_type: form.company_type,
      website: form.website.trim() || null,
      address: form.address.trim() || null,
    })
    setForm({ name: '', company_type: 'prospect', website: '', address: '' })
    setSaving(false)
    load()
  }

  const visible = filter === 'all' ? companies : companies.filter((c) => c.company_type === filter)

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-4xl font-bold uppercase text-steel-900">Companies</h1>
        <select value={filter} onChange={(e) => setFilter(e.target.value as CompanyType | 'all')} className={inputClass + ' w-auto'}>
          <option value="all">All Types</option>
          {COMPANY_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <form onSubmit={handleAdd} className="mt-6 grid gap-3 border border-gauge-300 bg-cold-100 p-4 sm:grid-cols-5">
        <input
          required
          placeholder="Company name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        <select
          value={form.company_type}
          onChange={(e) => setForm({ ...form, company_type: e.target.value as CompanyType })}
          className={inputClass}
        >
          {COMPANY_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <input
          placeholder="Website"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          className={inputClass}
        />
        <input
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={saving}
          className="bg-orange-600 px-4 py-2 font-display text-sm uppercase tracking-wide text-cold-50 transition-colors hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50"
        >
          Add Company
        </button>
      </form>

      <div className="mt-6 border border-gauge-300">
        {loading ? (
          <p className="p-4 text-sm text-steel-700">Loading…</p>
        ) : visible.length === 0 ? (
          <p className="p-4 text-sm text-steel-700">No companies yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-cold-100 font-display uppercase tracking-wide text-steel-700">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Website</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((c) => (
                <tr key={c.id} className="border-t border-gauge-300 hover:bg-cold-100">
                  <td className="px-4 py-2">
                    <Link to={`/admin/companies/${c.id}`} className="text-hydro-500 hover:text-hydro-400">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-steel-700">{c.company_type}</td>
                  <td className="px-4 py-2 text-steel-700">{c.website ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
