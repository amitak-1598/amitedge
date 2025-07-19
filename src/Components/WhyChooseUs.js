import React from "react";
import "../WhyChooseUs.css";
import { FaChalkboardTeacher,  FaTabletAlt, FaBook, FaUserCheck } from "react-icons/fa";

const benefits = [
  {
    icon: <FaChalkboardTeacher className="benefit-icon" />,
    title: "Expert Faculty",
    description: "Learn from IITians, Doctors & experienced teachers with years of track record.",
  },
  {
    icon: <FaTabletAlt className="benefit-icon" />,
    title: "Mobile Friendly",
    description: "Fully responsive content for mobile, tablet & desktop learning.",
  },
  {
    icon: <FaBook className="benefit-icon" />,
    title: "Complete Material",
    description: "Topic-wise notes, question banks, NCERT solutions & mock papers.",
  },
  {
    icon: <FaUserCheck className="benefit-icon" />,
    title: "Student-Centric",
    description: "Live doubt sessions, progress tracking & personal mentorship.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why Choose Amitedge?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            {benefit.icon}
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
