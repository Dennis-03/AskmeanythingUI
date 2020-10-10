import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "react-bootstrap";
import "./Navbar.scss";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  let isLoggedIn = false;
  let history = useHistory();

  const [token, setToken] = useState(localStorage.getItem("token"));

  if (localStorage.getItem("token") !== (undefined || "")) {
    isLoggedIn = true;
    console.log(token);
    if (token === undefined || "") {
      setToken(localStorage.getItem("token"));
    }
  }

  const logout = () => {
    setToken("");
    localStorage.setItem("token", "");
    isLoggedIn = false;
    history.push("/");
  };

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
            <span onClick={logout} className="hand" to="/logout">
              Logout
            </span>
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
