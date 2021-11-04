import Home from "./pages/Home";
import GoLink from "./pages/GoLink";

import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:uid" component={GoLink} />
      </Switch>
    </>
  );
}
