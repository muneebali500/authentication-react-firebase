import React, { useState, useContext, useEffect, createContext } from "react";

/////////////// importing firebase methods
import auth from "../model/firebase";
import { onAuthStateChanged } from "@firebase/auth";

/////////////// creating context
const AuthContext = createContext();

// Declaring & Defining initial values for user
const initialValues = {
  fullName: ``,
  email: ``,
  password: ``,
};

export default function AuthProvider({ children }) {
  const [inputValues, setInputValues] = useState(initialValues);
  const [alert, setAlert] = useState(``);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAccountDeactivated, setIsAccountDeactivated] = useState(false);
  //// this loading is concerned with form submission: signup, login, reset password, update profile
  const [isLoading, setIsLoading] = useState(false);
  //// this loading ic concerned with first time load or Refresh of a website
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  //////////////////// check if user is logged in and persist the local state of firebase. User doesn't have to login again after broweser is closed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setIsInitialLoading(false);
      } else {
        setIsInitialLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  ////////////////// hook called and displays alert message for 5 seconds and unamounts
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(``);
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  /////////////////// function to set input field values for sigup,login, and forgot-password forms
  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  return (
    <AuthContext.Provider
      value={{
        inputValues,
        alert,
        setAlert,
        handleInputChange,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        isAccountDeactivated,
        setIsAccountDeactivated,
      }}
    >
      {!isInitialLoading && children}
    </AuthContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useGlobalContext };
