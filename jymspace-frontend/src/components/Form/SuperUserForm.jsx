import React from "react";
import SignIn from "../../assets/SignIn.jpg";
import "./SuperUserForm.css";
import { useFormik } from "formik";
import { superUserSchema } from "../Schemas/SuperUserSchema";

const SuperUserForm = () => {
  const initialValues = {
 
    email: "",
    password: "",
  };
 
  const { values, handleBlur, handleChange,  errors, touched } =
    useFormik({
      initialValues,
      validationSchema: superUserSchema,
      validateOnChange:true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div>
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">Super User Login</h1>
            <form>
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <div className="input-block">
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Enter your email here"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
              </div>
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <div className="input-block">
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password here"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}
              </div>
              <p className="modal-forgot">
                Forgot Password
                <a href="!#" className="modal-link">
                  click here
                </a>
              </p>
              <div className="modal-buttons">
                <button className="input-button" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="modal-right">
            <img src={SignIn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuperUserForm;