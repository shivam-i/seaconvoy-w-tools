import React from "react";

import "./FastestGrowing.css"

function FastestGrowing() {
  return (
    <div className="fastest-growing-container">
      <img className="fastest-growing-heading" src="./images/about-page/fastest-growing/fastest-growing-title.svg" alt="" />
      <img className="fastest-growing-heading-mobile" src="./images/about-page/fastest-growing/fastest-growing-title-mobile.svg" alt="" />
      <div className="fastest-growing-desc">
        <div>
          <p>The Seaconvoy team consists of professionals who graduated and worked at IIT Madras. The team's proficiency is in the fields of naval architecture, mechanical engineering, embedded systems design, and marine robotics.</p>
        </div>
        <div>
          <p>This team's expertise in the development of technology, fabrication, and testing of prototypes is very niche expertise which is gained through a decade of experience in providing consultation to marine industries. We help execute your strategy with concept development, validation with an actionable plan and timelines, guided with continuous innovation, and swift implementation of roadmap items.</p>
        </div>
        <div>
          <p>We provide solutions for issues related to complex equipment and technology, model testing, CFD, FEM, rapid-prototyping, prototype development, and testing, test rigs, control system design, embedded systems, instrumentation, sensors fusion, wireless communication for scientific measurements and system integration</p>
        </div>
      </div>

      <img src="./images/about-page/fastest-growing/fastest-growing-line.svg" alt="" className="fastest-growing-line" />
    </div>
  );
}

export default FastestGrowing;