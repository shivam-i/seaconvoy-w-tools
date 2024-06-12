import React from "react";
import HerosSection from "../components/HerosSection/HerosSection";
import Footer from "../components/Footer/Footer";
import ToolList from "../components/Tools/ToolList/ToolList";

function Tools() {
    return (
        <div>
            <HerosSection imgUrl="./images/tools-page/heros-section/heros-section-bg.png" imgUrlMobile="./images/tools-page/heros-section/heros-section-bg-mobile.png" titleUrl="./images/tools-page/heros-section/heros-section-heading.svg" titleUrlMobile="./images/tools-page/heros-section/heros-section-heading.svg" />
            <ToolList />
            <Footer />
        </div>
    );
}

export default Tools;