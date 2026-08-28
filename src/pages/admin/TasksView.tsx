import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { getSupabase } from '../../lib/supabase'

interface TaskRow {
  id: string
  title: string
  due_date: string | null
  completed_at: string | null
  deal_id: string | null
  company_id: string | null
  contact_id: string | null
  deals: { title: string } | null
  companies: { name: string } | null
  contacts: { name: string } | null
}

const inputClass = 'w-full border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500'

export default function TasksView() {
  const [tasks, setTasks] = useState<TaskRow[]>([])
  const [showCompleted, setShowCompleted] = useState(false)
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [saving, setSaving] = useState(false)

  async function load() {
    const { data } = await getSupabase()
      .from('tasks')
      .select('*, deals(title), companies(name), contacts(name)')
      .order('due_date', { ascending: true, nullsFirst: false })
    setTasks((data as unknown as TaskRow[]) ?? [])
  }

  useEffect(() => {
    load()
  }, [])

  async function toggleComplete(task: TaskRow) {
    await getSupabase()
      .from('tasks')
      .update({ completed_at: task.completed_at ? null : new Date().toISOString() })
      .eq('id', task.id)
    load()
  }

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    setSaving(true)
    await getSupabase().from('tasks').insert({ title: title.trim(), due_date: dueDate || null })
    setTitle('')
    setDueDate('')
    setSaving(false)
    load()
  }

  const visible = tasks.filter((t) => showCompleted || !t.completed_at)
  const today = new Date(new Date().toDateString())

  function linkedEntity(t: TaskRow) {
    if (t.deal_id && t.deals) return { label: t.deals.title, to: `/admin/deals` }
    if (t.company_id && t.companies) return { label: t.companies.name, to: `/admin/companies/${t.company_id}` }
    if (t.contact_id && t.contacts) return { label: t.contacts.name, to: `/admin/contacts/${t.contact_id}` }
    return null
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-4xl font-bold uppercase text-steel-900">Tasks</h1>
        <label className="flex items-center gap-2 text-sm text-steel-700">
          <input type="checkbox" checked={showCompleted} onChange={(e) => setShowCompleted(e.target.checked)} />
          Show completed
        </label>
      </div>

      <form onSubmit={handleAdd} className="mt-6 flex flex-wrap gap-3 border border-gauge-300 bg-cold-100 p-4">
        <input
          required
          placeholder="New standalone task…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputClass + ' flex-1'}
        />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className={inputClass + ' w-48'} />
        <button
          type="submit"
          disabled={saving}
          className="bg-orange-600 px-4 py-2 font-display text-sm uppercase tracking-wide text-cold-50 hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50"
        >
          Add Task
        </button>
      </form>

      <ul className="mt-6 space-y-2">
        {visible.map((t) => {
          const overdue = !t.completed_at && t.due_date && new Date(t.due_date) < today
          const entity = linkedEntity(t)
          return (
            <li key={t.id} className="flex items-center justify-between gap-3 border border-gauge-300 bg-cold-50 px-4 py-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" checked={!!t.completed_at} onChange={() => toggleComplete(t)} />
                <span className={t.completed_at ? 'text-gauge-500 line-through' : 'text-steel-900'}>{t.title}</span>
                {entity && (
                  <Link to={entity.to} className="font-mono text-xs text-hydro-500 hover:text-hydro-400">
                    {entity.label}
                  </Link>
                )}
              </label>
              {t.due_date && (
                <span className={`font-mono text-xs ${overdue ? 'font-bold text-orange-600' : 'text-gauge-500'}`}>
                  {overdue ? 'Overdue: ' : ''}{t.due_date}
                </span>
              )}
            </li>
          )
        })}
        {visible.length === 0 && <p className="text-sm text-steel-700">No open tasks.</p>}
      </ul>
    </div>
  )
}
