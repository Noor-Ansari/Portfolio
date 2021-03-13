import React from "react";
import slackImage from "../assets/Slack-image.jpg";
import github from "../assets/github-240.png";
import githubImage from "../assets/Github-image.jpg";
import quizImage from "../assets/Quiz-image.jpg";
import weatherImage from "../assets/Weather-image.jpg";
import shoppingImage from "../assets/Shopping-image.jpg";
import "./Projects.css";

const projectsData = [
  {
    name: "Github Clone",
    description:
      "It was a fun project. After learning some basics of React.js I wanted to build something on my own, so I found the github API through which we can get the public data of a particular user.",
    image: githubImage,
    technologies: [
      "React.js",
      "Github API",
      "Context API",
      "Material-UI",
      "React-Router",
    ],
    github: "https://github.com/Noor-Ansari/github-clone",
  },
  {
    name: "E-commerce App",
    description:
      "It is a very basic project in which I tried to replicate some minimal features of an e-commerce app, such as Add-to-cart/remove-from-cart, increasing/decreasing the items quantity and total-bill-amount.",
    image: shoppingImage,
    technologies: ["React.js", "Context API", "React-Router", "React Hooks"],
    github: "https://github.com/Noor-Ansari/Shopping-Plaza",
  },
  {
    name: "Quiz App",
    description:
      "It was the first web app I built using React. The app's structure is very simple it fetches the data from a json file according to the choosen category by user and then counts the right answers. At the end it shows the total score of the user.",
    image: quizImage,
    technologies: ["React.js", "Pure CSS", "React-Router"],
    github: "https://github.com/Noor-Ansari/React-quiz-app",
  },
  {
    name: "Slack Clone",
    description:
      "It is a slack-clone app, which has minimal live chatting app features such as login/logout functionalities",
    image: slackImage,
    technologies: [
      "React.js",
      "Material-UI",
      "Google Authentication",
      "Realtime Database",
      "Styled Components",
    ],
    github: "https://github.com/Noor-Ansari/slack-clone",
  },
  {
    name: "Weather App",
    description:
      "This app was built using flask and openweather API, which shows the weather information of the given city. The interface was designed using HTML and CSS.",
    image: weatherImage,
    technologies: ["Python", "Flask", "Open Weather API", "HTML", "CSS"],
    github: "https://github.com/Noor-Ansari/Weather-App",
  },
];

function Projects() {
  return (
    <div id="projects">
      <h1 className="main-title">Some of my projects</h1>
      <div className="project-container">
        {projectsData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="main">
              <h1>{project.name}</h1>
              <img src={project.image} alt="" />
            </div>
            <div className="details">
              <p>{project.description}</p>
              <div className="list">
                <h2>Technologies used</h2>
                <ul>
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <footer>
              <a href={project.github} className="github-link link-fill">
                <img src={github} alt="" className="github-icon" />
                Checkout the code
              </a>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
