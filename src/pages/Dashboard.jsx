import { Switch, Route, Link } from "react-router-dom";
import ContactInfo from "./Dashboard/ContactInfo";
import TaxInfo from "./Dashboard/TaxInfo";
import ProfileSettings from "./Dashboard/ProfileSettings";
import MyTeams from "./Dashboard/MyTeams";
import ConnectedServices from "./Dashboard/ConnectedServices";
import UpworkTitle from "../components/UpworkTitle";

import { main, aside } from "../styles/dashboard.module.scss";

export default function Dashboard() {
  return (
    <>
      <UpworkTitle />
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
          </nav>
        </aside>
        <section>
          {/* <Switch> */}
          <Route exact path="/dashboard" component={ContactInfo} />
          <Route path="/dashboard/taxinfo" component={TaxInfo} />
          <Route path="/dashboard/settings" component={ProfileSettings} />
          <Route path="/dashboard/myTeams" component={MyTeams} />
          <Route
            path="/dashboard/connectedServices"
            component={ConnectedServices}
          />
          {/* </Switch> */}
        </section>
      </main>
    </>
  );
}
