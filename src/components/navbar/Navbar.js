import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <Link to="/">URL Shortener</Link>
      </div>
      <ul className="routes">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
      </ul>
    </div>
  );
}

export default Navbar;
