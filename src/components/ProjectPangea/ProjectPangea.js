import React from "react";
// Components
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import Image from "../ProjectDetail/projectDescriptionImg";
// Assets
import { projectList } from "../../assets/_staticData";
import discoveryScheme from "../../assets/pangea-discovery.jpg";

const projectData = projectList.find(
  (project) => project.name === "Pangea bum"
);

const testName = projectData.name.replace(/\s/g, "-");
console.log("testname:", testName);

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
  return projectData ? (
    <div className="projectPangea">
      <ProjectDetail projectName="Pangea" githubLink={projectData.githubUrl}>
        <DetailBlock />
      </ProjectDetail>
    </div>
  ) : (
    <ProjectDetail projectName="No Project name found" githubLink="" />
  );
}

export default ProjectPangea;
