import React from "react";

import "./About.css";


export default function About(props) {
  return (
    <div className="about">
      <div className='picture'>
        <img src="./images/profile.jpeg" className="fade-in-about"></img>
      </div>

      <div className="about_me">
        <div className="about_text">
        <h2>About Me</h2>
        <p>Suspendisse ultricies ante sit amet lacus rhoncus, id vulputate nulla fermentum. Etiam vestibulum ipsum a accumsan sagittis. Praesent ullamcorper risus justo, id semper risus finibus ut. Sed vulputate augue turpis, quis posuere nibh dignissim eget.</p>
        <br/>
        {/* <p>I love sharing pictures of my 
          <a href="/max"> dog</a>.
        </p> */}
        <h4>Technologies I've been working with: </h4>

        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>HTML & (S)CSS</li>
          <li>jQuery</li>
          <li>postgreSQL</li>
        </ul>
      </div>
    </div>
  </div>
  );
};