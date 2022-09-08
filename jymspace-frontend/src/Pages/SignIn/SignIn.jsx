import React from 'react'
import Footer from '../../components/Footer/Footer'
import FormSignIn from '../../components/Form/FormSignIn'
import Navbar from '../../components/Navbar/Navbar'

const SignIn = () => {
  return (
    <div>
        <Navbar/>
        <FormSignIn/>
        <Footer/>
    </div>
  )
}

export default SignIn