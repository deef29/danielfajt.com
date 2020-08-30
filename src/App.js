import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Styles, themes
import "./styles/theme.js";
import "./styles/global.css";
// Layout
import AppLayout from "./layouts/AppLayout";

// Pages
import E404 from "./pages/404";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact" component={Contact} />
            <Route component={E404} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
