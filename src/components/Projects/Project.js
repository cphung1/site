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
      ...state,
      show: !state.show
    });
  };

  const clickForward = () => {
    if (state.index === props.image.length - 1) {
      setState({index: 0})
    } else {
      setState({
        index: state.index + 1
      })
    }
  }

  const clickBack = () => {
    if (state.index === 0 ) {
      setState({
        index: props.image.length - 1
      })
    } else {
      setState({
        index: state.index - 1
      })
    }
  }


  return (
    <div className="project fade-in ">
      <div className="container">
        <div className="pic_buttons">
          <button className="back" onClick={clickBack}>
            <FontAwesomeIcon icon="chevron-left" size="2x"/>
          </button>
          <button className="forward" onClick={clickForward}>
          <FontAwesomeIcon icon="chevron-right" size="2x"/>
          </button>
        </div>
        <div>
        <img className="project_image" src={props.image[state.index]} alt={props.image_alt} onClick={() => showModal()}></img>
        </div>
        <div className="overlay">
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