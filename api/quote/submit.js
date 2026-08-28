// api/quote/submit.js
// Server-side gateway for the public Request a Quote form. Replaces a
// direct client-side insert against `quote_requests` (which only a public
// RLS policy protected — anyone could `curl` Supabase's REST API directly
// with the public anon key and write spam rows, bypassing the site's UI
// entirely). This function is now the *only* writer, using the
// service-role key, so `quote_requests` no longer needs — and no longer
// has, once the matching Supabase migration lands — a public INSERT
// policy at all.
//
// BOT PROTECTION, modeled directly on icrestiq-govcon-lab's real,
// battle-tested implementation (api/digest/subscribe.js there):
//   1. Honeypot field (`website`) — real visitors never see or fill this
//      field. Any value present means a bot filled every field on the
//      form, so we silently return success without inserting a row.
//      Silent (not an error) so the bot doesn't learn to adapt.
//   2. Minimum fill time (`renderedAt`) — the client sends the timestamp
//      the form first rendered. Scripted submissions that fire in well
//      under a second get the same silent fake-success.
//   3. Cloudflare Turnstile (`turnstileToken`) — the real challenge, unlike
//      the two heuristics above which a scripted bot can trivially clear.
//      A missing/failed token is a real error (not a silent fake-success)
//      so the widget can prompt the visitor to retry. Fails OPEN (skips
//      verification, with a warning) only while TURNSTILE_SECRET_KEY isn't
//      configured yet, so this endpoint keeps accepting real submissions
//      during rollout instead of going dark the moment it deploys — same
//      transitional pattern GovCon Lab used.

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY
const MIN_FILL_TIME_MS = 1500
const BUYER_TYPES = ['Commercial / B2B', 'Government / Institutional']

async function verifyTurnstile(token, remoteIp) {
  if (!token) return false
  const params = new URLSearchParams()
  params.append('secret', TURNSTILE_SECRET_KEY)
  params.append('response', token)
  if (remoteIp) params.append('remoteip', remoteIp)

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: params,
    })
    const data = await res.json()
    return data.success === true
  } catch (err) {
    console.error('Turnstile verification error:', err)
    return false
  }
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const body = req.body || {}

    // --- Bot check 1: honeypot -------------------------------------
    const honeypot = (body.website || '').trim()
    if (honeypot) {
      return res.status(200).json({ status: 'received' })
    }

    // --- Bot check 2: minimum fill time ------------------------------
    const renderedAt = Number(body.renderedAt)
    if (renderedAt && Date.now() - renderedAt < MIN_FILL_TIME_MS) {
      return res.status(200).json({ status: 'received' })
    }

    // --- Bot check 3: Turnstile challenge -----------------------------
    if (TURNSTILE_SECRET_KEY) {
      const remoteIp = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
      const turnstileOk = await verifyTurnstile(body.turnstileToken, remoteIp)
      if (!turnstileOk) {
        return res.status(400).json({ error: 'Please complete the verification challenge and try again.' })
      }
    } else {
      console.warn('TURNSTILE_SECRET_KEY not configured — skipping Turnstile verification for quote submissions')
    }

    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const buyerType = body.buyerType
    const details = (body.details || '').trim()

    if (!name) {
      return res.status(400).json({ error: 'Full name is required.' })
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Enter a valid email address.' })
    }
    if (!BUYER_TYPES.includes(buyerType)) {
      return res.status(400).json({ error: 'Invalid buyer type.' })
    }
    if (!details) {
      return res.status(400).json({ error: 'Project details are required.' })
    }

    const { error } = await supabase.from('quote_requests').insert({
      name,
      company: (body.company || '').trim() || null,
      email,
      phone: (body.phone || '').trim() || null,
      buyer_type: buyerType,
      equipment: body.equipment || null,
      quantity: (body.quantity || '').trim() || null,
      timeline: (body.timeline || '').trim() || null,
      details,
    })
    if (error) throw error

    return res.status(200).json({ status: 'received' })
  } catch (err) {
    console.error('quote submit error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
