import React from "react";
import QuestionAnswer from "./QuestionAnswer";

export default function QuestionsAnswers({ questions }) {
  console.log(questions);
  if (questions !== undefined) {
    return (
      <div>
        <h3>Questions and Answers</h3>
        {questions.map((question) => (
          <QuestionAnswer
            question={question.question}
            answer={question.answer}
            attendee={question.attendee_name}
            key={question.question_id}
          />
        ))}
      </div>
    );
  } else {
    return <>loading</>;
  }
}
