import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Noor Mohammad</div>
      <div className="nav-items">
        <div className="nav-item">Project</div>
        <div className="nav-item">Contact</div>
        <div className="nav-item">About</div>
      </div>
    </nav>
  );
}

export default Navbar;
