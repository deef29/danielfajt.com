import React from "react";
import { Link } from "react-router-dom";
// Style
import "./header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <ul className="header__left">
          <li>Daniel</li>
          <li>danielfajt.com</li>
          <li>Fajt</li>
        </ul>
      </Link>

      <Link to="/">
        <ul className="header__right">
          <li>Web</li>
        </ul>
      </Link>
    </header>
  );
}

export default Header;
