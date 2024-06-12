import React from "react";

import "./WhoAreWe.css"

function WhoAreWe() {
	return (
		<div className="who-are-we-container">
			<div className="who-are-we">
				<img src="./images/about-page/who-are-we/who-are-we.png" alt="" className="who-are-we-heading" />
				<p>The team members <b>exposure at IIT Madras for a decade</b> in the fields of <b>hydrodynamic testing, validation of designs,</b> consulting for shipyards and boat builders, design approvals, and product development related to <b>defence application</b> for powering of amphibious vehicles brings in invaluable comprehensive professional resource.

				</p>
			</div>

			<div className="who-are-we-mobile">
				<center><img src="./images/about-page/who-are-we/who-are-we-mobile.svg" alt="" className="who-are-we-heading-mobile" /></center>
				<p>The team members <span>exposure at IIT Madras for a decade</span> in the fields of hydrodynamic testing, validation of designs, consulting for shipyards and boat builders, design approvals, and product development related to defence application for powering of amphibious vehicles brings in invaluable comprehensive professional resource.
				</p>
			</div>
			<img src="./images/about-page/who-are-we/who-are-we-line.svg" alt="" className="who-are-we-line" />
		</div>
	);
}

export default WhoAreWe;