import React from 'react';
import "./SideBar.css";


export default function SideBar(props) {
  let sideBarClasses = 'side-bar';

  if (props.show) {
    sideBarClasses = 'side-bar open';
  };
  
  return (
    <nav className={sideBarClasses}>
      <ul>
        <li><a href="/">About</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
}