import React from "react";
import "./FormRegister.css";
import { useFormik } from "formik";
import { RegisterSchema } from "../Schema/RegisterSchema";
import Register from "../../assets/Register.jpg";

const FormRegister = () => {
  const initialValues = {
    name: "",
    gym_name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    pin_code: "",
    state_name: "",
  };
  const { values, handleBlur, handleChange, errors, touched } = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    validateOnChange: true,
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
            <h1 className="modal-title">REGISTER TO JYM SPACE</h1>
           
              <form className="modal-form">
                <div className="form-group">
                  <div className="col">
                    <label htmlFor="name" className="input-label">
                        Full name (owner)
                    </label>
                    <div className="input-block">
                        <input
                          type="text"
                          autoComplete="off"
                          name="name"
                          id="name"
                          placeholder="Enter your name here"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (
                          <p className="form-error">{errors.name}</p>
                        ) : null}
                    </div>
                  </div>
                  <div className="col">
                  <label htmlFor="gym name" className="input-label">
                    Gym Name
                  </label>
                  <div className="input-block">
                    <input
                      type="text"
                      autoComplete="off"
                      name="gym_name"
                      id="gym_name"
                      placeholder="Enter your gym name here"
                      value={values.gym_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.gym_name && touched.gym_name ? (
                      <p className="form-error">{errors.gym_name}</p>
                    ) : null}
                  </div>
                  </div>
                </div>
                 
                <div className="form-group">
                  <div className="col">
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
                  </div>

                  <div className="col">
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
                  </div>
                </div>
                <div className="form-group">
                  <div className="col">
                  <label htmlFor="address" className="input-label">
                    Address
                  </label>
                  <div className="input-block">
                    <input
                      type="text"
                      autoComplete="off"
                      name="address"
                      id="address"
                      placeholder="Enter your address here"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.address && touched.address ? (
                      <p className="form-error">{errors.address}</p>
                    ) : null}
                  </div>
                  </div>
                  <div className="col">
                  <label htmlFor="city" className="input-label">
                    City
                  </label>
                  <div className="input-block">
                    <input
                      type="text"
                      autoComplete="off"
                      name="city"
                      id="city"
                      placeholder="Enter your city name here"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city ? (
                      <p className="form-error">{errors.city}</p>
                    ) : null}
                  </div>
                  </div>
                </div>
                 <div className="form-group">
                  <div className="col">
                  <label htmlFor="pin code" className="input-label">
                    Pin code
                  </label>
                  <div className="input-block">
                    <input
                      type="number"
                      autoComplete="off"
                      name="pin_code"
                      id="pin_code"
                      placeholder="Enter your city name here"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city ? (
                      <p className="form-error">{errors.city}</p>
                    ) : null}
                  </div>
                  </div>
                  <div className="col">

                  <label htmlFor="State name" className="input-label">
                    State
                  </label>
                  <div className="input-block">
                    <input
                      type="text"
                      autoComplete="off"
                      name="state_name"
                      id="state_name"
                      placeholder="Enter your state name here"
                      value={values.state_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.state_name && touched.state_name ? (
                      <p className="form-error">{errors.state_name}</p>
                    ) : null}
                  </div>
                  </div>
                </div>
                  <p className="modal-forgot">
                    Forgot Password
                    <a href="!#" className="modal-link">
                      click here
                    </a>
                  </p>
                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      Register
                    </button>
                  </div>
                
              </form>
           
          </div>
          <div className="modal-right">
            <img src={Register} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
