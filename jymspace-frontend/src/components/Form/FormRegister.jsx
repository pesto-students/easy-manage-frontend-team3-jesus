import "./FormRegister.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  sex: "",
  email: "",
  password: "",
  address: "",
  city: "",
  stateName: "",
  country: "",
  GymId: "",
};

const FormRegister = () => {
  const [state, setState] = useState(initialState);

  const {
    name,
    sex,
    email,
    password,
    address,
    city,
    stateName,
    country,
    GymId,
  } = state;

  const Navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jymspace-api.herokuapp.com/gym/user/${id}`)
      .then((resp) => setState({ ...resp.data }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !sex ||
      !email ||
      !password ||
      !address ||
      !city ||
      !stateName ||
      !country ||
      !GymId
    ) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        axios
          .post("https://jymspace-api.herokuapp.com/gym/user/signup", {
            name,
            sex,
            email,
            password,
            address,
            city,
            stateName,
            country,
            GymId,
          })
          .then(() => {
            setState({
              name: "",
              sex: "",
              email: "",
              password: "",
              address: "",
              city: "",
              stateName: "",
              country: "",
              GymId: "",
            });
            toast.success("user Added Successfully");
          })
          .catch((err) => toast.error(err.response.data));
      } else {
        axios
          .put(`https://jymspace-api.herokuapp.com/gym/user/update/${id}`, {
            name,
            sex,
            email,
            password,
            address,
            city,
            stateName,
            country,
            GymId,
          })
          .then(() => {
            setState({
              name: "",
              sex: "",
              email: "",
              password: "",
              address: "",
              city: "",
              stateName: "",
              country: "",
              GymId: "",
            });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("User Updated Successfully");
      }

      setTimeout(() => Navigate("/Dashboard/RegisterTable"), 500);
    }
  };

  console.log(state);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="container-register">
      <div className="title-register">REGISTER INTO GYM SPACE</div>
      <div className="content-register">
        <form action="#" onSubmit={handleSubmit}>
          <div className="user-details-register">
            <div className="input-box-register">
              <span className="details-register">Name</span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
           
            <div className="input-box-register">
              <span className="details-register">Gender</span>
              <input
                type="text"
                id="sex"
                name="sex"
                placeholder="Enter your gender"
                value={sex || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-register">
              <span className="details-register">Email</span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-register">
              <span className="details-register">Password</span>
              <input
                type="password"
                placeholder="Enter your number"
                id="password"
                name="password"
                value={password || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-register">
              <span className="details-register">Address</span>
              <input
                type="textarea"
                placeholder="Enter your Address"
                id="address"
                name="address"
                value={address || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-register">
              <span className="details-register">City</span>
              <input
                type="text"
                placeholder="Enter your city name"
                id="city"
                name="city"
                value={city || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-register">
              <span className="details-register">State</span>
              <input
                type="text"
                placeholder="Enter your state name"
                id="stateName"
                name="stateName"
                value={stateName || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-box-register">
              <span className="details-register">Country</span>
              <input
                type="text"
                placeholder="Enter your country name "
                id="country"
                name="country"
                value={country || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-box-register">
              <span className="details-register">GymId</span>
              <input
                type="text"
                placeholder="enter your Gym id"
                id="GymId"
                name="GymId"
                value={GymId || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="button-register">
            <input type="submit" value={id ? "Update" : "Save"} />
            <Link className="back" to="/Dashboard/Home">
              <input type="button" value="Go Back" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
