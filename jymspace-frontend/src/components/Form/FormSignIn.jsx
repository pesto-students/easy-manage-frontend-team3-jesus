import React, { useState } from "react";
import SignIn from "../../assets/SignIn.jpg";
import { authenticateGYM } from "../../Services";
import { Navigate } from "react-router-dom";
import "./FormSignIn.css";

const FormSignIn = () => {
  function handleSubmit(e) {
    e.preventDefault();
   }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);



  const login = () => {
    authenticateGYM(
      {
        email: email,
        password: password,
      },
      () => setRedirect(true)
    );
  };

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
            <p className="signIn-forgot">
              Forgot Password
              <a href="!#" className="signIn-link">
                click here
              </a>
            </p>
            <div className="signIn-buttons">
              <button onClick={login} className="signIn-button" type="submit">
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
