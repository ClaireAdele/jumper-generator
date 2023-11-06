import "../../../App.css";
import "../pattern-list/Patterns.css"
import placeHolderImg from "../../profile/yarn-2795588_640.png"
import { Link } from "react-router-dom";

const PatternTile = () => {
  return (
    <div className="patternTile">
      <img className="patternTileImg" src={placeHolderImg}></img>
      <Link to="/yoke-pattern">Pattern Name</Link>
    </div>
  )
};

export default PatternTile;
