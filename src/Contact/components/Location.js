import React from "react";

const Location = () => {
  return (
    <div style={styles.container}>
     
      <div style={styles.mapWrapper}>
        <iframe
          title="Standard Arabia Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.708349896635!2d49.62977197529741!3d27.017611647840742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a17e040bd6ff%3A0x39573e56cf18dfac!2sStandard%20Arabia%20Inspection%20Co.%20Ltd!5e0!3m2!1sen!2ssa!4v1716615275447!5m2!1sen!2ssa"
          width="100%"
          height="600"
          style={{ border: 0,  }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    
    </div>
  );
};

const styles = {
  container: {
   
  },
  mapWrapper: {
    // marginTop: "20px",
    // borderRadius: "10px",
    overflow: "hidden",
  },
  rating: {
    // marginTop: "10px",
    fontSize: "16px",
    color: "#333",
  },
  directions: {
    display: "inline-block",
    // marginTop: "10px",
    backgroundColor: "#4285F4",
    color: "#fff",
    // padding: "10px 16px",
    // borderRadius: "6px",
    textDecoration: "none",
  },
};

export default Location;
