import { useEffect, useState, type FormEvent } from 'react'
import { getSupabase } from '../../lib/supabase'
import type { Note } from '../../lib/adminTypes'

type ParentKey = 'deal_id' | 'company_id' | 'contact_id'

export default function EntityNotes({ parentKey, parentId }: { parentKey: ParentKey; parentId: string }) {
  const [notes, setNotes] = useState<Note[]>([])
  const [body, setBody] = useState('')
  const [saving, setSaving] = useState(false)

  async function load() {
    const { data } = await getSupabase()
      .from('notes')
      .select('*')
      .eq(parentKey, parentId)
      .order('created_at', { ascending: false })
    setNotes(data ?? [])
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentId])

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    if (!body.trim()) return
    setSaving(true)
    await getSupabase().from('notes').insert({ [parentKey]: parentId, body: body.trim() })
    setBody('')
    setSaving(false)
    load()
  }

  return (
    <div>
      <h2 className="font-display text-lg font-bold uppercase text-steel-900">Notes</h2>
      <form onSubmit={handleAdd} className="mt-3 flex gap-2">
        <label className="sr-only" htmlFor={`note-${parentId}`}>Add a note</label>
        <textarea
          id={`note-${parentId}`}
          rows={2}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Add a note…"
          className="flex-1 border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500"
        />
        <button
          type="submit"
          disabled={saving}
          className="self-start bg-orange-600 px-4 py-2 font-display text-sm uppercase tracking-wide text-cold-50 hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50"
        >
          Add
        </button>
      </form>
      <ul className="mt-3 space-y-2">
        {notes.map((n) => (
          <li key={n.id} className="border-l-2 border-hydro-500 bg-cold-100 px-3 py-2 text-sm text-steel-700">
            <p>{n.body}</p>
            <p className="mt-1 font-mono text-xs text-gauge-500">{new Date(n.created_at).toLocaleString()}</p>
          </li>
        ))}
        {notes.length === 0 && <p className="text-sm text-steel-700">No notes yet.</p>}
      </ul>
    </div>
  )
}
