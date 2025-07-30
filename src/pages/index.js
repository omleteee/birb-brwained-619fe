
import React from "react"
import { Link } from "gatsby"

import "./index.css"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <div className="site-wrapper">
    <main>
                  <StaticImage src="../images/quack.png" alt="Birb Brwained Logo" className="background-image"/>
                  <StaticImage src="../images/chrisdeltarune.png" alt="Birb Brwained Logo"  className="background-image"/>
                  <StaticImage src="../images/flyingfihs.png" alt="Birb Brwained Logo" className="background-image" />
                  <StaticImage src="../images/swanlake.png" alt="Birb Brwained Logo" className="background-image"/>
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-image-container">
              <StaticImage src="../images/birb-icon.png" alt="Birb Brwained Logo" className="logo-image" />
            </div>
            <h1 className="site-title">Birb Brwained</h1>
            <p className="tagline">A Flock of Artists</p>
          </div>
          <nav className="main-nav">
            <Link to="/underconst" className="nav-link">Socials</Link>
            <Link to="/underconst" className="nav-link">Commissions</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/underconst" className="nav-link">Collabs</Link>
            <Link to="/events" className="nav-link">Events</Link>
          </nav>
        </div>
      </div>
    </main>
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Birb Brwained - A Flock of Artists</p>
      </div>
    </footer>
  </div>
)
export default IndexPage
