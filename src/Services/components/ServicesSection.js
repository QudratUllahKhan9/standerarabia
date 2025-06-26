import React from 'react';
import './ServicesSection.css';
import thired from '../assets/Third-Party-Inspection-Services.webp'
const services = [
  {
    title: "THIRD PARTY INSPECTION",
    image: thired,
  },
  {
    title: "SAFETY TRAINING SERVICE",
    image: thired,
  },
  {
    title: "LIFTING EQUIPMENT INSPECTION",
    image: thired,
  },
   {
    title: "THIRD PARTY INSPECTION",
    image: thired,
  },
  {
    title: "SAFETY TRAINING SERVICE",
    image: thired,
  },
  {
    title: "LIFTING EQUIPMENT INSPECTION",
    image: thired,
  }, {
    title: "THIRD PARTY INSPECTION",
    image: thired,
  },
  {
    title: "SAFETY TRAINING SERVICE",
    image: thired,
  },
  {
    title: "LIFTING EQUIPMENT INSPECTION",
    image: thired,
  },
  // Add more if needed
];

const ServicesSection = () => {
  return (
    <section className="services-section">
     
      <div className="cards-container">
         <div className="left-content">
        <p className="small-heading">WHAT CAN WE DO</p>
        <h1>Our Services at a glance</h1>
      </div>
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="card-title">{service.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
