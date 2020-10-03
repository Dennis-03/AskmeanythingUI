import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";
import Eventslist from "./Eventslist";

export default function Events() {
  let history = useHistory();
  const [eventData, seteventData] = useState({});
  useEffect(() => {
    Axios.get(`${API_URL}user/all-events`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        seteventData(res.data);
      })
      .catch((err) => {
        history.push("/login");
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>
        <Link to="/create">Create</Link>
      </h1>
      <p>{eventData.no_of_events}</p>
      <Eventslist eventData={eventData.events} />
    </>
  );
}
