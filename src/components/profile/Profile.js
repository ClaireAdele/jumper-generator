import "../../App.css"
import "./Profile.css"
import img from "./yarn-2795588_640.png"
import HowToTakeMeasurements from "../pattern-data-entry/HowToTakeMeasurements"
import PatternList from "./pattern-list/PatternList"

const ProfilePage = () => {
  const handleClickEditProfile = () => { }

  return (
    <div className="pageBackground">
      <div className="pageShaper" id="profilePage">
        <div id="profileInfo">
          <img src={img} id="profileImg"></img>
          <div id="measurements">
            <h4>Username</h4>
            <p>Chest</p>
            <p>Neckline to armhole length</p>
            <p>Armhole to bottom of jumper</p>
            <p>Arm length</p>
            <button onClick={handleClickEditProfile}>Edit profile</button>
          </div>
        </div>
        <HowToTakeMeasurements />
       <PatternList/>
      </div>
    </div>
  );
}

export default ProfilePage;