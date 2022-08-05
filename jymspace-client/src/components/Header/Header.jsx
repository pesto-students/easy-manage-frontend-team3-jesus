import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Free Trial</li>
            
        </ul>
    </div>
  )
}

export default Header