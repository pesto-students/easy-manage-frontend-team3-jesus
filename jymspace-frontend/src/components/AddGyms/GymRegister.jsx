import React, { useState, useEffect } from 'react'
import './GymRegister.css'
import { toast } from 'react-toastify'
import { FormControl } from '../FormControl'
import { Spacer } from '../Spacer'
import { NetworkManager } from '../../Utility'
import Loader from '../Loader/Loader'

const initialState = {
  name: '',
  email: '',
  password: '',
  address: '',
  city: '',
  stateName: '',
  country: '',
  JymPlanId: '',
}

const GymRegister = ({ onClickCancel, onSave, id, mode }) => {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(id ? true : false)
  const [error, setError] = useState('')

  const { name, email, password, address, city, stateName, country, JymPlanId = null } = state

  useEffect(() => {
    NetworkManager.get(`superadmin/gym/get/${id}`).then(resp => {
      setLoading(false)
      setState({ ...resp.data })
    })
  }, [id])

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(
      'STATE',
      name,
      email,
      password,
      address,
      city,
      stateName,
      country,
      JymPlanId,
      !name,
      !email,
      !password,
      !address,
      !city,
      !stateName,
      !country,
      !JymPlanId,
    )
    if (!name || !email || !password || !address || !city || !stateName || !country || !JymPlanId) {
      return setError('Please provide value into each input field')
    } else {
      if (mode === 'add') {
        try {
          await NetworkManager.post('superadmin/gym/signup', {
            name,
            email,
            password,
            address,
            city,
            stateName,
            country,
            JymPlanId,
          })
          onSave()
          toast.success('Gym owner Added Successfully')
        } catch (e) {
          setError(e.message)
        }
      } else if (mode === 'edit' && id) {
        try {
          await NetworkManager.put(`superadmin/gym/update/${id}`, {
            name,
            email,
            password,
            address,
            city,
            stateName,
            country,
            JymPlanId,
          })
          onSave()
          toast.success('Gym Updated Successfully')
        } catch (e) {
          setError(e.message)
        }
      }
      setState({
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        stateName: '',
        country: '',
        JymPlanId: '',
      })
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  if (loading) return <Loader />

  return (
    <div className='register-gym-container'>
      <form onSubmit={handleSubmit}>
        <div className='input-field-container'>
          <FormControl
            label='Name'
            labelColor='white'
            style={{ flex: 1 }}
            type='text'
            id='name'
            name='name'
            placeholder='Enter your Name here'
            value={name || ''}
            onChange={handleInputChange}
          />
          <Spacer />
          <FormControl
            label='Email'
            labelColor='White'
            style={{ flex: 1 }}
            type='email'
            id='email'
            name='email'
            placeholder='Enter Your Email here'
            value={email || ''}
            onChange={handleInputChange}
          />
        </div>
        <Spacer />
        <div className='input-field-container'>
          <FormControl
            label='Password'
            labelColor='white'
            style={{ flex: 1 }}
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password here'
            value={password || ''}
            onChange={handleInputChange}
          />
          <Spacer />
          <FormControl
            label='Address'
            labelColor='white'
            style={{ flex: 1 }}
            type='text'
            id='address'
            name='address'
            placeholder='Your Address ...'
            value={address || ''}
            onChange={handleInputChange}
          />
        </div>
        <Spacer />
        <div className='input-field-container'>
          <FormControl
            label='City'
            labelColor='white'
            style={{ flex: 1 }}
            type='text'
            id='city'
            name='city'
            placeholder='Enter Your City name here'
            value={city || ''}
            onChange={handleInputChange}
          />
          <Spacer />
          <FormControl
            label='State Name'
            labelColor='white'
            style={{ flex: 1 }}
            type='text'
            id='stateName'
            name='stateName'
            placeholder='Enter your state name here'
            value={stateName || ''}
            onChange={handleInputChange}
          />
        </div>
        <Spacer />
        <div className='input-field-container'>
          <FormControl
            label='Country'
            labelColor='white'
            style={{ flex: 1 }}
            type='text'
            id='counter'
            name='country'
            placeholder='Enter your state name here'
            value={country || ''}
            onChange={handleInputChange}
          />
          <Spacer />
          <div style={{ flex: 1 }} className='form-control'>
            <label style={{ color: 'white' }}>Select Plan</label>
            <select
              onChange={e => setState(oldState => ({ ...oldState, JymPlanId: e.target.value }))}
              value={JymPlanId}
              className='select-plan'
              defaultValue={JymPlanId}
            >
              <option value='DEFAULT'>Select plans</option>
              <option value='0d281609-6930-4b76-b848-2615a02d250c'>Free Trail</option>
              <option value='f1b7c515-7c4a-4888-a9f7-18e5a94381d6'>Pro Plan</option>
              <option value='ec492585-025e-4c11-bb33-a4f124c48dae'>Premium Plan</option>
            </select>
          </div>
        </div>
        <Spacer />
        {error ? <div className='register-gym-error'>{error}</div> : null}
        <div style={{ flexDirection: 'row', flex: 1 }} className='form-control'>
          <input type='submit' value={id ? 'Update' : 'Save'} />
          <Spacer />
          <input onClick={onClickCancel} className='cancel-button' type='button' value='Cancel' />
        </div>
      </form>
    </div>
  )
}
export default GymRegister
