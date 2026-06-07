import { FaStar } from "react-icons/fa";

function Star(props) {
  return (
    <button
      className="star"
      type="button"
      onClick={props.onClick}
      aria-label={props.selected ? "Selected star" : "Unselected star"}
    >
      <FaStar color={props.selected ? "#f5b301" : "#d8d8d8"} />
    </button>
  );
}

export default Star;
