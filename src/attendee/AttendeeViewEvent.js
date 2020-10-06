import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";
import ViewEventDetail from "../common/ViewEventDetail";

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
    <div>
      <ViewEventDetail
        eventDate={data.event_date}
        eventGuest={data.event_guest}
        eventName={data.event_name}
      />
      <Link to={`/attendee/create/${id}`}>Question</Link>
    </div>
  );
}
