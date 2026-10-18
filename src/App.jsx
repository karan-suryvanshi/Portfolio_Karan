import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { MotionConfig } from 'framer-motion'
import { useEffect, useLayoutEffect, useState } from 'react'

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch (error) {
    console.warn('Unable to read the saved theme preference.', error)
  }

  return window.matchMedia?.('(prefers-color-scheme: light)')?.matches ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#080d14' : '#f3f7f8'
  }, [theme])

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch (error) {
      console.warn('Unable to save the theme preference.', error)
    }
  }, [theme])

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
