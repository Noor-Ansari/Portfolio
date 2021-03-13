import React from "react";
import "./Tech.css";
import mongodb from "../assets/mongodb-480.png";
import react from "../assets/react-480.png";
import javascript from "../assets/javascript-480.png";
import nodejs from "../assets/nodejs-480.png";
import redux from "../assets/redux-480.png";
import python from "../assets/python-480.png";
import html from "../assets/html-5-384.png";
import css from "../assets/css3-480.png";

const ICONS = [html, css, javascript, python, react, mongodb, nodejs, redux];

function Tech() {
  return (
    <div className="tech-container">
      <h1>"Technologies", that I use to transform ideas into implementation</h1>
      <div className="tech-row">
        {ICONS.map((icon, idx) => (
          <img src={icon} alt="" key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Tech;
