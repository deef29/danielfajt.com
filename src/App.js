import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Styles, themes
import "./styles/theme.js";
import "./styles/global.css";
// Components
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/:name" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
