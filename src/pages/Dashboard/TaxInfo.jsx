import { page_title, page_details } from "../../styles/dashboard.module.scss";

export default function TaxInfo({ title }) {
  return (
    <div>
      <h2 className={page_title}>{title}</h2>
      <div className={page_details}>
        <h2 style={{ color: `rgba(0,0,0,0.7)`, marginBottom: `1.5rem` }}>
          Before withdrawing funds, all non-U.S. persons must provide their
          W-8BEN tax information
        </h2>
        <br />
        <h3
          style={{
            color: `rgba(0,0,0,0.7)`,
            fontSize: `1.3rem`,
            marginBottom: `.5rem`,
          }}
        >
          Legal Name of Taxpayer
        </h3>
        <span>Individual</span>
        <br />
        <br />
        <h3
          style={{
            color: `rgba(0,0,0,0.7)`,
            fontSize: `1.3rem`,
            marginBottom: `.5rem`,
          }}
        >
          Federal Tax Classification
        </h3>
        <span>N/A - Non-US</span>
      </div>
    </div>
  );
}
