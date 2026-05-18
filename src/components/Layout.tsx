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
              Waitlist
            </Link>
            <Link to="/waitlist" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
              Join Waitlist
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
              Category and community site exploring the Forward Deployed Engineer role in Singapore.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/what-is-fde">What is FDE?</Link>
              <Link to="/waitlist">Join Waitlist</Link>
            </div>
            <div className="footer-col">
              <h4>Ecosystem</h4>
              <a href="https://www.makeworkflow.dev" target="_blank" rel="noopener noreferrer">Make Work Flow™</a>
              <a href="https://www.harvestpointconsulting.com" target="_blank" rel="noopener noreferrer">Harvest Point Consulting</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>© {new Date().getFullYear()} FDE Singapore. A community initiative.</p>
            <p className="footer-legal">
              FDE Singapore explores the Forward Deployed Engineer role and community. 
              Commercial consulting services are provided separately by{' '}
              <a href="https://www.harvestpointconsulting.com" target="_blank" rel="noopener noreferrer">Harvest Point Consulting</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
