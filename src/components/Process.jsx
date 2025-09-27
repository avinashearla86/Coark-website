// src/components/Process.jsx
import React from "react";
import styles from "../styles/Process.module.css";
import vision from "../assets/vision.png";
import editing from "../assets/collabrativeediting.png";
import delivery from "../assets/finaldelivery.png";
const steps = [
  {
    icon: <img src={vision} alt="Share Your Vision" className={styles.iconImage} />, 
    title: "Share Your Vision",
    desc: "Provide us with your raw footage and a brief of your project. Let us know your goals, style preferences, and any specific requirements.",
  },
  {
    icon: <img src={editing} alt="Collaborative Editing" className={styles.iconImage} />, 
    title: "Collaborative Editing",
    desc: "We’ll start the editing process, keeping you involved with regular updates and feedback sessions to ensure your vision is brought to life.",
  },
  {
    icon: <img src={delivery} alt="Final Delivery" className={styles.iconImage} />, 
    title: "Final Delivery",
    desc: "After incorporating your feedback and making final adjustments, we’ll deliver your polished, professional video ready to captivate your audience.",
  }
];

const Process = () => (
  <section className={styles.process}>
    <h2>Our<span className={styles.highlight}> Services</span> </h2>
    <h2>
      Our simple <span className={styles.bold}>3-step process</span> <br />
      to transform your videos into <span className={styles.masterpieces}>Masterpieces</span>
    </h2>
    <p className={styles.tagline}>
      "Your vision is the art, let us turn it into a masterpiece."
    </p>
    <div className={styles.grid}>
      {steps.map(({ icon, title, desc }, idx) => (
        <div className={`${styles.card} ${styles[`animate${idx+1}`]}`} key={title}>
          <div className={styles.icon}>{icon}</div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Process;
