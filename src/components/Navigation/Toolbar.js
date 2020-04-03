import React from "react";

import "./Toolbar.css";
import SideBarToggleButton from "../SideBar/SideBarToggleButton"

export default function Toolbar(props) {
  return (
    <header className="header">
      <nav className="header_navigation">
        <div className="header_toggle_button">
          <SideBarToggleButton click={props.sideBarClickHandler}/>
          <h5>Navigation</h5>
        </div>
        <div className="side_nav_items">
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>

  );
};