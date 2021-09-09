import { Link } from "react-router-dom";

export default function UpworkTitle() {
  const titleStyle = {
    fontSize: `3rem`,
    padding: `1.5rem 0`,
    color: `#14a800`,
    borderBottom: `1px solid #14a800`,
    marginBottom: `3.5rem`,
  };

  return (
    <Link to="/">
      <h2 style={titleStyle}>upwork</h2>
    </Link>
  );
}
