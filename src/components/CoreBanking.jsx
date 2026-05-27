// import chart1 from '../../public/chart1.png'
import './CoreBanking.css'

export default function CoreBanking() {
  return (
    <section className="corebanking">
      <div className="corebanking-container">

        <div className="corebanking-left">
          <h2 className="corebanking-heading">
            A complete cloud-based<br />core banking.
          </h2>
          <p className="corebanking-sub">
            Faster time to market with our cloud-based<br />core banking services
          </p>
          <a href="#" className="corebanking-btn-primary">REQUEST DEMO</a>
          <a href="#" className="corebanking-learn">
            LEARN MORE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="corebanking-right">
          <img src="/chart1.png" alt="AML Dashboard" className="corebanking-img" />
        </div>

      </div>
    </section>
  )
}