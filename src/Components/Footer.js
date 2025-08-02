import '../Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-left">
          {/* <div className="logo">AmitEdge</div> */}
           <img src={`${process.env.PUBLIC_URL}/logo.png`} className="footer-logo" alt='Image not found'/>
           
          <p className="tagline">
            Empowering students for JEE, NEET, and Board excellence.
          </p>
          <p>
            <FaMapMarkerAlt className="icon" />
            1/50-CA-50 Surendranagar, Aligarh, Uttar Pradesh – 202001
          </p>
          <p>
            <FaPhoneAlt className="icon" />
            +91 81910 64692
          </p>
          <p>
            <FaEnvelope className="icon" />
            info@amitedge.in
          </p>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/facebook.webp`} alt="Facebook" /></a>
              <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/instagram.webp`} alt="Instagram" /></a>
              <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/youtube.webp`} alt="YouTube" /></a>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <p className="copyright">
            © {new Date().getFullYear()} AmitEdge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
