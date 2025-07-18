import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">AmitEdge </h2>
          <p>Empowering students for JEE, NEET, and Board excellence.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@amitedge.in</p>
          <p>🏢 New Delhi, India</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/facebook.webp`} alt="Facebook" /></a>
            <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/instagram.webp`} alt="Instagram" /></a>
            <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/youtube.webp`} alt="YouTube" /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EduPrime. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
