import React from "react";
// Style
import "./projectDescription.css";

function ProjectDescription(props) {
  return (
    <div className="projectDescription">
      <h1>Description</h1>
      {props.children || "No project description"}
    </div>
  );
}

export default ProjectDescription;
