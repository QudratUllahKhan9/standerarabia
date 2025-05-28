import React from 'react';
import './Footer.css'; // Make sure to create this CSS file
import Saudi_Vision_2030 from '../Verification/assets/img/logo-f.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Saudi_Vision_2030} alt="Standard Arabia Logo" className="footer-logo-img" />
          <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center' ,}}>
          <p style={{letterSpacing:1}}>Standard Arabia is TVTC, Saudi Arabia Approved Training Center accredited by International Agency.</p>
          </div>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Training Programs</h3>
          <ul>
            <li>IPAF Approved Training Program</li>
            <li>IADC Approved Training Program</li>
            <li>OSHA Approved Training Program</li>
            <li>NEBOSH Approved Training Program</li>
            <li>TVTC Approved Training Program</li>
            <li>Rigging & Lifting Training Program</li>
            <li>First Aid & BLS Training Program</li>
            <li>IOSH Approved Training Program</li>
            <li>PASMA Approved Training Program</li>
          </ul>
        </div>

        <div className="footer-contact" 
        style={{
        height:'50%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
       
        }}>
          <h3 className='Contact-Us-Text'>Contact Us</h3>
          <div className='set-contact'>
            <i className="fas fa-phone text-white"></i>
            <div style={{marginLeft:10}}>
            <p>+966–13–3670801</p>
            <p>+966–53–9461485</p>
            </div>
            </div>
       
            <div className='set-contact'>
            <i className="fas fa-envelope text-white"></i> 
            <div style={{marginLeft:10}}>
            <p>admin@standardarabia.com</p>
            <p>info@standardarabia.com</p>
            </div>
            </div>

             <div className='set-contact'>
            <i className="fas fa-map-marker-alt text-white"></i>
            <div style={{marginLeft:10}}>
            <p>  P.O. Box 10353, Al Jubail 31961, Support Industrial Zone, Jubail, Kingdom of Saudi Arabia</p>
          
            </div>
            </div>
  
        </div>
      </div>
         
      <div className="footer-bottom-div">
           <div className="footer-bottom">
        <p>Standard Arabia Inspection Co © 2024 / All Rights Reserved</p>
        <p>Designed By BM Softtech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
