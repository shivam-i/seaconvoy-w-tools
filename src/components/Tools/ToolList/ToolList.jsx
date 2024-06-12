import React from "react";
import ToolCard from "../ToolCard/ToolCard";
import './ToolList.css'

const toolList = {
  "Flexible Hydrofoil Simulator": "/flexible-hydrofoil-simulator",
  // "More Tools Coming Soon": "/tools"
};

const ToolList = () => {
  return (
    <div className="tool-list-container">
      {Object.entries(toolList).map(([toolName, toolUrl], index) => (
        <ToolCard
        key={index+1}
        index={index+1}
        title={toolName}
        to={toolUrl}
      />
      ))}
    </div>
  );
};

export default ToolList;
