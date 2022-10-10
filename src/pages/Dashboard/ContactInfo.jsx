import React from "react";

import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../store/GlobalContext";
import Alert from "../../components/Alert";

////////////////////// import firebase functions
import auth from "../../model/firebase";
import {
  updateProfile,
  updateEmail,
  sendEmailVerification,
} from "@firebase/auth";

//////////////////// import custom styles
import {
  contact,
  contact_title,
  contact_details,
} from "../../styles/contactInfo.module.scss";

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function ContactInfo({ title }) {
  const {
    inputValues,
    alert,
    setAlert,
    handleInputChange,
    isLoading,
    setIsLoading,
  } = useGlobalContext();
  const { fullName, email } = inputValues; // Destructuring of above input  values object
  const history = useHistory();

  ///////////////////////////////////////////// Function runs when update button is clicked
  // function updates the name and email fields of the user and stores them into database
  async function updateUserProfile(e) {
    e.preventDefault();

    ///////////////////////// a message will be displayed when the user tries to update fields when the fields are already set
    if (
      auth.currentUser.email === email &&
      auth.currentUser.displayName === fullName
    ) {
      return setAlert(`Data is already set. No update is needed`);
    }

    try {
      setIsLoading(true);
      //////////////////////////// firebase function to update the name of the user
      if (auth.currentUser.displayName !== fullName) {
        await updateProfile(auth.currentUser, {
          displayName: fullName,
        });
        setAlert(`Data has been updated`);
      }

      ///////////////////////// firebase functions to update email and send email verification mail to new address of the user
      if (auth.currentUser.email !== email) {
        await updateEmail(auth.currentUser, email);
        await sendEmailVerification(auth.currentUser);
        await setAlert(
          `An email verification has been sent to your email id. Please verify it`
        );
        history.push(`/login`);
      }
    } catch (err) {
      ////////////////////////// Firebase doesn't allow to update email, password if the user is looged in too long and throws an error. To deal with that error, following condition is applied
      if (err.message === `Firebase: Error (auth/requires-recent-login).`) {
        await setAlert(`Your login token has expired. Please login again`);
        history.push("/login");
      } else {
        setAlert(
          `This email already exists. Please enter different email address`
        );
      }
    }

    setIsLoading(false);
  }

  /*----------------------------------------------- START OF DOM --------------------------------------------*/
  /*---------------------------------------------------------------------------------------------------------*/
  return (
    <div className={contact}>
      {alert !== `` && <Alert />}
      <h2 className={contact_title}>{title}</h2>
      <div className={contact_details}>
        <form className="contact_Info_form" onSubmit={updateUserProfile}>
          <input
            type="text"
            className="name"
            name="fullName"
            onChange={handleInputChange}
            defaultValue={auth.currentUser.displayName}
          />
          <input
            type="email"
            className="email"
            name="email"
            onChange={handleInputChange}
            defaultValue={auth.currentUser.email}
          />
          <button className="update_profile">
            {isLoading ? `Updating...` : `Update Profile`}
          </button>
        </form>
      </div>
    </div>
  );
}
