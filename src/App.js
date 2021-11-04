<<<<<<< HEAD
import Home from "./pages/Home";
import GoLink from "./pages/GoLink";

import { Switch, Route } from "react-router-dom";
=======
import { useGlobalContext } from "./store/GlobalContext";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Deactivate from "./pages/Deactivate";
import Error404 from "./pages/Error404";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const { isLoggedIn, isAccountDeactivated } = useGlobalContext();
>>>>>>> 41577c89619ab4544bafbfe2f5ebca78ac943c4a

export default function App() {
  return (
    <>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Home} />
        <Route path="/:uid" component={GoLink} />
=======
        <Route exact path="/" component={Home}></Route>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login}></Route>
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Redirect to="/" />}
        </Route>
        <Route path="/deactivate">
          {isAccountDeactivated ? <Deactivate /> : <Redirect to="/" />}
        </Route>
        <Route component={Error404} />
>>>>>>> 41577c89619ab4544bafbfe2f5ebca78ac943c4a
      </Switch>
    </>
  );
}
