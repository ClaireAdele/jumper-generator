import "../../../App.css";
import "../pattern-list/Patterns.css"
import jumper from "../profile-assets/sweater-7482269_1280.jpg"
import { Link } from "react-router-dom";

const PatternTile = () => {
  return (
    <div className="pattern-tile">
      <img className="pattern-tile-img" src={jumper}></img>
      <Link className="pattern-link" to="/yoke-pattern">
        Pattern Name
      </Link>
    </div>
  );
};

export default PatternTile;
