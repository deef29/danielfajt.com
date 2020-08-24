import React from "react";
// Style
import "./projects.css";
// Components
import ProjectCard from "./ProjectCard";
// Static data
import { projects } from "./_projectsData";

function Projects() {
  return (
    <div className="projects">
      {projects.map((project) => {
        return <ProjectCard key={project.key} data={project} />;
      })}
    </div>
  );
}

export default Projects;
