import UpworkTitle from "../components/UpworkTitle";

import { reset_pswd, input_fields } from "../styles/form.module.scss";

export default function ResetPassword() {
  return (
    <>
      <UpworkTitle />
      <form className={reset_pswd}>
        <h2>Reset your password</h2>
        <label htmlFor="">
          <input
            className={input_fields}
            type="password"
            placeholder="Enter Password"
          />
        </label>

        <button>Reset Password</button>
      </form>
    </>
  );
}
