import React from 'react';
import './card.css'; 

function Card({ bgImage, heading, children }) {
  return (
    <div className="card">
      <img src={bgImage} alt="" />
      <div className="card-desc">
        <p className="card-heading">{heading}</p>
        {children}
      </div>
    </div>
  );
}

export default Card;
