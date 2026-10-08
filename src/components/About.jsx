import { motion } from 'framer-motion'
import './about.css'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <div className="eyebrow"><span className="ln">02</span> // about.jsx</div>
          <h2 className="section-title">Who's behind the <span className="dot">.</span>keyboard</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            <p>
              I'm Karan — a fresher full-stack developer who learns by
              shipping real projects instead of just following tutorials.
              I care about software that feels obvious to use, and I'm just
              getting started proving that in production.
            </p>
            <p>
              Through college and self-study, I've built full end-to-end
              applications — from database schema to the pixel on top of
              it — using React on the front end and Node.js APIs behind it.
              No professional job yet, but a solid stack of finished
              personal projects to show for it.
            </p>
            <p>
              I'm actively looking for my first opportunity as a developer,
              where I can keep learning fast, take feedback well, and start
              contributing to real products from day one.
            </p>
            <p>
              Outside of code: cricket on weekends, a growing lo-fi playlist
              for late-night debugging sessions, and — fittingly — rebuilding
              this portfolio every few months as I learn something new.
            </p>

            <div className="about__tags">
              {['Fast learner', 'Detail-obsessed', 'Self-taught', 'Team player'].map(t => (
                <span className="code-tag" key={t}>{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            {[
              { k: 'Projects built', v: '3+' },
              { k: 'Certifications earned', v: '3+' }, // TODO: bump this as you add more certs
              { k: 'Lines of coffee', v: '∞' },
              { k: 'Bugs fixed (this week)', v: '17' },
            ].map(s => (
              <div className="stat-card" key={s.k}>
                <span className="stat-card__value">{s.v}</span>
                <span className="stat-card__label">{s.k}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
