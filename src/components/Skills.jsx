import { motion } from 'framer-motion'
import './skills.css'

const CATEGORIES = [
  {
    key: 'frontend',
    label: 'frontend',
    items: ['React', 'JavaScript (ES2023)', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    key: 'backend',
    label: 'backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Redis'],
  },
  {
    key: 'tooling',
    label: 'tooling',
    items: ['Docker', 'Git', 'CI/CD', 'AWS', 'Figma', 'Vitest'],
  },
]

const PROFICIENCY = [
  { name: 'React / JavaScript', value: 85 },
  { name: 'Node.js / APIs', value: 75 },
  { name: 'Databases (SQL)', value: 70 },
  { name: 'UI / UX craft', value: 80 },
  { name: 'DevOps & deployment', value: 55 },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow"><span className="ln">03</span> // skills.json</div>
          <h2 className="section-title">What I reach for</h2>
          <p className="section-sub">A working toolkit, kept current — not a wall of every logo I've ever clicked on.</p>
        </motion.div>

        <div className="skills__grid">
          <motion.div
            className="skills__json"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal__bar">
              <span className="dot dot--r" /><span className="dot dot--y" /><span className="dot dot--g" />
              <span className="terminal__title">skills.json</span>
            </div>
            <div className="skills__json-body">
              <span className="code-plain">{'{'}</span>
              {CATEGORIES.map((cat, ci) => (
                <div key={cat.key} className="skills__cat">
                  <span className="code-key">  "{cat.label}"</span>
                  <span className="code-plain">: [</span>
                  <div className="skills__chips">
                    {cat.items.map(item => (
                      <span key={item} className="skills__chip">{item}</span>
                    ))}
                  </div>
                  <span className="code-plain">  ]{ci < CATEGORIES.length - 1 ? ',' : ''}</span>
                </div>
              ))}
              <span className="code-plain">{'}'}</span>
            </div>
          </motion.div>

          <motion.div
            className="skills__bars"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {PROFICIENCY.map((p, i) => (
              <div className="bar" key={p.name}>
                <div className="bar__label">
                  <span>{p.name}</span>
                  <span className="bar__value">{p.value}%</span>
                </div>
                <div className="bar__track">
                  <motion.div
                    className="bar__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.value}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1, delay: i * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
