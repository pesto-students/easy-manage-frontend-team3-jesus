import React, { useState } from "react";
import SignIn from "../../assets/SignIn.jpg";
import "./SuperUserForm.css";
import { authenticateSuperGYM } from "../../Services";
import { Navigate } from "react-router-dom";

const SuperUserForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
   }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  

  const login = () => {
    authenticateSuperGYM(
      {
        email: email,
        password: password,
      },
      () => setRedirect(true)
    );
  };

  if (redirect) {
    return <Navigate to="/SuperUserDashboard" />;
  }

  return (
    <div className="superUser">
      <div className="superUser-container">
        <div className="superUser-left">
          <h1 className="superUser-title">SUPER USER LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="superUser-label">
              Email
            </label>
            <div className="superUser-block">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email here"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <label htmlFor="password" className="superUser-label">
              Password
            </label>
            <div className="superUser-block">
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                required
                placeholder="Enter Your Password here"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <p className="superUser-forgot">
              Forgot Password
              <a href="!#" className="superUser-link">
                click here
              </a>
            </p>
            <div className="superUser-buttons">
              <button
                onClick={login}
                className="superUser-button"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="superUser-right">
          <img src={SignIn} alt="" />
        </div>
      </div>
    </div>
  );
};
export default SuperUserForm;
