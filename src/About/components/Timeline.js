import React from "react";
import "./Timeline.css";
import image1 from '../asstes/2015.webp'
import image2 from '../asstes/2016.webp'
import image3 from '../asstes/2017.webp'
import image4 from '../asstes/2018.webp'
import image5 from '../asstes/2019.webp'
import image6 from '../asstes/2020.webp'
import image7 from '../asstes/2021.webp'
import image8 from '../asstes/2022.webp'
import image9 from '../asstes/2023.webp'


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
    image: image2,
    // align: "right"
  },
  {
    year: "2017",
    title: "Contract",
    description: "MAADEN Long Term Contract Awarded",
    image: image3,
    // align: "left"
  },
    {
    year: "2018",
    title: "New Department",
    description: "NDT Department was Established",
    image: image4,
    // align: "left"
  },  {
    year: "2019",
    title: "Sabic Agreement",
    description: "Sabic Master AGREEMENT Awarded and Established Testing and Calibration Dept",
    image: image5,
    // align: "left"
  },
   {
    year: "2020",
    title: "Long Term Contract",
    description: "Long Term Contract awarded in Yanbu Region and MARAFIQ outline agreement for Training",
    image: image6,
    // align: "left"
  }, {
    year: "2021",
    title: "Approved from IPAF AND Food Safety",
    description: "Marine & Coating Dept. started IPAF & Food Safety Approval",
    image: image7,
    // align: "left"
  }, {
    year: "2022",
    title: "Established Testing Laboratory",
    description: "Established new laboratory for testing department.",
    image: image8,
    // align: "left"
  }, {
    year: "2023",
    title: "Established Branch Office in NEOM",
    description: "Establishes a new branch in NEOM for the vision 2030.",
    image: image9,
    // align: "left"
  },
  
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
