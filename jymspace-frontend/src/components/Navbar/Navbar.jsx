import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="navbar">
      <Link to="/">
      <img src={logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/Pricing" className='links'>Pricing</Link>
        <Link to="/AboutUs" className='links'>About Us</Link>
        <Link to="/contactUs" className='links'>Contact Us</Link>
       
        <Link  to="/SuperUser" className="links" >
          SuperUser
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
