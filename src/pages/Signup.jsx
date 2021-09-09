import { signup, work_choice, input_fields } from "../styles/form.module.scss";

import UpworkTitle from "../components/UpworkTitle";

export default function Signup() {
  return (
    <>
      <UpworkTitle />

      <form className={signup}>
        <h2>Complete your free account setup</h2>
        <label htmlFor="">
          <input className={input_fields} type="text" placeholder="Full Name" />
        </label>
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
      </form>
    </>
  );
}
