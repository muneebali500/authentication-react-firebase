import { useGlobalContext } from "../store/GlobalContext";
import { Link, useHistory } from "react-router-dom";

////////////////////// import custom components
import UpworkTitle from "../components/UpworkTitle";
import Alert from "../components/Alert";
import Loading from "../components/Loading";

///////////////////// import firebase methods
import auth from "../model/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

//////////////////// import custom styles
import { login, input_fields } from "../styles/form.module.scss";

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function Login() {
  const {
    inputValues,
    alert,
    setAlert,
    handleInputChange,
    setLoggedIn,
    isLoading,
    setIsLoading,
  } = useGlobalContext();
  const { email, password } = inputValues; // Destructuring above inputValues object
  const history = useHistory();

  ////////////////////// Custom function deals with the form submission
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      ////////////////// firebase function to log the user after verifying email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;

      ///////////////////// check if the user email is verified or not
      if (!user.emailVerified) {
        setIsLoading(false);
        return setAlert(
          `Your email address is not verified. Please verify it.`
        );
      }

      ///////////////////// if the user exists send the user to dashboard else alert an error message
      if (user) {
        setLoggedIn(true);
        history.push(`/dashboard`);
      }
    } catch {
      setAlert(`Please provide correct data`);
    }

    setIsLoading(false);
  }

  /*----------------------------------------------- START OF DOM --------------------------------------------*/
  /*---------------------------------------------------------------------------------------------------------*/
  return (
    <>
      {alert !== `` && <Alert />}
      <UpworkTitle />
      <form className={login} onSubmit={handleSubmit}>
        <h2>Login to Upwork</h2>
        <label htmlFor="">
          <input
            className={input_fields}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="">
          <input
            className={input_fields}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <Link to="/forgotpassword" style={{ fontSize: `1.2rem` }}>
            Forgot Password?
          </Link>
        </label>

        <button>{isLoading ? <Loading /> : `login`}</button>
        <p>
          Don't have an account.{" "}
          <Link to="/signup" style={{ textDecoration: "underline" }}>
            Signup
          </Link>
        </p>
      </form>
    </>
  );
}
