import React from 'react';
import './Certificates.css';
import certificateImage1 from '../assets/news.webp'; // Adjust path as needed
import certificateImage2 from '../assets/news1.webp'; // Adjust path as needed
import certificateImage3 from '../assets/news2.webp'; // Adjust path as needed
import certificateImage4 from '../assets/news3.webp'; // Adjust path as needed


const certificates = [
  {
    id: 1,
    image: certificateImage1,
    date: "09-March-2020",
    title: "Standard Arabia Approved as AOSH UK Accredited Center",
  
  },
  {
    id: 2,
    image: certificateImage2,
    date: "02-October-2019",
    title: "Certified as a member of the LEEA",

  },
  {
    id: 3,
    image: certificateImage3,
    date: "15-July-2019",
    title: "Awarded with SABIC 5Y Master Agreement",
 
  },
  {
    id: 4,
    image: certificateImage4,
    date: "16-July-2019",
    title: "Signed Contract with Maaden Waad Al Shamal",
 
  }
];

const Certificates = () => {
  return (
    <div className="certificates-container">
      {certificates.map((cert) => (
        <div key={cert.id} className="certificate-container">
          <div className="certificate-wrapper">
            <div className="side-line"></div>
            <div className="certificate-image">
              <img src={cert.image} alt={`Certificate ${cert.id}`} />
            </div>
          </div>
          
          <div className="certificate-text">
            <div className="certificate-date">{cert.date}</div>
            <h3 className="certificate-title">{cert.title}</h3>
            {/* <p className="certificate-description">{cert.description}</p> */}
            
            {cert.items && cert.items.length > 0 && (
              <ul className="certificate-items">
                {cert.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;