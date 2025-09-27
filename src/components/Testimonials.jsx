// src/components/Testimonials.jsx
import React from "react";
import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    text: `"COARK MEDIA transformed our video content strategy. Their editing skills are exceptional, and the results speak for themselves - 300% increase in engagement!"`,
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, FashionForward",
    text: `"The influencer marketing campaign exceeded all expectations. Professional, strategic, and delivered incredible ROI."`,
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Founder, HealthTech Solutions",
    text: `"From brand strategy to social media management, COARK MEDIA handled everything perfectly. Our brand recognition increased by 200% in just 6 months."`,
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Owner, Boutique Brands",
    text: `"Their Meta advertising expertise is unmatched. We achieved 400% ROAS and scaled beyond our expectations."`,
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "VP Marketing, GlobalCorp",
    text: `"Working with COARK MEDIA was a game-changer. Their comprehensive approach to digital media helped us dominate our market segment."`,
    rating: 5,
  },
  {
    name: "Lisa Martinez",
    role: "Creative Director, ArtStudio",
    text: `"The attention to detail and creative vision they brought to our projects was outstanding. Every deliverable exceeded our expectations."`,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
     <div className={styles.test}>
        <h2>
        Client <span>Testimonials</span>
      </h2>
      <p>
        Don't just take our word for it. Here's what our clients say about working with COARK MEDIA.
      </p>
     </div>
      

      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.avatar}></div>
              <div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            </div>
            <div className={styles.rating}>
              {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
            </div>
            <p className={styles.text}>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
