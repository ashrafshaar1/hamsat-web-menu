import React from 'react';
import '../styles/MenuItem.css';

const MenuItem = ({ item, openModal }) => {
  return (
    <div className="menu-item" onClick={() => openModal(
      item.englishTitle,
      item.arabicTitle,
      item.price,
      item.englishDescription,
      item.arabicDescription,
      item.image
    )}>
      <img src={item.image} alt={item.englishTitle} className="menu-item-img" />
      <div className="menu-item-content">
        <div className="menu-item-text">
          <h3 className="english-text">{item.englishTitle}<span className="price">{item.price}</span></h3>
          {item.englishDescription && <p className="english-text">{item.englishDescription}</p>}
        </div>
        <div className="arabic-text">
          <div className="arabic-title arabic-text">{item.arabicTitle}</div>
          {item.arabicDescription && <p className="arabic-text">{item.arabicDescription}</p>}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;