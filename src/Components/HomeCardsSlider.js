import React, { useRef, useEffect, useState } from "react";
import "../HomeCardsSlider.css";
import {
  FaFlask,
  FaStethoscope,
  FaBookOpen,
  FaBrain,
  FaGift,
  FaTrophy,
  FaLaptop,
  FaUserGraduate,
} from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "JEE Preparation",
    icon: <FaFlask className="icon jee" />,
    description: "Comprehensive JEE Main + Advanced modules, live classes & weekly tests.",
    action: "Explore JEE Course",
  },
  {
    title: "NEET 2025",
    icon: <FaStethoscope className="icon neet" />,
    description: "Full syllabus course with mock tests & recorded lectures for NEET.",
    action: "Start NEET Now",
  },
  {
    title: "Class 12 Boards",
    icon: <FaBookOpen className="icon boards" />,
    description: "Complete syllabus coverage with quality e-notes and revision tools.",
    action: "Learn Class 12",
  },
  {
    title: "Crash Courses",
    icon: <FaBrain className="icon crash" />,
    description: "High-impact short-term revision batches for JEE/NEET/Boards.",
    action: "Join Crash Now",
  },
  {
    title: "1-on-1 Mentorship",
    icon: <FaUserGraduate className="icon mentorship" />,
    description: "Get personalized guidance from top mentors to boost your performance.",
    action: "Book a Mentor",
  },
  {
    title: "Flat 30% Off!",
    icon: <FaGift className="icon offer" />,
    description: "Enroll today and unlock a limited time 30% discount on all courses.",
    action: "Grab Offer",
  },
  {
    title: "Free Test Series",
    icon: <FaTrophy className="icon test" />,
    description: "Take full-length AIR-based mocks from Resonance, Allen & FIITJEE.",
    action: "Try Test Now",
  },
  {
    title: "24x7 Website Access",
    icon: <FaLaptop className="icon access" />,
    description: "Access courses, notes and videos anytime on web or mobile app.",
    action: "Visit Portal",
  },
];

const HomeCardsSlider = () => {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(1);

  const scrollSlider = (step) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          setDirection(-1);
        } else if (scrollLeft <= 10) {
          setDirection(1);
        }

        scrollSlider(340 * direction);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="card-slider-container">
      <div className="card-slider-wrapper" ref={sliderRef}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <button className="card-button">{card.action}</button>
          </div>
        ))}
      </div>

      <div className="nav-buttons-container">
        <button className="nav-button" onClick={() => scrollSlider(-340)}>
          <ChevronLeft size={26} />
        </button>
        <button className="nav-button" onClick={() => scrollSlider(340)}>
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};

export default HomeCardsSlider;
