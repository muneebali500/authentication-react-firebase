<<<<<<< HEAD
import { useState, useContext, useEffect, createContext } from "react";

import { faqs } from "../data";
=======
import { onAuthStateChanged } from "@firebase/auth";
import { useState, useContext, useEffect, createContext } from "react";

/////////////// importing firebase methods
import auth from "../model/firebase";
>>>>>>> 41577c89619ab4544bafbfe2f5ebca78ac943c4a

/////////////// creating context
const AuthContext = createContext();

<<<<<<< HEAD
export default function AuthProvider({ children }) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newFaqs, setNewFaqs] = useState(faqs);

  function toggleFaqAnswer(id) {
    setNewFaqs(
      newFaqs.map((faq) =>
        faq.id === Number(id)
          ? { ...faq, answerVisible: faq.answerVisible ? false : true }
          : { ...faq, answerVisible: false }
      )
    );
  }

  useEffect(() => {
    console.log(`useeffect called`);

    setIsLoading(true);
    window.innerWidth > 1024 ? setIsNavBarOpen(true) : setIsNavBarOpen(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isNavBarOpen,
        setIsNavBarOpen,
        newFaqs,
        toggleFaqAnswer,
      }}
    >
      {isLoading && children}
=======
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
>>>>>>> 41577c89619ab4544bafbfe2f5ebca78ac943c4a
    </AuthContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useGlobalContext };
