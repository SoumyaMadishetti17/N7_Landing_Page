import "./CTASection2.css";

export default function CTASection2() {
  return (
    <section className="cta">

      <div className="cta-container">

        {/* LEFT */}
        <div className="cta-left">

          <h2 className="cta-heading">
            Take the full advantage of
            going paper-less now.
          </h2>

          <p className="cta-subtext">
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>

        </div>

        {/* RIGHT */}
        <div className="cta-buttons">

          <button className="cta-btn-outline">
            CONTACT US
          </button>

          <button className="cta-btn-primary">
            REQUEST DEMO
          </button>

        </div>

      </div>

    </section>
  );
}