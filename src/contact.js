import React from "react";
import "./contact.css";
import emailjs from "emailjs-com"; // Import the emailjs library

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your own Email.js service, template, and user IDs
    const serviceID = "service_c5uyhac";
    const templateID = "template_nrg8rul";
    const userID = "m7FC9cuQ5_JkSrUQl";

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Email sent successfully!");
      },
      (error) => {
        console.error("Email could not be sent:", error.text);
        alert("Email could not be sent. Please try again later.");
      }
    );

    e.target.reset();
  };

  return (
    <div id="contact" className="contact-container">
      <form className="contact-form" onSubmit={sendEmail}>
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

        <button className="get-in-touch-button">
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
