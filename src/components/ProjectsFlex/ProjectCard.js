import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
// Style
import "./projectCard.css";

function ProjectCard(props) {
  const { path } = useRouteMatch();
  const name = props.projectData.name;
  const desc = props.projectData.desc;
  const stack = props.projectData.stack;
  const linkto = props.projectData.linkto;

  return (
    <div>
      <div className="project-card">
        <p className="project-card__desc">{desc}</p>
        <h2 className="project-card__title">{name}</h2>
        <ul className="project-card__stack">
          {stack
            ? stack.map((item) => {
                return <li key={item}>{item}</li>;
              })
            : "No projects found"}
        </ul>
        <p className="project-card__button">
          <Link to={`${path}/${linkto}`}>
            <button>Details</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
