import React from "react";
// Components
import NavBar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const AppLayout = (props) => {
  return (
    <div className="layout">
      <NavBar />
      <Header />
      <div className="content">{props.children}</div>
      <footer className="footer">to be delivered footerdsad</footer>
    </div>
  );
};
export default AppLayout;
