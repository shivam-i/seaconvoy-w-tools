import React from 'react';
import './seaconvoy-desc.css';

function SeaconvoyDesc() {
  return (
    <div className="seaconvoy-desc">
      <div className="seaconvoy-desc-content">
        <div className="seaconvoy-desc-container">
          <img src="./images/home-page/seaconvoy-desc/seaconvoy-desc-heading.png" alt="" className="seaconvoy-desc-heading" width="550px"/>
          <div className="seaconvoy-desc-text">
            <p>The Seaconvoy team consists of professionals who graduated and worked at <span>IIT Madras</span>. The team's
              proficiency is in the fields of <span>naval architecture, mechanical engineering, embedded systems design, and
                marine robotics</span>.</p>

            <p>This team's expertise in the development of technology, fabrication, and testing of prototypes is very niche
              expertise which is gained through a decade of experience in providing consultation to marine industries. We
              help execute your strategy with concept development, validation with an actionable plan and timelines, guided
              with continuous innovation, and swift implementation of roadmap items.</p>

            <p><span>We provide solutions</span> for issues related to complex equipment and technology, model testing, CFD,
              FEM, rapid-prototyping, prototype development, and testing, test rigs, control system design, embedded
              systems, instrumentation, sensors fusion, wireless communication for scientific measurements and system
              integration.</p>
          </div>  
        </div>
        <img className="seaconvoy-desc-bg-pic" src="./images/home-page/seaconvoy-desc/seaconvoy-desc-bg.png" alt=""/>
      </div>
    </div>
  );
}

export default SeaconvoyDesc;
