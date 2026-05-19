import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import './HomePage.css'

const whatFdesDo = [
  { icon: '🗺️', title: 'Understand the real workflow', desc: 'Work inside real operations — not slide decks — to see how work actually moves.' },
  { icon: '🔄', title: 'Translate business problems', desc: 'Convert operational friction into clear system requirements engineers can act on.' },
  { icon: '🛠️', title: 'Build or configure solutions', desc: 'Deliver working software or configured systems, not just recommendations.' },
  { icon: '👥', title: 'Test with real users', desc: 'Validate with the people doing the work, not in isolated demos.' },
  { icon: '📡', title: 'Adjust from the field', desc: 'Iterate based on operational feedback — close to where decisions are made.' },
  { icon: '🛡️', title: 'Protect human decision points', desc: 'Ensure automation serves people, keeping critical judgement with humans.' },
]

const whoItsFor = [
  'Founder-operators', 'Agency owners', 'Ops-stretched founders', 'SME owners scaling past 10 staff',
]

const ecosystem = [
  {
    name: 'Leak Finder',
    role: '01',
    desc: '4-week diagnostic — We embed in your operations for four weeks. Map where time, money, and decisions are leaking. You get a ranked ops debt report — specific, prioritised, and actionable. Not a strategy deck.',
    current: false,
    href: '/waitlist',
  },
  {
    name: 'Workflow Surgery',
    role: '02',
    desc: 'Project engagement — We fix the highest-impact leak. Build the system, configure the tools, test with your actual team — and hand it over running. Not a prototype. A working system.',
    current: false,
    href: '/waitlist',
  },
  {
    name: 'Ops Intelligence',
    role: '03',
    desc: 'Monthly retainer — Ongoing embedded presence. Continuous deployment, iteration, and operational intelligence. The right engagement for founders who want operations that compound — not just a one-time fix.',
    current: false,
    href: '/waitlist',
  },
]

export default function HomePage() {
  usePageMeta({
    title: 'FDE Singapore | Embedded AI Deployment for Singapore SMEs',
    description: 'Singapore\'s only embedded AI deployment partner built for SMEs. HPC embeds inside your operations to find what\'s leaking and deploy working systems — not recommendations.',
    canonical: 'https://fde.sg/',
  })
  return (
    <>
      {/* ---- HERO ---- */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="section-label">THE FDE ROLE · SINGAPORE</div>
          <h1 className="hero-title">
            Your operations are broken.<br />
            <span className="hero-title-accent">AI won't fix that by itself.</span>
          </h1>
          <p className="hero-subtitle">
            Most Singapore SMEs have bought the tools. None of it is working inside their actual operations. The gap isn't AI capability — it's deployment, context, and someone who stays until it works. That's what a Forward Deployed Engineer does. And it's what HPC does for Singapore SMEs.
          </p>
          <div className="hero-actions">
            <Link to="/waitlist" className="btn btn-primary" id="hero-cta-waitlist">
              Book a Free Process Audit
            </Link>
            <Link to="/waitlist" className="btn btn-ghost" id="hero-cta-learn">
              See how it works →
            </Link>
          </div>
          <div className="hero-context">
            Not a slide deck. Not a recommendation. A working system — built inside your operations, by someone who stays until it runs.
          </div>
        </div>
      </section>

      {/* ---- SECTION 1: What is an FDE ---- */}
      <section id="what-is-fde" className="section-fde-explainer">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Section 01</div>
            <h2>What is a Forward Deployed Engineer?</h2>
            <p>
              An FDE doesn't advise from the outside. They embed inside your operations — learning how work actually moves, where it breaks, and what a real fix looks like. Then they build it. The role sits at the intersection of engineering, operations, and business context. But what makes it different is simpler than that: an FDE stays until the system works.
            </p>
          </div>
          <div className="explainer-grid">
            <div className="explainer-block">
              <h3>They embed in your operations.</h3>
              <p>
                FDEs are not building software in isolation from a spec. They are embedded in operations,
                learning the real process, and building systems that fit the actual workflow — not an
                idealised version of it.
              </p>
            </div>
            <div className="explainer-block">
              <h3>They bridge the gap others skip.</h3>
              <p>
                Most engineering projects fail at the boundary between what the business said and what
                the system does. FDEs own that boundary. They speak both languages fluently.
              </p>
            </div>
            <div className="explainer-block">
              <h3>They build, not just advise.</h3>
              <p>
                Recommendations are not enough. An FDE delivers working implementations — systems
                that can be used immediately by the people who need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SECTION 2: Why this matters now ---- */}
      <section className="section-why-now">
        <div className="container">
          <div className="why-now-inner">
            <div className="why-now-text">
              <div className="section-label">Section 02</div>
              <h2>Why this matters now</h2>
              <p>
                AI tools are becoming more capable. But most organisations still cannot apply them
                inside real workflows. The gap is not model capability.
              </p>
              <p style={{ marginTop: '16px' }}>
                The gap is deployment, context, ownership, and operational fit.
                Someone has to do the work of closing it.
              </p>
              <p style={{ marginTop: '16px' }}>
                That is what the Forward Deployed Engineer role is for.
              </p>
            </div>
            <div className="why-now-points">
              {[
                { label: 'Model capability', status: 'improving', icon: '↑' },
                { label: 'Deployment in real workflows', status: 'lagging', icon: '↓' },
                { label: 'Operational context', status: 'missing', icon: '✕' },
                { label: 'Human decision protection', status: 'overlooked', icon: '!' },
              ].map(pt => (
                <div key={pt.label} className={`why-point why-point--${pt.status}`}>
                  <span className="why-point-icon">{pt.icon}</span>
                  <div>
                    <strong>{pt.label}</strong>
                    <span className="why-point-status">{pt.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- SECTION 3: What FDEs do ---- */}
      <section className="section-what-fdes-do">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Section 03</div>
            <h2>What FDEs actually do</h2>
            <p>Six things that happen when an FDE is inside your operations — not six things a consultant puts in a proposal.</p>
          </div>
          <div className="grid-auto">
            {whatFdesDo.map(item => (
              <div key={item.title} className="card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SECTION 4: Who this is for ---- */}
      <section className="section-who">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Section 04</div>
            <h2>Who this is for</h2>
            <p>
              If you run an SME in Singapore and your operations aren't keeping up with your growth — this is for you. Specifically: you're the founder who is also the de facto ops person. You've bought AI tools. Some have been configured. None are running reliably inside your actual workflows. You've possibly hired a consultant and got recommendations you couldn't implement. HPC exists for that gap.
            </p>
          </div>
          <div className="who-tags">
            {whoItsFor.map(who => (
              <span key={who} className="tag who-tag">{who}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SECTION 5: Ecosystem ---- */}
      <section id="how-it-works" className="section-ecosystem">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Section 05</div>
            <h2>How this works</h2>
            <p>
              HPC embeds inside your operations through three structured engagements. Each one builds on the last.
            </p>
          </div>
          <div className="grid-3">
            {ecosystem.map(item => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`card ecosystem-card ${item.current ? 'ecosystem-card--current' : ''}`}
              >
                {item.current && <span className="ecosystem-badge">You are here</span>}
                <div className="ecosystem-role">{item.role}</div>
                <h3>{item.name}</h3>
                <p style={{ marginTop: '10px', fontSize: '0.88rem' }}>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SECTION 6: Waitlist CTA ---- */}
      <section className="section-waitlist-cta">
        <div className="container">
          <div className="waitlist-cta-inner">
            <div className="section-label">BOOK YOUR AUDIT</div>
            <h2>Find out what's leaking in your operations.</h2>
            <p>
              The Leak Finder is a 4-week embedded diagnostic. At the end of it, you'll know exactly where your operations are bleeding — time, money, and decisions. Most clients find three to five high-impact leaks in the first engagement. Book a free 30-minute process audit to see if it's the right fit.
            </p>
            <Link to="/waitlist" className="btn btn-primary" id="bottom-cta-waitlist">
              Book a Free Process Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
