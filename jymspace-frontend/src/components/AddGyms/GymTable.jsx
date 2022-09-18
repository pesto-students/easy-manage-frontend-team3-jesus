import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./GymTable.css"

const GymTable = () => {

   
        const [data, setData] = useState([]);

const loadData = async () => {
  const response = await axios.get("https://jymspace-api.herokuapp.com/superadmin/gym/allAccounts");
  console.log(response.data)
  setData(response.data);
};

useEffect(() => {
  loadData();
}, []);

const deleteContact = (id) => {
  if (
    window.confirm("Are you sure that you wanted to delete that contact ?")
  ) {
    axios.delete(`https://jymspace-api.herokuapp.com/superadmin/gym/delete/${id}`);
    toast.success("Contact Deleted Successfully");
    setTimeout(() => loadData(), 500);
  }
};
return (
  <div >
    <Link className="btn-table btn-gym" to="/GymRegister">Add Gym
    </Link>
    <table className="styled-table">
      <thead>
        <tr>
          <th style={{ textAlign: "center" }}>Name</th>
          <th style={{ textAlign: "center" }}>Gym Id</th>
          <th style={{ textAlign: "center" }}>Email</th>
          <th style={{ textAlign: "center" }}>Address</th>
          <th style={{ textAlign: "center" }}>City</th>
          <th style={{ textAlign: "center" }}>State Name</th>
          <th style={{ textAlign: "center" }}>Country</th>
          <th style={{ textAlign: "center" }}>JymPlanId</th>
          <th style={{ textAlign: "center" }}>Action</th>

         

         </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
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
                  onClick={() => deleteContact(item.id)}>
                  Delete
                </button>
               
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
    
  )
};

export default GymTable