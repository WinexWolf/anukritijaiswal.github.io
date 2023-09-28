import React from "react";
import "./timeline.css"; // Make sure to import your CSS file
import smartTwigs from "./images/st.png"; // Import the image using require
import pwc from "./images/pwc.jpg";
import cmu from "./images/cmu.png";
import locknstock from "./images/locknstock.png";


const Timeline = () => {

  const timelineData = [
    {
      year: "Aug'23- Dec'23",
      label: "Graduate Teaching Assistant",
      imageSrc: cmu,
      description:
        "Foundations of Software Engineering (18-652) - Fall '23, supporting students and assisting with course activities.",
    },
    {
      year: "Jun'23- Aug'23",
      label: "Technical Project Management Intern",
      imageSrc: smartTwigs,
      description:
        "Led cross-functional teams, managed project timelines, and provided insights across various software development areas.",
    },
    {
      year: "Jan'22- Dec'22",
      label: "Consultant(Software Developer)",
      imageSrc: pwc,
      description:
        "Developed a React web portal with Google Maps integration on Azure using Docker and integrated MuleSoft backend data.",
    },

    {
      year: "Sep'20- Dec'20",
      label: "Data Science Intern",
      imageSrc: locknstock,
      description:
        "Automated analytics with a Dash-powered smart dashboard, integrated ML models for faster decision-making.",
    },
  ];

  return (
    <div id="timeline" className="timeline">
      {timelineData.map((event, index) => (
        <div className="timeline-event" key={index}>
          <div className="timeline-content">
            <div className="timeline-year">{event.year}</div>
            <h3 className="timeline-label">{event.label}</h3>
            <img
              src={event.imageSrc}
              alt={`Event ${index}`}
              className="timeline-image"
            />
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
