import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from '../Main/Main';
import About from '../About/About';


import "./Toolbar.css";
import SideBarToggleButton from "../SideBar/SideBarToggleButton"

export default function Toolbar(props) {

  
  return (
    <Router>
    <header className="header">
      <nav className="header_navigation">
        {/* <div className="header_toggle_button">
          <SideBarToggleButton click={props.sideBarClickHandler}/>
          <h5>Navigation</h5>
        </div> */}
        <div className="side_nav_items">
          <ul>
            {/* <li><a href="/">About</a></li> */}
            {/* <Link to="/about">About</Link> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>

    <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>

  );
};