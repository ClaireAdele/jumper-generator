import { useState } from "react";
import Measurement from "./Measurement";
import editSvgIcon from "../../profile-assets/pen-square-svgrepo-com.svg";

const UserData = ({ measurementsList }) => {
    const [isUserEditing, setIsUserEditing] = useState(false);

    const handleClickEditProfile = async () => {
        setIsUserEditing(true);
    };
    
    return (
        <div id="profile-info-style">
            <img
                id="edit-profile-info-img"
                src={editSvgIcon}
                onClick={handleClickEditProfile}
            ></img>
            <div>
                {measurementsList.map((measurement) => {
                    return (
                        <Measurement key={measurement.name} measurement={measurement} />
                    );
                })}
            </div>
        </div>
    );
};

export default UserData;
