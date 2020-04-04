import React, {useState} from 'react';
import "./Projects.css";
import Project from "./Project"

export default function Projects(props) {

  return (
    <div className="projects"> 
      <h1>My Projects</h1>
      <Project 
        image="images/schedular.png"
        image_alt="screenshot of schedular app"
        title="Schdeular"
        description="Scheduler is a web app that allows users to create, delete and edit interview appointmments. Users can enter the name of the interviewee, and select from a list of available interviewers. Application includes built-in test features.
        "
        stack={['React', 'Node', 'Express', 'Jest', 'Storybook', 'Cypress']}
        link='https://github.com/cphung1/scheduler'
      />
    </div>
  )
}