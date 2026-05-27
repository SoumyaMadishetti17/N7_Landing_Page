import './CTASection.css'

export default function CTASection() {
  return (
    <section className="cta">

      <div className="cta-container">

        {/* Background Text */}
        <h1 className="cta-bg-text">
          CB7
        </h1>

        {/* LEFT */}
        <div className="cta-content">

          <h2 className="cta-heading">
            Take the full advantage of
            <br />
            going paper-less now.
          </h2>

          <p className="cta-description">
            CB7 helps your financial institution improve the client
            experience, automate and optimize procedures, simplify
            banking operations
          </p>

        </div>

        {/* RIGHT */}
        <div className="cta-actions">

          <button className="cta-btn-outline">
            CONTACT US
          </button>

          <button className="cta-btn-primary">
            REQUEST DEMO
          </button>

        </div>

      </div>

    </section>
  )
}