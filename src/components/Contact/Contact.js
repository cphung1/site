import React, {setState} from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(props) {

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <ul>
        <li>
          <a>
            <FontAwesomeIcon icon={['far', 'envelope']} className="icon"/> cphung97@gmail.com
          </a>
        </li>
        <li >
          <a href="https://www.linkedin.com/in/cphung1/" target="_blank" className="link">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon"/> LinkedIn
          </a>
        </li>
        <li >
          <a href="https://github.com/cphung1" target="_blank" className="link">
            <FontAwesomeIcon icon={['fab', 'github']} className="icon" /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};