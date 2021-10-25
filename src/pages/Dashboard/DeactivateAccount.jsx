import { useGlobalContext } from "../../store/GlobalContext";
import { useHistory } from "react-router-dom";

//////////////// Import firebase methods
import auth from "../../model/firebase";
import { deleteUser } from "@firebase/auth";

/////////////// import custom styling
import {
  page_title,
  page_details,
  deactivateBtn,
} from "../../styles/dashboard.module.scss";

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function DeactivateAccount({ title }) {
  const { setLoggedIn, setAlert, setIsAccountDeactivated } = useGlobalContext();
  const history = useHistory();

  ////////////////////////// function to delete the user
  async function deleteCurrentUser(e) {
    const user = auth.currentUser;

    try {
      ////////////////////// firebase function to delete user account
      await deleteUser(user);
      setLoggedIn(false);
      setIsAccountDeactivated(true);
      history.push(`/deactivate`);
    } catch {
      setAlert(
        `There is some issue with Account Deletion. Please come back later.`
      );
    }
  }

  /*----------------------------------------------- START OF DOM --------------------------------------------*/
  /*---------------------------------------------------------------------------------------------------------*/
  return (
    <div>
      <h2 className={page_title}>{title}</h2>
      <section className={page_details}>
        <h2 style={{ color: `rgba(0,0,0,0.7)` }}>
          Are you sure, you want to deactivate your account?
        </h2>
        <button className={deactivateBtn} onClick={deleteCurrentUser}>
          Delete Account
        </button>
      </section>
    </div>
  );
}
