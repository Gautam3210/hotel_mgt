import React from "react";
import {Link} from "react-router-dom"
import "./adminNavbar.css"

const AdminNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Hotel App <span style={{fontSize:"10px"}}>Admin</span></div>

      <ul className="nav-links">
        <li><Link to="/admin">Bookings</Link></li>
        <li><Link to="/admin/rooms">Add Rooms</Link></li>
        <li><Link to="/">User Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
