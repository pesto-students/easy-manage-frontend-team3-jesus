import React from 'react'
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  {
    linkName: 'Home',
    url: '/',
  },
  {
    linkName: 'About Us',
    url: '/AboutUs',
  },
  {
    linkName: 'Contact Us',
    url: '/contactUs',
  },
  {
    linkName: 'Sign In',
    url: '/SignIn',
  },
]

export const Navbar = () => {
  const location = useLocation()
  return (
    <div className='navbar'>
      <Link to='/' className='links'>
        <img src={logo} alt='Logo' className='logo' />
      </Link>
      <ul className='navbar-menu'>
        {links.map(link => (
          <Link
            key={link.linkName}
            to={link.url}
            className={`link ${location.pathname === link.url ? `link-active` : `links`}`}
          >
            {link.linkName}
          </Link>
        ))}
      </ul>
    </div>
  )
}
