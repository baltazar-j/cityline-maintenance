import { FaPhoneAlt, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md'; // Import 24/7 icon.
import { Link } from 'react-router-dom'; // For navigation between pages
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Info */}
        <div className="footer-contact">
          <div className="contact-item">
            <MdAccessTime className="contact-icon" />
            <span>Open Year Round - 24/7</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>citylinemaintenance@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+1 (604) 499-7178</span>
          </div>
          <div className="contact-item social-icons">
          <a href="">
            <FaInstagram className="contact-icon" />
          </a>
          <a href="">
            <FaLinkedin className="contact-icon" />
          </a>
          <a href="">
            <FaFacebook className="contact-icon" />
          </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Logo */}
        <div className="footer-logo">
          <img src="/CLM-Footer.svg" alt="Cityline Maintenance Logo" className="footer-logo-img" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
