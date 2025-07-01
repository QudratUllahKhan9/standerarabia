import React from "react";
import "./President.css";
import teamImage from "../asstes/president.webp"; // replace with your actual image path

const President = () => {
  return (
    <div className="about-container-president">
      <div className="image-wrapper-president">
        <img
          src={teamImage}
          alt="Standard Arabia Team"
          className="team-image-president"
        />
      </div>
      <div className="text-section-president">
        <h2 className="about-title-president">Message by the President</h2>
        <p className="about-description-president">
          Our Business Model Is Based On Our Experience And Drive To Assure
          Quality And Safety On All Our Work Sites. There Is A Great Need For
          International Levels Of Inspection Which Blend Into The Current Work
          Culture And Cause Minimum Hindrance To The Progress Of The Project. We
          Believe, The Code Of Ethics And Business Conduct Is Our Guiding
          Factor. No Business Can Achieve Its Full Potential Without Regard For
          The Right Conduct And We Strive To Enforce The Same In Our Internal
          Affairs As Well. Safety And Efficiency Are Group Endeavors, And We Are
          Individually Responsible For Upholding The Integrity Of Our Business.
          We Promote Awareness With Educational Campaigns Among Employees Toward
          The Goal Of Eliminating Risks That Create Hazards. “Global Trends Are
          Generating Rapid Growth In A Number Of Sectors. Our Business Is
          Strategically Placed To Support Our Customers’ Challenges With Proven
          Technology, Application Optimization And Solutions That Are Reliable
          And Cost-Effective”
        </p>
        <p className="about-label-president">Ali S. Al-Shammari</p>

      </div>
    </div>
  );
};

export default President;
