import { useGlobalContext } from "../store/GlobalContext";
import { Switch, Route, Link, useHistory } from "react-router-dom";

////////////////////// import custom components
import ContactInfo from "./Dashboard/ContactInfo";
import TaxInfo from "./Dashboard/TaxInfo";
import MyTeams from "./Dashboard/MyTeams";
import ConnectedServices from "./Dashboard/ConnectedServices";
import DeactivateAccount from "./Dashboard/DeactivateAccount";
import UpworkTitle from "../components/UpworkTitle";
import Alert from "../components/Alert";
import Error404 from "./Error404";

///////////////////// import firebase methods
import auth from "../model/firebase";

//////////////////// import custom styles
import { main, aside, logout_btn } from "../styles/dashboard.module.scss";

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function Dashboard() {
  const { setIsLoggedIn, alert, setAlert } = useGlobalContext();
  const history = useHistory();

  ////////////////////////// Logout function
  async function logout() {
    try {
      await auth.signOut();
      history.push(`/`);
      setIsLoggedIn(false);
    } catch {
      setAlert(`Can not logout currently, please try again`);
    }
  }

  /*----------------------------------------------- START OF DOM --------------------------------------------*/
  /*---------------------------------------------------------------------------------------------------------*/
  return (
    <>
      {alert !== `` && <Alert />}
      <UpworkTitle />
      <button className={logout_btn} onClick={logout}>
        Logout
      </button>

      {/*//////////////////////////// Navigation links  */}
      <main className={main}>
        <aside className={aside}>
          {/* <figure>
            <img src="" alt="" />
          </figure> */}
          <nav>
            <Link to="/dashboard">
              <li>Contact Info</li>
            </Link>
            <Link to="/dashboard/taxinfo">
              <li>Tax Info</li>
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

        {/*//////////////////////////////////// dashboard navigation routes  */}
        <section>
          <Switch>
            <Route exact path="/dashboard">
              <ContactInfo title="Contact Information" />
            </Route>
            <Route exact path="/dashboard/taxinfo">
              <TaxInfo title="Tax Information" />
            </Route>
            <Route exact path="/dashboard/myTeams">
              <MyTeams title="My Teams" />
            </Route>
            <Route exact path="/dashboard/connectedServices">
              <ConnectedServices title="Connected Services" />
            </Route>
            <Route exact path="/dashboard/deactivateAccount">
              <DeactivateAccount title="Deactivate Account" />
            </Route>
            <Route component={Error404} />
          </Switch>
        </section>
      </main>
    </>
  );
}
