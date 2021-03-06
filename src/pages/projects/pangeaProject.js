import React from "react";
// Style
import { GoLogoGithub } from "react-icons/go";
import "../../styles/projectDetail.css";
// Components
import ProjectImage from "../../components/ProjectImage/ProjectImage";
import { gitUrlGen } from "../../components/ProjectGitHubRef/ProjectGitHubRef";
import pangeaScheme from "../../assets/pangea-discovery.jpg";

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
          Pangea is a name of my project created for an internet service
          provider company - Vodafone. Its main purpose, among others, was to
          create a network inventory system as errorless as possible (meaning
          “clean” data with no errors). It meant to build a tool capable to
          provide IP network discovery for more than 800.000 host IP addresses
          in a meaningful time in a multi-vendor (router/switches manufacturers
          or mediagateways) environment. In less then five hours (thanks to
          asynchronous multiprocessing) it targeted, identified, and gathered
          device’s meta data from whole network. It could have captured
          unsupported devices as well and save only partial dataset for further
          processing. Biggest issue was data evaluation and parsing. Network
          discovery was a key feature, which was crucial for further automation
          development.
        </p>
        <ProjectImage url={pangeaScheme} alt="Pangea discovery scheme" />

        <h3>Session</h3>
        <p>
          Each network discovery was managed as a session with its own unique
          UUIDv4 and OS PID. Thanks to the design, users could use Pangea
          simultaneously for host IP or whole subnets as required. For example
          to scan new IP range or re-scan old for changes.
        </p>
        <h3>Integration</h3>
        <p>
          In time, Pangea was connected to several internal systems, databases
          and APIs. This allowed us to identify inconsistencies, which was an
          important step for data management and automation (service deployment,
          script-driven-troubleshooting, device monitoring, configuration
          changes or backups). It could also handle other network equipment as
          Media gateways and it was prepared for LTE modems implementation. In
          fact, it was designed to communicate with every device supporting SNMP
          or SSH.
        </p>
        <h3>Stack</h3>
        <p>
          Dev took place on CentOS with Python 3.7. As a database I used
          PostgreSQL which was replaced with MongoDB later due to its
          flexibility. Important libraries were Flask, multiprocessing and
          Paramiko.
        </p>
        <h3>What I've learned</h3>
        <p>
          It was a challenging project not in coding eventually, but in its
          complexity, design and data flow. My goal was to create a fully
          automated solution, extensible in time and basically "manufacturer
          universal." I worked a lot with data evaulation, parsing and
          correction in very various environment. Several modules were created
          as well (for example to communicate with devices over different
          protocols, with identical outputs or synchronize third party systems).
          I would say I\'ve learned a lot working on this. Especially to cut
          tasks (problems) into pieces and make complex, universal solution by
          solving them separately. What I would have done differently is to plan
          better. Use some tools for process or design maps.
        </p>
      </div>

      <div className="project-detail__footer">
        {gitUrlGen("")}
        <GoLogoGithub className="project-detail__icon" />
      </div>
    </div>
  );
}
