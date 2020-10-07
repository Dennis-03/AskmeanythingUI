import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "react-bootstrap";
import "./Navbar.scss";

export default function Navbar() {
  let isLoggedIn = false;

  if (localStorage.getItem("token") !== (undefined || null)) {
    isLoggedIn = true;
  }

  return (
    <nav>
      <Container>
        <Link to="/">AMA</Link>
        {isLoggedIn ? (
          <span className="pull-right">
            <Link to="/create" className="hide">
              Create Event
            </Link>
            <Link to="/events">Events</Link>
            <div className="vr_bar"></div>
            <Link to="/logout">Logout</Link>
          </span>
        ) : (
          <span className="pull-right">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </span>
        )}
      </Container>
    </nav>
  );
}
