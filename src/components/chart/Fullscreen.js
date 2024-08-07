import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
import screenfull from "screenfull";
function Fullscreen() {
  return (
    <div className="m-3">
      <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
      <button className="btn">FullScreen</button>
    </div>
  );
}
export default Fullscreen;
