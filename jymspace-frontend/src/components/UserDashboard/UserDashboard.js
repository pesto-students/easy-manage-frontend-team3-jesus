import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import './UserDashboard.css'
import { GiProgression } from 'react-icons/gi'
import 'react-circular-progressbar/dist/styles.css'
import Loader from '../Loader/Loader'
import { NetworkManager } from '../../Utility'
import MaleFemaleChart from '../../Charts/MaleFemale'
import { Spacer } from '../Spacer'

const UserDashboard = () => {
  const [userCount, setUserCount] = useState()
  const [chartData, setChartData] = useState({
    males: 0,
    females: 0,
  })
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    try {
      const response = await NetworkManager.get('gym/users/allaccounts')
      const males = (response?.data ?? []).filter(
        item => item?.sex?.toLowerCase() === 'male',
      ).length
      const females = (response?.data ?? []).filter(
        item => item?.sex?.toLowerCase() === 'female',
      ).length
      setChartData({
        males,
        females,
      })
      setLoading(false)
      setUserCount(response?.data?.length ?? 0)
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  if (error) return <Navigate to='/SignIn' />
  if (loading) return <Loader />

  return (
    <div className='home-container'>
      <div className='box'>
        <div className='box-icon'>
          <GiProgression />
        </div>
        <div className='box-data'>
          <span>Members</span>
          <h1>{userCount}</h1>
        </div>
      </div>
      <Spacer />
      <Spacer /> <Spacer /> <Spacer />
      <Spacer />
      <div className='chart-container'>
        <MaleFemaleChart {...chartData} />
      </div>
    </div>
  )
}

export default UserDashboard
