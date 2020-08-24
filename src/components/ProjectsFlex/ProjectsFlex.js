import React from "react";
// Style
import "./projectsFlex.css";
// Components
import ProjectCard from "../ProjectCard/ProjectCard";
// Static data
import projectsData from "./_projectsData.json";

function Projects() {
  return (
    <div className="projects">
      {projectsData.map((project) => {
        return <ProjectCard key={project.key} data={project} />;
      })}
    </div>
  );
}

export default Projects;
