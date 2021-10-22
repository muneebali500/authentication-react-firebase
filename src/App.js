// import { useState } from "react";
import { useGlobalContext } from "./store/GlobalContext";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const { loggedIn } = useGlobalContext();
  // console.log(loggedIn);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login}></Route>
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
