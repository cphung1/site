import React from "react";
import "./Modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Modal(props) {

  const listStack = props.stack.map((d) => <li>{d}</li>);

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h5>Tech Stack</h5>
        <ul className="project_stack">
          {listStack}
        </ul>
        <button onClick={props.onClose}><FontAwesomeIcon icon={'times'} size='lg'/></button>
        <a className="project_link" href={props.link}>
            <label>Github</label>
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="github_icon"/> 
        </a>
      </div>
    </div>
  );
}