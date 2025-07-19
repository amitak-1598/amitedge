import React from "react";
import "../WhyChooseUs.css";
import { FaChalkboardTeacher, FaClock, FaMobileAlt, FaUserShield } from "react-icons/fa";

const benefits = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    description: "Learn from experienced teachers who specialize in JEE preparation.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Schedule",
    description: "Access classes and materials any time, at your own pace.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Learn Anywhere",
    description: "Study on mobile, desktop, or tablet anytime, anywhere.",
  },
  {
    icon: <FaUserShield />,
    title: "Doubt Support",
    description: "Ask questions 24x7 and get answers from our expert team.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <h2 className="why-title">Why Choose Our Coaching?</h2>
      <div className="why-cards">
        {benefits.map((benefit, index) => (
          <div className="why-card" key={index}>
            <div className="icon">{benefit.icon}</div>
            <h3 className="title">{benefit.title}</h3>
            <p className="description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
