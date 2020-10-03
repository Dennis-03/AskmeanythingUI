import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";
import ViewEventDetail from "../common/ViewEventDetail";
import QuestionsAnswers from "../common/QuestionsAnswers";

export default function ViewEvent() {
  const { id } = useParams();
  const [eventData, seteventData] = useState({});
  useEffect(() => {
    Axios.get(`${API_URL}user/event-details/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      seteventData(res.data);
    });
  }, []);

  if (eventData !== undefined) {
    return (
      <div>
        View event
        <ViewEventDetail
          eventDate={eventData.event_date}
          eventGuest={eventData.event_guest}
          eventName={eventData.event_name}
        />
        <QuestionsAnswers questions={eventData.questions} />
        <p>
          {window.location.protocol}/{window.location.host}/attendee/{id}
        </p>
        <p>
          {window.location.protocol}/{window.location.host}/guest/{id}/
          {eventData.guest_pass}
        </p>
      </div>
    );
  }
}
