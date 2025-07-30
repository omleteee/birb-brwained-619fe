import React from "react"
import { Link } from "gatsby"
import "./about.css"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <div className="page-container">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/underconst" className="nav-link">Socials</Link>
          <Link to="/underconst" className="nav-link">Collabs</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/events" className="nav-link">Events</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="hero-section" style={{marginBottom: "2rem"}}>
          <div className="logo-container">
            <div className="logo-circle">
              <div className="logo-text">
                <span className="sanctuary-text">
                  <StaticImage src="../images/birb-icon2.png" alt="Birb Brwained Logo" className="logo-image2" />
                </span>
              </div>
            </div>
          </div>
          <div className="hero-description">
            <h1>Upcoming Events</h1>
            <p>
              Stay up to date with our latest events, meetups, and community activities!
            </p>
          </div>
        </section>

        {/* Events List */}
        <section className="events-section">
          <h2 className="section-title">Events Calendar</h2>
          <div className="events-grid">
            <div className="event-card">
              <h3>Food Festival</h3>
              <p><strong>Date:</strong> August 30th</p>
              <p><strong>Location:</strong>Island Pacific UC Parking Lot</p>
              <p>See you there!</p>
            </div>
                <h2 className="section-title">Previous Events</h2>
                      <div className="event-card">
                        <h3>Studio 11 Summer Showcase Chalk Fest</h3>
                        <p><strong>Date:</strong> June 28th, 2025</p>
                        <p><strong>Location:</strong> Studio 11 Union City 12-4pm</p>
                        <p>Keychain and Print Designs!.</p>
            </div>
          </div>
        </section>

      </main>
          <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Birb Brained - A Flock of Artists</p>
      </div>
    </footer>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>About - Meet Our Team!</title>