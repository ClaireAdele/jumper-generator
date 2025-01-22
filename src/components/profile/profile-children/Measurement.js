import React, { useState } from "react";

const Measurement = ({ measurement }) => {
  const [preferredUnit, setPreferredUnit] = useState("cm");

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
