import React from 'react';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-method">
          <span>Phone:</span>
          <a href="tel:+966-13-3670801">+966-13-3670801</a>
          <a href="tel:+966-53-9461485">+966-53-9461485</a>
        </div>
        <div className="contact-method">
          <span>Email:</span>
          <a href="mailto:admin@standardarabia.com">admin@standardarabia.com</a>
          <a href="mailto:info@standardarabia.com">info@standardarabia.com</a>
        </div>
        <div className="contact-method">
          <span>Address:</span>
          <p>P.O. Box 10353, Al Jubail 31961, Support Industrial Zone, Jubail, Kingdom of Saudi Arabia.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;