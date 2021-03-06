import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Tech from "./Tech";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Banner />
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Home;
