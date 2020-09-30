import React from "react";

export default function QuestionAnswer({ question, answer, id }) {
  return (
    <div>
      {answer}
      {question}
      {id}
    </div>
  );
}
