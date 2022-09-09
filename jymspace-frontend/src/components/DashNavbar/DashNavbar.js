import React from 'react';
import "./DashNavbar.css";
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import avatar from "../../assets/Avatar.png";



const DashNavbar = () => {
  return (
    <div className="DashNavbar">
      <div className="search">
        <FiSearch className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <BiMessageRoundedDetail className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <MdNotificationsNone className='nav-icon' />
      </div>

      <div className="user">
        <span>user</span>
       <img src={avatar} alt="avatar" />
      </div>
    </div>
  )
}

export default DashNavbar;