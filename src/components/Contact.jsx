import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const services = [
  "Video Editing",
  "Influencer Marketing",
  "Social Media Management",
  "Meta Advertisements",
  "Brand Strategy",
  "Extras & Support",
];

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending message...");

    try {
      const backendUrl =
        import.meta.env.MODE === "development"
          ? "http://localhost:8000/send-message"
          : "/send-message";

      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          mobile_number: form.mobileNumber,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.detail);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed: " + data.detail);
      }
    } catch (error) {
      setStatus("⚠️ Error: " + error.message);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.grid}>
        <div className={styles.info}>
          <h2>
            Ready to <span className={styles.red}>Get Started?</span>
          </h2>
          <p>
            Let’s discuss your digital media needs and create a strategy that
            drives real results for your business.
          </p>
          <ul>
            <li>
              <span className={styles.icon}>☎</span> +91 7794963444
            </li>
            <li>
              <span className={styles.icon}>✉️</span>{" "}
              <a href="mailto:coarkmedia@gmail.com">coarkmedia@gmail.com</a>
            </li>
            <li>
              <span className={styles.icon}>⏰</span> Mon - Fri: 9AM - 6PM EST
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <div className={styles.row}>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="mobileNumber"
            type="tel"
            placeholder="Mobile Number"
            value={form.mobileNumber}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit">📌 Send Message</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
