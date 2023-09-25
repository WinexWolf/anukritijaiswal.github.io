// Contact.js
import React from "react";
import "./contact.css"; // Import your CSS file for styling
import "./comingup.css";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button className="get-in-touch-button" >
          <b>Send</b>
        </button>
      </form>
      <form className="contact-form">
        <label className="email-text">
          Fill in the form or drop me an email on{" "}
          <label>anukritj@andrew.cmu.edu</label>{" "}
        </label>
      </form>
    </div>
  );
}

export default Contact;
