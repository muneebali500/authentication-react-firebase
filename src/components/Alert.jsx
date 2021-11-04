import { useGlobalContext } from "../store/GlobalContext";

export default function Alert() {
  const { alert } = useGlobalContext();

  return <div className="alert">{alert}</div>;
}
