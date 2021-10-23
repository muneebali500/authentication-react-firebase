import { page_title, page_details } from "../../styles/dashboard.module.scss";

export default function ConnectedServices({ title }) {
  return (
    <div>
      <h2 className={page_title}>{title}</h2>
      <section className={page_details}>
        <p style={servicesItem}>
          <strong style={servicesText}>Sign in with Google</strong>{" "}
          <button style={servicesBtn}>Continue with Google</button>
        </p>
        <br />
        <p style={servicesItem}>
          <strong style={servicesText}>Sign in with Apple</strong>{" "}
          <button style={servicesBtn}>Continue with Apple</button>
        </p>
      </section>
    </div>
  );
}

const servicesItem = {
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
};

const servicesText = {
  fontSize: `2rem`,
  color: `rgba(0,0,0,0.6)`,
};

const servicesBtn = {
  fontSize: `1.5rem`,
  padding: `1.5rem 2rem`,
  border: `none`,
  outline: `none`,
  cursor: `pointer`,
  backgroundColor: `rgba(0, 200, 0, 0.9)`,
  borderRadius: `1rem`,
  color: `#fff`,
};
