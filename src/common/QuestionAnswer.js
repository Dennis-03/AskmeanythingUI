import React from "react";

export default function QuestionAnswer({ question, answer, attendee }) {
  return (
    <div className="neo p-20">
      <p>Q :- "{question}"</p>
      <p>
        Reply :- "<i>{answer}</i>"
      </p>
      <p className="name">- {attendee}</p>
    </div>
  );
}
