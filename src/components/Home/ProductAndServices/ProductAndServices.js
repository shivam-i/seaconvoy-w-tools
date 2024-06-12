import React from 'react';
import './product-and-services.css';
import Card from '../../Shared/Card';
import CardsContainer from '../../Shared/CardsContainer';

function ProductAndServices() {
  return (
    <div className="product-and-services-container">

      <center><img className='product-services-heading' src="./images/home-page/prod-serv/prod-serv-heading-pc.png" alt="" width="1000px" /></center>

      <div className='services-improvement-cards'>
        <CardsContainer>
          <Card>
            <div className='product-improve'>
              <img src="./images/home-page/prod-serv/prod-improv-heading.png" alt=""></img>
              <p><span><b>Design and indenisation</b></span> of waterjet propulsion system, electric popped propulsion system,
                hydraulic steering gear system for marine vehicles such as ships, amphibious vehicles, underwater vehicles.
              </p>
            </div>
          </Card>
          <Card
            bgImage='./images/home-page/prod-serv/prod-improv-bg.png'>

          </Card>
          <Card
            bgImage='./images/home-page/prod-serv/serv-improv-bg.png'>

          </Card>
          <Card>
            <div className='product-service'>
              <img src="./images/home-page/prod-serv/serv-improv-heading.png" alt=""></img>
              <p>
                Design, sub-system development, model testing, validation and consultation for certification services related to marine vehicles are currently affordable only to large shipbuilding industries. We provide similar services tailored for small shipyards, boat builders, and original equipment manufacturers (OEMs) for marine-related sub-systems in collaboration with research institutes
                such as <b>IIT Madras, DRDO Lab – NSTL, and NIOT</b>.
              </p>
            </div>
          </Card>
        </CardsContainer>
      </div>
      
      <center><img className='product-services-heading-mobile' src="./images/home-page/prod-serv/prod-serv-heading-mobile.svg" alt="" /></center>

      <div className="prod-serv-mobile">
        <div className="prod-container">
            <img src="./images/services-page/improv/prod-improv.png" alt="" />
        </div>

        <div className="serv-container">
            <div className="serv-content-container">
            <img src="./images/services-page/improv/serv-improv.png" alt="" />
            </div>
        </div>
      </div>

    </div>
  );
}

export default ProductAndServices;
