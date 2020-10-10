import Axios from "axios";
import React, { useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";

// import "../user/Form.scss";

export default function Attendee() {
  let history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState({
    attendee_name: "",
    attendee_email: "",
    question: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${API_URL}attendee/create-question/${id}`, data)
      .then((res) => {
        console.log(res);
        history.push(`/attendee/view/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className>
      <form onSubmit={handleSubmit} className="center-container neo">
        <h3 className="title">Ask Your Question</h3>
        <div className="input-container neo-in">
          <input
            className="login-input"
            type="text"
            onChange={handleChange}
            required
            name="attendee_name"
            placeholder="Your Name"
            value={data.attendee_name}
          ></input>
        </div>
        <div className="input-container neo-in">
          <input
            className="login-input"
            type="text"
            onChange={handleChange}
            required
            name="attendee_email"
            placeholder="Your Email"
            value={data.attendee_email}
          ></input>
        </div>
        <div className="input-container neo-in">
          <input
            className="login-input"
            type="text"
            onChange={handleChange}
            required
            name="question"
            placeholder="Your Question"
            value={data.question}
          ></input>
        </div>
        <div className="btn-container">
          <button type="submit" className="my-btn my-btn-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
