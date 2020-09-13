import React from "react";
// Style
import { GoLogoGithub } from "react-icons/go";
import "../../styles/projectDetail.css";
// Components
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import { gitUrlGen } from "../../components/ProjectGitHubRef/ProjectGitHubRef";
import luskFImage from "../../assets/luskr-workplaces.jpg";

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
          LUSK is an anagram for SUKL - The State institute for drug control of
          Czech Republic. Besides that, LUSK is a frontend React/Redux
          application used as an interface to communicate with its backend, of
          course. The key frontend feature is to provide access to SUKL forms
          management. Required by law, drug companies have to report how they
          operate with registered drugs, report its origin et cetera.
        </p>
        <ProjectImage url={luskFImage} alt="LUSK frontend image" />
        <h3>Components</h3>
        <p>
          Most components in this project are focused to present and manipulate
          data collections according to SUKL policy. Forms, tables or card
          lists.
        </p>
        <h3>Features</h3>
        <p>
          This project is still in a development phase and in its very early
          version. I would like to deliver the most convenient way to manipulate
          those data sets, search, data validation etc. I would like to develop
          fully functional drug inventory system, drug registry search, user
          management, certification management, multi-language solution etc.
        </p>

        <h3>What I've learned</h3>
        <p>
          Well, Material UI is nice and easy to use if you need functional
          application components.State management is pretty nice and useful
          concept and I should have larned about RTK before I used pure Redux
          all around. The biggest issue for me was how to structure project
          files and to understand reducers.
        </p>
      </div>

      <div className="project-detail__footer">
        {gitUrlGen("https://github.com/deef29/luskr")}
        <GoLogoGithub className="project-detail__icon" />
      </div>
    </div>
  );
}
