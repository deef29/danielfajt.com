import React from "react";
import { Link } from "react-router-dom";
// Style
import "./headerSection.css";

function Header() {
  return (
    <div className="page_header">
      <Link to="/">
        <ul className="page_header__left">
          <li>Daniel</li>
          <li>danielfajt.com</li>
          <li>Fajt</li>
        </ul>
      </Link>

      <Link to="/">
        <ul className="page_header__right">
          <li>Web</li>
        </ul>
      </Link>
    </div>
  );
}

export default Header;
