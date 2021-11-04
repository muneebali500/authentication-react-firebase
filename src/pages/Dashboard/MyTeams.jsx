import { page_title, page_details } from "../../styles/dashboard.module.scss";

export default function MyTeams({ title }) {
  return (
    <div>
      <h2 className={page_title}>{title}</h2>
      <section className={page_details}>
        <p style={teamItem}>
          <strong style={teamText}>Team Name</strong>{" "}
          <span style={teamDesc}>Haoran White</span>
        </p>
        <br />
        <p style={teamItem}>
          <strong style={teamText}>Role</strong>{" "}
          <span style={teamDesc}>On Contract</span>
        </p>
      </section>
    </div>
  );
}

const teamItem = {
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
};

const teamText = {
  fontSize: `2rem`,
  color: `rgba(0,0,0,0.6)`,
};

const teamDesc = {
  fontSize: `1.5rem`,
};
