import React from "react";
// Styles
import "../styles/About.css";
// Components
import CircleFace from "../components/CircleFace/CircleFace";
// Static data
import { aboutMe } from "../assets/_staticData";

function About() {
  return (
    <div className="about">
      <div>
        <CircleFace />
      </div>
      <div>
        {aboutMe.map((section, index) => {
          return <p key={index}>{section}</p>;
        })}
      </div>
    </div>
  );
}

export default About;
