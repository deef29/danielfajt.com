import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <ul className="header__left">
        <li>Daniel</li>
        <li>danielfajt.com</li>
        <li>Fajt</li>
      </ul>
      <ul className="header__right">
        <li>Web</li>
      </ul>
    </header>
  );
}

export default Header;
