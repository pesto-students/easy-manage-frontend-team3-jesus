import React, { useState } from 'react';
import './Form.css';
import FormSignIn from '../Form/FormSignIn';
import SignIn from '../../assets/SignIn.jpg';


const Form = () => {
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

export default Form;