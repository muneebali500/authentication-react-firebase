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

  return (
    <>
      <Switch>
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
      </Switch>
    </>
  );
}

export default App;
