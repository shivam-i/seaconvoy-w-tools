import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HerosSection.css';

function HerosSection(props) {
  return (
    <div className="heros-section">
      <div className="heros-section-bg-container">
        <img className="heros-section-bg-pic" src={props.imgUrl} alt="" />
        <img className="heros-section-bg-pic-mobile" src={props.imgUrlMobile} alt="" />
      </div>
      <NavBar />
      <img className="heros-section-title" src={props.titleUrl} alt="Title" />
      <img className="heros-section-title-mobile" src={props.titleUrlMobile} alt="Title" />
      <img className='scroll-down' src="./images/about-page/heros-section/scroll-down.png" alt="" />
    </div>
  );
}

export default HerosSection;
