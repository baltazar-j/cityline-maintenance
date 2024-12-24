import { FaPhoneAlt, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md'; // Import 24/7 icon.
import "./ContactBar.css"
// import "../components/ServiceCard.css";

const ContactBar = () => {
  return (
    <div className="contact-bar">
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
        <a href="https://www.instagram.com/johnbaltazarr/?api=postMessage&hl=en">
          <FaInstagram className="contact-icon" />
        </a>
        <a href="https://www.instagram.com/johnbaltazarr/?api=postMessage&hl=en">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="https://www.instagram.com/johnbaltazarr/?api=postMessage&hl=en">
          <FaFacebook className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
