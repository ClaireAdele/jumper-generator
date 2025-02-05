import "../../../App.css";
import "../Profile.css";
import Measurement from "./profile-page-children/Measurement";
import HowToTakeMeasurements from "../../pattern-data-entry/data-entry-children/HowToTakeMeasurements";
import PatternList from "../pattern-list/PatternList";
import editSvgIcon from "../profile-assets/pen-square-svgrepo-com.svg";

import React, { useState, useContext } from "react";

const ProfilePage = ({ measurementsList }) => {
    const [showHowToTakeMeasurements, setShowHowtoTakeMeasurements] = useState(false);
    const [isUserEditing, setIsUserEditing] = useState(false);
    const [userMeasurements, setUserMeasurements] = useState({});

    const handleClickEditProfile = async () => {
        setIsUserEditing(true);
    };
    
    const handleClickShowHowTo = () => {
        if (showHowToTakeMeasurements === false) {
            setShowHowtoTakeMeasurements(true);
        } else {
            setShowHowtoTakeMeasurements(false);
        }
    };

    return (
        <div className="pageBackground">
            <div className="pageShaper">
                <div id="profile-page">
                    <h2 style={{ alignSelf: "center" }}>Welcome back, username!</h2>
                    <div id="profile-info-style">
                        <img
                            id="edit-profile-info-img"
                            src={editSvgIcon}
                            onClick={handleClickEditProfile}
                        ></img>
                        <div>
                            {measurementsList.map((measurement) => {
                                return (
                                    <Measurement
                                        key={measurement.name}
                                        measurement={measurement}
                                    />
                                );
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
};

export default ProfilePage;
