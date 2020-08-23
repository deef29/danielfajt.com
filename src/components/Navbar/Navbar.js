import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <span className="nav__logo">Daniel Fajt</span>
      <ul className="nav__links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <span>
        <button className="nav__contact">
          <Link to="/contact">Contact</Link>
        </button>
      </span>
    </nav>
  );
}

export default Navbar;
