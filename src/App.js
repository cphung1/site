import React, {Component, useState} from 'react';
// import './App.css';
import Toolbar from './components/Navigation/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee, faBars)

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
    let sideBar;
    let backdrop;
  
    if(this.state.sideBarOpen) {
      sideBar = <SideBar />
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
  
    return (
      <div className="App" style={{height: '100%'}}>
        <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler}/>
        {sideBar}
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
