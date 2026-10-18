import { motion } from 'framer-motion'
import './projects.css'


const PROJECTS = [
  {
    name: 'MyShop — Ecommerce',
    desc: 'An e-commerce storefront with category-based product browsing, a persistent cart, and sign-up and login flows.',
    stack: ['React', 'React Router', 'Context API', 'Vite'],
    status: 'production',
    repo: 'https://github.com/karan-suryvanshi/MyShop-Ecommerce',
    demo: 'https://karan-ecom.netlify.app',
    preview: '/project-previews/myshop.jpg',
  },
  {
    name: 'Cartzilla Grocery Store',
    desc: 'A grocery storefront with product browsing, search and filters, a shopping cart, login, and a checkout flow.',
    stack: ['React', 'React Router', 'Context API', 'Vite'],
    status: 'production',
    repo: 'https://github.com/karan-suryvanshi/Grocery_Store_Web.git',
    demo: 'https://cartzilla-grocery-store.netlify.app/',
    preview: '/project-previews/cartzilla.jpg',
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
          <p className="section-sub">Two shipped projects, with live demos and source code.</p>
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
              <div className="repo-card__preview">
                <div className="repo-card__preview-bar">
                  <span className="dot dot--r" />
                  <span className="dot dot--y" />
                  <span className="dot dot--g" />
                  <span>site preview</span>
                </div>
                <img
                  className="repo-card__preview-image"
                  src={p.preview}
                  alt={`${p.name} storefront preview`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
