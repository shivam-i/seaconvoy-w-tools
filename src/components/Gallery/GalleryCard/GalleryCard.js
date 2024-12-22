import React from "react";
import './GalleryCard.css';

function GalleryCard({ src, title, onClick }) {
    return (
        <div className="gallery-card" onClick={onClick}>
            <div className="card-content">
                <img src={src} alt={title} className="card-thumbnail" />
                <p>{title}</p>
            </div>
        </div>
    );
}

export default GalleryCard;


// import React, { useState } from "react";
// import './GalleryCard.css';

// function GalleryCard({ src, title }) {
//     const [showImage, setShowImage] = useState(false);

//     const handleClick = () => {
//         setShowImage(!showImage);
//     };

//     return (
//         <div className="gallery-card" onClick={handleClick}>
//             {showImage ? (
//                 <img src={src} alt={title} className="gallery-image" />
//             ) : (
//                 <div className="card-content">
//                     <img src={src} alt={title} className="card-thumbnail" />
//                     <p>{title}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default GalleryCard;
