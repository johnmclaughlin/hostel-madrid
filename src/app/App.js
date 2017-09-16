import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
import Search from "./Search";

import Logo from "../assets/images/logo_black_large.png";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <ul>
          <li><NavLink to="/about">about</NavLink></li>
          <li><NavLink to="/experience">experience</NavLink></li>
          <li className="logo"><NavLink to="/"><img src={Logo} /></NavLink></li>
          <li><NavLink to="/contact">contact</NavLink></li>
          <li><NavLink to="/search">search</NavLink></li>
        </ul>
        </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/search" component={Search} />
      </div>
    );
  }
}
export default App;