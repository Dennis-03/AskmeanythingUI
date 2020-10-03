import React from "react";
import QuestionAnswerGuest from "./QuestionAnswerGuest";

export default function QuestionsAnswersGuest({
  questions,
  eventId,
  guestPass,
}) {
  console.log(questions);
  if (questions !== undefined) {
    return (
      <div>
        {questions.map((question) => (
          <QuestionAnswerGuest
            question={question.question}
            answer={question.answer}
            attendee={question.attendee_name}
            key={question.question_id}
            id={question.question_id}
            eventId={eventId}
            guestPass={guestPass}
          />
        ))}
      </div>
    );
  } else {
    return <>loading</>;
  }
}
