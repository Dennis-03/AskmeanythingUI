import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { API_URL, BASE_URL } from "../common/Url";
import ViewEventDetail from "../common/ViewEventDetail";
import QuestionsAnswers from "../common/QuestionsAnswers";

export default function ViewEvent() {
  let history = useHistory();
  const { id } = useParams();
  const [eventData, seteventData] = useState({});
  const [getResponse, setgetResponse] = useState();

  useEffect(() => {
    Axios.get(`${API_URL}user/event-details/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        seteventData(res.data);
        setgetResponse(res.data.get_response);
      })
      .catch((err) => {
        history.push("/login");
        console.log(err);
      });
  }, []);

  const updateStatus = () => {
    Axios.get(`${API_URL}user/change-event-status/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      setgetResponse(res.data.get_response);
    });
  };

  if (eventData !== undefined) {
    return (
      <div>
        View event
        <ViewEventDetail
          eventDate={eventData.event_date}
          eventGuest={eventData.event_guest}
          eventName={eventData.event_name}
        />
        <p>{String(getResponse)}</p>
        <button onClick={updateStatus}>Update</button>
        <QuestionsAnswers questions={eventData.questions} />
        <p>
          {BASE_URL}/attendee/{id}
        </p>
        <p>
          {BASE_URL}/guest/{id}/{eventData.guest_pass}
        </p>
      </div>
    );
  }
}
