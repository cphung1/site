import React, { useState }from 'react';
import "./Project.css";
import Modal from "../Modal/Modal";
import Backdrop from '../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Project(props) {
  const [state, setState] = useState({
    show: false,
    index: 0,
    
  });

  const showModal = e => {
    setState({
      show: !state.show
    });
  };


  return (
    <div className="project fade-in ">
      <div className="container">
        <img className="project_image" src={props.image} alt={props.image_alt}></img>
        <div className="overlay" onClick={() => showModal()}>
          <div className="text">{props.title}</div>
        </div>
      </div>
      <Modal 
        show={state.show}
        onClose={showModal}
        title={props.title}
        description={props.description}
        stack={props.stack}
        link={props.link}
      />
      <Backdrop show={state.show} click={showModal}/>
    </div>
  )
}