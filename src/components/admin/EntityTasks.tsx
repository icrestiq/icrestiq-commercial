import { useEffect, useState, type FormEvent } from 'react'
import { getSupabase } from '../../lib/supabase'
import type { Task } from '../../lib/adminTypes'

type ParentKey = 'deal_id' | 'company_id' | 'contact_id'

export default function EntityTasks({ parentKey, parentId }: { parentKey: ParentKey; parentId: string }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [saving, setSaving] = useState(false)

  async function load() {
    const { data } = await getSupabase()
      .from('tasks')
      .select('*')
      .eq(parentKey, parentId)
      .order('due_date', { ascending: true, nullsFirst: false })
    setTasks(data ?? [])
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentId])

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    setSaving(true)
    await getSupabase().from('tasks').insert({ [parentKey]: parentId, title: title.trim(), due_date: dueDate || null })
    setTitle('')
    setDueDate('')
    setSaving(false)
    load()
  }

  async function toggleComplete(task: Task) {
    await getSupabase()
      .from('tasks')
      .update({ completed_at: task.completed_at ? null : new Date().toISOString() })
      .eq('id', task.id)
    load()
  }

  return (
    <div>
      <h2 className="font-display text-lg font-bold uppercase text-steel-900">Tasks</h2>
      <form onSubmit={handleAdd} className="mt-3 flex flex-wrap gap-2">
        <label className="sr-only" htmlFor={`task-${parentId}`}>Task title</label>
        <input
          id={`task-${parentId}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Follow up with…"
          className="flex-1 border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500"
        />
        <label className="sr-only" htmlFor={`task-due-${parentId}`}>Due date</label>
        <input
          id={`task-due-${parentId}`}
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500"
        />
        <button
          type="submit"
          disabled={saving}
          className="bg-orange-600 px-4 py-2 font-display text-sm uppercase tracking-wide text-cold-50 hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50"
        >
          Add
        </button>
      </form>
      <ul className="mt-3 space-y-2">
        {tasks.map((t) => {
          const overdue = !t.completed_at && t.due_date && new Date(t.due_date) < new Date(new Date().toDateString())
          return (
            <li key={t.id} className="flex items-center justify-between gap-3 border border-gauge-300 px-3 py-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={!!t.completed_at} onChange={() => toggleComplete(t)} />
                <span className={t.completed_at ? 'text-gauge-500 line-through' : 'text-steel-900'}>{t.title}</span>
              </label>
              {t.due_date && (
                <span className={`font-mono text-xs ${overdue ? 'text-orange-600' : 'text-gauge-500'}`}>
                  {t.due_date}
                </span>
              )}
            </li>
          )
        })}
        {tasks.length === 0 && <p className="text-sm text-steel-700">No tasks yet.</p>}
      </ul>
    </div>
  )
}
