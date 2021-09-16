import { useState } from "react";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(loggedIn);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home loggedIn={loggedIn} />
        </Route>
        <Route path="/signup" component={Signup} />
        <Route path="/login">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/dashboard">
          {loggedIn ? (
            <Dashboard setLoggedIn={setLoggedIn} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </>
  );
}

export default App;
