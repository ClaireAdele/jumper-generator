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
        <p>Knitting Gauge</p>
        <input
          onChange={handleInput}
          name="knittingGauge"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Arm Length</p>
        <input
          onChange={handleInput}
          className="fit-and-measurements-input"
          name="armLength"
          type="number"
        ></input>
        <p>Body length</p>
        <input
          onChange={handleInput}
          name="bodyLength"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <div className="buttons-section">
          <button onClick={handleClickPickDifferentShape}>
            Pick different shape
          </button>
          <button onClick={handleSubmitData}>Submit data</button>
          {errorMessage ? <p>{errorMessage}</p> : <></>}
        </div>
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
        <p>Knitting Gauge</p>
        <input
          onChange={handleInput}
          name="knittingGauge"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Body length</p>
        <input
          onChange={handleInput}
          name="bodyLength"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Bottom of neckline to chest line</p>
        <input
          onChange={handleInput}
          name="necklineToChest"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Shoulder width</p>
        <input
          onChange={handleInput}
          name="shoulderWidth"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Arm Length</p>
        <input
          onChange={handleInput}
          name="armLength"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <div className="buttons-section">
          <button onClick={handleClickPickDifferentShape}>
            Pick different shape
          </button>
          <button onClick={handleSubmitData}>Submit data</button>
          {errorMessage ? <p>{errorMessage}</p> : <></>}
        </div>
      </div>
    );
  }

  if (finalJumperData.jumper === "bottom-up") {
    return (
      <div className="measurements-entry-tile">
        <h3>Bottom-Up</h3>
        <p>Knitting Gauge</p>
        <input
          onChange={handleInput}
          name="knittingGauge"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Body length</p>
        <input
          onChange={handleInput}
          name="bodyLength"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Bottom of neckline to chest line</p>
        <input
          onChange={handleInput}
          name="necklineToChest"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Shoulder width</p>
        <input
          onChange={handleInput}
          name="shoulderWidth"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <p>Arm Length</p>
        <input
          onChange={handleInput}
          name="armLength"
          type="number"
          className="fit-and-measurements-input"
        ></input>
        <div className="buttons-section">
          <button onClick={handleClickPickDifferentShape}>
            Pick different shape
          </button>
          <button onClick={handleSubmitData}>Submit data</button>
          {errorMessage ? <p>{errorMessage}</p> : <></>}
        </div>
      </div>
    );
  }
};

export default EnterMeasurements;
