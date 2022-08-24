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
        <Link to="/Pricing" className='links'>Pricing</Link>
        <Link to="/AboutUs" className='links'>About Us</Link>
        <li className="links">Contact Us</li>
        <li  className="links" >
          Free Trial
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
