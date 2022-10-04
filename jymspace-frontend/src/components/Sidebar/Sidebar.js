import React from 'react'

import { menuItems } from '../../Data/dummy'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'
import logo from '../../assets/logo.png'

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className='container'>
      <div className='logo'>
        <img className='logo-icon' src={logo} alt='logo' />
        <span>Dashboard</span>
      </div>

      <div className='menu'>
        {menuItems.map(item => (
          <Link to={item.name} key={item.id} style={{ textDecoration: 'none' }}>
            <div className={location.pathname === item.name ? 'item-active' : 'item'}>
              {item.icon}
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
