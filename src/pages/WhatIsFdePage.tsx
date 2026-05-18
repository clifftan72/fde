import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import './WhatIsFdePage.css'

const comparisons = [
  { label: 'Generic software development', contrast: 'Builds to spec without owning operational context.' },
  { label: 'Traditional consulting', contrast: 'Recommends without delivering working systems.' },
  { label: 'AI automation', contrast: 'Deploys tools without embedding them in real workflows.' },
  { label: 'Forward Deployed Engineer', contrast: 'Builds inside real operations. Owns the workflow gap. Delivers usable systems.', highlight: true },
]

const principles = [
  { n: '01', title: 'Workflow first', body: 'You cannot improve a workflow you do not understand. FDEs go into the operation before writing a single line of code or configuring a single tool.' },
  { n: '02', title: 'Context is the capability', body: 'Model performance is not the bottleneck. Understanding the actual business problem, the edge cases, the people, and the process — that is the real constraint.' },
  { n: '03', title: 'Build for real users', body: 'A system that works in a demo but not in production is not a system. FDEs test with the people doing the actual work, in the actual environment.' },
  { n: '04', title: 'Human decisions stay human', body: 'Automation augments judgement; it does not replace it. FDEs identify and protect the decision points that require human oversight and accountability.' },
]

export default function WhatIsFdePage() {
  usePageTitle('What Is a Forward Deployed Engineer? | FDE Singapore')
  return (
    <>
      <section className="wif-hero">
        <div className="wif-hero-glow" aria-hidden="true" />
        <div className="container wif-hero-inner">
          <div className="section-label">What is FDE?</div>
          <h1>The Forward Deployed Engineer, explained.</h1>
          <p className="wif-hero-sub">
            The role that sits between engineering, operations, product, and consulting —
            and is none of those things alone.
          </p>
        </div>
      </section>

      {/* ---- Definition ---- */}
      <section className="wif-definition">
        <div className="container">
          <div className="definition-block">
            <p className="definition-text">
              A <strong>Forward Deployed Engineer</strong> works embedded in real business operations.
              They understand workflows at ground level, translate business problems into system
              requirements, build or configure working solutions, and validate them with the people
              who actually use them — not with slides or prototypes shown to executives.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Contrast table ---- */}
      <section className="wif-contrasts">
        <div className="container">
          <div className="section-header">
            <div className="section-label">How it differs</div>
            <h2>FDE is not something you already have a name for.</h2>
            <p>It borrows from adjacent disciplines but it is a distinct role with a distinct scope.</p>
          </div>
          <div className="contrast-list">
            {comparisons.map(c => (
              <div key={c.label} className={`contrast-row ${c.highlight ? 'contrast-row--highlight' : ''}`}>
                <div className="contrast-label">{c.label}</div>
                <div className="contrast-text">{c.contrast}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Principles ---- */}
      <section className="wif-principles">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Core principles</div>
            <h2>What FDE work is built on.</h2>
          </div>
          <div className="grid-2">
            {principles.map(p => (
              <div key={p.n} className="principle-card card">
                <div className="principle-num">{p.n}</div>
                <h3>{p.title}</h3>
                <p style={{ marginTop: '10px' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="wif-cta">
        <div className="container wif-cta-inner">
          <h2>Ready to follow the discipline?</h2>
          <p>
            FDE Singapore is building a community for people who work at this intersection.
            Join the waitlist to stay connected as the community grows.
          </p>
          <Link to="/waitlist" className="btn btn-primary" id="wif-cta-waitlist">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </>
  )
}
