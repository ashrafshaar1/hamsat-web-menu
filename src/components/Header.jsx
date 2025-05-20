import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header>
      <img src="uploads/logo.png" alt="Hamsat Logo" className="logo-image" />

      <h3 className="arabic-header-title">.ملاذ الذوق الرفيع</h3>
      
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
        <a href="#hamstspeciality">Hamsat Offers | همسات سبيشليتي</a>
        <a href="#starters">Starters | مقبلات</a>
        <a href="#salads">Salads | السلطات</a>
        <a href="#opensandwiches">Open Sandwiches | ساندويتش مفتوحة</a>
        <a href="#maincourse">Main Courses | الأطباق الرئيسية</a>
        <a href="#desserts">Desserts | الحلويات</a>
        
        <div 
          ref={dropdownRef}
          className={`dropdown ${isDropdownOpen ? 'active' : ''}`}
          onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
          onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
        >
          <a 
            href="#beverage" 
            className="dropdown-toggle"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            Cold Beverages | مشروبات باردة
          </a>
          <div className="dropdown-content">
            <a 
              href="#freshjuice" 
              style={{ '--i': 0 }}
              onClick={closeDropdown}
            >
              Fresh Juice | عصائر طازجة
            </a>
            <a 
              href="#milkshake" 
              style={{ '--i': 1 }}
              onClick={closeDropdown}
            >
              Milkshake | ميلك شيك
            </a>
            <a 
              href="#hamsatcocktails" 
              style={{ '--i': 2 }}
              onClick={closeDropdown}
            >
              Hamsat Cocktails | كوكتيلات همسات
            </a>
          </div>
        </div>
      
        <a href="#coffeedrinks">Hot Beverages | مشروبات ساخنة</a>
        <a href="#softdrinks">Soft Drinks | المشروبات الغازية</a>
        <a href="#shisha">Shisha | شيشا</a>
      </nav>
    </header>
  );
};

export default Header;