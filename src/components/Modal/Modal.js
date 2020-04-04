import React from "react";
import "./Modal.css"

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
        <ul className="project_stack">
          {listStack}
        </ul>
        <button onClick={props.onClose}>X</button>
      </div>
    </div>
  );
}