import React,{useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import { LOGIN_TOKEN_KEY } from '../../Utility'

function Logout({to}) {

    useEffect(() => {
        window.sessionStorage.removeItem(LOGIN_TOKEN_KEY)
    },[])
    return <Navigate to={to}/>
}

export default Logout