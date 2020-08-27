import React from "react";
// Style
import "./projectHeader.css";

function ProjectHeader(props) {
  const name = props.projectName || "No project name";

  return (
    <div className="projectHeader">
      <h1 className="projectHeader__left">Project name:</h1>
      <h1 className="projectHeader__right">{name}</h1>
    </div>
  );
}

export default ProjectHeader;
