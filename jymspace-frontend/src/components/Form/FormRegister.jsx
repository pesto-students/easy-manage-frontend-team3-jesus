import React from "react";
import "./FormRegister.css";
import Register from "../../assets/Register.jpg";

const FormRegister = () => {
  function handleSubmit(e) {
    e.preventDefault();
   }
  return (
    <div className="register-container">
      <div className="register-left">
        <h1 className="register-title">SIGN IN INTO JYM SPACE</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-wrap">
            <div className="register-flex">
           
            <label htmlFor="name" className="register-label">
              name
            </label>
            <div className="register-block">
              <input
                type="text"
                autoComplete="off"
                required
                name="name"
                id="name"
                placeholder="Enter your name here"
                />
            </div>
            </div>

            <div className="register-flex">
            <label htmlFor="sex" className="register-label">
              Gender
            </label>

            <div className="register-block">
              <input
                type="text"
                autoComplete="off"
                required
                name="gym_name"
                id="gym_name"
                placeholder="Enter your gym name here"
              />
            </div>
            </div>
          </div>

          <div className="register-wrap">
          <div className="register-flex">
            <label htmlFor="email" className="register-label">
              Email
            </label>
            <div className="register-block">
              <input
                type="email"
                autoComplete="off"
                required
                name="email"
                id="email"
                placeholder="Enter your email here"
              />
            </div>
            </div>

            <div className="register-flex">
              <label htmlFor="password" className="register-label">
                Password
              </label>
              <div className="register-block">
                <input
                  type="password"
                  autoComplete="off"
                  required
                  name="password"
                  id="password"
                  placeholder="Enter Your Password here"
                />
              </div>
              </div>
            </div>
            <div className="register-wrap">
            <div className="register-flex">
            <label htmlFor="address" className="register-label">
              Address
            </label>

            <div className="register-block">
              <input
                type="text"
                autoComplete="off"
                required
                name="address"
                id="address"
                placeholder="Enter your address here"
              />
            </div>
            </div>
             
            <div className="register-flex">
          <label htmlFor="city" className="register-label">
            City
          </label>
         
            <div className="register-block">
              <input
                type="text"
                autoComplete="off"
                required
                name="city"
                id="city"
                placeholder="Enter your city name here"
              />
            </div>
          </div>
          </div>

          <div className="register-wrap">
          <div className="register-flex">
          <label htmlFor="State name" className="register-label">
            State
          </label>

            <div className="register-block">
              <input
                type="text"
                autoComplete="off"
                required
                name="state_name"
                id="state_name"
                placeholder="Enter your state name here"
                />
            </div>
            </div>
            <div className="register-flex">
          <label htmlFor="country" className="register-label">
            Country
          </label>
          
            <div className="register-block">
              <input
                type="text"
                autoComplete="off"
                required
                name="country"
                id="country"
                placeholder="Enter your state name here"
                />
            </div>
          </div>
          </div>
          <p className="register-forgot">
            Forgot Password
            <a href="!#" className="register-link">
              click here
            </a>
          </p>
          <div className="register-buttons">
            <button className="register-button" type="submit">
              Register
            </button>
          </div>
          </form>
      </div>
        
      <div className="register-right">
        <img src={Register} alt="" />
      </div>
    </div>
  );
};

export default FormRegister;
