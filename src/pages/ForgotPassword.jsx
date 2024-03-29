import React from "react";

import { useGlobalContext } from "../store/GlobalContext";
import { Link } from "react-router-dom";

////////////////////// import custom components
import UpworkTitle from "../components/UpworkTitle";
import Alert from "../components/Alert";

///////////////////// import firebase methods
import auth from "../model/firebase";
import { sendPasswordResetEmail } from "@firebase/auth";

//////////////////// import custom styles
import { forgot_pswd, input_fields } from "../styles/form.module.scss";

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function ForgotPassword() {
  const {
    inputValues,
    alert,
    setAlert,
    handleInputChange,
    isLoading,
    setIsLoading,
  } = useGlobalContext();

  ////////////////////// Custom function deals with the form submission
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      ////////////////// firebase function to send the password reset email
      await sendPasswordResetEmail(auth, inputValues.email);
      setAlert("Password reset email sent. Please reset your password");
    } catch {
      setAlert(`Please provide correct email address`);
    }

    setIsLoading(false);
  }

  /*----------------------------------------------- START OF DOM --------------------------------------------*/
  /*---------------------------------------------------------------------------------------------------------*/
  return (
    <>
      {alert !== `` && <Alert />}
      <UpworkTitle />
      <form className={forgot_pswd} onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <label>
          <input
            className={input_fields}
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleInputChange}
            value={inputValues.email}
            required
          />
        </label>

        <button>{isLoading ? `Sending...` : `Send Email`}</button>
        <p>
          Back to{" "}
          <Link to="/login" style={{ textDecoration: "underline" }}>
            Login
          </Link>
        </p>
      </form>
    </>
  );
}
