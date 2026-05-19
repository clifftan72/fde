import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Layout.css'

function HashLink({
  hash,
  className,
  children,
  onClick,
}: {
  hash: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const { pathname } = useLocation()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.()
    if (pathname === '/') {
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
    // On other pages: let Link navigate to /#hash, ScrollToHash handles the scroll
  }

  return (
    <Link to={`/#${hash}`} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/logo.png" alt="FDE Singapore Logo" className="logo-img" />
          </Link>

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
            <Link
              to="/what-is-fde"
              className={`nav-link ${pathname === '/what-is-fde' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              What is FDE?
            </Link>
            <HashLink hash="how-it-works" className="nav-link" onClick={closeMenu}>
              How It Works
            </HashLink>
            <Link to="/waitlist" className="btn btn-primary btn-sm" onClick={closeMenu}>
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
              <HashLink hash="how-it-works">Leak Finder</HashLink>
              <HashLink hash="how-it-works">Workflow Surgery</HashLink>
              <HashLink hash="how-it-works">Ops Intelligence</HashLink>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <HashLink hash="what-is-fde">What is FDE?</HashLink>
              <HashLink hash="how-it-works">How It Works</HashLink>
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
