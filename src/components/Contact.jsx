
import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { RESUME_URL } from '../constants.js'
import './contact.css'

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')

  const update = (k) => (e) => {
    setForm(f => ({
      ...f,
      [k]: e.target.value
    }))
  }

  const submit = (e) => {
    e.preventDefault()
    setError('')
    setSending(true)

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message
    }

    emailjs
      .send(
        'service_xfv15wr',
        'template_7cfp1nl',
        templateParams,
        {
          publicKey: '3EVpJzI-sB8RBpple'
        }
      )
      .then(() => {
        setSending(false)
        setSent(true)
        setFirstName(form.name.trim().split(/\s+/)[0])

        setForm({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch(() => {
        setSending(false)
        setError('Your message could not be sent right now. Please try again or email me directly.')
      })
  }

  return (
    <section id="contact">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">
            <span className="ln">07</span> // contact.
          </div>

          <h2 className="section-title">
            Let's build something
          </h2>

          <p className="section-sub">
            Open to full-time roles, contract work, and interesting problems.
            Reach out below.
          </p>
        </motion.div>


        <div className="contact__grid">

          <motion.form
            className="contact__form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >

            <div className="terminal__bar">
              <span className="dot dot--r" />
              <span className="dot dot--y" />
              <span className="dot dot--g" />

              <span className="terminal__title">
                send-message.sh
              </span>
            </div>


            <div className="contact__form-body">

              {!sent ? (

                <>

                  <label className="field">

                    <span className="field__prompt">
                      $ name <span className="blink">_</span>
                    </span>

                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                    />

                  </label>


                  <label className="field">

                    <span className="field__prompt">
                      $ email <span className="blink">_</span>
                    </span>

                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                    />

                  </label>


                  <label className="field">

                    <span className="field__prompt">
                      $ message <span className="blink">_</span>
                    </span>

                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      name="message"
                      placeholder="What are you building?"
                    />

                  </label>


                  {error && <p className="contact__error" role="alert">{error}</p>}

                  <button
                    type="submit"
                    className="btn btn--primary contact__submit"
                    disabled={sending}
                  >

                    {sending ? 'sending...' : 'send()'}

                    {!sending && (
                      <span className="arrow">→</span>
                    )}

                  </button>
                  <p className="contact__privacy">
                    Submitting sends your name, email, and message through EmailJS so I can reply.
                  </p>

                </>

              ) : (

                <div className="contact__success" role="status" aria-live="polite">

                  <span className="code-string">
                    ✓ 200 OK
                  </span>

                  <p>
                    Thanks, {firstName || 'friend'} —
                    message received. I'll reply within a day or two.
                  </p>

                </div>

              )}

            </div>

          </motion.form>


          <motion.div
            className="contact__side"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            <div className="contact__card">

              <span className="code-key">
                email
              </span>

              <a href="mailto:suryvanshikaran245@gmail.com">
                suryvanshikaran245@gmail.com
              </a>

            </div>


            <div className="contact__card">

              <span className="code-key">
                phone
              </span>

              <a href="tel:+918698300320">
                +91 86983 00320
              </a>

            </div>


            <div className="contact__card">

              <span className="code-key">
                location
              </span>

              <span>
                Pune, India · Remote-friendly
              </span>

            </div>

            <div className="contact__card">

              <span className="code-key">
                resume
              </span>

              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                View resume ↗
              </a>

            </div>


            <div className="contact__card contact__links">

              <span className="code-key">
                elsewhere
              </span>

              <div>

                <a
                  href="https://github.com/karan-suryvanshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/karan-suryvanshii-aa9833313"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}
