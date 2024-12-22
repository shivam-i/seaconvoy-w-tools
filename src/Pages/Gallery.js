import React, { useState } from "react";
import HerosSection from "../components/HerosSection/HerosSection";
import Footer from "../components/Footer/Footer";
import GalleryCard from "../components/Gallery/GalleryCard/GalleryCard";
import ImagePopup from "../components/Gallery/ImagePopup/ImagePopup";
import ImageViewer from "../components/Gallery/ImageViewer/ImageViewer";
import './main-gallery.css';

function Gallery() {
    const [showPopup, setShowPopup] = useState(false);
    const [showImageViewer, setShowImageViewer] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentPics, setCurrentPics] = useState([]);

    const images = [
        { 
            src: './images/gallery-page/Seaconvoy_010224_1.png', 
            title: 'Pictures', 
            pics: [
                {src: './images/gallery-page/Seaconvoy_010224_1.png', title: 'Image 1'},
                {src: './images/gallery-page/Seaconvoy_010224_2.jpg', title: 'Image 2'},
                {src: './images/gallery-page/Seaconvoy_010224_3.png', title: 'Image 3'},
                {src: './images/gallery-page/Seaconvoy_010224_4.JPG', title: 'Image 4'},
                {src: './images/gallery-page/Seaconvoy_010224_5.JPG', title: 'Image 5'},
                {src: './images/gallery-page/Seaconvoy_010224_6.JPG', title: 'Image 6'},
                {src: './images/gallery-page/Seaconvoy_010224_7.JPG', title: 'Image 7'},
                {src: './images/gallery-page/Seaconvoy_010224_8.JPG', title: 'Image 8'},
                {src: './images/gallery-page/Seaconvoy_010224_9.jpg', title: 'Image 9'},
                {src: './images/gallery-page/Seaconvoy_010224_10.jpg', title: 'Image 10'},
                {src: './images/gallery-page/Seaconvoy_010224_11.jpg', title: 'Image 11'},
                {src: './images/gallery-page/Seaconvoy_010224_12.jpg', title: 'Image 12'},
                {src: './images/gallery-page/Seaconvoy_010224_13.jpg', title: 'Image 13'},
                {src: './images/gallery-page/Seaconvoy_010224_14.jpg', title: 'Image 14'},
            ]
        }
    ];

    const handleCardClick = (pics) => {
        setCurrentPics(pics);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setCurrentPics([]);
    };

    const handleImageClick = (src) => {
        setCurrentImage(src);
        setShowPopup(false);
        setShowImageViewer(true);
    };

    const handleCloseImageViewer = () => {
        setShowImageViewer(false);
        setCurrentImage(null);
    };

    return (
        <div className="mgallery-container">
            <HerosSection 
                imgUrl="./images/gallery/heros-section/heros-section-bg.png" 
                imgUrlMobile="./images/gallery/heros-section/heros-section-bg-mobile.png" 
                titleUrl="./images/gallery/heros-section/gallery-heading.svg" 
                titleUrlMobile="./images/gallery/heros-section/gallery-heading-mobile.svg"
            /> 

            <div className="mgallery-section">
                <center>
                    <div className="mgallery-grid">
                        {images.map((image, i) => (
                            <GalleryCard 
                                key={i} 
                                src={image.src} 
                                title={image.title} 
                                onClick={() => handleCardClick(image.pics)}
                            />
                        ))}
                    </div>
                </center>
                <div className='sized-box-gallery-page'></div>
            </div>

            <Footer />

            {showPopup && (
                <ImagePopup 
                    images={currentPics} 
                    onClose={handleClosePopup} 
                    onImageClick={handleImageClick} 
                />
            )}
            {showImageViewer && currentImage && (
                <ImageViewer 
                    src={currentImage} 
                    onClose={handleCloseImageViewer} 
                />
            )}
        </div>
    );
}

export default Gallery;










// import React, { useState } from "react";
// import HerosSection from "../components/HerosSection/HerosSection";
// import Footer from "../components/Footer/Footer";
// import GalleryCard from "../components/Gallery/GalleryCard/GalleryCard";
// import ImagePopup from "../components/Gallery/ImagePopup/ImagePopup";
// import ImageViewer from "../components/Gallery/ImageViewer/ImageViewer";
// import './main-gallery.css';

// function Gallery() {
//     const [showPopup, setShowPopup] = useState(false);
//     const [showImageViewer, setShowImageViewer] = useState(false);
//     const [currentImage, setCurrentImage] = useState(null);
//     const [currentPics, setCurrentPics] = useState([]);

//     const images = [
//         { 
//             src: './images/gallery-page/Seaconvoy_010224_1.png', 
//             title: 'Image 1', 
//             pics: [
//                 {src: './images/gallery-page/Seaconvoy_010224_1.png', title: 'Image 1'},
//                 {src: './images/gallery-page/Seaconvoy_010224_4.JPG', title: 'Image 2'},
//             ]
//         },
//         { 
//             src: './images/gallery-page/Seaconvoy_010224_2.jpg', 
//             title: 'Image 2',
//             pics: [
//                 {src: './images/gallery-page/Seaconvoy_010224_1.png', title: 'Image 1'},
//             ]
//         },
//     ];

//     const handleCardClick = (pics) => {
//         setCurrentPics(pics);
//         setShowPopup(true);
//     };

//     const handleClosePopup = () => {
//         setShowPopup(false);
//         setCurrentPics([]);
//     };

//     const handleImageClick = (src) => {
//         setCurrentImage(src);
//         setShowPopup(false);
//         setShowImageViewer(true);
//     };

//     const handleCloseImageViewer = () => {
//         setShowImageViewer(false);
//         setCurrentImage(null);
//     };

//     return (
//         <div className="mgallery-container">
//             <HerosSection 
//                 imgUrl="./images/gallery/heros-section/heros-section-bg.png" 
//                 imgUrlMobile="./images/gallery/heros-section/heros-section-bg-mobile.png" 
//                 titleUrl="./images/gallery/heros-section/gallery-heading.svg" 
//                 titleUrlMobile="./images/gallery/heros-section/gallery-heading-mobile.svg"
//             /> 

//             <div className="mgallery-section">
//                 <center>
//                     <div className="mgallery-grid">
//                         {images.map((image, i) => (
//                             <GalleryCard 
//                                 key={i} 
//                                 src={image.src} 
//                                 title={image.title} 
//                                 onClick={() => handleCardClick(image.pics)}
//                             />
//                         ))}
//                     </div>
//                 </center>
//                 <div className='sized-box-gallery-page'></div>
//             </div>

//             <Footer />

//             {showPopup && (
//                 <ImagePopup 
//                     images={currentPics} 
//                     onClose={handleClosePopup} 
//                     onImageClick={handleImageClick} 
//                 />
//             )}
//             {showImageViewer && currentImage && (
//                 <ImageViewer 
//                     src={currentImage} 
//                     onClose={handleCloseImageViewer} 
//                 />
//             )}
//         </div>
//     );
// }

// export default Gallery;














// import React, { useState } from "react";
// import HerosSection from "../components/HerosSection/HerosSection";
// import Footer from "../components/Footer/Footer";
// import GalleryCard from "../components/Gallery/GalleryCard/GalleryCard";
// import ImagePopup from "../components/Gallery/ImagePopup/ImagePopup";
// import ImageViewer from "../components/Gallery/ImageViewer/ImageViewer";
// import './main-gallery.css';

// function Gallery() {
//     const [showPopup, setShowPopup] = useState(false);
//     const [showImageViewer, setShowImageViewer] = useState(false);
//     const [currentImage, setCurrentImage] = useState(null);

//     const images = [
//         { 
//             src: './images/gallery-page/Seaconvoy_010224_1.png', 
//             title: 'Image 1', 
//             pics: [
//                 {src: './images/gallery-page/Seaconvoy_010224_1.png', title: 'Image 1'},
//                 {src: './images/gallery-page/Seaconvoy_010224_4.JPG', title: 'Image 1'},
//             ]
//         },
//         { 
//             src: './images/gallery-page/Seaconvoy_010224_2.jpg', 
//             title: 'Image 2',
//             pics: [
//                 {src: './images/gallery-page/Seaconvoy_010224_1.png', title: 'Image 1'},
//                 // {src: './images/gallery-page/Seaconvoy_010224_1.png', title: 'Image 1'},
//             ]
//         },
//     ];

//     const handleCardClick = () => {
//         setShowPopup(true);
//     };

//     const handleClosePopup = () => {
//         setShowPopup(false);
//         setCurrentImage(null);
//     };

//     const handleImageClick = (src) => {
//         setCurrentImage(src);
//         setShowPopup(false);
//         setShowImageViewer(true);
//     };

//     const handleCloseImageViewer = () => {
//         setShowImageViewer(false);

//     };


//     return (
//         <div className="mgallery-container">
//             <HerosSection imgUrl="./images/gallery/heros-section/heros-section-bg.png" imgUrlMobile="./images/gallery/heros-section/heros-section-bg-mobile.png" titleUrl="./images/gallery/heros-section/gallery-heading.svg" titleUrlMobile="./images/gallery/heros-section/gallery-heading-mobile.svg"/> 

//             <div className="mgallery-section">
//                 <center>
//                     <div className="mgallery-grid">
//                         {images.map((image, i) => (
//                             <GalleryCard key={i} src={image.src} title={image.title} onClick={handleCardClick} />
//                         ))}
//                     </div>
//                 </center>
//                 <div className='sized-box-gallery-page'></div>
//             </div>

//             <Footer />

            

//             {images.map((image, i) => (
//                 showPopup && <ImagePopup images={image.pics} onClose={handleClosePopup} onImageClick={handleImageClick} />
//             ))}
//             {showImageViewer && currentImage && <ImageViewer src={currentImage} onClose={handleCloseImageViewer} />}
//         </div>
//     );
// }

// export default Gallery;




// import React from "react";
// import HerosSection from "../components/HerosSection/HerosSection";
// import Footer from "../components/Footer/Footer";
// import GalleryCard from "../components/Gallery/GalleryCard/GalleryCard";
// import './main-gallery.css';

// function Gallery() {

//     const images = [
//         { src: './images/gallery-page/Seaconvoy_010224_1.png', title: 'Image 1' },
//         { src: './images/gallery-page/Seaconvoy_010224_2.jpg', title: 'Image 2' },
//         { src: './images/gallery-page/Seaconvoy_010224_3.png', title: 'Image 3' },
//         { src: './images/gallery-page/Seaconvoy_010224_4.JPG', title: 'Image 4' },
//         { src: './images/gallery-page/Seaconvoy_010224_5.JPG', title: 'Image 5' },
//         { src: './images/gallery-page/Seaconvoy_010224_6.JPG', title: 'Image 6' },
//         { src: './images/gallery-page/Seaconvoy_010224_7.JPG', title: 'Image 7' },
//         { src: './images/gallery-page/Seaconvoy_010224_8.JPG', title: 'Image 8' },
//         { src: './images/gallery-page/Seaconvoy_010224_9.jpg', title: 'Image 9' },
//         { src: './images/gallery-page/Seaconvoy_010224_10.jpg', title: 'Image 10' },
//         { src: './images/gallery-page/Seaconvoy_010224_11.jpg', title: 'Image 11' },
//         { src: './images/gallery-page/Seaconvoy_010224_12.jpg', title: 'Image 12' },
//         { src: './images/gallery-page/Seaconvoy_010224_13.jpg', title: 'Image 13' },
//         { src: './images/gallery-page/Seaconvoy_010224_14.jpg', title: 'Image 14' },
//     ];

//     return (
//         <div className="mgallery-container">
//             <HerosSection imgUrl="./images/gallery/heros-section/heros-section-bg.png" imgUrlMobile="./images/gallery/heros-section/heros-section-bg-mobile.png" titleUrl="./images/gallery/heros-section/gallery-heading.svg" titleUrlMobile="./images/gallery/heros-section/gallery-heading-mobile.svg"/> 

//             <div className="mgallery-section">
//                 <center>
//                     <div className="mgallery-grid">
//                         {images.map((image, i) => (
//                             <GalleryCard key={i} src={image.src} title={image.title} />
//                         ))}
//                     </div>
//                 </center>
//                 <div className='sized-box-gallery-page'></div>
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default Gallery;


// import React from "react";
// import HerosSection from "../components/HerosSection/HerosSection";
// import Footer from "../components/Footer/Footer";
// import './main-gallery.css';


// function Gallery() {

//     const images = [
//         './images/gallery-page/Seaconvoy_010224_1.png',
//         './images/gallery-page/Seaconvoy_010224_2.jpg',
//         './images/gallery-page/Seaconvoy_010224_3.png',
//         './images/gallery-page/Seaconvoy_010224_4.JPG',
//         './images/gallery-page/Seaconvoy_010224_5.JPG',
//         './images/gallery-page/Seaconvoy_010224_6.JPG',
//         './images/gallery-page/Seaconvoy_010224_7.JPG',
//         './images/gallery-page/Seaconvoy_010224_8.JPG',
//         './images/gallery-page/Seaconvoy_010224_9.jpg',
//         './images/gallery-page/Seaconvoy_010224_10.jpg',
//         './images/gallery-page/Seaconvoy_010224_11.jpg',
//         './images/gallery-page/Seaconvoy_010224_12.jpg',
//         './images/gallery-page/Seaconvoy_010224_13.jpg',
//         './images/gallery-page/Seaconvoy_010224_14.jpg',

//       ];
    
//     return (
//       <div className="mgallery-container">
//         <HerosSection imgUrl="./images/gallery/heros-section/heros-section-bg.png" imgUrlMobile="./images/gallery/heros-section/heros-section-bg-mobile.png" titleUrl="./images/gallery/heros-section/gallery-heading.svg" titleUrlMobile="./images/gallery/heros-section/gallery-heading-mobile.svg"/> 

//         <div className="mgallery-section">
    
//         <center><div className="mgallery-grid">
//             {images.map((src, i) => (
//             <div className="mgallery-item" key={i}>
//                 <img src={src} alt={`Gallery item ${i + 1}`} width="600" height="400" />
//             </div>    
//             ))}
//         </div>
//         </center>

//         <div className='sized-box-gallery-page'></div>
//         </div>

//         <Footer />
//       </div>
//     );
//   }
  
//   export default Gallery;