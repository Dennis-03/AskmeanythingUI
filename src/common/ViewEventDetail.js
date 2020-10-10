import React from "react";

export default function ViewEventDetail({
  eventDate,
  eventGuest,
  eventName,
  getResponse,
}) {
  return (
    <div>
      <h1>Event Details</h1>
      <h5>Event Name :- {eventName}</h5>
      <p>Event Guest :- {eventGuest}</p>
      <p>Event Date :- {eventDate}</p>
      {getResponse ? (
        <p>
          <i className="green-dot status"></i>Accepting Responses
        </p>
      ) : (
        <p>
          <i className="red-dot status"></i>Not Accepting Responses
        </p>
      )}
    </div>
  );
}
