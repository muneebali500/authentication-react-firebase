import { useState } from "react";
// import { auth } from "../model/firebase";

import auth from "../model/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { signup, work_choice, input_fields } from "../styles/form.module.scss";

import UpworkTitle from "../components/UpworkTitle";
import { Link, useHistory } from "react-router-dom";

const initialValues = {
  fullName: ``,
  email: ``,
  password: ``,
};

export default function Signup() {
  const [inputValues, setInputValues] = useState(initialValues);
  const { fullName, email, password } = inputValues;
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCredential);
      const user = await userCredential.user;

      if (user) {
        updateProfile(auth.currentUser, {
          displayName: fullName,
        })
          .then(() => {
            history.push(`/login`);
            alert(`Please verify your email`);
          })
          .catch((err) => console.log(err));
      }

      // sendEmailVerification(auth.currentUser)
      //   .then(() => {
      //     alert(`Please verify your email`);
      //   })
      //   .catch((err) => console.log(err));
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;

      console.log({ errorCode, errorMessage });
    }
  }

  return (
    <>
      <UpworkTitle />

      <form className={signup} onSubmit={handleSubmit}>
        <h2>Complete your free account setup</h2>
        <label htmlFor="">
          <input
            onChange={handleChange}
            className={input_fields}
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            required
          />
        </label>
        <label htmlFor="">
          <input
            onChange={handleChange}
            className={input_fields}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            required
          />
        </label>
        <label htmlFor="">
          <input
            onChange={handleChange}
            className={input_fields}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            required
          />
        </label>
        <div className={work_choice}>
          <h3>I want to:</h3>
          <span>Hire for a project</span>
          <span>Work as a freelancer</span>
        </div>
        <div style={{ marginBottom: `2rem` }}>
          <input type="checkbox" />
          <span>
            Yes! Send me genuinely useful emails every now and then to help me
            get the most out of Upwork.
          </span>
        </div>
        <div>
          <input type="checkbox" />
          <span>
            Yes, I understand and agree to the Upwork Terms of Service,
            including the User Agreement and Privacy Policy.
          </span>
        </div>
        <button>Create My Account</button>
        <p>
          Already have an account. <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
}
