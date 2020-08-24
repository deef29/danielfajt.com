import React from "react";
import { Link } from "react-router-dom";
// Style
import "./projectCard.css";

function ProjectCard(props) {
  const name = props.data.name;
  const desc = props.data.desc;
  const stack = props.data.stack;

  return (
    <div>
      <div className="project-card">
        <h2 className="project-card__title">{name}</h2>
        <p className="project-card__desc">{desc}</p>
        <ul className="project-card__stack">
          {stack
            ? stack.map((item) => {
                return <li key={item}>{item}</li>;
              })
            : "No data"}
        </ul>
        <p className="project-card__button">
          <button>Details</button>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;