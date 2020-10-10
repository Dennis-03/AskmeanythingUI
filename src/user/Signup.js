import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../common/Url";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./Form.scss";

export default function Signup() {
  let history = useHistory();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_URL}/signup`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        history.push("/events");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="center-container neo">
        <h3 className="title">Register</h3>
        <div className="input-container neo-in">
          <input
            className="login-input"
            type="text"
            onChange={handleChange}
            name="name"
            value={data.name}
            placeholder="Enter Your Username"
            required
          ></input>
        </div>
        <div className="input-container neo-in">
          <input
            className="login-input"
            type="email"
            onChange={handleChange}
            name="email"
            value={data.email}
            placeholder="Enter Your Mail ID"
            required
          ></input>
        </div>
        <div className="input-container neo-in">
          <input
            className="login-input"
            type="password"
            onChange={handleChange}
            name="password"
            value={data.password}
            placeholder="Enter a password"
            required
          ></input>
        </div>
        <div className="btn-container">
          <button type="submit" className="my-btn my-btn-center">
            Register
          </button>
        </div>
        <Link to="/login" className="link ">
          <p className="text-center"> Already have an account</p>
        </Link>
      </form>
    </div>
  );
}
