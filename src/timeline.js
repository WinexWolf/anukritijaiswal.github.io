import React from "react";
import "./timeline.css"; // Make sure to import your CSS file
import smartTwigs from "./images/st.png"; // Import the image using require
import pwc from "./images/pwc.jpg";
import cmu from "./images/cmu.png";
import locknstock from "./images/locknstock.png";

const Timeline = () => {
  const timelineData = [
    {
      year: "2010",
      label: "Event 3",
      imageSrc: cmu,
      description: "Description of Event 3 goes here.",
    },
    {
      year: "2000",
      label: "Event 1",
      imageSrc: smartTwigs,
      description: "Description of Event 1 goes here.",
    },
    {
      year: "2005",
      label: "Event 2",
      imageSrc: pwc,
      description: "Description of Event 2 goes here.",
    },

    {
      year: "2015",
      label: "Event 4",
      imageSrc: locknstock,
      description: "Description of Event 4 goes here.",
    }
  ];

  return (
    <div className="timeline">
      {timelineData.map((event, index) => (
        <div className="timeline-event" key={index}>
          <div className="timeline-line"></div>
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
