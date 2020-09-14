import React from "react";
// Components
import NavBar from "../components/Navbar/Navbar";
import HeaderSection from "../components/Header/HeaderSection";
import Footer from "../components/Footer/Footer";

const AppLayout = (props) => {
  return (
    <div className="layout">
      <div className="nav-position">
        <NavBar />
      </div>

      <div>
        <HeaderSection />
      </div>

      <div className="content">{props.children}</div>

      <Footer />
    </div>
  );
};
export default AppLayout;
