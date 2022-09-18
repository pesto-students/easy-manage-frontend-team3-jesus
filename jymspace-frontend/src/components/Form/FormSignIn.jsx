import React, { useState } from "react";
import SignIn from "../../assets/SignIn.jpg";
import { authenticateGYM } from "../../Services";
import { Navigate } from "react-router-dom";
import "./FormSignIn.css";

const FormSignIn = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [authError,setAuthError] = useState(false)


  const login = () => {
    setAuthError(false)
    authenticateGYM(
      {
        email: email,
        password: password,
      },
      () => setRedirect(true),
      () => setAuthError(true)
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    login()
   }

  if (redirect) {
    return <Navigate to="/Dashboard/Home" />;
  }

  return (
    <div>
      <div className="signIn">

        <div className="signIn-container">
          <div className="signIn-left">
            <h1 className="signIn-title">SIGN INTO JYM SPACE</h1>
        <form onSubmit={handleSubmit}>

            <label htmlFor="email" className="signIn-label">
              Email
            </label>
            <div className="signIn-block">
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                required
                placeholder="Enter your email here"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <label htmlFor="password" className="signIn-label">
              Password
            </label>
            <div className="signIn-block">
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter Your Password here"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                />
            </div>
            {authError ? <div className="signIn-error signIn-forgot">Invalid Credentials</div> : null}
            <div className="signIn-buttons">
              <button className="signIn-button" type="submit">
                Sign In
              </button>
            </div>
                </form>
          </div>
         
          <div className="signIn-right">
            <img src={SignIn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormSignIn;
