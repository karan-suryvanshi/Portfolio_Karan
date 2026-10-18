import { motion } from 'framer-motion'
import {
  siCss,
  siDocker,
  siFramer,
  siGit,
  siGithubactions,
  siHtml5,
  siJavascript,
  siOpenapiinitiative,
  siOpenjdk,
  siPostgresql,
  siPostman,
  siReact,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siVite,
  siVitest,
} from 'simple-icons'
import './skills.css'

const CATEGORIES = [
  {
    key: 'frontend',
    label: 'Frontend',
    items: [
      { label: 'HTML5', icon: siHtml5 },
      { label: 'CSS3', icon: siCss },
      { label: 'React', icon: siReact },
      { label: 'JavaScript', icon: siJavascript },
      { label: 'TypeScript', icon: siTypescript },
      { label: 'Vite', icon: siVite },
      { label: 'Tailwind CSS', icon: siTailwindcss },
      { label: 'Framer Motion', icon: siFramer },
    ],
  },
  {
    key: 'backend',
    label: 'Backend & data',
    items: [
      { label: 'Java', icon: siOpenjdk },
      { label: 'Spring Boot', icon: siSpringboot },
      { label: 'REST APIs', icon: siOpenapiinitiative },
      { label: 'PostgreSQL', icon: siPostgresql },
      { label: 'SQL', mark: 'database' },
    ],
  },
  {
    key: 'tooling',
    label: 'Tools & delivery',
    items: [
      { label: 'Docker', icon: siDocker },
      { label: 'Git', icon: siGit },
      { label: 'CI/CD', icon: siGithubactions },
      { label: 'AWS', mark: 'aws' },
      { label: 'Vitest', icon: siVitest },
      { label: 'Postman', icon: siPostman },
    ],
  },
]

const PROFICIENCY = [
  { name: 'React / JavaScript', value: 85 },
  { name: 'Java / APIs', value: 75 },
  { name: 'Databases (SQL)', value: 70 },
  { name: 'UI / UX craft', value: 80 },
  { name: 'DevOps & deployment', value: 50 },
]

function SkillIcon({ item }) {
  if (item.icon) {
    return (
      <svg
        className="skills__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d={item.icon.path} />
      </svg>
    )
  }

  if (item.mark === 'aws') {
    return (
      <svg className="skills__icon skills__icon--aws" viewBox="0 0 48 32" aria-hidden="true" focusable="false">
        <text x="2" y="21">aws</text>
        <path d="M6 26c10 5 24 5 35-1" />
      </svg>
    )
  }

  return (
    <svg className="skills__icon skills__icon--database" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  )
}

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
          <div className="eyebrow"><span className="ln">03</span> // skills</div>
          <h2 className="section-title">What I reach for</h2>
          <p className="section-sub">A working toolkit, kept current — not a wall of every logo I've ever clicked on.</p>
        </motion.div>

        <div className="skills__grid">
          <motion.div
            className="skills__toolkit"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="skills__panel-header">
              <div className="skills__panel-symbol" aria-hidden="true">⌘</div>
              <div className="skills__panel-heading">
                <h3>My toolkit</h3>
                <p>Technologies I use to build and ship</p>
              </div>
              <span className="skills__panel-count">19 skills</span>
            </div>

            <div className="skills__categories">
              {CATEGORIES.map(category => (
                <div className="skills__category" key={category.key}>
                  <h4>{category.label}</h4>
                  <div className="skills__items">
                    {category.items.map(item => (
                      <div className="skills__item" key={item.label} title={item.label}>
                        <span
                          className="skills__item-icon"
                          style={item.icon ? { '--skill-brand': `#${item.icon.hex}` } : undefined}
                        >
                          <SkillIcon item={item} />
                        </span>
                        <span className="skills__item-label">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills__bars"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="skills__panel-header">
              <div className="skills__panel-symbol skills__panel-symbol--chart" aria-hidden="true">↗</div>
              <div className="skills__panel-heading">
                <h3>Core strengths</h3>
                <p>Areas I’m actively growing in</p>
              </div>
            </div>
            <div className="skills__proficiency">
              {PROFICIENCY.map((p, i) => (
                <div className="bar" key={p.name}>
                  <div className="bar__label">
                    <span>{p.name}</span>
                    <span className="bar__value">{p.value}%</span>
                  </div>
                  <div
                    className="bar__track"
                    role="progressbar"
                    aria-label={`${p.name} proficiency`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={p.value}
                  >
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
