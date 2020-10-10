import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";
import ViewEventDetail from "../common/ViewEventDetail";

import { Container } from "react-bootstrap";
import "./AttendeeViewEvent.scss";

export default function AttendeeViewEvent() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    Axios.get(`${API_URL}attendee/event-detail/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <Container>
      <div className="neo center-container p-20 my-card">
        <ViewEventDetail
          eventDate={data.event_date}
          eventGuest={data.event_guest}
          eventName={data.event_name}
          getResponse={data.get_response}
        />
        {data.get_response ? (
          <Link to={`/attendee/create/${id}`} className="my-btn my-btn-align">
            Ask Question
          </Link>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}
