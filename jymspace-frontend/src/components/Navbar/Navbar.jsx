import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to="/" className="links">
          Home
        </Link>
        <li className="links">Pricing</li>
        <li className="links">About Us</li>
        <li className="links">Contact Us</li>
        <li className="links">Free Trial</li>
      </ul>
    </div>
  );
};

export default Navbar;
