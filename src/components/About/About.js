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
        <p>Full stack web developer with a background in education. While teaching elementary school students how to code, I found myself more drawn to what they were doing than what I was. This placed me in front of a tough choice- do I continue teaching or follow the intrigue into the coding world? Having taken a few classes in computer science, I knew it was something I enjoyed. So, I took the plunge, changed my career path, and haven’t looked back.</p>
        {/* <br/> */}
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