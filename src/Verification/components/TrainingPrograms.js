import React from 'react';

const TrainingPrograms = () => {
  const programs = [
    "IPAF Approved Training Program",
    "IADC Approved Training Program",
    "OSHA Approved Training Program",
    "NEBOSH Approved Training Program",
    "TVTC Approved Training Program",
    "Rigging & Lifting Training Program",
    "First Aid & BLS Training Program",
    "IOSH Approved Training Program",
    "PASMA Approved Training Program"
  ];

  return (
    <section className="training-programs">
      <h2>Training Programs</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            {program}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingPrograms;