import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./user/Login";
import Signup from "./user/Signup";
import Create from "./user/Create";
import View from "./user/ViewEvent";
import Events from "./user/Events";
import Navbar from "./common/Navbar";
import Home from "./Home";
import Attendee from "./attendee/Attendee";
import Guest from "./guest/Guest";

// import Axios from "axios";
// import { API_URL } from "./common/Url";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      // Axios.get(`${API_URL}user/refresh`, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // }).then((res) => {
      //   console.log(res.data);
      // });
      document.getElementById("summa").innerHTML = localStorage.getItem(
        "token"
      );
    }
  }, []);

  return (
    <>
      <Router>
        <Link to="/" id="summa"></Link>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={Create} />
          <Route path="/view-event/:id" component={View} />
          <Route path="/events" component={Events} />
          <Route path="/attendee/:id" component={Attendee} />
          <Route path="/guest/:id/:pass" component={Guest} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
