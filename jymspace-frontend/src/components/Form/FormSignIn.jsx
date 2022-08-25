import React from "react";
import validate from "../Form/ValidateInfo";
import useForm from "../Form/UseForm";
import google from "../../assets/google.png";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>SIGN IN INTO JYM SPACE HERE</h1>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Forgot Password ? <a href="www.facebook.com">click here</a>
        </span>
        <span className="or">OR</span>
        <div className="google-btn">
          <div className="google-wrapper">
            <img src={google} alt="google" className="google-icon" />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormSignup;
