import React, { useState, useEffect } from "react";

import { Link,Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Registertable.css";
import Loader from "../Loader/Loader";

const RegisterTable = () => {
  const [data, setData] = useState([]);
  const [error,setError]= useState(false)
  const [loading,setLoading] = useState(true)

  const loadData = async () => {
    try {
    const response = await axios.get(
      "https://jymspace-api.herokuapp.com/gym/users/allaccounts"
    );
    setLoading(false)
    setData(response.data);
    }catch(e){
      setLoading(false)
      setError(true)
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      axios.delete(
        `https://jymspace-api.herokuapp.com/gym/user/delete/${id}`
      );
      toast.success("user Deleted Successfully");
      setTimeout(() => loadData(), 500);
    }
  };
  if(error) return <Navigate to='/SignIn' />
  if(loading) return <Loader />

  return (
    <div className="user-register">
      <table className="styled-table-register">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Gender</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Address</th>
            <th style={{ textAlign: "center" }}>City</th>
            <th style={{ textAlign: "center" }}>StateName</th>
            <th style={{ textAlign: "center" }}>country</th>
            
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sex}</td>
                <td>{item.email}</td>  
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.stateName}</td>
                <td>{item.country}</td>
                

                <td>
                  <Link to={`/updateRegister/${item.id}`}>
                    <button className="btn-table-register btn-edit-register">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn-table-register btn-delete-register"
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

export default RegisterTable;
