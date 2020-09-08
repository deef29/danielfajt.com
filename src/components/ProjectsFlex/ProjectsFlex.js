import React from "react";
// Style
import "./projectsFlex.css";
// Components
import ProjectCard from "./ProjectCard";

function Projects(props) {
  const projectList = props.projectList;

  return (
    <div className="projects-flex">
      {projectList.map((project) => {
        return <ProjectCard key={project.id} projectData={project} />;
      })}
    </div>
  );
}

export default Projects;
