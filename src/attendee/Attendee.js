import Axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";

export default function Attendee() {
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
          name="attendee_name"
          value={data.attendee_name}
        ></input>
        <input
          type="text"
          onChange={handleChange}
          required
          name="attendee_email"
          value={data.attendee_email}
        ></input>
        <input
          type="text"
          onChange={handleChange}
          required
          name="question"
          value={data.question}
        ></input>
        <p>{data.attendee_name}</p>
        <p>{data.attendee_email}</p>
        <p>{data.question}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
