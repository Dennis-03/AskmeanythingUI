import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";

import "./Form.scss";

export default function Create() {
  let history = useHistory();
  const [data, setData] = useState({
    event_name: "",
    event_guest: "",
    event_date: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token") === (undefined || null || "")) {
      history.push("/login");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${API_URL}/user/create-event`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        console.log(res);
        history.push("/events");
      })
      .catch((err) => {
        history.push("/login");
        console.log(err);
      });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="center-container neo">
          <h3 className="text-center">Create New Event</h3>
          <div className="input-container neo-in">
            <input
              className="login-input"
              type="text"
              name="event_name"
              placeholder="Name of the event"
              onChange={handleChange}
              value={data.event_name}
              required
            ></input>
          </div>
          <div className="input-container neo-in">
            <input
              className="login-input"
              type="text"
              name="event_guest"
              placeholder="Name of the guest"
              onChange={handleChange}
              value={data.event_guest}
              required
            ></input>
          </div>
          <div className="input-container neo-in">
            <input
              className="login-input"
              type="date"
              name="event_date"
              placeholder="Date of event"
              onChange={handleChange}
              value={data.event_date}
              required
            ></input>
          </div>
          <div className="btn-container">
            <button type="submit" className="my-btn my-btn-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
