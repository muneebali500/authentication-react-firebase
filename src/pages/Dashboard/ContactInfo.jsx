import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../store/GlobalContext";
import Alert from "../../components/Alert";

import auth from "../../model/firebase";
import {
  updateProfile,
  updateEmail,
  sendEmailVerification,
  onAuthStateChanged,
} from "@firebase/auth";

import {
  contact,
  contact_title,
  contact_details,
} from "../../styles/contactInfo.module.scss";

export default function ContactInfo({ title }) {
  const { inputValues, alert, setAlert, handleInputChange } =
    useGlobalContext();
  const { fullName, email } = inputValues; // Destructuring of above input  values object
  const history = useHistory();

  console.log(fullName);

  async function updateUserProfile(e) {
    e.preventDefault();

    if (
      auth.currentUser.email === email &&
      auth.currentUser.displayName === fullName
    ) {
      return setAlert(`Data is already set. No update is needed`);
    }

    try {
      if (auth.currentUser.email !== email) {
        await updateEmail(auth.currentUser, email);
        await sendEmailVerification(auth.currentUser);
        await setAlert(`Please verify your email address`);
        history.push(`/login`);
      }

      if (auth.currentUser.displayName !== fullName) {
        await updateProfile(auth.currentUser, {
          displayName: fullName,
        });
        setAlert(`Data has been updated`);
      }

      console.log(auth.currentUser);
    } catch (err) {
      setAlert(err.message);
    }
  }

  return (
    <div className={contact}>
      {alert !== `` && <Alert />}
      <h2 className={contact_title}>{title}</h2>
      <div className={contact_details}>
        <form className="contact_Info_form" onSubmit={updateUserProfile}>
          <input
            type="text"
            className="name"
            // value={fullName}
            name="fullName"
            onChange={handleInputChange}
            defaultValue={auth.currentUser.displayName}
          />
          <input
            type="email"
            className="email"
            // value={email}
            name="email"
            onChange={handleInputChange}
            defaultValue={auth.currentUser.email}
          />
          <button className="update_profile">Update Profile</button>
        </form>
      </div>
    </div>
  );
}
