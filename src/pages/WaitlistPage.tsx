import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import './WaitlistPage.css'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const roleOptions = [
  { value: 'operator',    label: 'SME operator' },
  { value: 'ai-builder',  label: 'AI builder' },
  { value: 'consultant',  label: 'Consultant' },
  { value: 'product',     label: 'Product manager' },
  { value: 'analyst',     label: 'Business analyst' },
  { value: 'automation',  label: 'Automation specialist' },
  { value: 'founder',     label: 'Technical founder' },
  { value: 'other',       label: 'Other' },
]

export default function WaitlistPage() {
  usePageMeta({
    title: 'Join the FDE Singapore Waitlist | FDE Singapore',
    description: 'Join the FDE Singapore community for operators, engineers, AI builders, consultants, and technologists working close to real business workflows.',
    canonical: 'https://fde.sg/waitlist',
  })

  const [email, setEmail]       = useState('')
  const [role, setRole]         = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setFormState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), role }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error ?? 'Submission failed')
      }

      setFormState('success')
      setEmail('')
      setRole('')
    } catch (err: unknown) {
      setFormState('error')
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <>
      <section className="waitlist-hero">
        <div className="waitlist-glow" aria-hidden="true" />
        <div className="container waitlist-hero-inner">
          <div className="section-label">Join the Community</div>
          <h1>Join the FDE Singapore Waitlist.</h1>
          <p className="waitlist-hero-sub">
            Book a free 30-minute process audit. We'll look at where your operations are leaking — time, money, and decisions — and whether Leak Finder is the right fit.
          </p>
        </div>
      </section>

      <section className="waitlist-form-section">
        <div className="container waitlist-grid">

          {/* ---- Form ---- */}
          <div className="waitlist-form-col">
            {formState === 'success' ? (
              <div className="waitlist-success" role="alert">
                <div className="success-icon">✓</div>
                <h2>You are on the list.</h2>
                <p>
                  We will be in touch as the FDE Singapore community takes shape.
                  No spam — just relevant updates when there is something worth sharing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="waitlist-form" noValidate>
                <div className="form-group">
                  <label htmlFor="waitlist-email" className="form-label">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={formState === 'submitting'}
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="waitlist-role" className="form-label">
                    Your biggest operational headache right now{' '}
                    <span className="form-optional">(optional)</span>
                  </label>
                  <select
                    id="waitlist-role"
                    className="form-input form-select"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    disabled={formState === 'submitting'}
                  >
                    <option value="">Select one…</option>
                    {roleOptions.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>

                {formState === 'error' && (
                  <div className="form-error" role="alert">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary waitlist-submit"
                  disabled={formState === 'submitting' || !email.trim()}
                  id="waitlist-submit-btn"
                >
                  {formState === 'submitting' ? 'Submitting…' : 'Book My Free Process Audit'}
                </button>

                <p className="form-note">
                  No pitch. No obligation. A straight conversation about whether this is the right fit for your business.
                </p>
              </form>
            )}
          </div>

          {/* ---- Sidebar ---- */}
          <div className="waitlist-sidebar">
            <div className="sidebar-block">
              <h3>What happens next</h3>
              <ul className="sidebar-list">
                <li>30-minute call to map your biggest operational leak</li>
                <li>Honest assessment of whether Leak Finder fits your situation</li>
                <li>If it's a fit — a scoped proposal within 48 hours</li>
                <li>No hard sell. If it's not the right time, we'll tell you.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
