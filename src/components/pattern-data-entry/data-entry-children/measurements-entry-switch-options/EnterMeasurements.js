import { useState } from "react";
import { validateData } from "../../../../services-and-util-functions/utils";

const EnterMeasurements = ({
  jumperAndNeckShape,
  setToggleComponent,
  finalJumperData,
  setFinalJumperData,
}) => {
  const [jumperData, setJumperData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleClickPickDifferentShape = () => {
    setToggleComponent("pick-shape");
  };

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

    if (!validateData(jumperAndNeckShape, jumperData)) {
      setErrorMessage("You must enter the relevant data");
    } else {
      const updatedFinalJumperData = finalJumperData;

      for (const property in jumperData) {
        updatedFinalJumperData[property] = jumperData[property];
      }
      setFinalJumperData(updatedFinalJumperData);
    }
  };

  if (jumperAndNeckShape.jumper === "top-down-raglan") {
    return (
      <div className="measurements-entry-tile">
        <h3>Top Down Raglan</h3>
        <p>Knitting Gauge</p>
        <input
          onChange={handleInput}
          name="knittingGauge"
          type="number"
        ></input>
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
        ></input>
        <p>Arm Length</p>
        <input onChange={handleInput} name="armLength" type="number"></input>
        <p>Body length</p>
        <input onChange={handleInput} name="bodyLength" type="number"></input>
        <button onClick={handleClickPickDifferentShape}>
          Pick different shape
        </button>
        <button onClick={handleSubmitData}>Submit data</button>
        {errorMessage ? <p>{errorMessage}</p> : <></>}
      </div>
    );
    /*
    chest circumference
    arm length? - cuff - how much ribbing?
    body length
    */
  }

  if (jumperAndNeckShape.jumper === "drop-shoulder") {
    return (
      <div className="measurements-entry-tile">
        <h3>Drop-shoulder</h3>
        <p>Knitting Gauge</p>
        <input
          onChange={handleInput}
          name="knittingGauge"
          type="number"
        ></input>
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
        ></input>
        <p>Body length</p>
        <input onChange={handleInput} name="bodyLength" type="number"></input>
        <p>Bottom of neckline to chest line</p>
        <input
          onChange={handleInput}
          name="necklineToChest"
          type="number"
        ></input>
        <p>Shoulder width</p>
        <input
          onChange={handleInput}
          name="shoulderWidth"
          type="number"
        ></input>
        <p>Arm Length</p>
        <input onChange={handleInput} name="armLength" type="number"></input>
        <button onClick={handleClickPickDifferentShape}>
          Pick different shape
        </button>
        <button onClick={handleSubmitData}>Submit data</button>
        {errorMessage ? <p>{errorMessage}</p> : <></>}
      </div>
    );
  }

  if (jumperAndNeckShape.jumper === "bottom-up") {
    return (
      <div className="measurements-entry-tile">
        <p>Knitting Gauge</p>
        <input
          onChange={handleInput}
          name="knittingGauge"
          type="number"
        ></input>
        <p>Chest circumference</p>
        <input
          onChange={handleInput}
          name="chestCircumference"
          type="number"
        ></input>
        <p>Body length</p>
        <input onChange={handleInput} name="bodyLength" type="number"></input>
        <p>Bottom of neckline to chest line</p>
        <input
          onChange={handleInput}
          name="necklineToChest"
          type="number"
        ></input>
        <p>Shoulder width</p>
        <input
          onChange={handleInput}
          name="shoulderWidth"
          type="number"
        ></input>
        <p>Arm Length</p>
        <input onChange={handleInput} name="armLength" type="number"></input>
        <button onClick={handleClickPickDifferentShape}>
          Pick different shape
        </button>
        <button onClick={handleSubmitData}>Submit data</button>
        {errorMessage ? <p>{errorMessage}</p> : <></>}
      </div>
    );
  }
};

export default EnterMeasurements;
