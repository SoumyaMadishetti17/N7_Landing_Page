import './Solutions.css'

const SOLUTIONS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Core Banking CB7',
    tag: null,
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 4L28 10M16 4L4 10M28 10L16 16M4 10L16 16M16 16V28M28 10V22L16 28M4 10V22L16 28" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Digital Banking N7',
    tag: null,
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 12h24M12 12v16M20 12v16" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Open Banking',
    tag: null,
    desc: 'Our API banking helps you to gain actionable insights, enable account aggregation and streamline customer onboarding.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26V14l10-10 10 10v12H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 26v-7h6v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Loan Origination System',
    tag: 'NBFC',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations and engineering.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 14h24" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Loan Management System',
    tag: 'NBFC',
    desc: 'N7 helps create and deliver disruptive innovation for loan management and customer operations.',
  },
]

export default function Solutions() {

  return (

    <section className="section">

      <div className="container">

        {/* LEFT */}
        <div className="left">

          <h2 className="heading">
            All of our solutions are
            <br />
            tailor-made to your needs
          </h2>

          <a href="#" className="btnDemo">
            REQUEST DEMO
          </a>

        </div>

        {/* RIGHT */}
        <div className="grid">

          {SOLUTIONS.map((sol) => (

            <div key={sol.title} className="card">

              <div className="cardTop">

                <div className="iconWrap">
                  {sol.icon}
                </div>

                {sol.tag && (
                  <span className="tag">
                    {sol.tag}
                  </span>
                )}

              </div>

              <h3 className="cardTitle">
                {sol.title}
              </h3>

              <p className="cardDesc">
                {sol.desc}
              </p>

              <a href="#" className="learnMore">

                LEARN MORE

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}