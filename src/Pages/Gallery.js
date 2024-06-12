import React from "react";
import HerosSection from "../components/HerosSection/HerosSection";
import Footer from "../components/Footer/Footer";
import './main-gallery.css';


function Gallery() {

    const images = [
        './images/gallery-page/Seaconvoy_010224_1.png',
        './images/gallery-page/Seaconvoy_010224_2.jpg',
        './images/gallery-page/Seaconvoy_010224_3.png',
        './images/gallery-page/Seaconvoy_010224_4.JPG',
        './images/gallery-page/Seaconvoy_010224_5.JPG',
        './images/gallery-page/Seaconvoy_010224_6.JPG',
        './images/gallery-page/Seaconvoy_010224_7.JPG',
        './images/gallery-page/Seaconvoy_010224_8.JPG',
        './images/gallery-page/Seaconvoy_010224_9.jpg',
        './images/gallery-page/Seaconvoy_010224_10.jpg',
        './images/gallery-page/Seaconvoy_010224_11.jpg',
        './images/gallery-page/Seaconvoy_010224_12.jpg',
        './images/gallery-page/Seaconvoy_010224_13.jpg',
        './images/gallery-page/Seaconvoy_010224_14.jpg',

      ];
    
    return (
      <div className="mgallery-container">
        <HerosSection imgUrl="./images/gallery/heros-section/heros-section-bg.png" imgUrlMobile="./images/gallery/heros-section/heros-section-bg-mobile.png" titleUrl="./images/gallery/heros-section/gallery-heading.svg" titleUrlMobile="./images/gallery/heros-section/gallery-heading-mobile.svg"/> 

        <div className="mgallery-section">
    
        <center><div className="mgallery-grid">
            {images.map((src, i) => (
            <div className="mgallery-item" key={i}>
                <img src={src} alt={`Gallery item ${i + 1}`} width="600" height="400" />
            </div>    
            ))}
        </div>
        </center>

        <div className='sized-box-gallery-page'></div>
        </div>

        <Footer />
      </div>
    );
  }
  
  export default Gallery;