import React from "react";
// Components
//import ProjectCard from "./ProjectCard";
// Static data
import { projects } from "./_projectsData";

function ProjectsGrid() {
  return (
    <div className="project-grid">
      {projects.map((project) => {
        console.log("project", project);
        return "";
      })}
    </div>
  );
}

export default ProjectsGrid;
