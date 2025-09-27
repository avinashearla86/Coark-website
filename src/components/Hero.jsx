import React from "react";
import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Digital Media</p>
        <h1>
          Digital Media <span className={styles.highlight}>Excellence</span>
        </h1>
        <p className={styles.description}>
          Transform your brand's digital presence with our comprehensive suite of media services. 
          From cutting-edge video editing to strategic brand development, we deliver results that matter.
        </p>
        <div className={styles.buttons}>
          <a 
            href="https://wa.me/917794963444"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.primaryBtn}`}
          >
            DM on Whatsapp
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default Hero;
