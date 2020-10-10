import React from "react";
import Event from "./Event";

export default function EventList({ eventData }) {
  console.log(eventData);
  if (eventData !== undefined) {
    return (
      <div>
        {eventData.map((evt) => (
          <Event
            key={evt.event_id}
            guestName={evt.event_guest}
            date={evt.event_date}
            eventName={evt.event_name}
            id={evt.event_id}
            getResponse={evt.get_response}
          />
        ))}
      </div>
    );
  } else {
    return <>loading</>;
  }
}
