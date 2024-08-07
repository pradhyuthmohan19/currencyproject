import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Compare(props) {
  return (
    <div className="m-3">
      <FontAwesomeIcon icon={faCirclePlus} />
      <button className="btn" onClick={() => props.compareClicked()}>
        Compare
      </button>
    </div>
  );
}
export default Compare;
