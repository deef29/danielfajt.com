import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Styles, themes
import "./styles/theme.js";
import "./styles/global.css";
// Layout
import AppLayout from "./layouts/AppLayout";
// Components
import ProjectsFlex from "./components/ProjectsFlex/ProjectsFlex";
// Pages
import E404 from "./pages/404";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PangeaPage from "./pages/projects/pangeaProject";
import LuskFPage from "./pages/projects/luskfProject";
import LuskBPage from "./pages/projects/luskbProject";
import DFcomPage from "./pages/projects/DFcomProject";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={ProjectsFlex} />
            <Route path="/projects/pangea" exact component={PangeaPage} />
            <Route path="/projects/luskf" exact component={LuskFPage} />
            <Route path="/projects/luskb" exact component={LuskBPage} />
            <Route path="/projects/dfcom" exact component={DFcomPage} />
            <Route path="/contact" component={Contact} />
            <Route component={E404} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
