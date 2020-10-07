import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./user/Login";
import Signup from "./user/Signup";
import Create from "./user/Create";
import View from "./user/ViewEvent";
import Events from "./user/Events";
import Navbar from "./common/Navbar";
import Home from "./Home";
import CreateQuestion from "./attendee/CreateQuestion";
import AttendeeViewEvent from "./attendee/AttendeeViewEvent";
import Guest from "./guest/Guest";

import "./App.scss";

// import Axios from "axios";
// import { API_URL } from "./common/Url";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      console.log("logged in");
    }
  }, []);

  return (
    <div id="body">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={Create} />
          <Route path="/view-event/:id" component={View} />
          <Route path="/events" component={Events} />

          <Route path="/attendee/view/:id" component={AttendeeViewEvent} />
          <Route path="/attendee/create/:id" component={CreateQuestion} />

          <Route path="/guest/:id/:pass" component={Guest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
