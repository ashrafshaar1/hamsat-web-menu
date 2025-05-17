import React from 'react';
import '../styles/MenuItem.css';

const MenuItem = ({ item, openModal }) => {
  return (
    <div
      className="menu-item"
      onClick={() =>
        openModal(
          item.englishTitle,
          item.arabicTitle,
          item.price,
          item.englishDescription,
          item.arabicDescription,
          item.image
        )
      }
    >
      <img
        src={item.image}
        alt={item.englishTitle}
        className="menu-item-img"
      />
      <div className="menu-item-content">
        <div className="menu-item-text">
          <div className="price-container">
            <h3 className="english-title">{item.englishTitle}</h3>
            <div className="arabic-title">{item.arabicTitle}</div>
            <div className="price">{item.price}</div>
          </div>
          {item.englishDescription && (
            <p className="english-text">{item.englishDescription}</p>
          )}
        </div>
        {item.arabicDescription && (
          <p className="arabic-text">{item.arabicDescription}</p>
        )}
      </div>
    </div>
  );
};

export default MenuItem;