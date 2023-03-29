import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Navbar = () => {
  return (
  <div className="navbar">
      <Link className="nav-button" to="/signin">Sign-In</Link>
    </div>
  )
};

export default Navbar;
