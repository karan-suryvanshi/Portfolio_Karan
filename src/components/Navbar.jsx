import { useEffect, useState } from 'react'
import { RESUME_URL } from '../constants.js'
import './navbar.css'

const TABS = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'certifications', label: 'certifications' },
  { id: 'work', label: 'work' },
  { id: 'experience', label: 'experience.log' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar({ theme, onThemeChange }) {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const marker = window.scrollY + 200
      const current = [...TABS].reverse().find(({ id }) => {
        const el = document.getElementById(id)
        return el && el.offsetTop <= marker
      })
      setActive(current?.id ?? 'home')
    }
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const go = (id) => {
    setOpen(false)
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <button className="nav__brand" onClick={() => go('home')} aria-label="Go to top">
          <span className="nav__brand-bracket">&lt;</span>KaranS<span className="nav__brand-bracket">/&gt;</span>
        </button>

        <nav className="nav__tabs" aria-label="Sections">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`nav__tab ${active === t.id ? 'nav__tab--active' : ''}`}
              aria-current={active === t.id ? 'location' : undefined}
              onClick={() => go(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <button
          className="nav__theme"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={() => onThemeChange(current => current === 'dark' ? 'light' : 'dark')}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
          <span className="nav__theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>

        <a className="nav__cta" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
          resume ↗
        </a>

        <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="nav__mobile" id="mobile-navigation" aria-label="Mobile sections">
          {TABS.map(t => (
            <button key={t.id} onClick={() => go(t.id)} className={active === t.id ? 'is-active' : ''} aria-current={active === t.id ? 'location' : undefined}>
              {t.label}
            </button>
          ))}
          <a className="nav__mobile-resume" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            view resume ↗
          </a>
        </nav>
      )}
    </header>
  )
}
