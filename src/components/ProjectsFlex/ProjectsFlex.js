import React from "react";
// Style
import "./projectsFlex.css";
// Components
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects(props, { match }) {
  return (
    <div className="projects">
      {props.cardData.map((project) => {
        return <ProjectCard key={project.key} cardData={project} />;
      })}
    </div>
  );
}

export default Projects;
