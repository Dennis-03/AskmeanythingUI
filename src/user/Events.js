import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API_URL } from "../common/Url";
import Eventslist from "./Eventslist";

import { Container } from "react-bootstrap";

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
    <Container className="pt-100">
      <Eventslist eventData={eventData.events} />
    </Container>
  );
}
