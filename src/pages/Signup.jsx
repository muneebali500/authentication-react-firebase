import { Link, useHistory } from "react-router-dom";

////////////////////// import custom components
import UpworkTitle from "../components/UpworkTitle";
import Alert from "../components/Alert";
import Loading from "../components/Loading";
import { useGlobalContext } from "../store/GlobalContext";

///////////////////// import firebase methods
import auth from "../model/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "@firebase/auth";

//////////////////// import custom styles
import {
  signup,
  input_fields,
  notifications,
} from "../styles/form.module.scss";

/*-------------------------------------------- Start of Main Component --------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------*/
export default function Signup() {
  const {
    inputValues,
    alert,
    setAlert,
    handleInputChange,
    isLoading,
    setIsLoading,
  } = useGlobalContext();
  const { fullName, email, password } = inputValues; // destructuring above inputValues object
  const history = useHistory();

  ///////////////////////////// Custom function that submits user registration data to the database when user signup
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      /////////////////////// firebase function that taked user email and password and store into database
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;

      if (!user) return setAlert(`There is no user`);

      ///////////////////////////////// firebase function to store user data into database other than email and password
      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });

      ////////////////////////////////// firebase function that sends verification email when user signup
      await sendEmailVerification(auth.currentUser);
      await setAlert(
        `A verification link has been sent to your email addres. Please verify it`
      );
      history.push(`/login`);
      console.log(auth.currentUser);
    } catch {
      setAlert(
        `The user email already exists. Please sign in with a different account`
      );
    }

    setIsLoading(false);
  }

  /*----------------------------------------------- START OF DOM --------------------------------------------*/
  /*---------------------------------------------------------------------------------------------------------*/
  return (
    <>
      {alert !== `` && <Alert />}
      <UpworkTitle />

      <form className={signup} onSubmit={handleSubmit}>
        <h2>Create Free Account</h2>

        <input
          onChange={handleInputChange}
          className={input_fields}
          type="text"
          placeholder="Full Name - Letters & Spaces Only"
          name="fullName"
          value={fullName}
          pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
          required
        />

        <input
          onChange={handleInputChange}
          className={input_fields}
          type="email"
          placeholder="Email Address - Valid Email Only"
          name="email"
          value={email}
          required
        />

        <input
          onChange={handleInputChange}
          className={input_fields}
          type="password"
          placeholder="Enter Password - Alteast 6 Characters"
          name="password"
          value={password}
          minLength="6"
          autoComplete="off"
          required
        />

        {/* <div className={work_choice}>
          <h3 >I want to:</h3>
          <span>Hire for a project</span>
          <span>Work as a freelancer</span>
        </div> */}
        <div className={notifications}>
          <div>
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
        </div>

        <button>{isLoading ? <Loading /> : `Create My Account`} </button>

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
