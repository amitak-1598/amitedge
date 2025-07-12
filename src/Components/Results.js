import React from 'react';
import '../Results.css';

const Results = () => {
  const toppers = [
    {
      name: 'Riya Sharma',
      exam: 'JEE Advanced',
      rank: 'AIR 112',
      image: '/images/riya.jpg'
    },
    {
      name: 'Amit Verma',
      exam: 'NEET',
      rank: 'Score: 685 / 720',
      image: '/images/amit.jpg'
    },
    {
      name: 'Divya Singh',
      exam: 'CBSE 12th',
      rank: '97.8%',
      image: '/images/divya.jpg'
    },
    {
      name: 'Rahul Jain',
      exam: 'JEE Mains',
      rank: 'AIR 203',
      image: '/images/rahul.jpg'
    },
  ];

  return (
    <section className="results-section" id="results">
      <h2>Our Achievers</h2>
      <div className="results-grid">
        {toppers.map((topper, index) => (
          <div className="result-card" key={index}>
            <img src={topper.image} alt={topper.name} className="student-img" />
            <h3>{topper.name}</h3>
            <p>{topper.exam}</p>
            <span>{topper.rank}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
