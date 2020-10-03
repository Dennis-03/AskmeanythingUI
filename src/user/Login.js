import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../common/Url";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
          document.getElementById("error").innerHTML = "error";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div id="error"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={data.email}
          placeholder="Enter Your Mail Id"
        ></input>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={data.password}
          placeholder="Enter Your Password"
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
