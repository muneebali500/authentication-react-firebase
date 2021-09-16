import { useState } from "react";

import { login, input_fields } from "../styles/form.module.scss";
import UpworkTitle from "../components/UpworkTitle";
import { Link, useHistory } from "react-router-dom";

import auth from "../model/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

const initialValues = {
  email: ``,
  password: ``,
};

export default function Login({ setLoggedIn }) {
  const [inputValues, setInputValues] = useState(initialValues);
  const { email, password } = inputValues;
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  }

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
      if (user) {
        setLoggedIn(true);
      }

      // if (!user.emailVerified) {
      //   return alert(`Please verify your email`);
      // }

      history.push(`/dashboard`);
    } catch (err) {
      err.message = `Unauthorized User or There is no account with the User`;
      alert(err.message);
    }
  }

  return (
    <>
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
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <input
            className={input_fields}
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          <span style={{ fontSize: `1.2rem` }}>Keep me logged in</span>

          <Link
            to="/forgotpassword"
            style={{ marginLeft: `20rem`, fontSize: `1.2rem` }}
          >
            Forgot Password?
          </Link>
        </label>

        <button>Login</button>
        <p>
          Don't have an account. <Link to="/signup">Signup</Link>
        </p>
      </form>
    </>
  );
}
