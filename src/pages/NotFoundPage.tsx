import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <section className="notfound">
      <div className="container notfound-inner">
        <div className="notfound-code">404</div>
        <h1>Page not found.</h1>
        <p>This page does not exist or has been moved.</p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/what-is-fde" className="btn btn-ghost">What is FDE?</Link>
        </div>
      </div>
    </section>
  )
}
