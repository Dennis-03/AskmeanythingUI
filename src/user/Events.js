import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../common/Url";
import Eventslist from "./Eventslist";

export default function Events() {
  const [eventData, seteventData] = useState({});
  useEffect(() => {
    Axios.get(`${API_URL}user/all-events`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      seteventData(res.data);
    });
  }, []);

  return (
    <>
      <h1>
        <Link to="/create">Create</Link>{" "}
      </h1>
      <p>{eventData.no_of_events}</p>
      <Eventslist eventData={eventData.events} />
    </>
  );
}
