import React from "react";
import "./Timeline.css";
import image1 from '../asstes/2015.webp'
const timelineData = [
  {
    year: "2015",
    title: "Introduced",
    description: "First Operation & APPROVAL for Inspection Services",
    image: image1,
    // align: "left"
  },
  {
    year: "2016",
    title: "Operations",
    description: "Operations Started in CENTRAL, WESTERN & NORTHERN Province",
    image: image1,
    // align: "right"
  },
  {
    year: "2017",
    title: "Contract",
    description: "MAADEN Long Term Contract Awarded",
    image: image1,
    // align: "left"
  }
];

const Timeline = () => {
  return (
    <div className="timeline-section">
      <h5 className="subtitle">OUR HISTORY</h5>
      <h2 className="main-title">Reflecting on a Year of Achievement</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            {item.align === "center" ? (
              <>
                <div className="timeline-text left-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-content">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="timeline-year">{item.year}</div>
              </>
            ) : (
              <>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="timeline-text right-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
