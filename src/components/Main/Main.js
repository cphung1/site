import React from "react";

import "./Main.css";




export default function Main(props) {
  return (
    <div className="main">
      <h1 className="greeting">Hello, my name is</h1>
      <div className="name"> 
      <h2 className="full_name">Cathy Phung.       
        <img className="stroke fade-in" src="/images/blue.png"></img>
      
      </h2>
      </div>

      <p className="info">I am a web developer.</p>
    </div>
  );
};