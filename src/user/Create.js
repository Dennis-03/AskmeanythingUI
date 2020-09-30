import Axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../common/Url";

export default function Create() {
  const [data, setData] = useState({
    event_name: "",
    event_guest: "",
    event_date: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${API_URL}/user/create-event`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => console.log(res));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="event_name"
          onChange={handleChange}
          value={data.event_name}
          required
        ></input>
        <input
          type="text"
          name="event_guest"
          onChange={handleChange}
          value={data.event_guest}
          required
        ></input>{" "}
        <input
          type="date"
          name="event_date"
          onChange={handleChange}
          value={data.event_date}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
