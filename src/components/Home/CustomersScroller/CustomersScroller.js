import React from 'react';
import './customers-scroller.css';

function CustomersScroller() {
  return (
    <div className="our-customers-container">
      <div >
        <center><img src="./images/home-page/our-customers/our-customers-heading.svg" alt="our-customers" className="our-customers-heading" width="700px" /></center>
      </div>

      <div className="our-customers-scroller">
        <div className="scrolling-wrapper">
          <img src="./images/home-page/our-customers/iitm.png" alt="" />
          <img src="./images/home-page/our-customers/niot.png" alt="" />
          <img src="./images/home-page/our-customers/drdo.png" alt="" />
          <img src="./images/home-page/our-customers/mmps.png" alt="" />
          <img src="./images/home-page/our-customers/grse.png" alt="" />
          <img src="./images/home-page/our-customers/sandvik.png" alt="" />
          <img src="./images/home-page/our-customers/md.png" alt="" />
          <img src="./images/home-page/our-customers/garware.png" alt="" />
          {/* Repeat the images for a seamless transition */}
          <img src="./images/home-page/our-customers/iitm.png" alt="" />
          <img src="./images/home-page/our-customers/niot.png" alt="" />
          <img src="./images/home-page/our-customers/drdo.png" alt="" />
          <img src="./images/home-page/our-customers/mmps.png" alt="" />
          <img src="./images/home-page/our-customers/grse.png" alt="" />
          <img src="./images/home-page/our-customers/sandvik.png" alt="" />
          <img src="./images/home-page/our-customers/md.png" alt="" />
          <img src="./images/home-page/our-customers/garware.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CustomersScroller;
