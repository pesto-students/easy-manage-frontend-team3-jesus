import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./GymRegister.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
  address: "",
  city: "",
  stateName: "",
  country: "",
  JymPlanId: "",
};

const GymRegister = () => {
  const [state, setState] = useState(initialState);

  const {
  name,
  email,
  password,
  address,
  city,
  stateName,
  country,
  JymPlanId,
  } = state;

  const Navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(``).then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !address ||
      !city ||
      !state ||
      !country ||
      !JymPlanId
    ) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        axios
          .post("https://jymspace-api.herokuapp.com/superadmin/gym/signup", {
            name,
            email,
            password,
            address,
            city,
            stateName,
            country,
            JymPlanId,
          })
          .then(() => {
            setState({
                name: "",
                email: "",
                password: "",
                address: "",
                city: "",
                stateName: "",
                country: "",
                JymPlanId: "",
            });
            toast.success("Contact Added Successfully");
          })
          .catch((err) => toast.error(err.response.data));
      } else {
        axios
          .put(
            `http://jymspace-api.herokuapp.com/superadmin/gym/update/${id}`,
            {
                name,
                email,
                password,
                address,
                city,
                stateName,
                country,
                JymPlanId,
            }
          )
          .then(() => {
            setState({
                name: "",
                email: "",
                password: "",
                address: "",
                city: "",
                stateName: "",
                country: "",
                JymPlanId: "",
            });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact Updated Successfully");
      }

      setTimeout(() => Navigate("/GymTable"), 500);
    }
  };

  console.log(state)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name here"
              value={name || ""}
              onChange={handleInputChange}
            />
          </div>
         
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email here"
              value={email || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password here"
              value={password || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="address">Address</label>
            <input
              type="textarea"
              id="address"
              name="address"
              placeholder="Your Address ..."
              value={address || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter Your City name here"
              value={city || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
         

          <div className="col">
            <label htmlFor="StateName">State Name</label>
            <input
              type="text"
              id="stateName"
              name="stateName"
              placeholder="Enter your state name here"
              value={stateName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="StateName">Country</label>
            <input
              type="text"
              id="counter"
              name="country"
              placeholder="Enter your state name here"
              value={country || ""}
              onChange={handleInputChange}
            />
          </div>
          <select onChange={e => setState(oldState => ({...oldState,JymPlanId:e.target.value}))} value={JymPlanId}>
           
            <option  value="" disabled selected hidden>
              Select plans
            </option>
            <option value="3cc41ffb-b55a-4aad-8c59-16c9b6e9ac44">
              Free Trail
            </option>
            <option value="4b7c357f-d686-42b3-ae7d-2ce893e17479">
              Pro Plan
            </option>
            <option value="b1c658f5-c814-4304-b7dd-8f22202a4529">
              Premium Plan
            </option>
            
          </select>
        
        </div>

        <div className="form-footer">
          <input type="submit" value={id ? "Update" : "Save"} />

          <Link className="back" to="/">
            <input type="button" value="Go Back" />
          </Link>
        </div>
      </form>
    </div>
  );
};
export default GymRegister;
