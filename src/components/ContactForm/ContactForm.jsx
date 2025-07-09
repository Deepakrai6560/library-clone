import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`${styles.wrapper} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
      <button
        className={styles.toggleButton}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
      >
        {sidebarOpen ? "See Less" : "See More"}
      </button>

      <div className={styles.sidebar}>
        <h3>Contact Info</h3>
        <p><strong>Maharaja Agrasen Institute of Management and Technology</strong><br />
          Near Agrasen Chowk, Old Saharanpur Road,<br />
          (Adjacent to Sector-15, HUDA),<br />
          Jagadhri-135003.
        </p>
        <div>
          <p><strong>Director:</strong> director@maimt.com</p>
          <p><strong>HR Department:</strong> hr@maimt.com</p>
          <p><strong>Placement Cell:</strong> placement@maimt.com</p>
          <p><strong>MBA Department:</strong> hodmgt@maimt.com</p>
          <p><strong>MCA Department:</strong> hodca@maimt.com</p>
          <p><strong>Librarian:</strong> library@maimt.com</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <strong>HELPLINE:</strong><br />
          01732-235255<br />
          01732-231362
        </div>
      </div>

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

          <button type="submit" className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
