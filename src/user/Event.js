import React from "react";
import { Link } from "react-router-dom";

export default function Event({ guestName, id }) {
  return <Link to={`/view-event/${id}`}>{id}</Link>;
}
