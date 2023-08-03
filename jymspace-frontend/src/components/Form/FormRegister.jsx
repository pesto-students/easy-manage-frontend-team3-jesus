import './FormRegister.css'
import React, { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { FormControl } from '../FormControl'
import { Spacer } from '../Spacer'
import { NetworkManager } from '../../Utility'
import Loader from '../Loader/Loader'

const initialState = {
  name: '',
  sex: '',
  email: '',
  password: '',
  address: '',
  city: '',
  stateName: '',
  country: '',
}

const FormRegister = ({ mode, id, onClickCancel, onSave }) => {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(id ? true : false)
  const [error, setError] = useState('')

  const { name, sex, email, password, address, city, stateName, country } = state

  useEffect(() => {
    NetworkManager.get(`gym/user/${id}`).then(resp => {
      setLoading(false)
      setState({ ...resp.data })
    })
  }, [id])

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      if (!name || !sex || !email || !password || !address || !city || !stateName || !country) {
        return setError('Please provide value into each input field')
      }
      if (mode === 'add') {
        try {
          await NetworkManager.post('gym/user/signup', {
            name,
            sex,
            email,
            password,
            address,
            city,
            stateName,
            country,
          })
          onSave()
          toast.success('user Added Successfully')
        } catch (e) {
          setError(e.message)
        }
      } else if (mode === 'edit') {
        try {
          await NetworkManager.put(`gym/user/update/${id}`, {
            name,
            sex,
            email,
            password,
            address,
            city,
            stateName,
            country,
          })
          onSave()
          toast.success('User Updated Successfully')
        } catch (e) {
          setError(e.message)
        }
      }

      setState({
        name: '',
        sex: '',
        email: '',
        password: '',
        address: '',
        city: '',
        stateName: '',
        country: '',
      })
    },
    [mode, id, onSave, name, sex, email, password, address, city, stateName, country],
  )

  const handleInputChange = e => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  if (loading) return <Loader />

  return (
    <div className='container-register'>
      <div className='title-register'>REGISTER INTO GYM SPACE</div>
      <div className='content-register'>
        <form action='#' onSubmit={handleSubmit}>
          <Spacer />
          <Spacer />
          <div className='user-details-register'>
            <FormControl
              label='Name'
              labelColor='white'
              style={{ flex: 1 }}
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              value={name}
              onChange={handleInputChange}
            />
            <Spacer />
            <FormControl
              type='text'
              label='Gender'
              labelColor='white'
              style={{ flex: 1 }}
              id='sex'
              name='sex'
              placeholder='Enter your gender'
              value={sex || ''}
              onChange={handleInputChange}
            />
          </div>
          <Spacer />
          <div className='user-details-register'>
            <FormControl
              type='email'
              label='Email'
              labelColor='white'
              style={{ flex: 1 }}
              id='email'
              name='email'
              placeholder='Enter your email'
              value={email || ''}
              onChange={handleInputChange}
            />
            <Spacer />
            <FormControl
              type='password'
              label='Password'
              labelColor='white'
              style={{ flex: 1 }}
              placeholder='Enter your number'
              id='password'
              name='password'
              value={password || ''}
              onChange={handleInputChange}
            />
          </div>
          <Spacer />
          <div className='user-details-register'>
            <FormControl
              type='textarea'
              label='Address'
              labelColor='white'
              style={{ flex: 1 }}
              placeholder='Enter your Address'
              id='address'
              name='address'
              value={address || ''}
              onChange={handleInputChange}
            />
            <Spacer />
            <FormControl
              label='City'
              labelColor='white'
              style={{ flex: 1 }}
              type='text'
              placeholder='Enter your city name'
              id='city'
              name='city'
              value={city || ''}
              onChange={handleInputChange}
            />
          </div>
          <Spacer />
          <div className='user-details-register'>
            <FormControl
              label='State'
              labelColor='white'
              style={{ flex: 1 }}
              type='text'
              placeholder='Enter your state name'
              id='stateName'
              name='stateName'
              value={stateName || ''}
              onChange={handleInputChange}
            />
            <Spacer />
            <FormControl
              label='Country'
              labelColor='white'
              style={{ flex: 1 }}
              type='text'
              placeholder='Enter your country name '
              id='country'
              name='country'
              value={country || ''}
              onChange={handleInputChange}
            />
          </div>
          <Spacer />
          {error ? <div className='register-error'>{error}</div> : null}
          <div className='button-register'>
            <input className='save-button' type='submit' value={id ? 'Update' : 'Save'} />
            <Spacer />
            <input className='cancel-button' type='button' value='Cancel' onClick={onClickCancel} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormRegister
