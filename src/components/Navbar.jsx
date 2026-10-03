import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './navbar.css'

const TABS = [
  { id: 'home', label: 'home.jsx' },
  { id: 'about', label: 'about.jsx' },
  { id: 'skills', label: 'skills.json' },
  { id: 'certifications', label: 'certifications.json' },
  { id: 'work', label: 'work.jsx' },
  { id: 'experience', label: 'experience.log' },
  { id: 'contact', label: 'contact.js' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const offsets = TABS.map(t => {
        const el = document.getElementById(t.id)
        if (!el) return { id: t.id, top: Infinity }
        return { id: t.id, top: Math.abs(el.getBoundingClientRect().top - 120) }
      })
      offsets.sort((a, b) => a.top - b.top)
      setActive(offsets[0].id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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
              onClick={() => go(t.id)}
            >
              {t.label}
              {active === t.id && (
                <motion.span layoutId="tab-underline" className="nav__underline" />
              )}
            </button>
          ))}
        </nav>

        <a className="nav__cta" href="#contact" onClick={(e) => { e.preventDefault(); go('contact') }}>
          run()<span className="blink">_</span>
        </a>

        <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {TABS.map(t => (
            <button key={t.id} onClick={() => go(t.id)} className={active === t.id ? 'is-active' : ''}>
              {t.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
