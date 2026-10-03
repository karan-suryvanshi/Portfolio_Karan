import { motion } from 'framer-motion'
import './certifications.css'

// TODO: add every new certificate here as you earn it — course completions,
// online exams, workshops, all of it. Same shape each time:
// { title, issuer, date, score (optional), certificateUrl }
// Drop the PDF/image itself into public/certificates/ and point certificateUrl at it,
// e.g. '/certificates/your-file-name.pdf'.
const CERTS = [
  {
    title: 'HTML Training',
    issuer: 'EduPyramids · IIT Bombay Spoken Tutorial',
    via: 'via Seven Mentor and Training',
    date: 'July 2026',
    score: '95%',
    certificateUrl: '/certificates/HTML-Training-Certificate.pdf',
  },

  {
    title: 'CSS Training',
    issuer: 'EduPyramids · IIT Bombay Spoken Tutorial',
    via: 'via Seven Mentor and Training',
    date: 'September 2026',
    score: '92.50%',
    certificateUrl: '/certificates/CSS-Training-Certificate.pdf',
  },

  {
    title: 'JAVA Training',
    issuer: 'EduPyramids · IIT Bombay Spoken Tutorial',
    via: 'via Seven Mentor and Training',
    date: 'September 2026',
    score: '77.50%',
    certificateUrl: '/certificates/JAVA-Training-Certificate.pdf',
  },
  // Example of what to paste in once the Java course finishes:
  // {
  //   title: 'Full Stack Java Development',
  //   issuer: 'Seven Mentor and Training',
  //   via: '',
  //   date: '2026',
  //   score: '',
  //   certificateUrl: '/certificates/Full-Stack-Java-Certificate.pdf',
  // },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow"><span className="ln">04</span> // certifications.json</div>
          <h2 className="section-title">Proof of work</h2>
          <p className="section-sub">Courses and exams I've actually finished — each one links to the real certificate.</p>
        </motion.div>

        <motion.div
          className="certs__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {CERTS.map(c => (
            <motion.div className="cert-card" key={c.title} variants={item} whileHover={{ y: -5 }}>
              <div className="cert-card__top">
                <span className="cert-card__icon">✓</span>
                {c.score && <span className="cert-card__score">{c.score}</span>}
              </div>
              <h3 className="cert-card__title">{c.title}</h3>
              <p className="cert-card__issuer">
                {c.issuer}
                {c.via && <span className="cert-card__via"> · {c.via}</span>}
              </p>
              <div className="cert-card__footer">
                <span className="cert-card__date">{c.date}</span>
                <a href={c.certificateUrl} className="cert-card__link" target="_blank" rel="noopener noreferrer">
                  view certificate ↗
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
