import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
{/* <FontAwesomeIcon icon="bars" /> */}

export default function SideNav(props) {
  return (
    <header className="header">
      <nav className="header_navigation">
        <div></div>
        <div className="header_logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="spacer"></div>
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