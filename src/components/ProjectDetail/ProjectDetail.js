import React from "react";
// Style
import "./projectDetail.css";
import { AiOutlineBulb } from "react-icons/ai";

function ProjectDescription(props) {
  const projectName = props.projectName || "No project name";

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <h1 className="project-detail__header__left">Project name:</h1>
        <h1 className="project-detail__header__right">{projectName}</h1>
      </div>

      <div className="project-detail__description">
        {props.children || "No project description"}
      </div>

      <div className="project-detail__icons">
        <p>Nejaky odkaz na github</p>
        <AiOutlineBulb className="project-detail__icon" />
      </div>
    </div>
  );
}

export default ProjectDescription;
