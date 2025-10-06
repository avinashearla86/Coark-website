import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/coark-logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking a nav link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Coark Media Logo" className={styles.logo} />

      <button className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#portfolio" onClick={handleLinkClick}>Portfolio</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
