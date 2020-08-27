import React from "react";
import { Route } from "react-router-dom";
// Components
import ProjectsFlex from "../components/ProjectsFlex/ProjectsFlex";
import ProjectPangea from "../components/ProjectPangea/ProjectPangea";

function Projects({ match }) {
  console.log("match projects", match);
  return (
    <div>
      <ProjectsFlex />

      <Route path={match.url + "/pangea"} component={ProjectPangea} />
    </div>
  );
}

export default Projects;
