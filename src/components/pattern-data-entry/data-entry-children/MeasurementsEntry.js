import React, { useState } from "react";
import PickShape from "./measurements-entry-switch-options/PickShape";
import EnterMeasurements from "./measurements-entry-switch-options/EnterMeasurements";

const MeasurementsEntry = ({
  setFinalJumperData,
  finalJumperData,
}) => {
  const [toggleComponent, setToggleComponent] = useState("pick-shape");

  if (toggleComponent === "pick-shape") {
    return (
      <PickShape
        setToggleComponent={setToggleComponent}
        finalJumperData={finalJumperData}
        setFinalJumperData={setFinalJumperData}
      />
    );
  }

  if (toggleComponent === "measurement-entry") {
    return (
      <EnterMeasurements
        setToggleComponent={setToggleComponent}
        finalJumperData={finalJumperData}
        setFinalJumperData={setFinalJumperData}
      />
    );
  }
};

export default MeasurementsEntry;
