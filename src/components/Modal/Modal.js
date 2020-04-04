import React from "react";
import "./Modal.css"

export default function Modal(props) {

  const listStack = props.stack.map((d) => <li>{d}</li>);

  if (!props.show) {
    return null;
  }
  return (
    <div class="modal" id="modal">
      <div class="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul className="project_stack">
          {listStack}
        </ul>
      </div>
      
      <div class="actions">
        <button onClick={props.onClose}>close</button>
      </div>
    </div>
  );
}