import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
            <Link to="/" className='links'>Home</Link>
            <Link to="/Plans" className='links'>Pricing</Link>
            <Link to="/about" className='links'>About Us</Link>
            <li>Contact Us</li>
            <li>Free Trial</li>
            
        </ul>
    </div>
  )
}

export default Navbar