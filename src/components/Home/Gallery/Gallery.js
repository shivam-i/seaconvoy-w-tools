import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';

function Gallery() {
  const images = [
    './images/home-page/gallery/Seaconvoy_010224_1.png',
    './images/home-page/gallery/Seaconvoy_010224_2.jpg',
    './images/home-page/gallery/Seaconvoy_010224_3.png',
    './images/home-page/gallery/Seaconvoy_010224_4.JPG',
    './images/home-page/gallery/Seaconvoy_010224_5.JPG',
    './images/home-page/gallery/Seaconvoy_010224_6.JPG',
    './images/home-page/gallery/Seaconvoy_010224_7.JPG',
    './images/home-page/gallery/Seaconvoy_010224_8.JPG',
    './images/home-page/gallery/Seaconvoy_010224_9.jpg',
  ];
  const imagesMobile = [
    './images/home-page/gallery/Seaconvoy_010224_1.png',
    './images/home-page/gallery/Seaconvoy_010224_2.jpg',
    './images/home-page/gallery/Seaconvoy_010224_3.png',
    './images/home-page/gallery/Seaconvoy_010224_4.JPG',
    './images/home-page/gallery/Seaconvoy_010224_5.JPG',
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-section">
        <img className='gallery-heading' src="./images/home-page/gallery/gallery-heading.svg" alt=""></img>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Gallery item ${i + 1}`} width="425" height="270" />
            </div>
          ))}
        </div>

        <Link className='more-images-btn' to="/gallery">More Images</Link>
        <div className='sized-box'></div>
      </div>
      <div className="gallery-section-mobile">
        <img className='gallery-heading' src="./images/home-page/gallery/gallery-heading.svg" alt=""></img>
        <div className="gallery-grid">
          {imagesMobile.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Gallery item ${i + 1}`} width="425" height="270" />
            </div>
          ))}
        </div>

        <Link className='more-images-btn' to="/gallery">More Images</Link>
        

        <div className='sized-box'></div>
      </div>
    </div>
  );
}

export default Gallery;
