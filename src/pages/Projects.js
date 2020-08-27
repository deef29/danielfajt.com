import React from "react";
import { Route } from "react-router-dom";
// Components
import ProjectsFlex from "../components/ProjectsFlex/ProjectsFlex";
import ProjectPangea from "../components/ProjectPangea/ProjectPangea";
// Static data
import projectsData from "../assets/_projectsData.json";

function Projects({ match }) {
  return (
    <div>
      {match.isExact ? <ProjectsFlex cardData={projectsData} /> : null}

      <Route path={match.url + "/1"} component={ProjectPangea} />
      <Route path={match.url + "/2"} component={ProjectPangea} />
      <Route path={match.url + "/3"} component={ProjectPangea} />
      <Route path={match.url + "/4"} component={ProjectPangea} />
    </div>
  );
}

export default Projects;
