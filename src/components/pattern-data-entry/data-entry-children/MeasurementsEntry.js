import React, { useState } from "react";
import PickShape from "./measurements-entry-switch-options/PickShape";
import EnterMeasurements from "./measurements-entry-switch-options/EnterMeasurements";

const MeasurementsEntry = ({
  setFinalJumperData,
  finalJumperData,
}) => {
  const [toggleComponent, setToggleComponent] = useState("pick-shape");
  const [jumperAndNeckShape, setJumperAndNeckShape] = useState({});

  if (toggleComponent == "pick-shape") {
    return (
      <PickShape
        setToggleComponent={setToggleComponent}
        setJumperAndNeckShape={setJumperAndNeckShape}
      />
    );
  }

  if (toggleComponent == "measurement-entry") {
    return (
      <EnterMeasurements
        setToggleComponent={setToggleComponent}
        jumperAndNeckShape={jumperAndNeckShape}
        finalJumperData={finalJumperData}
        setFinalJumperData={setFinalJumperData}
      />
    );
  }
};

export default MeasurementsEntry;
