import React from "react";
// Style
import { GoLogoGithub } from "react-icons/go";
import "../../styles/projectDetail.css";
// Components
import { gitUrlGen } from "../../components/ProjectGitHubRef/ProjectGitHubRef";

export default function data() {
  return (
    <div className="project-detail">
      <div className="project-detail__header">
        <h1 className="project-detail__header__left">Project name:</h1>
        <h1 className="project-detail__header__right">Pangea</h1>
      </div>

      <div className="project-detail__description">
        <h3>Description</h3>
        <p>
          My personal website created primarily to introduce myself and to
          briefly present my work.
        </p>

        <h3>What I’ve learned</h3>
        <p>
          Layouts and simple responsive design. I wanted to know, why I should
          use SASS over the pure CSS3. And I have. I’ll implement MobX as well.
        </p>
      </div>

      <div className="project-detail__footer">
        {gitUrlGen("https://github.com/deef29/danielfajt.com")}
        <GoLogoGithub className="project-detail__icon" />
      </div>
    </div>
  );
}
