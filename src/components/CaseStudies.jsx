import { useState } from 'react'
import caseStudyImg from '../assets/caseStudyImg.png'
import './CaseStudies.css'

const CASES = [
  {
    tag: 'GETTING STARTED',
    heading: 'How we help brand reach out to more people',
    company: 'Zoomerr',
  },
  {
    tag: 'GROWTH',
    heading: 'How we scaled core banking for 2M users',
    company: 'SmartFinder',
  },
  {
    tag: 'INNOVATION',
    heading: 'Building digital-first banking from scratch',
    company: 'ArtVenue',
  },
  {
    tag: 'COMPLIANCE',
    heading: 'Regulatory compliance made simple with N7',
    company: 'kontrastr',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(a => (a - 1 + CASES.length) % CASES.length)
  const next = () => setActive(a => (a + 1) % CASES.length)

  const current = CASES[active]

  return (
    <section className="cs">
      <div className="cs-container">

        <h2 className="cs-heading">Our Case Studies</h2>

        <div className="cs-card">

          {/* LEFT — image */}
          <div className="cs-visual">
            <img src={caseStudyImg} alt="Case Study" className="cs-visual-img" />
          </div>

          {/* RIGHT — content */}
          <div className="cs-content">
            <span className="cs-tag">{current.tag}</span>
            <h3 className="cs-title">{current.heading}</h3>
            <div className="cs-company">
              <div className="cs-company-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#00c2ff" strokeWidth="1.5"/>
                  <path d="M8 12h8M12 8v8" stroke="#00c2ff" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="cs-company-name">{current.company}</span>
            </div>
            <a href="#" className="cs-read-more">READ MORE</a>
          </div>

        </div>

        {/* Bottom controls */}
        <div className="cs-controls">
          <button className="cs-arrow" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="cs-dots">
            {CASES.map((_, i) => (
              <button
                key={i}
                className={`cs-dot ${i === active ? 'cs-dot-active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Case ${i + 1}`}
              />
            ))}
          </div>

          <button className="cs-arrow" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <a href="#" className="cs-view-all">VIEW ALL →</a>
        </div>

      </div>
    </section>
  )
}