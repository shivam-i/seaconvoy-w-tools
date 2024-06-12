import React from "react";
import HerosSection from "../components/HerosSection/HerosSection";
import Improv from "../components/Services/Improv/Improv";
import Footer from "../components/Footer/Footer";

function Services() {
    return (
      <div>
        <HerosSection imgUrl="./images/services-page/heros-section/hero-section-bg.png" imgUrlMobile="./images/services-page/heros-section/hero-section-bg-mobile.png" titleUrl="./images/services-page/heros-section/hero-section-heading.png" titleUrlMobile="./images/services-page/heros-section/hero-section-heading-mobile.png"/>
        <Improv />
        <Footer />
      </div>
    );
  }
  
  export default Services;