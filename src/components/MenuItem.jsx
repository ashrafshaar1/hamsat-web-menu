import React from "react";
import "../styles/MenuItem.css";

const MenuItem = ({ item, openModal, layoutType }) => {
  return (
    <div 
      className={`menu-item ${layoutType}-item`}
      onClick={() => openModal(
        item.englishTitle,
        item.arabicTitle,
        item.price,
        item.englishDescription,
        item.arabicDescription,
        item.image
      )}
    >
      <img src={item.image} alt={item.englishTitle} className="menu-item-img" />
<<<<<<< HEAD
      
      <div className="menu-item-content">
        {layoutType === 'food' ? (
          <>
            <div className="price">{item.price}</div>
            <h3 className="english-title">{item.englishTitle}</h3>
            {item.englishDescription && <p className="english-text">{item.englishDescription}</p>}
            <div className="arabic-title">{item.arabicTitle}</div>
            {item.arabicDescription && <p className="arabic-text">{item.arabicDescription}</p>}
          </>
        ) : (
          <>
            <div className="arabic-title">{item.arabicTitle}</div>
            <h3 className="english-title">{item.englishTitle}</h3>
            <div className="price">{item.price}</div>
          </>
        )}
=======
      <div className="menu-item-content">
        <div className="menu-item-text">
          <div className="price-container">
            <h3 className="english-title">{item.englishTitle}</h3>
            <div className="price">{item.price}</div>
          </div>
          {item.englishDescription && (
            <p className="english-text">{item.englishDescription}</p>
          )}
          <div className="arabic-title">{item.arabicTitle}</div>
          {item.arabicDescription && (
            <p className="arabic-text">{item.arabicDescription}</p>
          )}
        </div>
>>>>>>> 1c390feddcc2406ba2f577bb05ad5f564e9e2848
      </div>
    </div>
  );
};

export default MenuItem;
