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
        <h1 className="project-detail__header__right">LUSK Backend</h1>
      </div>

      <div className="project-detail__description">
        <h3>Description</h3>
        <p>
          LUSK backend is a NodeJS/Express application to manage reports for the
          State institute for drug control of Czech Republic. It communicates
          directly with institute’s API using Axios and provides data for the
          frontend React application.
        </p>
        <h3>Proxy API</h3>
        <p>
          It serves as a proxy API for the drug institute. It formats/parses
          datasets exactly according to the drug institute’s documentation.
          There are few “not well handled” situations with official API and this
          proxy API corrects them, so a Frontend application doesn’t have to.
          For example, there is now way to fetch reports for a whole year from
          official API, so I used Promises.all() to fetch and format data and
          provide them as whole. This proxy API handles security certifications
          as well.
        </p>
        <h3>Parsing and validation</h3>
        <p>
          Backend uses @hapi/joi library for data validation. There is a strict
          policy in data flow. Application is ready to process uploaded
          companies datasets, parse them and validate them against SUKL
          requirements. If there is any inconsistency, the segment is marked and
          returned to Frontend (user) for correction. This allows multiple data
          inputs and inter-connection with other companie’s systems.
        </p>
        <h3>Step-by-step</h3>
        <p>
          There is a lot of work on this project ahead. For now, I am trying to
          understand how the user works with the current software in the
          company. What bothers them, and what can be done automatically. The
          goal is to have a fast, modern solution to handle tasks required by
          law, quick errors edit/correction, efficient drug database search,
          deadlines watchdog or insights.
        </p>
        <h3>What I’ve learned</h3>
        <p>
          Honestly, I’d say using Python for data manipulation might be easier
          than JS, but I’ve done it in JS anyway just to learn. I used Express
          and Axios as they make things easier done. Multer is nice especially
          considering file uploads and I really, really like hapi/joi for data
          validation. A headache part of the project (so far) was to understand
          async operations in JS / Promises.
        </p>
      </div>

      <div className="project-detail__footer">
        {gitUrlGen("https://github.com/deef29/luskb")}
        <GoLogoGithub className="project-detail__icon" />
      </div>
    </div>
  );
}
