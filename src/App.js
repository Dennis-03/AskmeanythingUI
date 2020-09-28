import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./user/Login";
import Signup from "./user/Signup";

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
      <div id="summa"></div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
