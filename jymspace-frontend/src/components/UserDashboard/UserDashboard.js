import React from 'react';
import "./UserDashboard.css";
import { GiProgression, GiProfit } from "react-icons/gi";
import { BsFillCartCheckFill} from "react-icons/bs"
import { HiUsers } from "react-icons/hi";

import 'react-circular-progressbar/dist/styles.css';

const UserDashboard = () => {
  return (
    <div>
      <div className="home-container">

        <div className="box">

          <div className="box-icon">
            <GiProgression />
          </div>
          <div className="box-data">
            <span>Members</span>
            <h1>120</h1>
          </div>

        </div>

        <div className="box">

          <div className="box-icon">
            <HiUsers />
          </div>
          <div className="box-data">
            <span>Employess</span>
            <h1>7</h1>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
            <GiProfit />
          </div>
          <div className="box-data">
            <span>Dues</span>
            <h1>12</h1>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
            <BsFillCartCheckFill />
          </div>
          <div className="box-data">
            <span>Complaints</span>
            <h1>4</h1>
          </div>

        </div>
      </div>

     
    </div>
  )
}

export default UserDashboard; 