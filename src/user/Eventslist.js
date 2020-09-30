import React from "react";
import Event from "./Event";

export default function EventList({ eventData }) {
  console.log(eventData);
  if (eventData !== undefined) {
    return (
      <div>
        {eventData.map((evt) => (
          <Event
            guestName={evt.event_guest}
            key={evt.event_id}
            id={evt.event_id}
          />
        ))}
      </div>
    );
  } else {
    return <>loading</>;
  }
}
