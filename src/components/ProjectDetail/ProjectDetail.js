import React from "react";
import { useParams, useHistory } from "react-router-dom";
// Style
import "./projectDetail.css";
import { GoLogoGithub } from "react-icons/go";
// Components
import DetailImage from "./projectImage";
// Pages

const gitUrlGen = (gitUrl) => {
  return gitUrl ? (
    <a href={gitUrl} target="_blank" rel="noopener noreferrer">
      View repository
    </a>
  ) : (
    "Unfortunately, repository has to be private"
  );
};

const detailBlockGen = (detail) => {
  let block = [];
  for (const [key, val] of Object.entries(detail)) {
    if (key.includes("img")) {
      const imgFile = "/public/images/" + val.name;
      const imgAlt = val.alt;
      block.push(<DetailImage key={key} url={imgFile} alt={imgAlt} />);
    } else {
      block.push(<h3 key={key}>{key}</h3>);
      block.push(<p key={key + "p"}>{val}</p>);
    }
  }
  return block;
};

function ProjectDetail(props) {
  let history = useHistory();
  console.log(history);
  const { projectIdUrl } = useParams();
  const { projects } = props;
  const projectData = projects.find((project) => project.id === projectIdUrl);
  if (!projectData) {
    history.push("/projects");
    return null;
  }

  const { name, githubUrl, detail } = projectData;
  const detailBlock = detailBlockGen(detail);
  const gitUrl = gitUrlGen(githubUrl);

  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <h1 className="project-detail__header__left">Project name:</h1>
        <h1 className="project-detail__header__right">{name}</h1>
      </div>

      <div className="project-detail__description">{detailBlock}</div>

      <div className="project-detail__footer">
        {gitUrl}
        <GoLogoGithub className="project-detail__icon" />
      </div>
    </div>
  );
}

export default ProjectDetail;
