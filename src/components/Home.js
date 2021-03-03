import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Tech from "./Tech";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <div className="intro-container">
          <h1> 
              Hi gorgeous people <br/> 
            I'm Noor Mohammad,<br/> A passionate web developer.
        </h1>
        <p>
            I am a curious person who likes to learn and try new technologies.
        </p>
      </div>
      <Tech/>
    </div>
  );
}

export default Home;
