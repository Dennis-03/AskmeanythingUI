import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { API_URL, BASE_URL } from "../common/Url";
import ViewEventDetail from "../common/ViewEventDetail";
import QuestionsAnswers from "../common/QuestionsAnswers";
import ClickToCopy from "./ClickToCopy";

import { Container } from "react-bootstrap";
import "./ViewEvent.scss";

export default function ViewEvent() {
  let history = useHistory();
  const { id } = useParams();
  const [eventData, seteventData] = useState({});
  const [getResponse, setgetResponse] = useState();
  const [attendeeLink, setattendeeLink] = useState();
  const [guestLink, setguestLink] = useState();

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
        setattendeeLink(`${BASE_URL}/attendee/view/${id}`);
        setguestLink(`${BASE_URL}/guest/${id}/${res.data.guest_pass}`);
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
      <Container className="pt-100">
        <div className="neo p-20">
          <ViewEventDetail
            eventDate={eventData.event_date}
            eventGuest={eventData.event_guest}
            eventName={eventData.event_name}
            getResponse={getResponse}
          />
          <div className="get-response">
            <span>Get Response</span>
            <label class="switch">
              <input
                type="checkbox"
                onChange={updateStatus}
                checked={getResponse}
              ></input>
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div className="neo p-20">
          <h5 className="text-center">Links</h5>
          <p className="text-center">Link for Attendee</p>
          <ClickToCopy link={attendeeLink} />
          <p className="text-center">Link for Guest</p>
          <ClickToCopy link={guestLink} />
        </div>
        <QuestionsAnswers questions={eventData.questions} />
      </Container>
    );
  }
}
