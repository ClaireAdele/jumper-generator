import "../../App.css"
import "./Profile.css"
import HowToTakeMeasurements from "../pattern-data-entry/HowToTakeMeasurements"
import PatternList from "./pattern-list/PatternList"
import React, { useState } from "react"
import img from "../homepage/homepage_assets/knitting.svg"

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
        <div id="profile-page">
          <div id="profile-info-style2">
            <div id="username-img">
              <h1>Username</h1>
            </div>
            <div id="round-knitting-hearts">
              <img src={img} id="img-knitting"></img>
            </div>
            <div id="measurements-style2">
              <p>Chest</p>
              <p>Neckline to armhole length</p>
              <p>Armhole to bottom of jumper</p>
              <p>Arm length</p>
            </div>
            {/* <button
              className="main-button-style"
              id="edit-profile-button"
              onClick={handleClickEditProfile}
            >
              Edit profile
            </button> */}
          </div>
          {showHowToTakeMeasurements ? (
            <>
              <button
                className="main-button-style"
                id="show-how-to-measurements"
                onClick={handleClickShowHowTo}
              >
                Hide how to take measurements
              </button>
              <HowToTakeMeasurements />
            </>
          ) : (
            <button
              id="show-how-to-measurements"
              className="main-button-style"
              onClick={handleClickShowHowTo}
            >
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