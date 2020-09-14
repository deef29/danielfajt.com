import React from "react";
// Components
import NavBar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AppLayout = (props) => {
  return (
    <div className="layout">
      <NavBar />
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};
export default AppLayout;
