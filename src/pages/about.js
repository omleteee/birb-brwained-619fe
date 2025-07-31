import React from "react"
import { Link } from "gatsby"
import "./about.css"
import "./index.css"
import { StaticImage } from "gatsby-plugin-image"
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

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
        <section className="hero-section">
          <div className="logo-container">
            <div className="logo-circle">
              <div className="logo-text">
                <span className="gallery-text"></span>
                <span className="sanctuary-text"><StaticImage src="../images/birb-icon2.png" alt="Birb Brwained Logo" className="logo-image2" /></span>
              </div>
            </div>
          </div>
          <div className="hero-description">
            <p>
            As a community, we started with the idea of bringing together eager individuals to join together in creating new goals and direction to help people to seek their own motivations.
            </p>
            <p>
           We want to be able to share, learn, and support each other within this community and in ourselves. If you are interested in seeking new ways to take initiative, as well as be a part of a lively group of collaborators, we would love it if you reached out to us! 
            </p>
            <p>
                We're happy to have you here at Birb Brwained! Thank you for your interest!
            </p>
          </div>
        </section>

        {/* Artists Section */}
        <section className="artists-section">
          <h2 className="section-title">Meet Our Team!</h2>
          
          <div className="artists-grid">
            <div className="artist-card">
              <div className="artist-avatar">
            <StaticImage src="../images/stori.png" alt="Artist Avatar" className="artist-avatar-image1"/>
              </div>
              <div className="artist-info">
                <h3>Stori</h3>
                <p>Co-Founder of Birb Brwained, Director, Manager, Producer</p>
              </div>
            </div>

            <div className="artist-card">
              <div className="artist-avatar">
                <StaticImage src="../images/sushi.png" alt="Artist Avatar" className="artist-avatar-image2"/>

              </div>
              <div className="artist-info">
                <h3>sushi</h3>
                <p>Co-Founder of Bird Brwained, Artist</p>
              </div>
            </div>
              <div className="artist-card">
              <div className="artist-avatar">
                <StaticImage src="../images/stebar.png" alt="Artist Avatar" className="artist-avatar-image3"/>
                </div>
              <div className="artist-info">
                <h3>Stebar</h3>
                <p>Artist, Money Manager</p>
                </div>
                </div>
            <div className="artist-card">
              <div className="artist-avatar">
                <StaticImage src="../images/yurp.jpg" alt="Artist Avatar" className="artist-avatar-image2"/>
              </div>
              <div className="artist-info">
                <h3>mazzy</h3>
                <p>Artist, Character Designer, Animator</p>
              </div>
            </div>

            <div className="artist-card">
              <div className="artist-avatar">
                <StaticImage src="../images/draws.png" alt="Artist Avatar" className="artist-avatar-image2"/>
              </div>
              <div className="artist-info">
                <h3>Perry!</h3>
                <p>Multi Media Artists, Animator, Manager</p>
              </div>
            
            </div>
            <div className="artist-card">
              <div className="artist-avatar">
                <StaticImage src="../images/placeholder.png" alt="Artist Avatar" className="artist-avatar-image2"/>
              </div>
              <div className="artist-info">
                <h3>zander</h3>
                <p>Website Dev</p>
              </div>
              </div>
            <div className="artist-card">
              <div className="artist-avatar">
                <StaticImage src="../images/doot.jpg" alt="Artist Avatar" className="artist-avatar-image2"/>
                </div>
              <div className="artist-info">
                <h3>Doot</h3>
                <p>Support staff, 3d printing manufacturer</p>
                </div>
                </div>
                          <div className="artist-card">
              <div className="artist-avatar">
                <StaticImage src="../images/swank.png" alt="Artist Avatar" className="artist-avatar-image2"/>
                </div>
              <div className="artist-info">
                <h3>Swank</h3>
                <p>Configured a Discord Bot</p>
                </div>
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
