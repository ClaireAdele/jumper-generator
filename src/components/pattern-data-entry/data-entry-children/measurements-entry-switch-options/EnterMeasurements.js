import { useState } from "react";
import { validateData } from "../../../../services-and-util-functions/utils";

const EnterMeasurements = ({
  setToggleComponent,
  finalJumperData,
  setFinalJumperData,
}) => {
  const [jumperData, setJumperData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleClickPickDifferentShape = () => {
    setToggleComponent("pick-shape");
  };

  console.log(finalJumperData);

  const handleInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const updatedObject = jumperData;
    updatedObject[key] = value;
    setJumperData(updatedObject);
  };

  const handleSubmitData = () => {
    if (errorMessage) {
      setErrorMessage(null);
    }

    if (!validateData(finalJumperData, jumperData)) {
      setErrorMessage("You must enter the relevant data");
    } else {
      const updatedFinalJumperData = finalJumperData;

      for (const property in jumperData) {
        updatedFinalJumperData[property] = jumperData[property];
      }

      setFinalJumperData(updatedFinalJumperData);
    }
  };

  if (finalJumperData.jumper === "top-down-raglan") {
    return (
      <div className="measurements-entry-tile">
        <h3>Top Down Raglan</h3>
        <div className="measurement-row">
          <p>Knitting Gauge:</p>
          <input
            onChange={handleInput}
            name="knittingGauge"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Chest circumference:</p>
          <input
            onChange={handleInput}
            name="chestCircumference"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Arm Length:</p>
          <input
            onChange={handleInput}
            className="fit-and-measurements-input"
            name="armLength"
            type="number"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Body length:</p>
          <input
            onChange={handleInput}
            name="bodyLength"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="buttons-section">
          <button
            className="pick-jumper-button"
            id="pick-different-shape"
            onClick={handleClickPickDifferentShape}
          >
            Pick different shape
          </button>
          <button className="main-button-style" onClick={handleSubmitData}>
            Submit data
          </button>
        </div>
        {errorMessage ? <p>{errorMessage}</p> : <></>}
      </div>
    );
    /*
    chest circumference
    arm length? - cuff - how much ribbing?
    body length
    */
  }

  if (finalJumperData.jumper === "drop-shoulder") {
    return (
      <div className="measurements-entry-tile">
        <h3>Drop-shoulder</h3>
        <div className="measurement-row">
          <p>Knitting Gauge:</p>
          <input
            onChange={handleInput}
            name="knittingGauge"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Chest circumference:</p>
          <input
            onChange={handleInput}
            name="chestCircumference"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Body length:</p>
          <input
            onChange={handleInput}
            name="bodyLength"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Bottom of neckline to chest line:</p>
          <input
            onChange={handleInput}
            name="necklineToChest"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Shoulder width:</p>
          <input
            onChange={handleInput}
            name="shoulderWidth"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Arm Length:</p>
          <input
            onChange={handleInput}
            name="armLength"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="buttons-section">
          <button
            className="pick-jumper-button"
            id="pick-different-shape"
            onClick={handleClickPickDifferentShape}
          >
            Pick different shape
          </button>
          <button className="main-button-style" onClick={handleSubmitData}>
            Submit information
          </button>
        </div>
        {errorMessage ? <p>{errorMessage}</p> : <></>}
      </div>
    );
  }

  if (finalJumperData.jumper === "bottom-up") {
    return (
      <div className="measurements-entry-tile">
        <h3>Bottom-Up</h3>
        <div className="measurement-row">
          <p>Knitting Gauge:</p>
          <input
            onChange={handleInput}
            name="knittingGauge"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Chest circumference:</p>
          <input
            onChange={handleInput}
            name="chestCircumference"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Body length:</p>
          <input
            onChange={handleInput}
            name="bodyLength"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Bottom of neckline to chest line:</p>
          <input
            onChange={handleInput}
            name="necklineToChest"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Shoulder width:</p>
          <input
            onChange={handleInput}
            name="shoulderWidth"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="measurement-row">
          <p>Arm Length:</p>
          <input
            onChange={handleInput}
            name="armLength"
            type="number"
            className="fit-and-measurements-input"
          ></input>
        </div>
        <div className="buttons-section">
          <button
            onClick={handleClickPickDifferentShape}
            className="pick-jumper-button"
            id="pick-different-shape"
          >
            Pick different shape
          </button>
          <button className="main-button-style" onClick={handleSubmitData}>
            Submit data
          </button>
        </div>
        {errorMessage ? <p>{errorMessage}</p> : <></>}
      </div>
    );
  }
};

export default EnterMeasurements;
