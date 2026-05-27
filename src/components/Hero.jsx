import './Hero.css'
import heroImg from '../assets/hero.png'

const TRUSTED = [
  'SHELLS',
  'SmartFinder',
  'Zoomerr',
  'ArtVenue',
  'kontrast',
  'WAVESMARATHON',
]

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-glow"></div>

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <h1 className="hero-heading">
            The new foundation
            <br />
            of modern banking
          </h1>

          <p className="hero-description">
            We drive innovation and growth, provide seamless
            customer experience and operational excellence
          </p>

          <div className="hero-buttons">

            <button className="hero-btn-primary">
              REQUEST DEMO
            </button>

            <button className="hero-btn-secondary">
              CONTACT US
            </button>

          </div>

          {/* TRUSTED */}
          <div className="hero-trusted">

            <p className="hero-trusted-title">
              Trusted By:
            </p>

            <div className="hero-trusted-row">

              {TRUSTED.map((item) => (
                <div key={item} className="hero-trusted-item">
                  <span className="hero-dot">◉</span>
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">

          <img
            src={heroImg}
            alt="Hero"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  )
}