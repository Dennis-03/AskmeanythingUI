import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../common/Url";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

// import "./Form.scss";

export default function Login() {
  let history = useHistory();
  const [data, setData] = useState({
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
      .post(`${API_URL}/login`, data)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "Logged in successfully") {
          localStorage.setItem("token", res.data.token);
          history.push("/events");
        } else {
          const change = change;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="center-container neo">
        <h3 className="title">Login</h3>
        <div className="input-container neo-in">
          <input
            className="login-input"
            type="email"
            onChange={handleChange}
            required
            name="email"
            value={data.email}
            placeholder="Enter Your Mail Id"
          ></input>
        </div>
        <div className="input-container neo-in">
          <input
            className="login-input"
            type="password"
            onChange={handleChange}
            name="password"
            value={data.password}
            placeholder="Enter Your Password"
            required
          ></input>
        </div>
        <div className="btn-container">
          <button className="my-btn my-btn-center" type="submit">
            Submit
          </button>
        </div>
        <Link to="/signup" className="link ">
          <p className="text-center"> Create an account</p>
        </Link>
      </form>
    </div>
  );
}
