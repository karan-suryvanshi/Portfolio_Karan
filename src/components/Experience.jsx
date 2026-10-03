import { motion } from 'framer-motion'
import './experience.css'

// TODO: add more milestones here — internships, bigger project pushes, etc.
// Certificates now have their own section (see Certifications.jsx) — add
// new certificates there instead of here.
const LOG = [
  {
    hash: 'f21a9e0',
    role: 'Full Stack Java Training (in progress)',
    org: 'Seven Mentor and Training, Pune',
    period: 'Present',
    msg: 'Currently completing a full-stack Java course — wrapping up soon, then diving straight into job applications.',
  },
  {
    hash: '6e2f710',
    role: 'Personal Projects',
    org: 'Self-directed',
    period: '2024 — Present',
    msg: 'Built and shipped full-stack projects like MyShop (React e-commerce app) to learn React, routing, and state management by doing.',
  },
  {
    hash: '9c2d115',
    role: 'B.Sc, Computer Science',
    org: 'Shiv Chhatrapati College, Sambhaji Nagar',
    period: '2021 — 2025',
    msg: 'Coursework in programming fundamentals, data structures, and web systems.',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow"><span className="ln">06</span> // experience.log</div>
          <h2 className="section-title">git log --career</h2>
          <p className="section-sub">The commit history, roughly. Most recent first.</p>
        </motion.div>

        <div className="log">
          {LOG.map((entry, i) => (
            <motion.div
              className="log__entry"
              key={entry.hash}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="log__rail">
                <span className="log__dot" />
                {i < LOG.length - 1 && <span className="log__line" />}
              </div>
              <div className="log__content">
                <div className="log__top">
                  <span className="log__hash">{entry.hash}</span>
                  <span className="log__period">{entry.period}</span>
                </div>
                <h3 className="log__role">{entry.role}</h3>
                <span className="log__org">{entry.org}</span>
                <p className="log__msg">{entry.msg}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
