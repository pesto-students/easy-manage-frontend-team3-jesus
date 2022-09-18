import React, { useEffect, useState } from "react";
import {Navigate} from 'react-router-dom'
import "./UserDashboard.css";
import ComingSoon from '../../assets/coming-soon.gif'
import axios from "axios";
import { GiProgression } from "react-icons/gi";
import "react-circular-progressbar/dist/styles.css";
import Loader from "../Loader/Loader";

const UserDashboard = () => {
  const [userCount, setUserCount] = useState();
  const [error,setError]= useState(false)
  const [loading,setLoading] = useState(true)

  const loadData = async () => {
    try {
    const response = await axios.get(
      "https://jymspace-api.herokuapp.com/gym/users/allaccounts"
    );
    setLoading(false)
    setUserCount(response?.data?.length ?? 0);
    }catch(e) {
      setLoading(false)
      setError(true)
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if(error) return <Navigate to='/SignIn' />
  if(loading) return <Loader />

  return (
    <div>
      <div className="home-container">
        <div className="box">
          <div className="box-icon">
            <GiProgression />
          </div>
          <div className="box-data">
            <span>Members</span>
            <h1>{userCount}</h1>
          </div>
          
        </div>
        
      </div>
      <img style={{marginLeft:'785px',marginBottom:'30px'}} src={ComingSoon} />
    </div>
  );
};

export default UserDashboard;
