import React, { useEffect } from "react";
import "./comingup.css";
import headshot from "./images/Headshot-AJ.png";

function scrollToContact() {
  // Find the "Contact" section by its ID
  const contactSection = document.getElementById("contact");

  if (contactSection) {
    // Scroll to the "Contact" section smoothly
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}


function ComingUp() {
  useEffect(() => {
    // Add a class to trigger the slide-in animation after a delay
    const descElement = document.querySelector(".desc");
    setTimeout(() => {
      descElement.classList.add("slide-in");
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div id="about" className="coming-up">
      <img
        className="img"
        src={headshot}
        height="200"
        width="200"
        alt="Email Icon"
      />
      <div className="desc">
        <b>
          <br></br>
          <i>Hi there! </i>
        </b>
        <br />
        <br />
        <br />
        <b>
          I'm <b className="anukriti-text"> Anukriti</b> and yes, I built this.
          I ideate, design, build, and manage software applications and
          products.
        </b>
        <br></br>
        {/* Call the scrollToContact function when the button is clicked */}
        <button className="get-in-touch-button" onClick={scrollToContact}>
          <b>Get in Touch</b>
        </button>
      </div>
    </div>
  );
}

export default ComingUp;
