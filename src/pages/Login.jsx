import { useGlobalContext } from "../store/GlobalContext";
import { Link, useHistory } from "react-router-dom";
import UpworkTitle from "../components/UpworkTitle";
import Alert from "../components/Alert";

// Import firebase methods
import auth from "../model/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

// Import custom styles
import { login, input_fields } from "../styles/form.module.scss";

export default function Login() {
  const { inputValues, alert, setAlert, handleInputChange, setLoggedIn } =
    useGlobalContext();
  const { email, password } = inputValues; // Destructuring above inputValues object
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;
      console.log(user);

      if (!user.emailVerified) {
        return setAlert(
          `Your email address is not verified. Please verify it.`
        );
      }

      if (user) {
        setLoggedIn(true);
        history.push(`/dashboard`);
      }
    } catch (err) {
      err.message = `Please provide correct data`;
      setAlert(err.message);
    }
  }

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
          {/* <input type="checkbox" />
          <span style={{ fontSize: `1.2rem` }}>Keep me logged in</span> */}

          <Link to="/forgotpassword" style={{ fontSize: `1.2rem` }}>
            Forgot Password?
          </Link>
        </label>

        <button>Login</button>
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
