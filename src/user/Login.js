import React, { useState } from "react";
import axios from "axios";

export default function Login() {
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
      .post("http://127.0.0.1:5000/login", data)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "Logged in successfully") {
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
        <p>{data.email}</p>
        <p>{data.password}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
