import { login, input_fields } from "../styles/form.module.scss";

import { Link } from "react-router-dom";

import UpworkTitle from "../components/UpworkTitle";

export default function Login() {
  return (
    <>
      <UpworkTitle />
      <form className={login}>
        <h2>Login to Upwork</h2>
        <label htmlFor="">
          <input
            className={input_fields}
            type="email"
            placeholder="Email Address"
          />
        </label>
        <label htmlFor="">
          <input
            className={input_fields}
            type="password"
            placeholder="Enter Password"
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
      </form>
    </>
  );
}
