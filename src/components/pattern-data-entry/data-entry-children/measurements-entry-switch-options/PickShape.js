import React, { useState } from "react";

const PickShape = ({
  setToggleComponent,
  setFinalJumperData,
  finalJumperData,
}) => {
  const [jumperShape, setJumperShape] = useState(null);
  const [necklineShape, setNecklineShape] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlePickJumperShape = (event) => {
    setJumperShape(event.target.value);
  };

  const handlePickNecklineShape = (event) => {
    setNecklineShape(event.target.value);
  };

  const submitJumperAndNeckShape = () => {
    if (!jumperShape || !necklineShape) {
      setErrorMessage("You must pick a jumper and neckline shape");
    } else {
      setToggleComponent("measurement-entry");
      const updatedFinalJumperData = finalJumperData;
      updatedFinalJumperData.neckline = necklineShape;
      updatedFinalJumperData.jumper = jumperShape;
      setFinalJumperData(updatedFinalJumperData);
    }
  };

  return (
    <div id="pick-shape-container">
      <h3>Pick a Jumper Shape</h3>
      <div>
        <button
          value="top-down-raglan"
          onClick={handlePickJumperShape}
          name="pick-jumper"
          className={
            jumperShape === "top-down-raglan"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Top-down Raglan Jumper
        </button>
      </div>

      <div>
        <button
          value="drop-shoulder"
          onClick={handlePickJumperShape}
          name="pick-jumper"
          className={
            jumperShape === "drop-shoulder"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Drop-shoulder seamed Jumper
        </button>
      </div>

      <div>
        <button
          value="bottom-up"
          onClick={handlePickJumperShape}
          name="pick-jumper"
          className={
            jumperShape === "bottom-up"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Bottom-up Raglan Jumper
        </button>
      </div>

      <h3>Pick a Neckline Shape</h3>
      <div>
        <button
          value="folded-neckline"
          onClick={handlePickNecklineShape}
          name="pick-neckline"
          className={
            necklineShape === "folded-neckline"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Folded round neckline
        </button>
      </div>

      <div>
        <button
          value="v-shape"
          onClick={handlePickNecklineShape}
          name="pick-neckline"
          className={
            necklineShape === "v-shape"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          V-shape neckline
        </button>
      </div>

      <div>
        <button
          value="boat-neck"
          onClick={handlePickNecklineShape}
          name="pick-neckline"
          className={
            necklineShape === "boat-neck"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Boat neckline
        </button>
      </div>

      <div>
        <button
          value="round-neck"
          onClick={handlePickNecklineShape}
          name="pick-neckline"
          className={
            necklineShape === "round-neck"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Round neckline
        </button>
      </div>
      {necklineShape && jumperShape ? <button className="main-button-style" onClick={submitJumperAndNeckShape}>
        Validate selection
      </button> : <></> }
      {errorMessage ? <p>{errorMessage}</p> : <></>}
    </div>
  );
};

export default PickShape;
