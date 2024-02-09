import React, { useState } from "react";
import PickShape from "./measurements-entry-switch-options/PickShape";
import EnterMeasurements from "./measurements-entry-switch-options/EnterMeasurements";

const MeasurementsEntry = () => {
    const [toggleComponent, setToggleComponent] = useState("pick-shape");
    const [jumperAndNeckShape, setJumperAndNeckShape] = useState({});
    
    if (toggleComponent == "pick-shape") { 
        return (
          <PickShape
            setToggleComponent={setToggleComponent}
            setJumperAndNeckShape={setJumperAndNeckShape}
          />
        );
    };

    if (toggleComponent == "measurement-entry") { 
        return (
          <EnterMeasurements
            setToggleComponent={setToggleComponent}
            jumperAndNeckShape={jumperAndNeckShape}
          />
        );
    }
};

export default MeasurementsEntry;
