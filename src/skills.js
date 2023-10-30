import React from "react";
import "./skills.css";

const Skills = () => {
  const skillsData = [
    "JavaScript",
    "Java",
    "React",
    "CSS",
    "HTML",
    "Node.js",
    "Next.js",
    "Python",
    "UI/UX Design",
    "Agile Methodology",
    "Git",
    "SQL",
    "Power BI",
    "Jest",
    "NoSQL",
    "Leadership"
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
