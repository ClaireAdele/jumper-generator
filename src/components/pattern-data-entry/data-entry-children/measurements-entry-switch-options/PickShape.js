import React, { useContext, useState } from "react";
import { FinalJumperDataContext } from "../../data-entry-context/FinalJumperDataContext"

const PickShape = ({
  setToggleComponent,
}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [jumperData, setJumperData] = useState({});
  const { setFinalJumperData } = useContext(FinalJumperDataContext);


  const handleInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const updatedObject = { ...jumperData };
    console.log(jumperData);
    updatedObject[key] = value;
    setJumperData(updatedObject);
  };

  const useEffect = (() => {

  }, [jumperData]);

      console.log(jumperData);
  console.log(jumperData.jumperShape)

  const submitJumperAndNeckShape = () => {
    if (!jumperData.jumperShape || !jumperData.necklineShape || !jumperData.unit) {
      setErrorMessage("You must pick a jumper and neckline shape");
    } else {

      const updatedFinalJumperData = {};
  
       for (const property in jumperData) {
         updatedFinalJumperData[property] = jumperData[property];
       }
      
      console.log(updatedFinalJumperData);
      setFinalJumperData(updatedFinalJumperData);
      setToggleComponent("measurements-entry");
    }
  };

  return (
    <div id="pick-shape-container">
      <h3>Pick Unit</h3>
      <div>
        <button
          value="centimetres"
          onClick={handleInput}
          name="unit"
          className={
            jumperData.unit === "centimetres"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Centimetres
        </button>
      </div>

      <div>
        <button
          value="inches"
          onClick={handleInput}
          name="unit"
          className={
            jumperData.unit === "inches"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Inches
        </button>
      </div>

      <h3>Pick a Jumper Shape</h3>
      <div>
        <button
          value="top-down-raglan"
          onClick={handleInput}
          name="jumperShape"
          className={
            jumperData.jumperShape === "top-down-raglan"
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
          onClick={handleInput}
          name="jumperShape"
          className={
            jumperData.jumperShape === "drop-shoulder"
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
          onClick={handleInput}
          name="jumperShape"
          className={
            jumperData.jumperShape === "bottom-up"
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
          onClick={handleInput}
          name="necklineShape"
          className={
            jumperData.necklineShape === "folded-neckline"
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
          onClick={handleInput}
          name="necklineShape"
          className={
            jumperData.necklineShape === "v-shape"
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
          onClick={handleInput}
          name="necklineShape"
          className={
            jumperData.necklineShape === "boat-neck"
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
          onClick={handleInput}
          name="necklineShape"
          className={
            jumperData.necklineShape === "round-neck"
              ? "pick-jumper-button-selected"
              : "pick-jumper-button"
          }
        >
          Round neckline
        </button>
      </div>
      {jumperData.necklineShape && jumperData.jumperShape && jumperData.unit ? (
        <button
          className="main-button-style"
          onClick={submitJumperAndNeckShape}
        >
          Validate selection
        </button>
      ) : (
        <></>
      )}
      {errorMessage ? <p>{errorMessage}</p> : <></>}
    </div>
  );
};

export default PickShape;
