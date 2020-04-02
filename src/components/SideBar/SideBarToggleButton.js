import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SideBarToggleButton.css"


export default function SideBarToggleButtion(props) {
  return (
    <button className="toggle-button" onClick={props.click}>
      <FontAwesomeIcon icon="bars" size="lg"/> 
    </button>

  )
}