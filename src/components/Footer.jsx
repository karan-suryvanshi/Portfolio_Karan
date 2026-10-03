import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">&lt;Karan Suryavanshi/&gt;</span>
        <span className="footer__note">© {new Date().getFullYear()} Karan Suryavanshi. All rights reserved.</span>
        <button
          className="footer__top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          back to top ↑
        </button>
      </div>
    </footer>
  )
}
