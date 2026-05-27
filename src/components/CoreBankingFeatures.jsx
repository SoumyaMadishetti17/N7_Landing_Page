// import ycDashboardImg from '../assets/yc-dashboard.png'
import './CoreBankingFeatures.css'

const FEATURES_LEFT = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
]

const FEATURES_RIGHT = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
]

export default function CoreBankingFeatures() {
  return (
    <section className="cbf">
      <div className="cbf-container">

        {/* LEFT — image */}
        <div className="cbf-left">
          <img src="/chart1.png" alt="YC Dashboard" className="cbf-img" />
        </div>

        {/* RIGHT — content */}
        <div className="cbf-right">
          <h2 className="cbf-heading">
            Run a more efficient, flexible, and digitally
            connected corebanking system
          </h2>

          <p className="cbf-label">What you will get:</p>

          <div className="cbf-features">
            <ul className="cbf-list">
              {FEATURES_LEFT.map((f) => (
                <li key={f} className="cbf-item">
                  <span className="cbf-check">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <ul className="cbf-list">
              {FEATURES_RIGHT.map((f) => (
                <li key={f} className="cbf-item">
                  <span className="cbf-check">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}