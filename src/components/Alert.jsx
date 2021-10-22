import { useGlobalContext } from "../store/GlobalContext";

export default function Alert() {
  const { alert } = useGlobalContext();

  return <div style={alertStyle}>{alert}</div>;
}

const alertStyle = {
  position: `fixed`,
  top: 0,
  left: `35%`,
  minHeight: `60px`,
  width: `400px`,
  zIndex: `1000`,
  padding: `2rem`,
  color: `#fff`,
  fontSize: `1.5rem`,
  borderRadius: `0 0 5px 5px`,
  backgroundColor: `#14a800`,
  transition: `all 1s ease`,
};
