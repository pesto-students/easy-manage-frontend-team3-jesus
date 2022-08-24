import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const Pricing = useRef(null);
  const Trial = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to="/" className="links">
          Home
        </Link>
        <li onClick={() => scrollToSection(Pricing)} className="links" ref={Pricing} >
          Pricing
        </li>
        <Link to="/AboutUs" className='links'>About Us</Link>
        <li className="links">Contact Us</li>
        <li onClick={() => scrollToSection(Trial)} className="links" ref={Trial}>
          Free Trial
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
