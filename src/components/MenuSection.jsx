import React from 'react';
import MenuItem from './MenuItem';
import '../styles/MenuSection.css';

const MenuSection = ({ section, title, description, items, openModal }) => {
  const drinkSections = [
    'freshjuice',
    'hamsatcocktails',
    'coffeedrinks',
    'softdrinks',
    'shisha'
  ];

  const isDrinkSection = drinkSections.includes(section);

  return (
    <section id={section} className="menu-section">
      <h2>{title}</h2>
      <div className="section-description">
        <p className="english-text">{description.english}</p>
        <p className="arabic-text">{description.arabic}</p>
      </div>

      {items.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          openModal={openModal}
          layoutType={isDrinkSection ? 'drink' : 'food'}
        />
      ))}
    </section>
  );
};

export default MenuSection;