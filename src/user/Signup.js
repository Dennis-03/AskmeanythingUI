import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../common/Url";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={data.name}
          placeholder="Enter Your name"
          required
        ></input>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={data.email}
          placeholder="Enter Your Mail ID"
          required
        ></input>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={data.password}
          placeholder="Enter a password"
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
