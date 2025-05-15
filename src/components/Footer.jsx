import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-social">
        <div className="social-icons">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
      </div>
      
      <div className="footer-line english-text">123 Culinary Avenue • Open Tue-Sun, 5PM-11PM</div>
      <div className="footer-line arabic-text">شارع الطهي ١٢٣ • مفتوح من الثلاثاء إلى الأحد، 5 مساءً - 11 ليلاً</div>
      <div className="footer-line english-text">Reservations: (555) 123-4567</div>
      <div className="footer-line arabic-text">للحجوزات: ٥٥٥ ١٢٣ ٤٥٦٧</div>
    </footer>
  );
};

export default Footer;