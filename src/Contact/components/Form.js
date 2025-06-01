import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Form.css';

const Form = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [checked, setChecked] = useState(false);
  const handleRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Write Us" rows="5" />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '10px 15px',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            boxShadow: '0 0 3px rgba(0,0,0,0.1)',
            fontFamily: 'Arial, sans-serif',
            height: 90, marginBottom: 30
          }}>
            {/* Left Section */}
            <div style={{ display: 'flex', alignItems: 'center', }}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                style={{ width: 30, height: 30, marginRight: 10, marginTop: 30 }}
              />
              <span style={{ fontSize: '16px', color: '#000' }}>I'm not a robot</span>
            </div>

            {/* Right Section */}
            <div style={{ textAlign: 'right', fontSize: '10px', color: '#777' }}>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                style={{ width: 30, marginBottom: 2 }}
              />
              <div>reCAPTCHA</div>
              <div>
                <a href="#" style={{ color: '#777', textDecoration: 'underline', marginRight: 4 }}>Privacy</a>
                <a href="#" style={{ color: '#777', textDecoration: 'underline' }}>Terms</a>
              </div>
            </div>
          </div>


          <button className="send-btn">
            Send Message
          </button>
        </div>

        <div className="contact-text">
          <div className="contact-text-size">
            <p className="intro">// CALL US, WRITE US, OR KNOCK ON OUR DOOR</p>
            <h3>We Would Be Happy </h3>
            <h3>To Meet You And Learn </h3>
            <h3>All About Your</h3>
            <h3>Business</h3>

            <p>Friday: Closed</p>
            <p>Saturday - Thursday: 7AM - 5PM</p>
          </div>
        </div>
      </div>

      <div className="info-boxes">
        <div className="info-box">
                  <div style={{ width: '23%', height: 70, borderRadius: 40,marginBottom:20, 
                  backgroundColor: 'white', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fas fa-map-marker-alt" style={{ color: '#004a98',fontSize:25 }}></i>
          </div>
          <h3 className='give-us-text'>We're On The Map</h3>
          <p>
            P.O. Box 10353, Al Jubail 31961,
            <br />
            Support Industrial Zone, Jubail,
            <br />
            Kingdom of Saudi Arabia.
          </p>
        </div>

        <div className="info-box">
          <div style={{ width: '23%', height: 70, borderRadius: 40,marginBottom:20, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-phone"  style={{ color: '#004a98',fontSize:25 }}></i>
          </div>
          <h3 className='give-us-text'>Give Us A Call</h3>
          <p>
            +966-13-3670801
            <br />
            +966-53-9461485
          </p>
        </div>

        <div className="info-box">
         
     


             <div style={{ width: '23%', height: 70, borderRadius: 40,marginBottom:20, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <i className="fas fa-envelope" style={{ color: '#004a98',fontSize:25 }}></i>
          </div>
          <h3 className='give-us-text'>Write Us</h3>
          <p>
            info@standardarabia.com
            <br />
            admin@standardarabia.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
