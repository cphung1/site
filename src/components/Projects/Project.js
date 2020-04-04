import React, { useState }from 'react';
import "./Project.css";
import Modal from "../Modal/Modal";
import Backdrop from '../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Project(props) {
  const [state, setState] = useState({
    show: false,
  });

  // const showModal = () => {
  //   setState({show: true});
  // };

  const showModal = e => {
    setState({
      show: !state.show
    });
  };


  return (
    <div className="project">
      <div>
        <img src="images/schedular.png" alt="screenshot of schedular app" onClick={() => showModal()}></img>
      </div>
      <Modal 
        show={state.show}
        onClose={showModal}
        title="Schdeular"
        description="Scheduler is a web app that allows users to create, delete and edit interview appointmments. Users can enter the name of the interviewee, and select from a list of available interviewers. Application includes built-in test features.
        "
        stack={['React', 'Node', 'Express', 'Jest', 'Storybook', 'Cypress']}
      />
      <Backdrop show={state.show} click={showModal}/>
      {/* <button  onClick={() => showModal()}> Show Modal </button> */}

      {/* <div className="project_text">
        <h3>Schedular</h3>
        <p className="project_description">
        Scheduler is a web app that allows users to create, delete and edit interview appointmments. Users can enter the name of the interviewee, and select from a list of available interviewers. Application includes built-in test features.
        </p>
        <ul className="project_stack">
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>Jest</li>
          <li>Storybook</li>
          <li>Cypress</li>
        </ul>

        <div className="github_link">
          <a href="https://github.com/cphung1/scheduler">
            <FontAwesomeIcon icon={['fab', 'github']} size="lg"/> 
          </a>
        </div>
      </div> */}
    </div>
  )
}