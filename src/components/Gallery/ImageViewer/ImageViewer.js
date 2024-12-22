import React from "react";
import './ImageViewer.css';

function ImageViewer({ src, onClose }) {
    return (
        <div className="image-viewer-overlay" onClick={onClose}>
            <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
                <img src={src} alt="Full view" className="full-image" />
            </div>
        </div>
    );
}

export default ImageViewer;
