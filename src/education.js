import React from "react";
import "./education.css";

import cmusv from "./images/cmusv.jpg"; // Import your image files
import bits from "./images/bits.jpg";

const Education = () => {
  const educationData = [
    {
      institution: "Carnegie Mellon University",
      degree: "Master of Science in Software Engineering",
      year: "2023 - 2024",
      description1: "Foundations of Software Engineering",
      description2: "Data Science for Software Engineering",
      description3: "Decision Analysis & Economics for Software Engineering",
      description4: "Software Design & Architecture",
      description5: "Software Requirements & Interaction Design",
      image: cmusv, // Use the imported image
    },
    {
      institution: "BITS Pilani Dubai",
      degree: "Bachelor of Engineering in Computer Science",
      year: "2018 - 2022",
      description1: "Object Oriented Programming",
      description2: "Operating Systems",
      description3: "Machine Learning",
      description4: "Computer Architecture",
      description5: "Databases Systems",
      image: bits, // Use the imported image
    },
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((education, index) => (
          <div key={index} className="education-item">
            <img
              src={education.image}
              alt={education.institution}
              className="education-image"
            />
            <div className="education-content">
              <h3 className="institution">{education.institution}</h3>
              <p className="degree">{education.degree}</p>
              <p className="year">{education.year}</p>
              <p className="skill-item">{education.description1}</p>
              <p className="skill-item">{education.description2}</p>
              <p className="skill-item">{education.description3}</p>
              <p className="skill-item">{education.description4}</p>
              <p className="skill-item">{education.description5}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
