import React from "react";
// Styles
import "./projectPangea.css";
// Components
import ProjectHeader from "../ProjectHeader/ProjectHeader";
import ProjectDescription from "../ProjectDescription/ProjectDescription";
import Image from "../ProjectDescription/projectDescriptionImg";
// Assets
import { descriptionPangea } from "../../assets/_staticData";
import discoveryScheme from "../../assets/pangea-discovery.jpg";

const DescriptionBlock = () => {
  return (
    <div>
      <p>{descriptionPangea.p1}</p>
      <Image url={discoveryScheme} alt="Pangea discovery scheme" />
      <p>{descriptionPangea.p2}</p>
      <p>{descriptionPangea.p3}</p>
      <p>{descriptionPangea.p4}</p>
      <p>{descriptionPangea.p5}</p>
    </div>
  );
};

function ProjectPangea() {
  return (
    <div className="projectPangea">
      <ProjectHeader projectName="Pangea" />

      <ProjectDescription>
        <DescriptionBlock />
      </ProjectDescription>
    </div>
  );
}

export default ProjectPangea;
