import React from 'react';
import NavBar from '../../NavBar/NavBar';
import './hero-section.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="bg-pic-container">
        <img className="hero-section-bg-pic" src="./images/home-page/hero-section/hero-section-bg.png" alt="" />
        <img className="hero-section-bg-pic-mobile" src="./images/home-page/hero-section/hero-section-bg-mobile.png" alt="" />
      <NavBar />
      </div>
      <img className="fastest-growing-seaconvoy" src="./images/home-page/hero-section/hero-section-title.svg" alt="" />
    </div>
  );
}

export default HeroSection;
