import React from "react";
// Style
import "./projectsFlex.css";
// Components
import ProjectCard from "./ProjectCard";
// Static data
import { projectList } from "../../assets/_staticData";

function Projects() {
  return (
    <div className="projects-flex">
      {projectList.map((project) => {
        return <ProjectCard key={project.id} projectData={project} />;
      })}
    </div>
  );
}

export default Projects;
