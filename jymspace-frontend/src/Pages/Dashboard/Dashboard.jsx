import React from 'react'
import {useLocation,Navigate} from 'react-router-dom'
import { Outlet } from 'react-router';
import Sidebar from '../../components/Sidebar/Sidebar';
import { LOGIN_TOKEN_KEY } from '../../Utility';




const Dashboard = () => {
  const location = useLocation();
 
  if(location.pathname === '/Dashboard/' || location.pathname === '/Dashboard'){
    return <Navigate to='/Dashboard/Home'/>
  }

  if(!window.sessionStorage.getItem(LOGIN_TOKEN_KEY)){
    return <Navigate to='/SignIn'/>
  }


  return (
    <div>
     <Sidebar/>
     <Outlet/>
    </div>
  )
}

export default Dashboard;