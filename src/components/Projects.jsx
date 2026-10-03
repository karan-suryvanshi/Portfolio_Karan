import { motion } from 'framer-motion'
import './projects.css'

// TODO: replace `repo`/`demo` with your real GitHub repo and live demo URLs.
// Edit the placeholder cards below with your own project details,
// or add more objects to this array (same shape) as you build them.
const PROJECTS = [
  {
    name: 'MyShop — Ecommerce',
    desc: 'A full-stack-feel e-commerce storefront — product browsing by category (mobiles, laptops, fashion, accessories), cart with persistent storage, and email/password sign-up & login.',
    stack: ['React', 'React Router', 'Context API', 'Vite'],
    stars: 0,
    status: 'production',
    repo: 'https://github.com/karansu/MyShop-Ecommerce',
    demo: 'https://karan-ecom.netlify.app',
  },
  {
    name: 'your-project-name',
    desc: 'Placeholder — replace with a short description of what this project does and who it is for.',
    stack: ['Tech', 'Stack', 'Here'],
    stars: 0,
    status: 'in progress',
    repo: '#',
    demo: '#',
  },
  {
    name: 'your-project-name',
    desc: 'Placeholder — replace with a short description of what this project does and who it is for.',
    stack: ['Tech', 'Stack', 'Here'],
    stars: 0,
    status: 'in progress',
    repo: '#',
    demo: '#',
  },
  {
    name: 'your-project-name',
    desc: 'Placeholder — replace with a short description of what this project does and who it is for.',
    stack: ['Tech', 'Stack', 'Here'],
    stars: 0,
    status: 'in progress',
    repo: '#',
    demo: '#',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow"><span className="ln">05</span> // work.jsx</div>
          <h2 className="section-title">Selected builds</h2>
          <p className="section-sub">A few projects worth a second look — the rest live on GitHub.</p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PROJECTS.map(p => (
            <motion.article className="repo-card" key={p.name} variants={item} whileHover={{ y: -6 }}>
              <div className="repo-card__top">
                <span className="repo-card__icon">⌘</span>
                <span className={`repo-card__status status--${p.status.replace(' ', '-')}`}>{p.status}</span>
              </div>
              <h3 className="repo-card__name">{p.name}</h3>
              <p className="repo-card__desc">{p.desc}</p>
              <div className="repo-card__stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
              <div className="repo-card__footer">
                <span className="repo-card__stars">{p.stars > 0 ? `★ ${p.stars}` : ''}</span>
                <div className="repo-card__actions">
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="repo-card__link repo-card__link--demo"
                      target={p.demo !== '#' ? '_blank' : undefined}
                      rel={p.demo !== '#' ? 'noopener noreferrer' : undefined}
                      onClick={(e) => { if (p.demo === '#') e.preventDefault() }}
                    >
                      live demo ↗
                    </a>
                  )}
                  <a
                    href={p.repo}
                    className="repo-card__link"
                    target={p.repo !== '#' ? '_blank' : undefined}
                    rel={p.repo !== '#' ? 'noopener noreferrer' : undefined}
                    onClick={(e) => { if (p.repo === '#') e.preventDefault() }}
                  >
                    view repo →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
