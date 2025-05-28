import React from "react";
import "./Services.css";
import Third from '../../components/assets/Third-Party-Inspection.webp';

const services = [
  { title: "THIRD PARTY INSPECTION", image: Third },
  { title: "LIFTING EQUIPMENT INSPECTION", image: Third },
  { title: "SAFETY TRAINING SERVICES", image: Third },
  { title: "OPERATOR TRAINING & ASSESSMENT", image: Third },
  { title: "ADVANCED & CONVENTIONAL NDT", image: Third },
  { title: "MARINE INSPECTION SERVICES", image: Third },
  { title: "CALIBRATION & REPAIR SERVICES", image: Third },
  { title: "MATERIAL TESTING LABORATORY", image: Third },
];

// ⬇️ Card Component with alternating color support
const ServiceCard = ({ title, image, variant }) => {
  const isBlue = variant === "blue";
  return (
    <div className={`service-card ${isBlue ? "blue-card" : "gray-card"}`}>
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
        <button className="see-all-btn">
          View All <span className="arrow">↗</span>
        </button>
      </div>
    </div>
  );
};

export default Services;
