import Axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../common/Url";

import "./QuestionAnswerGuest.scss";

export default function QuestionAnswerGuest({
  answer,
  question,
  id,
  eventId,
  guestPass,
}) {
  const [data, setData] = useState({ add_answer: answer });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };
  const submitAnswer = () => {
    console.log(eventId, guestPass);
    Axios.put(`${API_URL}guest/answer-question`, {
      event_id: eventId,
      guest_pass: guestPass,
      answer: data.add_answer,
      question_id: id,
    }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="neo p-20">
      <p>Q :- {question}</p>
      <div className="input-container neo-in">
        Reply :-
        <input
          className="reply"
          type="text"
          onChange={handleChange}
          name="add_answer"
          value={data.add_answer}
        />
      </div>
      <div className="btn-container">
        {" "}
        <button className="my-btn" onClick={submitAnswer}>
          Reply
        </button>
      </div>
    </div>
  );
}
