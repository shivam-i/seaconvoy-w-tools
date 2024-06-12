import React from 'react';
import './cards-container.css';

function CardsContainer({ children }) {
  return (
    <div className="cards-container">
      {children}
    </div>
  );
}

export default CardsContainer;
