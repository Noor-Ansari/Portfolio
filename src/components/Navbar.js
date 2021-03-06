import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Noor Mohammad</div>
      <ul className="nav-items">
        <li className="nav-item"><a href="#projects"> Project </a></li>
        <li className="nav-item"><a href="#contact"> Contact </a></li>
        <li className="nav-item"><a href="#about"> About </a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
