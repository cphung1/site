import React from 'react';
import "./SideBar.css";


export default function SideBar(props) {
  return (
    <nav className="side-bar">
      <ul>
        <li><a href="/">About</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
}