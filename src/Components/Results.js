import '../Results.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

const Results = () => {
  const toppers = [
    { name: 'Riya Sharma', exam: 'JEE Advanced', rank: 'AIR 112', gender: 'female' },
    { name: 'Amit Verma', exam: 'NEET', rank: 'Score: 685 / 720', gender: 'male' },
    { name: 'Divya Singh', exam: 'CBSE 12th', rank: '97.8%', gender: 'female' },
    { name: 'Rahul Jain', exam: 'JEE Mains', rank: 'AIR 203', gender: 'male' },
    { name: 'Sneha Kapoor', exam: 'NEET', rank: 'Score: 682 / 720', gender: 'female' }
  ];

  return (
    <section className="results-section" id="results">
      <h2>Our Achievers</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 }
        }}
        className="results-slider"
      >
        {toppers.map((topper, index) => (
          <SwiperSlide key={index}>
            <div className="result-card">
              <div className="student-icon-container">
                <FontAwesomeIcon
                  icon={topper.gender === 'male' ? faMale : faFemale}
                  className="student-icon"
                />
              </div>
              <h3>{topper.name}</h3>
              <p>{topper.exam}</p>
              <span>{topper.rank}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Results;
