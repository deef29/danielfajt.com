import React from "react";
import "./HomeCaption.css";

function Home() {
  const af = "=>";
  return (
    <div className="home-caption">
      <ul className="home-caption__left">
        <li>From network</li>
        <li>engineer_</li>
      </ul>
      <ul className="home-caption__right">
        <li>{af} to</li>
        <li>developer</li>
      </ul>
    </div>
  );
}

export default Home;
