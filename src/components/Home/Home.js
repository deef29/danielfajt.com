import React from "react";
import "./home.css";

function Home() {
  const af = "=>";
  return (
    <div className="home">
      <ul className="home__left">
        <li>From network</li>
        <li>engineer_</li>
      </ul>
      <ul className="home__right">
        <li>{af} to</li>
        <li>developer</li>
      </ul>
    </div>
  );
}

export default Home;
