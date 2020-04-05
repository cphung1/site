import React, {useState} from 'react';
import "./Projects.css";
import Project from "./Project"

export default function Projects(props) {

  return (
    <div className="projects"> 
      <h1>Projects</h1>
      <div className="row">
        <div className="column">
          <Project 
            image={["images/schedular/sched_main_page.png", "images/schedular/schedular.png", "images/schedular/sched_storybook.png", "images/schedular/sched_cypress.png"]}
            image_alt="screenshot of schedular app"
            title="Schedular"
            description="Scheduler is a web app that allows users to create, delete and edit interview appointmments. Users can enter the name of the interviewee, and select from a list of available interviewers. Application includes built-in test features."
            stack={['React', 'Node', 'Express', 'Jest', 'Storybook', 'Cypress']}
            link='https://github.com/cphung1/scheduler'
          />
        </div>
        <div className="column">
          <Project 
            image={["images/food-pickup/food_main.png", "images/food-pickup/food-pickup.png", "images/food-pickup/food_rest_time.png", "images/food-pickup/food_cust_time.png"]}
            image_alt="screenshot of food pick-up app"
            title="Food Pick-up"
            description="A food ordering pick up application for a single restaurant that was built using AJAX. Twilio API is used to send text messages to the restaurant to confirm orders. Customers get text messages for order updates."
            stack={['Node', 'Express', 'JQuery', 'Twilio', 'PostgreSQL']}
            link='https://github.com/cphung1/food-pickup'
          />
        </div>
      </div>

      <div className="row">
        <div className="column">
          <Project 
            image={["images/tweeter.png"]}
            image_alt="screenshot of tweeter app"
            title="Tweeter"
            description="Tweeter is a dynamic, simple, single-page application. It is a clone of Twitter. Users can create and submit new tweets. It uses Ajax to update the tweets on the screen."
            stack={['Node', 'Express', 'JQuery']}
            link='https://github.com/cphung1/scheduler'
          />
        </div>
        <div className="column">
          <Project 
            image="images/food-pickup.png"
            image_alt="screenshot of food pick-up app"
            title="Food Pick-up"
            description="A food ordering pick up application for a single restaurant that was built using AJAX. Twilio API is used to send text messages to the restaurant to confirm orders. Customers get text messages for order updates."
            stack={['Node', 'Express', 'JQuery', 'Twilio', 'PostgreSQL']}
            link='https://github.com/cphung1/food-pickup' 
          />
        </div>
        </div>
    </div>        

  )
}