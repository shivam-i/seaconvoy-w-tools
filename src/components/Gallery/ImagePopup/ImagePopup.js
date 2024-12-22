import React from 'react';
import './ImagePopup.css'; // Ensure you have styles for the popup

function ImagePopup({ images, onClose, onImageClick }) {
    return (
        <div className="image-popup-overlay">
            <div className="image-popup-container">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="image-popup-grid">
                    {images.map((image, i) => (
                        <img 
                            key={i} 
                            src={image.src} 
                            alt={image.title} 
                            onClick={() => onImageClick(image.src)} 
                            className="popup-image"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImagePopup;

















// import React from "react";
// import './ImagePopup.css';

// function ImagePopup({ images, onClose, onImageClick }) {
//     let count = 0;
//     return (
//         <div className="image-popup-overlay">
//             {images.map((image, index) => (
//                 <div className={`image-popup-overlay-${count++}`} onClick={onClose}>
//                     <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
//                         <div className="image-popup-grid">
//                             <div key={index} className="image-popup-item" onClick={() => onImageClick(image.src)}>
//                                 <img src={image.src} alt={image.title} className="popup-thumbnail" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ImagePopup;



