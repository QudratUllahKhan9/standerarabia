import React from "react";
import "./Clients.css";
import aramco1 from "../assets/clients-6.webp";
import aramco2 from "../assets/clients-8.webp";
import aramco3 from "../assets/clients-2.webp";
import aramco4 from "../assets/clients-4.webp";
import aramco5 from "../assets/clients-10.webp";
import aramco6 from "../assets/clients-5.webp";


const Clients = () => {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <p className="clients-subtitle">THEY BELIEVE IN US</p>
        <h2 className="clients-title">Meet Our Clients</h2>
      </div>
      <div className="clients-logos">
        {[aramco1, aramco2, aramco3, aramco4, aramco5, aramco6].map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
