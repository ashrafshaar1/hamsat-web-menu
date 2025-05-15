import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <img src="uploads/logo.png" alt="Hamsat Logo" className="logo-image" />

      {/* Arabic Title */}
      <h3 className="arabic-header-title">.ملاذ الذوق الرفيع</h3>
      
      {/* Social Icons in Header */}
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
      
      <nav>
        <a href="#starters">Starters | مقبلات</a>
        <a href="#salads">Salads | السلطات </a>
        <a href="#maincourse">Main Courses | الأطباق الرئيسية</a>
        <a href="#opensandwiches">Open Sandwiches | ساندويتش مفتوحة</a>
        <a href="#beverage">Beverage | المشروبات</a>
        <a href="#coffeedrinks">coffee Drinks | مشروبات القهوة</a>
        <a href="#juicecocktail">Juice Cocktail | عصير كوكتيل</a>
        <a href="#softdrinks">Soft Drinks | المشروبات الغازية</a>
      </nav>
    </header>
  );
};

export default Header;