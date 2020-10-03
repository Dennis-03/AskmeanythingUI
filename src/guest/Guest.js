import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";
import ViewEventDetail from "../common/ViewEventDetail";
import QuestionsAnswersGuest from "./QuestionsAnswersGuest";

export default function Guest() {
  const { id, pass } = useParams();
  const [eventData, seteventData] = useState({});
  useEffect(() => {
    Axios.get(`${API_URL}/guest/view-question/${id}/${pass}`).then((res) => {
      console.log(res.data);
      seteventData(res.data);
    });
  }, []);
  return (
    <div>
      Guest
      <ViewEventDetail
        eventDate={eventData.event_date}
        eventGuest={eventData.event_guest}
        eventName={eventData.event_name}
      />
      <QuestionsAnswersGuest
        questions={eventData.questions}
        eventId={eventData.event_id}
        guestPass={eventData.guest_pass}
      />
    </div>
  );
}
