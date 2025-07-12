
import '../Courses.css';

const Courses = () => {
  const courseList = [
    { title: 'JEE Mains + Advanced', description: '2-year program with in-depth concepts and test series.' },
    { title: 'NEET Preparation', description: 'Complete biology, physics, and chemistry with doubt sessions.' },
    { title: 'CBSE Board (11th & 12th)', description: 'Focused subject-wise coaching for Boards + Competitive.' },
    { title: 'Crash Courses', description: 'Quick revision courses before exams with test practice.' },
  ];

  return (
    <section className="courses-section" id="courses">
      <h2>Our Courses</h2>
      <div className="courses-grid">
        {courseList.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
