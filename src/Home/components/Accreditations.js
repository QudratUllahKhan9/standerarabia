import React from "react";
import "./Accreditations.css";

// Example image import (you can import more as needed)
import accred1 from '../assets/acceretion-5.webp';
import accred2 from '../assets/acceretion-21.webp';
import accred3 from '../assets/acceretion-18.webp';
import accred4 from '../assets/acceretion-11.webp';
import accred5 from '../assets/acceretion-20 (1).webp';
import accred6 from '../assets/acceretion-16.webp'; 
import accred7 from '../assets/acceretion-11.webp';
import accred8 from '../assets/acceretion-11.webp';
import accred9 from '../assets/acceretion-11.webp';
import accred10 from '../assets/acceretion-11.webp';
import accred11 from '../assets/acceretion-11.webp';
import accred12 from '../assets/acceretion-11.webp';
import accred13 from '../assets/acceretion-11.webp';
import accred14 from '../assets/acceretion-11.webp';
import accred15 from '../assets/acceretion-11.webp';
import accred16 from '../assets/acceretion-11.webp';
import accred17 from '../assets/acceretion-11.webp';
import accred18 from '../assets/acceretion-11.webp';
import accred19 from '../assets/acceretion-11.webp';
import accred20 from '../assets/acceretion-11.webp';
import accred21 from '../assets/acceretion-11.webp';
import accred22 from '../assets/acceretion-11.webp';





const accreditationLogos = [
  { img: accred1 },
  { img: accred2 },
  { img: accred3 },
  { img: accred4 },
  { img: accred5 },
  { img: accred6 },
  { img: accred7 },
  { img: accred8 },
  { img: accred9 },
  { img: accred10 },
  { img: accred11 },
  { img: accred12 },
  { img: accred13 },
  { img: accred14 },
  { img: accred15 },
  { img: accred16 },
  { img: accred17 },
  { img: accred18 },
  { img: accred19 },
  { img: accred20 },
  { img: accred21 },
  { img: accred22 },

];
const Accreditations = () => {
  return (
    <section className="accreditations-section">
      <div className="accreditations-left">
        <h3 className="text-style">Our Accreditations</h3>
      </div>
      <div className="accreditations-grid">
        {accreditationLogos.map((logo, index) => (
          <div key={index} className="accreditation-item">
            <img src={logo.img} alt={`Accreditation ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accreditations;
