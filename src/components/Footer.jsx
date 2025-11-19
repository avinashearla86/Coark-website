import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../assets/coark-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brand}>
          <img src={logo} alt="Coark Media Logo" className={styles.logo} />
          <p>Passionate digital strategists crafting compelling stories that build authentic brand presence online.</p>
        </div>
        <div className={styles.services}>
          <h3>Services</h3>
          <ul>
            <li>Video Production</li>
            <li>Social Media Management</li>
            <li>Content Creation</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>
        <div className={styles.social}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/coarkmedia/?igsh=MW5tZHJyMzlobDI4Zw%3D%3D#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://x.com/coarkmedia"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.copyright}>
        © {new Date().getFullYear()} CoarkMedia. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
