import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          {/* BIG LOGO */}
          <div className="footer-logo">
            N7
          </div>

          {/* LOCATIONS */}
          <div className="footer-locations">

            <div className="footer-location">
              <h4>London</h4>

              <p>
                Linktia Infosystems Ltd – CB7,
                26 Main Road Sundridge,
                TN14 6EP, England,
                United Kingdom
              </p>
            </div>

            <div className="footer-location">
              <h4>Dubai</h4>

              <p>
                Linktia Infosystems Ltd –
                CB7, Jumeirah Business,
                Center 5 Cluster W,
                Jumeirah Lakes Towers,
                Dubai, United Arab Emirates
              </p>
            </div>

            <div className="footer-location">
              <h4>London</h4>

              <p>
                Linktia Infosystems Ltd –
                CB7, Nirmal,
                Anand Nagar,
                Suncity Road,
                Pune, Maharashtra,
                411041, India
              </p>
            </div>

          </div>

        </div>

        {/* LINKS */}
        <div className="footer-links-wrap">

          {/* Solutions */}
          <div className="footer-links-col">

            <h4 className="footer-title">
              Solutions
            </h4>

            <a href="#">Core Banking CB7 <span>→</span></a>
            <a href="#">Digital Banking N7 <span>→</span></a>
            <a href="#">Open Banking <span>→</span></a>
            <a href="#">Loan Origination System <span>→</span></a>
            <a href="#">Loan Management System <span>→</span></a>
            <a href="#">Digital Transformation <span>→</span></a>

          </div>

          {/* N7 */}
          <div className="footer-links-col">

            <h4 className="footer-title">
              N7 Banking
            </h4>

            <a href="#">About Us <span>→</span></a>
            <a href="#">Solutions <span>→</span></a>
            <a href="#">Contact <span>→</span></a>
            <a href="#">Company <span>→</span></a>
            <a href="#">Careers <span>→</span></a>
            <a href="#">Insights <span>→</span></a>
            <a href="#">Core Team <span>→</span></a>
            <a href="#">Brand Center <span>→</span></a>

          </div>

          {/* Socials */}
          <div className="footer-links-col">

            <h4 className="footer-title">
              Our Socials
            </h4>

            <a href="#">LinkedIn <span>→</span></a>
            <a href="#">X <span>→</span></a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          Copyright © 2022 by Linktia Infosystems Limited —
          [CB7 and N7 as Commercial Brand] —
          [Registered under the Companies Act 2006 in England and Wales |
          Number of Incorporation 13100992]

        </div>

      </div>

    </footer>
  );
}