import React from "react";
import { Link } from "react-router-dom";

export default function Event({ guestName, id, date, eventName, getResponse }) {
  return (
    <div className="neo p-20">
      <Link to={`/view-event/${id}`}>
        <h5>Event Name :- {eventName}</h5>
        <p>Guest Name :- {guestName}</p>
        <p>Event Date :- {date}</p>
        {getResponse ? (
          <p>
            <i className="green-dot status"></i>Accepting Responses
          </p>
        ) : (
          <p>
            <i className="red-dot status"></i>Not Accepting Responses
          </p>
        )}
      </Link>
    </div>
  );
}
