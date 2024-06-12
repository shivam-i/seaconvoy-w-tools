import React from "react";
import { Link } from "react-router-dom";
import "./ToolCard.css";

const ToolCard = (props) => {
  return (
    <div className="tool-card-container">
        <p className="tool-index">{props.index}</p>
      <div className="tool-card-content">
        <p className="tool-card-title">{props.title}</p>
        <button className="tool-card-btn">
          <Link to={props.to}>Try Me!</Link>
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
