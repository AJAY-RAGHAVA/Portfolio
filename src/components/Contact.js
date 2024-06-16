import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1><br/><br/>

      <div className="contact-sections">
        <div className="contact-section">
          <h2>Email</h2>
          <p>ajaydonthu123@gmail.com</p>
        </div>

        <div className="contact-section">
          <h2>Phone</h2>
          <p>+91 9491036441</p>
        </div>

        <div className="contact-section">
          <h2>Social Media</h2><br/>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/snv-ajay-raghava-donthu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="social-divider">          |         </span>
            <a href="https://github.com/AJAY-RAGHAVA" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
