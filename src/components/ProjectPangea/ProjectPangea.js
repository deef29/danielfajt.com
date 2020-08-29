import React from "react";
// Components
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import Image from "../ProjectDetail/projectDescriptionImg";
// Assets
import { projectList } from "../../assets/_staticData";
import discoveryScheme from "../../assets/pangea-discovery.jpg";

const projectData = projectList.find((project) => project.name === "Pangea");

const DetailBlock = () => {
  const projectDetail = projectData.detail || "No project detail data found";

  return (
    <div>
      <h3>Description</h3>
      <p>{projectDetail.description}</p>
      <Image url={discoveryScheme} alt="Pangea discovery scheme" />
      <h3>Seissons</h3>
      <p>{projectDetail.session}</p>
      <h3>Integration</h3>
      <p>{projectDetail.integration}</p>
      <h3>Stack/lib</h3>
      <p>{projectDetail.stack}</p>
      <h3>What I've learned</h3>
      <p>{projectDetail.learned}</p>
    </div>
  );
};

function ProjectPangea() {
  return (
    <div className="projectPangea">
      <ProjectDetail projectName="Pangea" githubLink={projectData.githubUrl}>
        <DetailBlock />
      </ProjectDetail>
    </div>
  );
}

export default ProjectPangea;
