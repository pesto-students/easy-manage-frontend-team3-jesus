import React from 'react'
import {Navigate} from 'react-router-dom'
import GymTable from '../../components/AddGyms/GymTable'
import { LOGIN_TOKEN_KEY } from '../../Utility'


const SuperUserDashBoard = () => {
 
  if(!window.sessionStorage.getItem(LOGIN_TOKEN_KEY)){
    return <Navigate to='/SuperUser'/>
  }

  return (
    <div >
      <GymTable/>
    </div>
  )
}

export default SuperUserDashBoard