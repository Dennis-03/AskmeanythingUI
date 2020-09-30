import React from "react";

export default function ViewEventDetail({ eventDate, eventGuest, eventName }) {
  return (
    <div>
      {eventDate}
      {eventGuest}
      {eventName}
    </div>
  );
}
