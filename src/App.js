import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Styles, themes
import "./styles/theme.js";
import "./styles/global.css";
// Components
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/" exact component={About} />
        </Switch>
        <h1>App page</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
