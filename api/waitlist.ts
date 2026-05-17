import type { VercelRequest, VercelResponse } from '@vercel/node'

const NOTIFY_TO = 'clifford.tan@harvestpointconsulting.com'

// From address: must be a domain verified in your Resend account.
// Use 'onboarding@resend.dev' for testing until fde.sg is verified in Resend.
// Once fde.sg is verified, change to e.g. 'noreply@fde.sg'
const FROM_ADDRESS = 'FDE Singapore <onboarding@resend.dev>'

function buildEmailHtml(email: string, role: string): string {
  return `
    <div style="font-family:sans-serif;max-width:520px;padding:32px;background:#f9fafb;border-radius:8px;">
      <h2 style="margin:0 0 16px;color:#111827;">New FDE Singapore Waitlist Signup</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;color:#6b7280;font-size:14px;width:100px;">Email</td>
          <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">${email}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280;font-size:14px;">Role</td>
          <td style="padding:8px 0;color:#111827;font-size:14px;">${role || '(not provided)'}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280;font-size:14px;">Source</td>
          <td style="padding:8px 0;color:#111827;font-size:14px;">fde.sg/waitlist</td>
        </tr>
      </table>
      <p style="margin:24px 0 0;font-size:12px;color:#9ca3af;">
        Sent by the FDE Singapore waitlist form.
      </p>
    </div>
  `
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // CORS header for same-origin fetch from the SPA
  res.setHeader('Access-Control-Allow-Origin', 'https://fde.sg')

  const { email, role } = req.body ?? {}

  // Basic validation
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured')
    return res.status(500).json({ error: 'Server configuration error.' })
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [NOTIFY_TO],
        reply_to: email.trim(),
        subject: `New waitlist signup: ${email.trim()}`,
        html: buildEmailHtml(email.trim(), (role ?? '').trim()),
      }),
    })

    if (!resendRes.ok) {
      const detail = await resendRes.text()
      console.error('Resend API error:', detail)
      return res.status(502).json({ error: 'Failed to send notification.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Waitlist handler error:', err)
    return res.status(500).json({ error: 'Unexpected server error.' })
  }
}
