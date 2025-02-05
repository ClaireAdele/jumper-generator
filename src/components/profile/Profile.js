import "../../App.css"
import "./Profile.css"
import ProfilePage from "./profile-children/ProfilePage";
import React, { useEffect, useState, useContext } from "react";
import { getSignedInUserData } from "../../services-and-util-functions/user-services";
import { SignedInUserContext } from "../../contexts/SignedInUserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showHowToTakeMeasurements, setShowHowtoTakeMeasurements] = useState(false);
  const { signedInUserData, setSignedInUserData } =
    useContext(SignedInUserContext);
  
  console.log(signedInUserData);
  
  const [measurementsList, setMeasurementsList] = useState([
     {
       label: "Chest Circumference",
       name: "chestCircumference",
       value: signedInUserData.chestCircumference || 0,
     },
     {
       label: "Body Length",
       name: "bodyLength",
       value: signedInUserData.bodyLength || 0,
     },
     {
       label: "Shoulder Width",
       name: "shoulderWidth",
       value: signedInUserData.shoulderWidth || 0,
     },
     {
       label: "Arm Length",
       name: "armLength",
       value: signedInUserData.armLength || 0,
     },
   ]);


  const navigate = useNavigate();

  useEffect(() => {
    const verifyUserData = async () => {
      try {
        const signedInUser = await getSignedInUserData();
        setSignedInUserData(signedInUser); //check user is authenticated
        setIsLoading(false);
      } catch {
        navigate("/");
      };
    };

    verifyUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="pageBackground">
        <div className="pageShaper">
          <p>Loading</p>
        </div>
      </div>
    );
  }

  return <ProfilePage measurementsList={measurementsList} />;
     
}

export default Profile;