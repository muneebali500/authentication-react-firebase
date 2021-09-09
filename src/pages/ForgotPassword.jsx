import UpworkTitle from "../components/UpworkTitle";

import { forgot_pswd, input_fields } from "../styles/form.module.scss";

export default function ForgotPassword() {
  return (
    <>
      <UpworkTitle />
      <form className={forgot_pswd}>
        <h2>Forgot Password</h2>
        <label htmlFor="">
          <input
            className={input_fields}
            type="email"
            placeholder="Email Address"
          />
        </label>

        <button>Send Email</button>
      </form>
    </>
  );
}
