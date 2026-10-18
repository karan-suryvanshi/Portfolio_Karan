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
          <h2 className="section-title">Who's behind the keyboard<span className="dot">?</span></h2>
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
              I'm Karan, an aspiring developer who learns by building and
              shipping projects. I focus on creating responsive, easy-to-use
              interfaces with React and JavaScript.
            </p>
            <p>
              My portfolio features two e-commerce projects built with React,
              React Router, Context API, and Vite. I'm continuing to grow my
              backend skills alongside my frontend work.
            </p>
            <p>
              I'm looking for my first developer opportunity where I can learn
              from a team, take feedback, and contribute to real products.
              Outside of code, I enjoy cricket and rebuilding this portfolio
              as I learn.
            </p>

            <div className="about__tags">
              {['React', 'React Router', 'Context API', 'Open to opportunities'].map(t => (
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
              { k: 'Featured projects', v: '2' },
              { k: 'Certificates', v: '4' },
              { k: 'Core stack', v: 'React + JS' },
              { k: 'Next step', v: 'First role' },
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
