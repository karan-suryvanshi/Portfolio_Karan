import { motion } from 'framer-motion'
import './projects.css'


const PROJECTS = [
  {
    name: 'MyShop — Ecommerce',
    desc: 'A full-stack-feel e-commerce storefront — product browsing by category (mobiles, laptops, fashion, accessories), cart with persistent storage, and email/password sign-up & login.',
    stack: ['React', 'React Router', 'Context API', 'Vite'],
    stars: 4,
    status: 'production',
    repo: 'https://github.com/karan-suryvanshi/MyShop-Ecommerce',
    demo: 'https://karan-ecom.netlify.app',
  },
  {
    name: 'cartzilla-grocery-store',
    desc: 'Cartzilla Grocery Store is a fully responsive e-commerce web app for online grocery shopping. It includes product browsing, search and filters, a shopping cart, user login, and a checkout flow, all wrapped in a clean, modern UI. Deployed on Netlify.',
    stack: ['React', 'React Router', 'Context API', 'Vite'],
    stars: 4,
    status: 'production',
    repo: 'https://github.com/karan-suryvanshi/Grocery_Store_Web.git',
    demo: 'https://cartzilla-grocery-store.netlify.app/',
  },
  {
    name: 'Comming Soon',
    desc: 'Comming Soon.',
    stack: ['Tech', 'Stack', 'Here'],
    stars: 0,
    status: 'in progress',
    repo: '#',
    demo: '#',
  },
  {
    name: 'Comming Soon',
    desc: 'Comming Soon.',
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
