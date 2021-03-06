import "./Contact.css";
import React from "react";
import linkedin from "../assets/linkedin-240.png";
import instagram from "../assets/instagram-240.png";
import gmail from "../assets/gmail-240.png";
import github from "../assets/github-240.png";
import hands from "../assets/holding-hands-64.png";

const data = [{icon : instagram, link : "https://www.instagram.com/noor_coder/"}, {icon : linkedin, link : "https://www.linkedin.com/in/noor-mohammad-0a28a21a3/"}, {icon : github, link : "https://github.com/Noor-Ansari"}, {icon : gmail}];

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h1>
        Let's get in touch <img src={hands} alt="" />
      </h1>
      <div className="icons-list">
        {data.map((item, idx) => (
          <a key={idx} href={item.link}><img src={item.icon} alt="" className="icon-image" /></a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
