import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import { menuData } from './data';
import '../src/styles/Global.css';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    arabicTitle: '',
    price: '',
    description: '',
    arabicDesc: '',
    imageUrl: ''
  });

  const openModal = (title, arabicTitle, price, description, arabicDesc, imageUrl) => {
    setModalData({
      title,
      arabicTitle,
      price,
      description,
      arabicDesc,
      imageUrl
    });
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Smooth scrolling for navigation
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.addEventListener('click', handleSmoothScroll);
    }
    
    return () => {
      const navElement = document.querySelector('nav');
      if (navElement) {
        navElement.removeEventListener('click', handleSmoothScroll);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <div className="overlay">
        <Header />
        
        <main className="content-wrapper">
          {Object.keys(menuData).map(section => (
            <MenuSection 
              key={section}
              section={section}
              title={menuData[section].title}
              description={menuData[section].description}
              items={menuData[section].items}
              openModal={openModal}
            />
          ))}
        </main>
        
        <Footer />
      </div>
      
      <WhatsAppButton />
      <BackToTop />
      
      <Modal 
        isOpen={modalIsOpen}
        onClose={closeModal}
        {...modalData}
      />
    </div>
  );
}

export default App;