import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./user/Login";
import Signup from "./user/Signup";
import Create from "./user/Create";
import View from "./user/ViewEvent";
import Events from "./user/Events";
import Navbar from "./common/Navbar";
import Home from "./Home";

// import { API_URL } from "./common/Url";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      document.getElementById("summa").innerHTML = localStorage.getItem(
        "token"
      );
    }
  });

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
