import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./index.css"
import "./Products.css"

const productImages = {
  keychains: [
    "/images/keychain1.jpg",
    "/images/keychain2.jpg",
    "/images/keychain3.jpg"
  ],
  charms: [
    "/images/charm1.png",
    "/images/charm2.png"
  ],

  prints: [
    "/images/print1.png",
    "/images/print2.jpeg"
  ]
}

const ProductsPage = () => {
  // State for each product image index
  const [keychainIdx, setKeychainIdx] = useState(0)
  const [charmIdx, setCharmIdx] = useState(0)
  const [stickerIdx, setStickerIdx] = useState(0)
  const [printIdx, setPrintIdx] = useState(0)

  // Helper to cycle images
  const handleImageClick = (type, idxSetter, images, idx) => {
    idxSetter((idx + 1) % images.length)
  }

  return (
    <div className="page-container">
      <nav className="navigation">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/underconst" className="nav-link">Socials</Link>
          <Link to="/underconst" className="nav-link">Collabs</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </div>
      </nav>
      <main className="main-content">
        <h1 className="section-title">Our Products</h1>
        <div className="products-grid">
          <div className="product-card horizontal">
            <img
              src={productImages.keychains[keychainIdx]}
              alt="Keychains"
              className="product-image"
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleImageClick(
                  "keychains",
                  setKeychainIdx,
                  productImages.keychains,
                  keychainIdx
                )
              }
            />
            <div className="product-info">
              <h2>Keychains</h2>
              <p>All individually one of kind unique charms! No Repeated Designs!, All handcrafted</p>
              <div className="product-price">$7.00</div>
            </div>
          </div>
          <div className="product-card horizontal">
            <img
              src={productImages.charms[charmIdx]}
              alt="Charms"
              className="product-image"
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleImageClick(
                  "charms",
                  setCharmIdx,
                  productImages.charms,
                  charmIdx
                )
              }
            />
            <div className="product-info">
              <h2>Charms</h2>
              <p>All individually one of kind unique charms!, No Repeated Designs!, All handcrafted</p>
              <div className="product-price">$4.50</div>
            </div>
          </div>
          <div className="product-card horizontal">
            <div className="product-info">
              <h2>Stickers 2x2</h2>
              <p>Assortment of different stickers of original pieces to fanart of different communities!</p>
              <div className="product-price">$4.00</div>
            </div>
          </div>
          <div className="product-card horizontal">
            <img
              src={productImages.prints[printIdx]}
              alt="Small Prints 1800 x 1200 (4x6)"
              className="product-image"
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleImageClick(
                  "prints",
                  setPrintIdx,
                  productImages.prints,
                  printIdx
                )
              }
            />
            <div className="product-info">
              <h2>Small Prints 1800 x 1200 (4x6)</h2>
              <p>Assortments of different prints from beautiful original pieces to fanart of different communities!</p>
              <div className="product-price">$7.00</div>
            </div>
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
}

export default ProductsPage

export const Head = () => <title>Products - Birb Brwained</title>
