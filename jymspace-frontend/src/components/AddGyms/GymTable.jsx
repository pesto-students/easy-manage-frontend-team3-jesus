import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./GymTable.css";
import Loader from "../Loader/Loader";

const headers = [
  "Name",
  "Email",
  "Address",
  "City",
  "State Name",
  "Country",
  "JymPlanId",
  "Action",
];

const GymTable = () => {
  const [loading,setLoading] = useState(true)
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      "https://jymspace-api.herokuapp.com/superadmin/gym/allAccounts"
    );
    setLoading(false)
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      axios.delete(
        `https://jymspace-api.herokuapp.com/superadmin/gym/delete/${id}`
      );
      toast.success("Contact Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };

  if(loading) return <Loader />
  
  return (
    <div>
      <Link className="btn-table btn-gym" to="/GymRegister">
        Add Gym
      </Link>
      <Link className="gym-logout" to="/Logout">
        logout
      </Link>

      <table className="styled-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="heading-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.stateName}</td>
                <td>{item.country}</td>
                <td>{item.JymPlanId}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn-table btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn-table btn-delete"
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GymTable;
