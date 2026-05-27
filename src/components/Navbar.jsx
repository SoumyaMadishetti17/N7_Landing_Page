import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          N7
        </div>

        {/* NAV LINKS */}
        <nav className="navbar-links">
          <a href="/">SOLUTIONS</a>
          <a href="/">RESOURCES</a>
          <a href="/">ABOUT US</a>
        </nav>

        {/* BUTTON */}
        <button className="navbar-btn">
          REQUEST DEMO
        </button>

      </div>
    </header>
  )
}