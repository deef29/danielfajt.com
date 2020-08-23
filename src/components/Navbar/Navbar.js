import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { AiFillIdcard } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <Link to="/">
            <AiFillHome className="nav__icon" />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/about">
            <AiFillIdcard className="nav__icon" />
            <span>About</span>
          </Link>
        </li>

        <li>
          <Link to="/projects">
            <AiFillFolderOpen className="nav__icon" />
            <span>Projects</span>
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <AiFillWechat className="nav__icon" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
