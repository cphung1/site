import React, {Component, useState} from 'react';
import './App.css';
import Toolbar from './components/Navigation/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';
import Main from './components/Main/Main';
import About from './components/About/About';




import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add( faBars)

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
