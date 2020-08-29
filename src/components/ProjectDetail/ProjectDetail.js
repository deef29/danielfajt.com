import React from "react";
// Style
import "./projectDetail.css";
import { GoLogoGithub } from "react-icons/go";

const GitLink = (props) => {
  const url = props.url;

  return props.url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      View repository
    </a>
  ) : (
    "Unfortunately, repository has to be private"
  );
};

function ProjectDescription(props) {
  const projectName = props.projectName || "No project name";
  const gitLink = props.githubLink;

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <h1 className="project-detail__header__left">Project name:</h1>
        <h1 className="project-detail__header__right">{projectName}</h1>
      </div>

      <div className="project-detail__description">
        {props.children || "No project description"}
      </div>

      <div className="project-detail__footer">
        <GitLink url={gitLink} />
        <GoLogoGithub className="project-detail__icon" />
      </div>
    </div>
  );
}

export default ProjectDescription;
