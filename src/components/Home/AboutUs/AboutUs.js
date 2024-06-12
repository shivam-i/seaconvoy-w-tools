import React from 'react';
import { Link } from 'react-router-dom';
import './about-us.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-heading">
        <img className='heading-mobile' src="./images/home-page/about-us/about-us-heading-mobile.png" alt="" />
        <img className='heading-pc' src="./images/home-page/about-us/about-us-bg.png" alt="" />
      </div>
      <div className="about-us-content">
        <h3>Experts in marine technology, engineering, and consultation</h3>
        <p>The team members exposure at IIT Madras for a decade in the fields of hydrodynamic testing, validation of designs, consulting for shipyards and boat builders, design approvals, and product development related to defense application for powering of amphibious vehicles brings in invaluable comprehensive professional resource.</p>

        <div className="learn-more-container">
        <Link to="/about" className='learn-more-btn'>Learn More</Link>
          
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
