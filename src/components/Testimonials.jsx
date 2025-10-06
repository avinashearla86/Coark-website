// src/components/Testimonials.jsx
import React from "react";
import styles from "../styles/Testimonials.module.css";
import avatar1 from "../assets/avatar.png";

const testimonials = [
  {
    name: "Akshay",
  
    text: `"I initially had doubts about their capability, but after taking their video editing and social media management services, I was truly impressed. Their dedication and quality of work proved me wrong. Keep going like this, team!"`,
    rating: 5,
  },
  {
    name: "Nani Sai",
    
    text: `"I have worked with this team for around 1 year to grow my Instagram account @cyberisky. Their strong analytical skills and SEO strategies helped increase my followers from 5k to 17k."`,
    rating: 5,
  },
  {
    name: "Radha Kumari",
   
    text: `"I have worked with this team to improve our website performance. Their SEO expertise increased our ranking score from 40% to 85%, which made a real difference for our business."`,
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
              <div className={styles.avatar}> <img src={avatar1} alt="#" /></div>
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
