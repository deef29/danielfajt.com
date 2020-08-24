import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Styles, themes
import "./styles/theme.js";
import "./styles/global.css";
// Components
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
