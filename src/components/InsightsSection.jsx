import "./InsightsSection.css";

const INSIGHTS = [
  {
    id: 1,
    featured: true,
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    id: 2,
    featured: false,
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    id: 3,
    featured: false,
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

export default function InsightsSection() {
  return (
    <section className="insights">

      <div className="insights-container">

        {/* LEFT */}
        <div className="insights-left">

          <h2 className="insights-heading">
            Get yourself up-to-speed on
            all the things happening in fintech
          </h2>

          <button className="insights-btn">
            INSIGHTS
          </button>

        </div>

        {/* RIGHT */}
        <div className="insights-grid">

          {/* Featured Card */}
          <div className="insight-card insight-card-featured">

            <div className="insight-pattern">

              <div className="pattern-box"></div>
              <div className="pattern-box"></div>
              <div className="pattern-box"></div>
              <div className="pattern-box"></div>

            </div>

            <div className="insight-content">

              <p className="insight-tag">
                GETTING STARTED
              </p>

              <h3 className="insight-title">
                How to transition from a
                traditional to a digital
                bank
              </h3>

              <p className="insight-meta">
                David Grohl &nbsp;&nbsp; 17/08/24
              </p>

              <button className="read-more-btn">
                READ MORE
              </button>

            </div>

          </div>

          {/* Small Cards */}
          <div className="insight-small-grid">

            {INSIGHTS.slice(1).map((item) => (
              <div key={item.id} className="insight-card-small">

                <p className="insight-tag">
                  GETTING STARTED
                </p>

                <h3 className="insight-small-title">
                  {item.title}
                </h3>

                <p className="insight-meta">
                  {item.author} &nbsp;&nbsp; {item.date}
                </p>

                <button className="read-more-btn">
                  READ MORE
                </button>

              </div>
            ))}

          </div>

          {/* Bottom Link */}
          <div className="insights-footer-link">
            READ ALL INSIGHTS →
          </div>

        </div>

      </div>

    </section>
  );
}