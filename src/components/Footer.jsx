import { Link } from 'react-router-dom'; // For navigation between pages
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
            <p>(604) 499-7178</p>
            <p>citylinemaintenance@gmail.com</p>
        </div>
        <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
