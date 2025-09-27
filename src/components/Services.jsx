import React from "react";
import styles from "../styles/Services.module.css";

const services = [
  {
    title: "Video Editing",
    desc: "Professional video editing services that bring your vision to life with stunning visuals and seamless storytelling.",
    list: [
      "Color Correction & Grading",
      "Motion Graphics",
      "Audio Enhancement",
      "Visual Effects",
    ],
  },
  {
    title: "Influencer Marketing",
    desc: "Connect with the right influencers to amplify your brand message and reach your target audience effectively.",
    list: [
      "Influencer Matching",
      "Campaign Management",
      "Performance Tracking",
      "Content Strategy",
    ],
  },
  {
    title: "Social Media Management",
    desc: "Comprehensive social media management to build your online presence and engage with your community.",
    list: [
      "Content Creation",
      "Community Management",
      "Analytics & Reporting",
      "Strategy Development",
    ],
  },
  {
    title: "Meta Advertisements",
    desc: "Strategic Meta advertising campaigns that drive conversions and maximize your return on investment.",
    list: [
      "Campaign Setup",
      "Audience Targeting",
      "Ad Optimization",
      "ROI Analysis",
    ],
  },
  {
    title: "Brand Strategy",
    desc: "Develop a powerful brand strategy that resonates with your audience and sets you apart from competitors.",
    list: [
      "Brand Identity",
      "Market Research",
      "Positioning Strategy",
      "Brand Guidelines",
    ],
  },
  {
    title: "Extras & Support",
    desc: "Project management, creative direction and retainer support for ongoing campaigns and production.",
    list: [
      "Creative Direction",
      "Project Management",
      "Retainers",
      "Reporting",
    ],
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2>Our<span className={styles.highlight}> Services</span> </h2>
      <p className={styles.subtitle}>
        We offer a complete range of digital media services designed to elevate your brand and maximize your online impact.
      </p>
      <div className={styles.grid}>
        {services.map((srv) => (
          <div key={srv.title} className={styles.card}>
            <h3>{srv.title}</h3>
            <p className={styles.desc}>{srv.desc}</p>
            <ul>
              {srv.list.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
