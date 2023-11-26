import "../../../App.css";
import "../pattern-list/Patterns.css";
import PatternTile from "./PatternTile";
import placeHolderImg from "../../profile/yarn-2795588_640.png";
import { Link } from "react-router-dom";

const PatternList = () => {
  return (
    <div id="pattern-list-container">
      <div className="pattern-tile">
        <img className="pattern-tile-img" src={placeHolderImg}></img>
        <Link className="pattern-link" id="create-new-pattern" to="/yoke-pattern">Create new pattern</Link>
      </div>
      <PatternTile />
    </div>
  );
};

export default PatternList;
