import { useHistory } from "react-router-dom";

/////////////// import custom styles
import { error } from "../styles/error404.module.scss";

export default function Error404() {
  const history = useHistory();

  return (
    <section className={error}>
      <button onClick={() => history.go(-1)}>Go Back</button>
    </section>
  );
}
