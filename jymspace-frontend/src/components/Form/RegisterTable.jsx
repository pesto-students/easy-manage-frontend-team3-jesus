import React, { useState, useEffect, useCallback } from 'react'
import Modal from 'react-modal'
import { Spacer } from '../Spacer'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Registertable.css'
import Loader from '../Loader/Loader'
import FormRegister from './FormRegister'
import { NetworkManager } from '../../Utility'

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

const RegisterTable = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [addUser, setAddUser] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState()

  const loadData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await NetworkManager.get('gym/users/allaccounts')
      setLoading(false)
      setData(response.data)
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }, [])

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCancelUserAddOrEdit = () => {
    setSelectedUserId()
    setAddUser(false)
  }

  const onSave = useCallback(() => {
    loadData()
    setAddUser(false)
    setSelectedUserId()
  }, [loadData])

  const deleteContact = async id => {
    if (window.confirm('Are you sure that you wanted to delete that contact ?')) {
      await NetworkManager.delete(`gym/user/delete/${id}`)
      toast.success('User Deleted Successfully')
      setTimeout(() => loadData(), 500)
    }
  }
  if (error) return <Navigate to='/SignIn' />
  if (loading) return <Loader />

  return (
    <div className='user-register'>
      <Modal style={modalStyles} isOpen={selectedUserId || addUser}>
        <FormRegister
          onSave={onSave}
          mode={selectedUserId ? 'edit' : 'add'}
          onClickCancel={onCancelUserAddOrEdit}
          id={selectedUserId}
        />
      </Modal>
      <Spacer />
      <button onClick={() => setAddUser(true)} type='button' className='add-user-button'>
        Add User
      </button>
      <Spacer />
      <table className='styled-table-register'>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Gender</th>
            <th style={{ textAlign: 'center' }}>Email</th>
            <th style={{ textAlign: 'center' }}>Address</th>
            <th style={{ textAlign: 'center' }}>City</th>
            <th style={{ textAlign: 'center' }}>StateName</th>
            <th style={{ textAlign: 'center' }}>country</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sex}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.stateName}</td>
                <td>{item.country}</td>
                <td>
                  <button
                    onClick={() => setSelectedUserId(item.id)}
                    type='button'
                    className='btn-table-register btn-edit-register'
                  >
                    Edit
                  </button>
                  <button
                    className='btn-table-register btn-delete-register'
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RegisterTable
