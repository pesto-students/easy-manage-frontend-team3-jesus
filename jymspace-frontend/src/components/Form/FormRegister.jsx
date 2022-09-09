import React from "react";
import "./FormRegister.css";


const FormRegister = () => {
  function handleSubmit(e) {
    e.preventDefault();
   }
  return (
    <div className="container-register">
    <div className="title-register">REGISTER INTO GYM SPACE</div>
    <div className="content-register">
      <form action="#" onClick={handleSubmit}>
        <div className="user-details-register">
          <div className="input-box-register">
            <span className="details-register">Name</span>
            <input type="text" 
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name || ""} 
            onChange={handleInputChange}
            />
          </div>
          <div className="input-box-register">
            <span className="details-register">Gender</span>
            <input type="text" 
            id="sex"
            name="sex"
            value={sex || ""}
            placeholder="Enter your gender" 

            />
          </div>
          <div className="input-box-register">
            <span className="details-register">Email</span>
            <input type="email" placeholder="Enter your email" required/>
          </div>
          <div className="input-box-register">
            <span className="details-register">Password</span>
            <input type="password" placeholder="Enter your number" required/>
          </div>
          <div className="input-box-register">
            <span className="details-register">Address</span>
            <input type="textarea" placeholder="Enter your password" required/>
          </div>
          <div className="input-box-register">
            <span className="details-register">city</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
          <div className="input-box-register">
            <span className="details-register">state</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
          <div className="input-box-register">
            <span className="details-register">country</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
          <div className="input-box-register">
            <span className="details-register">RoleId</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
          <div className="input-box-register">
            <span className="details-register">GymPlanId</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
          <div className="input-box-register">
            <span className="details-register">GymId</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>

        </div>
       <div className="button-register">
          <input type="submit" value="Register"/>
        </div>
      </form>
  </div>
  </div>
 
  );
};

export default FormRegister;
