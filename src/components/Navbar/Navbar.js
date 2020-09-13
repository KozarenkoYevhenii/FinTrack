import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <NavLink to="/home">Home</NavLink>
      </div>
      <div className="navbar-item">
        <NavLink to="/charts">Charts</NavLink>
      </div>
      <div className="navbar-item">
        <NavLink to="/categories">Categories</NavLink>
      </div>
    </div>
  );
}
