import "../../../App.css";
import "../pattern-list/Patterns.css";
import PatternTile from "./PatternTile";
import placeHolderImg from "../../profile/profile-assets/sweater-7482269_1280.jpg";
import { Link } from "react-router-dom";

const PatternList = () => {
  return (
    <div id="pattern-list-container">
      <div className="pattern-tile">
        <img className="pattern-tile-img" src={placeHolderImg}></img>
        <Link className="pattern-link" id="create-new-pattern" to="/data-entry">
          Create new pattern
        </Link>
      </div>
      <PatternTile />
    </div>
  );
};

export default PatternList;
