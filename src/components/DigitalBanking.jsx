import './DigitalBanking.css'

// Replace these with your real phone mockup images
import phone1Img from '../assets/phone1.png'
import phone2Img from '../assets/phone2.png'
import phone3Img from '../assets/phone3.png'

const TICKER_ITEMS = [
  { text: 'N7', star: true },
  { text: 'Say 👋 to the new way of banking', star: false },
  { text: 'CB7', star: true },
  { text: 'Say 👋 to the new way of banking', star: false },
  { text: 'N7', star: true },
  { text: 'Say 👋 to the new way of banking', star: false },
  { text: 'CB7', star: true },
  { text: 'Say 👋 to the new way of banking', star: false },
]

const ROWS = [
  {
    id: 1,
    phoneImg: phone1Img,
    phoneAlt: 'Digital Banking App Screen 1',
    imageLeft: false,
    heading: 'Digital banking out-of-the-box',
    subtext: 'N7 has all the components of our requirements and applications to continuously for our management dashboard that is always up to date for our clients. It is a combination of our clients with a seamless user interface.',
    bullets: [
      'Pre-Integrated Security System',
      'Fully Compliant With Regulatory Guidelines',
      'Digitally Connected Zone',
    ],
    cta: 'REQUEST NOW',
    ctaStyle: 'outline',
  },
  {
    id: 2,
    phoneImg: phone2Img,
    phoneAlt: 'Digital Banking App Screen 2',
    imageLeft: true,
    heading: 'No legacy IT systems',
    subtext: 'N7 has all the components of our requirements and applications to continuously for the management dashboard that is up to date for digital banks in a regulatory compliant manner.',
    bullets: [
      'Adopts Intelligent API Transactions',
      'AI-Driven User Experience',
      'Blockchain With Inner Core',
    ],
    cta: null,
  },
  {
    id: 3,
    phoneImg: phone3Img,
    phoneAlt: 'Digital Banking App Screen 3',
    imageLeft: false,
    heading: 'No traditional branches',
    subtext: 'The Digital Banking out of the box. New concept based framework that is continuously adapted for our customers to use for a seamless customer experience.',
    bullets: [
      'Streamlined & Paperless Banking',
      'Digital Transformation Capability',
      'Optimized, Adaptable and Scalable',
    ],
    cta: null,
  },
]

export default function DigitalBanking() {
  return (
    <div className="db-wrapper">

      {/* ── TICKER ── */}
      <div className="db-ticker">
        <div className="db-ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="db-ticker-item">
              {item.star && <span className="db-ticker-star">✦</span>}
              <span className="db-ticker-text">{item.text}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURE ROWS ── */}
      <section className="db-section">
        <div className="db-container">
          {ROWS.map((row) => (
            <div
              key={row.id}
              className={`db-row ${row.imageLeft ? 'db-row-reverse' : ''}`}
            >
              {/* Phone image */}
              <div className="db-phone-wrap">
                <img src={row.phoneImg} alt={row.phoneAlt} className="db-phone-img" />
              </div>

              {/* Content */}
              <div className="db-content">
                <h2 className="db-heading">{row.heading}</h2>
                <p className="db-subtext">{row.subtext}</p>
                <ul className="db-bullets">
                  {row.bullets.map((b) => (
                    <li key={b} className="db-bullet">
                      <span className="db-bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
                {row.cta && (
                  <a href="#" className={`db-cta ${row.ctaStyle === 'outline' ? 'db-cta-outline' : 'db-cta-primary'}`}>
                    {row.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="db-cta-banner">
        <div className="db-cta-banner-inner">
          <div className="db-cta-banner-left">
            <h3 className="db-cta-banner-heading">
              Take the full advantage of<br />going paper-less now.
            </h3>
            <p className="db-cta-banner-sub">
              N7 takes your financial institution out of the box and into
              the future. Seamlessly connect your customers, employees
              and partners to digitally transform your business.
            </p>
          </div>
          <div className="db-cta-banner-btns">
            <a href="#" className="db-banner-btn-outline">CONTACT US</a>
            <a href="#" className="db-banner-btn-primary">REQUEST DEMO</a>
          </div>
        </div>
      </div>

    </div>
  )
}