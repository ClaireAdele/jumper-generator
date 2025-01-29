import "../../App.css"
import "./Profile.css"
import HowToTakeMeasurements from "../pattern-data-entry/data-entry-children/HowToTakeMeasurements"
import PatternList from "./pattern-list/PatternList"
import React, { useEffect, useState, useContext } from "react"
import Measurement from "./profile-children/Measurement"
import editSvgIcon from "./profile-assets/pen-square-svgrepo-com.svg"

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

  const measurementsList = [
    {
      label: "Chest Circumference",
      name: "chestCircumference",
      value: 0,
    },
    {
      label: "Body Length",
      name: "bodyLength",
      value: 0,
    },
    {
      label: "Bottom of Neckline to Chest Line",
      name: "necklineToChest",
      value: 0,
    },
    {
      label: "Shoulder Width",
      name: "shoulderWidth",
      value: 0,
    },
    {
      label: "Arm Length",
      name: "armLength",
      value: 0,
    },
  ];

  return (
    <div className="pageBackground">
      <div className="pageShaper">
        <div id="profile-page">
          <h2 style={{ alignSelf: "center" }}>Welcome back, username!</h2>
          <div id="profile-info-style">
            <img id="edit-profile-info-img" src={editSvgIcon}></img>
            <div>
              {measurementsList.map((measurement) => {
                return <Measurement measurement={measurement} />;
              })}
            </div>
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