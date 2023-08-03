import React, { useState } from 'react'
import { authenticateGYM, authenticateSuperGYM } from '../../Services'
import { Navigate } from 'react-router-dom'
import * as yup from 'yup'
import './FormSignIn.css'
import { FormControl } from '../FormControl'
import { Spacer } from '../Spacer'

const emailSchema = yup.object().shape({
  email: yup.string().email().required('Please enter a valid email'),
})

const passwordSchema = yup.object().shape({
  password: yup.string().required('Please enter a valid password'),
})

const demoGymCredentials = {
  email: 'test@test.com',
  password: '1234',
}

const demoSuperCredentials = {
  email: 'demosuper@email.com',
  password: 'demo@123',
}

export const FormSignIn = () => {
  const [email, setEmail] = useState(demoGymCredentials.email)
  const [password, setPassword] = useState(demoGymCredentials.password)
  const [redirectTo, setRedirectTo] = useState(false)
  const [signInAs, setSignInAs] = useState('Gym')
  const [error, setError] = useState('')

  const login = as => {
    if (as === 'SuperUser') {
      authenticateSuperGYM(
        {
          email: email,
          password: password,
        },
        () => setRedirectTo('/SuperUserDashboard'),
        () => setError('Invalid Credentials, try again'),
      )
    } else if (as === 'Gym') {
      authenticateGYM(
        {
          email: email,
          password: password,
        },
        () => setRedirectTo('/Dashboard/Home'),
        () => setError('Invalid Credentials, try again'),
      )
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    try {
      await emailSchema.validate({
        email,
      })
      await passwordSchema.validate({
        password,
      })
      if (signInAs !== 'SuperUser' && signInAs !== 'Gym') {
        return setError('Please select sign in as')
      }
      login(signInAs)
    } catch (e) {
      setError(e.message)
    }
  }

  function onChangeEmail(e) {
    setEmail(e.target.value)
  }

  function onChangePassword(e) {
    setPassword(e.target.value)
  }

  function onChangeSignInAs(e) {
    const value = e.target.value
    if (value === 'SuperUser') {
      setEmail(demoSuperCredentials.email)
      setPassword(demoSuperCredentials.password)
    } else if (password === 'Gym') {
      setEmail(demoGymCredentials.email)
      setPassword(demoGymCredentials.password)
    } else {
      setEmail('')
      setPassword('')
    }
    setSignInAs(e.target.value)
  }

  if (redirectTo) {
    return <Navigate to={redirectTo} />
  }

  return (
    <div className='signIn'>
      <div className='signIn-container'>
        <div className='signIn-left'>
          <h1 className='signIn-title'>SIGN IN</h1>
          <form onSubmit={handleSubmit}>
            <Spacer />
            <FormControl
              label='Email'
              type='email'
              autoComplete='off'
              name='email'
              id='email'
              placeholder='Enter your email here'
              value={email}
              onChange={onChangeEmail}
            />
            <Spacer />
            <FormControl
              label='Password'
              type='password'
              name='password'
              id='password'
              placeholder='Enter Your Password here'
              value={password}
              onChange={onChangePassword}
            />
            <Spacer />
            <div className='form-control'>
              <label>Sign In As</label>
              <select className='select-signin' value={signInAs} onChange={onChangeSignInAs}>
                <option value=''>Select One</option>
                <option value='SuperUser'>Super User</option>
                <option value='Gym'>Gym</option>
              </select>
            </div>
            <Spacer />
            {error ? <div className='signIn-error'>{error}</div> : null}
            <Spacer />
            <div className='signIn-buttons'>
              <button className='signIn-button' type='submit'>
                SIGN IN
              </button>
            </div>
          </form>
        </div>
        <div className='signIn-right'></div>
      </div>
    </div>
  )
}
