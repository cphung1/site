import React, {Component, useState} from 'react';
import './App.css';
import Toolbar from './components/Navigation/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab , faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { far, faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
library.add( faBars, faGithub, fab, faTimes, faChevronRight, faChevronLeft, faEnvelope, faLinkedin, far, faFile)

class App extends Component {
  state = {
    sideBarOpen: false,
  };

  sideBarToggleClickHandler = () => {
    this.setState((prev) => {
      return {sideBarOpen: !prev.sideBarOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({sideBarOpen: false});
  }

  render () {
    let backdrop;
  
    if(this.state.sideBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
  
    return (
      <div className="App" style={{height: '100%'}}>
        <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler}/>
        <SideBar show={this.state.sideBarOpen}/>
        {backdrop}
        <main>
        </main>
      </div>
    );
  }
}

export default App;
