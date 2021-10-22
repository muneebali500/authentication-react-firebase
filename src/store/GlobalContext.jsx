import { useState, useContext, useEffect, createContext } from "react";

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
  const [loggedIn, setLoggedIn] = useState(false);

  // hook called and displays alert message for 3.5 seconds and unamounts
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(``);
    }, 3500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  // funtion to set input field values for sigup,login, and forgot-password forms
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
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useGlobalContext };
