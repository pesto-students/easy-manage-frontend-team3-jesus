import React from 'react'
import {useLocation,Navigate} from 'react-router-dom'
import { Outlet } from 'react-router';
import Sidebar from '../../components/Sidebar/Sidebar';




const Dashboard = () => {
  const location = useLocation();
 
  if(location.pathname === '/Dashboard/' || location.pathname === '/Dashboard'){
    return <Navigate to='/Dashboard/Home'/>
  }


  return (
    <div>
     <Sidebar/>
     <Outlet/>
    </div>
  )
}

export default Dashboard;