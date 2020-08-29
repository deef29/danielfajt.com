import React from "react";
// Components
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import Image from "../ProjectDetail/projectDescriptionImg";
// Assets
import { descriptionPangea } from "../../assets/_staticData";
import discoveryScheme from "../../assets/pangea-discovery.jpg";

const DescriptionBlock = () => {
  return (
    <div>
      <h3>Description</h3>
      <p>{descriptionPangea.description}</p>
      <Image url={discoveryScheme} alt="Pangea discovery scheme" />
      <h3>Seissons</h3>
      <p>{descriptionPangea.session}</p>
      <h3>Integration</h3>
      <p>{descriptionPangea.integration}</p>
      <h3>Stack/lib</h3>
      <p>{descriptionPangea.stack}</p>
      <h3>What I've learned</h3>
      <p>{descriptionPangea.learned}</p>
    </div>
  );
};

function ProjectPangea() {
  return (
    <div className="projectPangea">
      <ProjectDetail projectName="Pangea">
        <DescriptionBlock />
      </ProjectDetail>
    </div>
  );
}

export default ProjectPangea;
