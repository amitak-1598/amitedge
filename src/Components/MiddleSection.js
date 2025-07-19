import React from 'react';
import '../MiddleSection.css';


const MiddleSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Crack JEE | NEET | Boards with Confidence</h1>
          <p>
            Join India's leading coaching platform with expert faculty, 
            personalized mentorship, and a proven track record.
          </p>
          <a href="#courses" className="hero-btn">Explore Courses</a>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/coaching.jpg`} alt="Students preparing" />
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
