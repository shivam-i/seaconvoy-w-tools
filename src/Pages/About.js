import React from "react";
import HerosSection from "../components/HerosSection/HerosSection";
import FastestGrowing from "../components/About/fastest-growing/FastestGrowing";
import WhoAreWe from "../components/About/who-are-we/WhoAreWe";
import MeetTheTeam from "../components/About/MeetTheTeam/MeetTheTeam";
import Footer from "../components/Footer/Footer"

function About() {
    return (
      <div>
        <HerosSection imgUrl="./images/about-page/heros-section/heros-section-bg.png" imgUrlMobile="./images/about-page/heros-section/heros-section-bg-mobile.png" titleUrl="./images/about-page/heros-section/heros-section-title.png" titleUrlMobile="./images/about-page/heros-section/heros-section-title-mobile.svg"/> 
        <FastestGrowing />
        <WhoAreWe />
        <MeetTheTeam />
        <Footer />
      </div>
    );
  }
  
  export default About;