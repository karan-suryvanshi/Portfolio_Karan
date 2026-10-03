import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './hero.css'

const LINES = [
  { text: "const developer = {", cls: 'plain' },
  { text: "  name: 'Karan Suryavanshi',", cls: 'string', indent: true },
  { text: "  role: 'Fresher · Full-Stack Developer',", cls: 'string', indent: true },
  { text: "  stack: ['React', 'Node', 'PostgreSQL'],", cls: 'string', indent: true },
  { text: "  status: 'open to first opportunity',", cls: 'string', indent: true },
  { text: "  eager: true,", cls: 'const', indent: true },
  { text: "};", cls: 'plain' },
]

function useTypewriter(lines, speed = 18, lineDelay = 140) {
  const [rendered, setRendered] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function run() {
      const acc = []
      for (const line of lines) {
        let current = ''
        acc.push('')
        setRendered([...acc])
        for (let i = 0; i < line.text.length; i++) {
          if (cancelled) return
          current += line.text[i]
          acc[acc.length - 1] = current
          setRendered([...acc])
          await new Promise(r => setTimeout(r, speed))
        }
        await new Promise(r => setTimeout(r, lineDelay))
      }
      if (!cancelled) setDone(true)
    }
    run()
    return () => { cancelled = true }
  }, [])

  return { rendered, done }
}

export default function Hero() {
  const { rendered, done } = useTypewriter(LINES)

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="eyebrow"><span className="ln">01</span> // fresher · open to work</div>
          <h1 className="hero__title">
            I build interfaces
            <br />
            that <span className="hero__title-accent">ship</span> and <span className="hero__title-accent2">last</span>.
          </h1>
          <p className="hero__desc">
            A fresher full-stack developer who learns by building — React front
            ends, pragmatic backend APIs, and a habit of finishing what I start.
            Looking for my first role to grow fast and contribute from day one.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Say hello
            </a>
          </div>
          <div className="hero__meta">
            <div><strong>10+</strong><span>projects built</span></div>
            <div><strong>1+</strong><span>certifications</span></div>
            <div><strong>Fresher</strong><span>ready to join</span></div>
          </div>
        </motion.div>

        <motion.div
          className="hero__terminal"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="terminal">
            <div className="terminal__bar">
              <span className="dot dot--r" /><span className="dot dot--y" /><span className="dot dot--g" />
              <span className="terminal__title">karan.js</span>
            </div>
            <div className="terminal__body">
              {rendered.map((text, i) => (
                <div className={`terminal__line ${LINES[i]?.indent ? 'is-indent' : ''}`} key={i}>
                  <span className="terminal__gutter">{i + 1}</span>
                  <span className={`terminal__code code-${LINES[i]?.cls}`}>{text}</span>
                  {i === rendered.length - 1 && !done && <span className="blink terminal__cursor">▍</span>}
                </div>
              ))}
              {done && (
                <div className="terminal__line">
                  <span className="terminal__gutter">{LINES.length + 1}</span>
                  <span className="terminal__code code-plain"><span className="blink">▍</span></span>
                </div>
              )}
            </div>
          </div>
          <div className="hero__glow" />
        </motion.div>
      </div>
    </section>
  )
}
