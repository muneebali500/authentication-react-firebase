import { Link } from "react-router-dom";

export default function UpworkTitle() {
  return (
    ///////////////////// title that appears on every page and when clicked, will send to home page
    <Link to="/">
      <h2 className="upwork-title">upwork</h2>
    </Link>
  );
}
