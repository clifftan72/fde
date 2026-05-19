import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="FDE Singapore Logo" className="logo-img" />
          </Link>

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
            <Link to="/what-is-fde" className={`nav-link ${pathname === '/what-is-fde' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              What is FDE?
            </Link>
            <Link to="/waitlist" className={`nav-link ${pathname === '/waitlist' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/waitlist" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
              Book a Process Audit
            </Link>
          </nav>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo">
              <img src="/logo.png" alt="FDE Singapore Logo" className="logo-img" />
            </div>
            <p className="footer-tagline">
              Singapore's only embedded AI deployment partner built for SMEs.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#">Leak Finder</a>
              <a href="#">Workflow Surgery</a>
              <a href="#">Ops Intelligence</a>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <Link to="/what-is-fde">What is FDE?</Link>
              <Link to="/waitlist">How It Works</Link>
              <Link to="/waitlist">Book a Process Audit</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>© {new Date().getFullYear()} Harvest Point Consulting. Operated by Clifford Tan.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
