import { motion } from 'framer-motion'
import { RESUME_URL } from '../constants.js'
import './hero.css'

export default function Hero() {
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
          <ul className="hero__facts" aria-label="About Karan">
            <li><span>Name</span><strong>Karan Suryavanshi</strong></li>
            <li><span>Role</span><strong>Fresher · Full-Stack Developer</strong></li>
            <li><span>Stack</span><strong>React · Java · SQL</strong></li>
            <li><span>Status</span><strong>Open to my first opportunity</strong></li>
            <li><span>Mindset</span><strong>Eager to learn and build</strong></li>
          </ul>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View work <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              Say hello
            </a>
            <a className="btn btn--ghost" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              View resume ↗
            </a>
          </div>
          <div className="hero__meta">
            <div><strong>2</strong><span>featured projects</span></div>
            <div><strong>4</strong><span>certifications</span></div>
            <div><strong>Fresher</strong><span>ready to join</span></div>
          </div>
        </motion.div>

        <div className="hero__visual">
          <div className="hero__portrait">
            <img
              src="/karan-portrait.webp"
              alt="Karan Suryavanshi at his desk"
              width="768"
              height="1365"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
