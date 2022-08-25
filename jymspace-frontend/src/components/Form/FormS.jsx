import React, { useState } from 'react';
import './FormS.css';
import FormSignIn from '../Form/FormSignIn';
import SignIn from '../../assets/SignIn.jpg';


const FormS = () => {
  const [ setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img src={SignIn} alt="img" className='form-img' />
        </div>
        
          <FormSignIn submitForm={submitForm} />
        
      </div>
    </>
  );
};

export default FormS;