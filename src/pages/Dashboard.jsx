import { useGlobalContext } from "../store/GlobalContext";
import { Switch, Route, Link, useHistory } from "react-router-dom";

import ContactInfo from "./Dashboard/ContactInfo";
import TaxInfo from "./Dashboard/TaxInfo";
import ProfileSettings from "./Dashboard/ProfileSettings";
import MyTeams from "./Dashboard/MyTeams";
import ConnectedServices from "./Dashboard/ConnectedServices";
import DeactivateAccount from "./Dashboard/DeactivateAccount";
import UpworkTitle from "../components/UpworkTitle";

import auth from "../model/firebase";

import { main, aside, logout_btn } from "../styles/dashboard.module.scss";

export default function Dashboard() {
  const { setLoggedIn } = useGlobalContext();
  const history = useHistory();

  async function logout() {
    try {
      await auth.signOut();
      history.push(`/`);
      setLoggedIn(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <UpworkTitle />
      <button className={logout_btn} onClick={logout}>
        Logout
      </button>
      <main className={main}>
        <aside className={aside}>
          <figure>
            <img src="" alt="" />
          </figure>
          <nav className="nav-items">
            <Link to="/dashboard">
              <li>Contact Info</li>
            </Link>
            <Link to="/dashboard/taxinfo">
              <li>Tax Information</li>
            </Link>
            <Link to="/dashboard/settings">
              <li>Profile Settings</li>
            </Link>
            <Link to="/dashboard/myTeams">
              <li>My Teams</li>
            </Link>
            <Link to="/dashboard/connectedServices">
              <li>Connected Services</li>
            </Link>
            <Link to="/dashboard/deactivateAccount">
              <li>Deactivate Account</li>
            </Link>
          </nav>
        </aside>
        <section>
          <Switch>
            <Route exact path="/dashboard">
              <ContactInfo title="Contact Information" />
            </Route>
            <Route path="/dashboard/taxinfo">
              <TaxInfo title="Tax Information" />
            </Route>
            <Route path="/dashboard/settings" component={ProfileSettings} />
            <Route path="/dashboard/myTeams" component={MyTeams} />
            <Route
              path="/dashboard/connectedServices"
              component={ConnectedServices}
            />
            <Route path="/dashboard/deactivateAccount">
              <DeactivateAccount setLoggedIn={setLoggedIn} />
            </Route>
          </Switch>
        </section>
      </main>
    </>
  );
}
