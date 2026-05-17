import { useEffect } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'
import './WaitlistPage.css'

export default function WaitlistPage() {
  usePageTitle('Join the FDE Singapore Waitlist | FDE Singapore')

  useEffect(() => {
    // Load Tally embed script once
    if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

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

          {/* ---- Tally embed ---- */}
          <div className="waitlist-form-col">
            <iframe
              data-tally-src="https://tally.so/embed/1ANvlQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Join the FDE Singapore Waitlist"
            />
          </div>

          {/* ---- Sidebar ---- */}
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
