import { useState } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'
import './WaitlistPage.css'

type FormState = 'idle' | 'submitting' | 'success' | 'redirected' | 'error'

export default function WaitlistPage() {
  usePageTitle('Join the FDE Singapore Waitlist | FDE Singapore')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setFormState('submitting')
    setErrorMsg('')

    try {
      // Endpoint is configured via environment variable — not exposed in source
      const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT

      if (!endpoint) {
        // No backend configured — open Tally in a new tab, do not show a false success
        window.open(
          `https://tally.so/r/fde-singapore?email=${encodeURIComponent(email)}`,
          '_blank',
          'noopener,noreferrer'
        )
        setFormState('redirected')
        return
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), role: role.trim() }),
      })

      if (!res.ok) throw new Error('Submission failed')

      setFormState('success')
      setEmail('')
      setRole('')
    } catch {
      setFormState('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
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
            We are building a community for operators, engineers, AI builders, and practitioners
            working at the intersection of business operations and technology.
          </p>
        </div>
      </section>

      <section className="waitlist-form-section">
        <div className="container waitlist-grid">
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
            ) : formState === 'redirected' ? (
              <div className="waitlist-redirected" role="alert">
                <div className="redirected-icon">↗</div>
                <h2>You have been redirected.</h2>
                <p>
                  A sign-up form has opened in a new tab. Please complete it there to join the waitlist.
                  If nothing opened, check your browser's pop-up settings.
                </p>
                <button
                  className="btn btn-ghost"
                  style={{ marginTop: '8px' }}
                  onClick={() => setFormState('idle')}
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="waitlist-form" noValidate>
                <div className="form-group">
                  <label htmlFor="waitlist-email" className="form-label">Email address</label>
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
                    Your role or context <span className="form-optional">(optional)</span>
                  </label>
                  <select
                    id="waitlist-role"
                    className="form-input form-select"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    disabled={formState === 'submitting'}
                  >
                    <option value="">Select one…</option>
                    <option value="operator">SME operator</option>
                    <option value="ai-builder">AI builder</option>
                    <option value="consultant">Consultant</option>
                    <option value="product">Product manager</option>
                    <option value="analyst">Business analyst</option>
                    <option value="automation">Automation specialist</option>
                    <option value="founder">Technical founder</option>
                    <option value="other">Other</option>
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
                  {formState === 'submitting' ? 'Submitting…' : 'Join the Waitlist'}
                </button>

                <p className="form-note">
                  No spam. No marketing lists. We will only contact you with community updates.
                </p>
              </form>
            )}
          </div>

          <div className="waitlist-sidebar">
            <div className="sidebar-block">
              <h3>What to expect</h3>
              <ul className="sidebar-list">
                <li>Community updates as FDE Singapore grows</li>
                <li>Perspectives on Forward Deployed Engineering in practice</li>
                <li>Invitations to events and conversations</li>
                <li>No noise — only signal</li>
              </ul>
            </div>

            <div className="sidebar-block">
              <h3>This is not a product.</h3>
              <p style={{ marginTop: '10px' }}>
                FDE Singapore is a category and community initiative. It is not a consulting pitch.
                Commercial work is handled separately by{' '}
                <a href="https://www.harvestpointconsulting.com" target="_blank" rel="noopener noreferrer">
                  Harvest Point Consulting
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
