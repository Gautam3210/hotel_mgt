import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Hotel App</div>
        
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">Room Listing</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
