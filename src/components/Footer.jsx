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
      
      <div className="footer-line english-text">Qabrechmoun, Binnay road, Mega center • Open Mon-Sun, 12PM-1AM</div>
      <div className="footer-line arabic-text">قبرشمون، طريق البنيه، مركز ميجا • مفتوح من الإثنين إلى الأحد، من الساعة 12 ظهرًا حتى 1 صباحًا</div>
      <div className="footer-line english-text">Reservations: 76 568 531</div>
      <div className="footer-line arabic-text">للحجوزات: 76 568 531</div>
      <div className="footer-line english-text">© 2025 HAMASAT. All Rights Reserved.</div>
      <div className="footer-credit">Designed and Published by ECLIPTIX SOOCIAL.</div>
    </footer>
  );
};

export default Footer;