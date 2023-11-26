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

  return (
    <div className="pageBackground">
      <div className="pageShaper">
        <div id="profilePage">
          {/* <div id="profileInfo">
            <h4>Username</h4>
            <div id="measurements">
              <p>Chest</p>
              <p>Neckline to armhole length</p>
              <p>Armhole to bottom of jumper</p>
              <p>Optional: wrist circumference</p>
              <p>Optional: arm circumference</p>
              <p>Optional: shoulder circumference</p>
              <p>Arm length</p>
              <button onClick={handleClickEditProfile}>Edit profile</button>
            </div>
          </div> */}
          <div id="profileInfo-style2">
            <div id="username-img">
              <h4>Username</h4>
            </div>
            <div id="measurements-style2">
              <p>Chest</p>
              <p>Neckline to armhole length</p>
              <p>Armhole to bottom of jumper</p>
              <p>Arm length</p>
            </div>
            <button className="main-button-style" id="edit-profile-button" onClick={handleClickEditProfile}>Edit profile</button>
          </div>
          {showHowToTakeMeasurements ? (
            <>
              <button onClick={handleClickShowHowTo}>
                Hide how to take measurements
              </button>
              <HowToTakeMeasurements />
            </>
          ) : (
            <button onClick={handleClickShowHowTo}>
              Show how to take measurements
            </button>
          )}
          <PatternList />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;