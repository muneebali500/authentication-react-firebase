import { useGlobalContext } from "../../store/GlobalContext";
import { useHistory } from "react-router-dom";
import auth from "../../model/firebase";
import { deleteUser } from "@firebase/auth";

export default function DeactivateAccount() {
  const { setLoggedIn, setAlert } = useGlobalContext();
  const history = useHistory();

  async function deleteCurrentUser(e) {
    const user = auth.currentUser;

    try {
      await deleteUser(user);
      await setAlert(`Your Account has been deleted`);
      setLoggedIn(false);
      history.push(`/`);
    } catch {
      setAlert(
        `There is some issue with Account Deletion. Please come back later.`
      );
    }

    // deleteUser(user)
    //   .then(() => {
    //     alert(`Your Account has been deleted`);
    //     setLoggedIn(false);
    //     history.push(`/`);
    //   })
    //   .catch((err) => console.log(err));
  }

  return (
    <div>
      <p>Are you sure, you want to deactivate your account?</p>
      <button style={styleBtn} onClick={deleteCurrentUser}>
        Delete Account
      </button>
    </div>
  );
}

const styleBtn = {
  fonstSize: `1.5rem`,
  padding: `1rem 1.6rem`,
  color: `#ffffff`,
  backgroundColor: `#14a800`,
  border: `none`,
  outline: `none`,
  cursor: `pointer`,
  borderRadius: `5rem`,
};
