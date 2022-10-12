import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import './GymTable.css'
import Loader from '../Loader/Loader'
import { Spacer } from '../Spacer'
import { NetworkManager } from '../../Utility'
import GymRegister from './GymRegister'

const modalStyles = {
  content: {
    width: '80%',
    position: 'relative',
    margin: 'auto',
    height: '80%',
    overflow: 'hidden',
    zIndex: 1,
  },
}

const headers = ['Name', 'Email', 'Address', 'City', 'State Name', 'Country', 'JymPlanId', 'Action']

const GymTable = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [addGym, setAddGym] = useState(false)
  const [selectedGymId, setSelectedGymId] = useState()

  const loadData = useCallback(async () => {
    const response = await NetworkManager.get('superadmin/gym/allAccounts')
    setLoading(false)
    setData(response.data)
  }, [])

  useEffect(() => {
    loadData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCancelGymAddOrEdit = () => {
    setSelectedGymId()
    setAddGym(false)
  }

  const onSave = useCallback(() => {
    loadData()
    setAddGym(false)
    setSelectedGymId()
  }, [loadData])

  const deleteContact = async id => {
    if (window.confirm('Are you sure that you wanted to delete that contact ?')) {
      await NetworkManager.delete(`superadmin/gym/delete/${id}`)
      toast.success('Gym Deleted Successfully')
      setTimeout(() => loadData(), 500)
    }
  }

  if (loading) return <Loader />

  return (
    <div>
      <Modal style={modalStyles} isOpen={selectedGymId || addGym}>
        <GymRegister
          onSave={onSave}
          mode={selectedGymId ? 'edit' : 'add'}
          onClickCancel={onCancelGymAddOrEdit}
          id={selectedGymId}
        />
      </Modal>
      <Spacer />
      <div className='dashboard-header'>
        <div className='add-button-container'>
          <button onClick={() => setAddGym(true)} type='button' className='add-gym-button'>
            Add Gym
          </button>
        </div>
        <Link className='logout-button' to='/Logout'>
          Logout
        </Link>
      </div>
      <Spacer />
      <table className='styled-table'>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header} className='heading-center'>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.stateName}</td>
                <td>{item.country}</td>
                <td>{item.JymPlanId}</td>
                <td>
                  <button onClick={() => setSelectedGymId(item.id)} className='btn-table btn-edit'>
                    Edit
                  </button>
                  <button className='btn-table btn-delete' onClick={() => deleteContact(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Spacer />
      <Spacer />
    </div>
  )
}

export default GymTable
