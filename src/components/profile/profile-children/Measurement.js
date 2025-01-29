import React, { useState, useContext, useEffect } from "react";
import { FinalJumperDataContext } from "../../jumper-data-context/FinalJumperDataContext";

const Measurement = ({ measurement }) => {
  const [preferredUnit, setPreferredUnit] = useState("cm");
     const { finalJumperData, setFinalJumperData } = useContext(
       FinalJumperDataContext
     );
  
  
  useEffect(() => {
    if (finalJumperData.selectedUnit) {
      setPreferredUnit(finalJumperData.selectedUnit);
    }
  }, []);


  return (
    <div className="profile-row">
      <p id="profile-label">
        <b>{measurement.label}</b>
      </p>
      <p id="profile-value">{measurement.value + " " + preferredUnit}</p>
    </div>
  );
};

export default Measurement;
