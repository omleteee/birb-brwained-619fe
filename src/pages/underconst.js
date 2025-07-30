import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import "./index.css"
import "./underconst.css"

const NotFoundPage = () => (
  <div style={{
    fontFamily: 'Itim',
    backgroundColor: '#f5f2e8',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#2c2c2c'
  }}>
    <div>
      <StaticImage src="../images/construction.png" alt="Birb Brwained Logo" className="center-image" />
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>This page is still underconstruction! Greatness awaits!</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.7 }}>
        Looks like this birb has flown away!
      </p>
      <Link 
        to="/" 
        style={{
          color: '#7a9471',
          textDecoration: 'none',
          fontSize: '1.1rem',
          padding: '0.5rem 1rem',
          border: '2px solid #7a9471',
          borderRadius: '4px',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#7a9471';
          e.target.style.color = 'white';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#7a9471';
        }}
      >
        Return to Nest
      </Link>
    </div>
  </div>
)

export default NotFoundPage