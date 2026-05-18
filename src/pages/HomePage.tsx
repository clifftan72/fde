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
  'SME operators', 'AI builders', 'Consultants', 'Product managers',
  'Business analysts', 'Automation specialists', 'Technical founders',
  'People working between business and technology',
]

const ecosystem = [
  {
    name: 'FDE Singapore',
    role: 'Category & Community',
    desc: 'Explores the Forward Deployed Engineer role. Market education, community, and the waitlist you\'re on now.',
    current: true,
    href: '/',
  },
  {
    name: 'Make Work Flow™',
    role: 'Methodology & Thinking',
    desc: 'The operational methodology behind workflow-first system design. Principles, patterns, and field notes.',
    current: false,
    href: 'https://www.makeworkflow.dev',
  },
  {
    name: 'Harvest Point Consulting',
    role: 'Commercial Practice',
    desc: 'Where FDE methodology meets client engagements. Consulting and implementation for Singapore businesses.',
    current: false,
    href: 'https://www.harvestpointconsulting.com',
  },
]

export default function HomePage() {
  usePageMeta({
    title: 'FDE Singapore | Forward Deployed Engineers for the AI Era',
    description: 'FDE Singapore is a community exploring the Forward Deployed Engineer role for the AI era, focused on real workflows, operations, AI deployment, and usable systems.',
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
            The Forward Deployed Engineer<br />
            <span className="hero-title-accent">for the AI era.</span>
          </h1>
          <p className="hero-subtitle">
            FDE Singapore explores how operators, engineers, and AI builders work close to real business
            workflows to turn messy operations into usable systems.
          </p>
          <div className="hero-actions">
            <Link to="/waitlist" className="btn btn-primary" id="hero-cta-waitlist">
              Join the FDE Singapore Waitlist
            </Link>
            <Link to="/what-is-fde" className="btn btn-ghost" id="hero-cta-learn">
              Learn what FDEs actually do
            </Link>
          </div>
          <div className="hero-context">
            Not generic software development. Not traditional consulting. Not AI hype.
            Embedded, operational, workflow-aware implementation.
          </div>
        </div>
      </section>

      {/* ---- SECTION 1: What is an FDE ---- */}
      <section className="section-fde-explainer">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Section 01</div>
            <h2>What is a Forward Deployed Engineer?</h2>
            <p>
              An FDE works close to the user, the workflow, and the actual business problem.
              The role sits at the intersection of engineering, operations, product, and consulting —
              but it is none of those things alone.
            </p>
          </div>
          <div className="explainer-grid">
            <div className="explainer-block">
              <h3>They go where the work happens.</h3>
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
            <p>Six core activities that define the Forward Deployed Engineer's work.</p>
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
            <h2>Who this community is for</h2>
            <p>
              FDE Singapore is a category and community site. It is for anyone working at the
              boundary between business operations and technology.
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
      <section className="section-ecosystem">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Section 05</div>
            <h2>How this connects</h2>
            <p>
              FDE Singapore is part of a deliberate brand architecture — three distinct roles,
              not one blurred brand.
            </p>
          </div>
          <div className="grid-3">
            {ecosystem.map(item => (
              <a
                key={item.name}
                href={item.href}
                target={item.current ? undefined : '_blank'}
                rel={item.current ? undefined : 'noopener noreferrer'}
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
            <div className="section-label">Join the Community</div>
            <h2>Be part of what comes next.</h2>
            <p>
              FDE Singapore is building a community of practitioners, operators, and builders
              who work at the frontier of deployed AI and operational systems.
              Join the waitlist to follow what we are learning.
            </p>
            <Link to="/waitlist" className="btn btn-primary" id="bottom-cta-waitlist">
              Join the FDE Singapore Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
