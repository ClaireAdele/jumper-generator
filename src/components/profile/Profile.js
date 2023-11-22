import "../../App.css"
import "./Profile.css"
import img from "./yarn-2795588_640.png"
import HowToTakeMeasurements from "../pattern-data-entry/HowToTakeMeasurements"
import PatternList from "./pattern-list/PatternList"
import React, { useState } from "react";

const ProfilePage = () => {
  const [showHowToTakeMeasurements, setShowHowtoTakeMeasurements] = useState(false);

  const handleClickEditProfile = () => { }

  const handleClickShowHowTo = () => { 
    if (showHowToTakeMeasurements === false) {
      setShowHowtoTakeMeasurements(true);
    } else { 
      setShowHowtoTakeMeasurements(false);
    }
  }

  return showHowToTakeMeasurements ? (
    <div className="pageBackground">
      <div className="pageShaper">
        <div id="profilePage">
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
          <button onClick={handleClickShowHowTo}>
            Show how to take measurements
          </button>
          <HowToTakeMeasurements />
          <PatternList />
        </div>
      </div>
    </div>
  ) : (
    <div className="pageBackground">
      <div className="pageShaper">
        <div id="profilePage">
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
          <button onClick={handleClickShowHowTo}>
            Show how to take measurements
          </button>
          <PatternList />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;