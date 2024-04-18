import React, { useState } from "react";
import PickShape from "./measurements-entry-switch-options/PickShape";
import EnterMeasurements from "./measurements-entry-switch-options/EnterMeasurements";

const MeasurementsEntry = ({
}) => {
  const [toggleComponent, setToggleComponent] = useState("pick-shape");

  if (toggleComponent === "pick-shape") {
    return (
      <PickShape
        setToggleComponent={setToggleComponent}
      />
    );
  }

  if (toggleComponent === "measurement-entry") {
    return (
      <EnterMeasurements
        setToggleComponent={setToggleComponent}
      />
    );
  }
};

export default MeasurementsEntry;
