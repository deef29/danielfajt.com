import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
// Components
import ProjectsFlex from "../components/ProjectsFlex/ProjectsFlex";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail";
// Styles
// import "../styles/projectDetail.css";
// Static data
import { projectList } from "../assets/_staticData.js";

function Projects() {
  const { path } = useRouteMatch();

  return (
    <div>
      <Route exact path={path}>
        <ProjectsFlex projectList={projectList} />
      </Route>
      <Route path={`${path}/:projectIdUrl`}>
        <ProjectDetail projects={projectList} />
      </Route>
    </div>
  );
}

export default Projects;
