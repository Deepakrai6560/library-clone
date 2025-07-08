// src/components/ContactForm.jsx
import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <form
        action="https://getform.io/f/bpjpknzb"
        method="POST"
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required></textarea>
        </div>

        {/* Optional: Redirect user after successful submission */}
        <input
          type="hidden"
          name="_redirect"
          value="https://yourdomain.com/thank-you"
        />

        <button type="submit" className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
