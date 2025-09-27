import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/coark-logo.jpg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Coark Media Logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
