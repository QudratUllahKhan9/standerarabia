import React from "react";
import "./Services.css";
import Third from '../../components/assets/third-party-inspection2.webp';
import lifting from '../../components/assets/lifting-equipment-inspection 2.webp';
import safety from '../../components/assets/safety-training2.webp';
import Operator from '../../components/assets/Operator-Certification-Program2.webp';
import advanced from '../../components/assets/advanced-conventional-ndt2.webp';
import marine from '../../components/assets/marine-inspection-services.webp';
import calibration from '../../components/assets/calibration (1).webp';
import material from '../../components/assets/material-testing-laboratory.webp';
import { useNavigate } from 'react-router-dom';







const services = [
  { title: "THIRD PARTY INSPECTION", image: Third },
  { title: "LIFTING EQUIPMENT INSPECTION", image: lifting },
  { title: "SAFETY TRAINING SERVICES", image: safety },
  { title: "OPERATOR TRAINING & ASSESSMENT", image: Operator },
  { title: "ADVANCED & CONVENTIONAL NDT", image: advanced },
  { title: "MARINE INSPECTION SERVICES", image: marine },
  { title: "CALIBRATION & REPAIR SERVICES", image: calibration },
  { title: "MATERIAL TESTING LABORATORY", image: material },
];

// ⬇️ Card Component with alternating color support
const ServiceCard = ({ title, image, variant }) => {
  const isBlue = variant === "blue";
  return (
    <div className={`service-card-home ${isBlue ? "blue-card" : "gray-card"}`}>
      <div className={`service-header ${isBlue ? "gray-header" : "blue-header"}`}>
        {title}
      </div>
      <div className="service-image-wrapper">
        <img src={image} className="service-image" alt={title} />
      </div>
    </div>
  );
};

const Services = () => {
    const navigate = useNavigate();
  
  return (
    <div className="services-container">
      <section className="services-header">
        <h3 className="services-subtitle">WHAT WE OFFER</h3>
        <h1 className="services-title">
          We offer quality service <br />for our clients
        </h1>
      </section>

      <div className="services-grid">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            {...service}
            variant={idx % 2 === 0 ? "blue" : "gray"} // Alternate card colors
          />
        ))}
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className="see-all-btn"  onClick={() => navigate('/Services')}>
          View All <span className="arrow">↗</span>
        </button>
      </div>
    </div>
  );
};

export default Services;
