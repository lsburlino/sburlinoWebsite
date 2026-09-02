import { useEffect } from 'react'
import './About.css'

function About() {
  useEffect(() => { document.title = 'Luca Sburlino' }, [])
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-photo">
          <img src="https://placehold.co/280x280/1a1a1a/555?text=Photo" alt="Luca Sburlino" />
        </div>
        <div className="about-intro">
          <h1 className="about-name">Luca Sburlino</h1>
          <p className="about-title">Software Engineer & Creative Developer</p>
          <p className="about-bio">
            I'm a passionate developer who loves building things that live on the internet.
            I focus on creating elegant solutions that combine clean code with great user experiences.
            When I'm not coding, you can find me exploring new technologies and working on side projects.
          </p>
          <div className="about-links">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="about-link">
              Resume
            </a>
            <a href="mailto:your@email.com" className="about-link">
              Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="about-link">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
