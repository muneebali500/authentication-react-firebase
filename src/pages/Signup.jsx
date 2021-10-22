import { Link, useHistory } from "react-router-dom";

// Import custom components
import UpworkTitle from "../components/UpworkTitle";
import Alert from "../components/Alert";
import { useGlobalContext } from "../store/GlobalContext";

// Import Firebase methods
import auth from "../model/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "@firebase/auth";

// Import Custom Styles
import { signup, work_choice, input_fields } from "../styles/form.module.scss";

export default function Signup() {
  const { inputValues, alert, setAlert, handleInputChange } =
    useGlobalContext();
  const { fullName, email, password } = inputValues; // destructuring above inputValues object

  const history = useHistory();

  // Custom function that submits user registration data to the database when user signup
  async function handleSubmit(e) {
    e.preventDefault();

    // firebase function that taked user email and password and store into database
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;

      if (!user) return setAlert(`There is no user`);

      // firebase function to store user data into database other than email and password
      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });

      // firebase function that sends verification email when user signup
      await sendEmailVerification(auth.currentUser);
      await setAlert(`Please verify your email address`);
      history.push(`/login`);
      console.log(auth.currentUser);
    } catch {
      setAlert(
        `The user email already exists. Please sign in with different account`
      );
    }
  }

  return (
    <>
      {alert !== `` && <Alert />}
      <UpworkTitle />
      <form className={signup} onSubmit={handleSubmit}>
        <h2>Complete your free account setup</h2>

        <label>
          <input
            onChange={handleInputChange}
            className={input_fields}
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
            required
          />
          <span>
            Please enter letters and spaces only (but no spaces at the begining
            or end)
          </span>
        </label>

        <label>
          <input
            onChange={handleInputChange}
            className={input_fields}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            required
          />
        </label>

        <label>
          <input
            onChange={handleInputChange}
            className={input_fields}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            minLength="6"
            autoComplete="off"
            required
          />
          <span>Please enter at least 6 characters</span>
        </label>

        <div className={work_choice}>
          <h3>I want to:</h3>
          <span>Hire for a project</span>
          <span>Work as a freelancer</span>
        </div>
        <div style={{ marginBottom: `2rem` }}>
          <input type="checkbox" defaultChecked />
          <span>
            Yes! Send me genuinely useful emails every now and then to help me
            get the most out of Upwork.
          </span>
        </div>
        <div>
          <input type="checkbox" defaultChecked />
          <span>
            Yes, I understand and agree to the Upwork Terms of Service,
            including the User Agreement and Privacy Policy.
          </span>
        </div>
        <button>Create My Account</button>
        <p>
          Already have an account.{" "}
          <Link to="/login" style={{ textDecoration: "underline" }}>
            Login
          </Link>
        </p>
      </form>
    </>
  );
}
