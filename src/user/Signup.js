import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../common/Url";

export default function Signup() {
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
        window.location.assign("/");
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
          required
          name="name"
          value={data.name}
        ></input>
        <input
          type="text"
          onChange={handleChange}
          required
          name="email"
          value={data.email}
        ></input>
        <input
          type="text"
          onChange={handleChange}
          required
          name="password"
          value={data.password}
        ></input>
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.password}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
