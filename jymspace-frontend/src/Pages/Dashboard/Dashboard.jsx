import React from 'react'
import { Outlet } from 'react-router';

import DashNavbar from '../../components/DashNavbar/DashNavbar';

import Sidebar from '../../components/Sidebar/Sidebar';

import Users from '../../components/Users/Users';



const Dashboard = () => {
  return (
    <div>
     <Sidebar/>
     <DashNavbar/>
    <Outlet/>
    </div>
  )
}

export default Dashboard;