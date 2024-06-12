import React from "react";

import "./MeetTheTeam.css";

function MeetTheTeam() {
    return (
        <div className="meet-the-team-container">
            <center><img className="meet-the-team" src="./images/about-page/meet-the-team/meet-the-team-heading.svg" alt="" /></center>
            <div className="team-members">
                <img src="./images/about-page/meet-the-team/rakesh-card.png" alt="" />
                <img src="./images/about-page/meet-the-team/awanish-card.png" alt="" />
                <img src="./images/about-page/meet-the-team/soumya-card.png" alt="" />
                <img src="./images/about-page/meet-the-team/vignesh-card.png" alt="" />
                <img src="./images/about-page/meet-the-team/yashwanth-card.png" alt="" />
            </div>
        </div>
    );
}

export default MeetTheTeam;