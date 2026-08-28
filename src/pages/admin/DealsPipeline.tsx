import { useEffect, useState, type FormEvent } from 'react'
import {
  DndContext,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import { getSupabase } from '../../lib/supabase'
import type { Deal, DealStage } from '../../lib/adminTypes'
import DealDetailModal from '../../components/admin/DealDetailModal'

const inputClass = 'w-full border border-gauge-300 bg-cold-50 px-3 py-2 text-sm text-steel-900 focus:border-orange-500'

function DealCard({ deal, onOpen }: { deal: Deal; onOpen: () => void }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: deal.id })
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, zIndex: 10 }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onOpen}
      className={`cursor-grab border border-gauge-300 bg-cold-50 p-3 text-sm shadow-sm active:cursor-grabbing ${isDragging ? 'opacity-50' : ''}`}
    >
      <p className="font-display font-bold text-steel-900">{deal.title}</p>
      {deal.value_estimate != null && (
        <p className="mt-1 font-mono text-xs text-gauge-600">${Number(deal.value_estimate).toLocaleString()}</p>
      )}
    </div>
  )
}

function StageColumn({ stage, deals, onOpenDeal }: { stage: DealStage; deals: Deal[]; onOpenDeal: (id: string) => void }) {
  const { setNodeRef, isOver } = useDroppable({ id: stage.id })

  return (
    <div
      ref={setNodeRef}
      className={`min-w-[240px] flex-1 border border-steel-700 bg-steel-900 p-3 ${isOver ? 'bg-steel-800' : ''}`}
    >
      <p className="font-display text-sm font-bold uppercase tracking-wide text-cold-50">
        {stage.name} <span className="text-gauge-400">({deals.length})</span>
      </p>
      <div className="mt-3 space-y-2">
        {deals.map((d) => (
          <DealCard key={d.id} deal={d} onOpen={() => onOpenDeal(d.id)} />
        ))}
      </div>
    </div>
  )
}

export default function DealsPipeline() {
  const [stages, setStages] = useState<DealStage[]>([])
  const [deals, setDeals] = useState<Deal[]>([])
  const [openDealId, setOpenDealId] = useState<string | null>(null)
  const [form, setForm] = useState({ title: '', value_estimate: '' })
  const [saving, setSaving] = useState(false)
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))

  async function load() {
    const [{ data: stageData }, { data: dealData }] = await Promise.all([
      getSupabase().from('deal_stages').select('*').order('sort_order'),
      getSupabase().from('deals').select('*').order('created_at', { ascending: false }),
    ])
    setStages(stageData ?? [])
    setDeals(dealData ?? [])
  }

  useEffect(() => {
    load()
  }, [])

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    const firstOpenStage = stages.find((s) => s.stage_type === 'open')
    if (!form.title.trim() || !firstOpenStage) return
    setSaving(true)
    await getSupabase().from('deals').insert({
      title: form.title.trim(),
      stage_id: firstOpenStage.id,
      value_estimate: form.value_estimate ? Number(form.value_estimate) : null,
    })
    setForm({ title: '', value_estimate: '' })
    setSaving(false)
    load()
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return
    const dealId = String(active.id)
    const newStageId = String(over.id)
    const deal = deals.find((d) => d.id === dealId)
    if (!deal || deal.stage_id === newStageId) return

    const previousStageId = deal.stage_id
    setDeals((prev) => prev.map((d) => (d.id === dealId ? { ...d, stage_id: newStageId } : d)))

    const { error } = await getSupabase().from('deals').update({ stage_id: newStageId }).eq('id', dealId)
    if (error) {
      setDeals((prev) => prev.map((d) => (d.id === dealId ? { ...d, stage_id: previousStageId } : d)))
    }
  }

  return (
    <div>
      <h1 className="font-display text-4xl font-bold uppercase text-steel-900">Deals</h1>

      <form onSubmit={handleAdd} className="mt-6 flex flex-wrap gap-3 border border-gauge-300 bg-cold-100 p-4">
        <input
          required
          placeholder="Deal title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className={inputClass + ' flex-1'}
        />
        <input
          type="number"
          placeholder="Value estimate"
          value={form.value_estimate}
          onChange={(e) => setForm({ ...form, value_estimate: e.target.value })}
          className={inputClass + ' w-48'}
        />
        <button
          type="submit"
          disabled={saving}
          className="bg-orange-600 px-4 py-2 font-display text-sm uppercase tracking-wide text-cold-50 hover:bg-steel-900 hover:text-orange-400 disabled:opacity-50"
        >
          Add Deal
        </button>
      </form>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
          {stages.map((stage) => (
            <StageColumn
              key={stage.id}
              stage={stage}
              deals={deals.filter((d) => d.stage_id === stage.id)}
              onOpenDeal={setOpenDealId}
            />
          ))}
        </div>
      </DndContext>

      {openDealId && (
        <DealDetailModal
          dealId={openDealId}
          onClose={() => setOpenDealId(null)}
          onChanged={load}
          stages={stages}
        />
      )}
    </div>
  )
}
