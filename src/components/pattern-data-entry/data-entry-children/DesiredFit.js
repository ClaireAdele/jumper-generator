import { useState } from "react";
import DesiredFitButton from "./desired-fit-children/DesiredFitButton";
import "../../../App.css";
import "../DataEntry.css";

const DesiredFit = ({ finalJumperData, setFinalJumperData }) => {
  const [easeAmount, setEaseAmount] = useState({ ease: null, text: null });
  const [easeAmountOptions, setEaseAmountOptions] = useState([
    { ease: 0, text: "Fitted - 0 cm ease" },
    { ease: 7, text: "Standard - 7 cm ease" },
    { ease: 12, text: "Loose - 12cm ease" },
    { ease: 20, text: "Oversized - 20cm ease" },
  ]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleEaseInput = (event) => {
    setEaseAmount({
      ease: event.target.value,
      text: `Custom - ${event.target.value}`,
    });
  };

  const handleSubmit = () => {
      if (easeAmount.ease === null) {
        setErrorMessage("You must pick a desired fit");
    } else {
        setSuccessMessage(`Your desired fit: ${easeAmount.text} cm ease`);
        setErrorMessage(null);

        const updatedFinalJumperData = finalJumperData;
        updatedFinalJumperData.easeAmount = easeAmount.ease;
        setFinalJumperData(updatedFinalJumperData);
    }
  };

  const handleResetEase = () => {
    setEaseAmount({ ease: null, text: null });
      setSuccessMessage(null);
      //Also need to reset in main DataEntry object
  };


  if (successMessage === null) {
    return (
      <div id="ease-selection-container">
        <h3>Desired Fit</h3>
        <h4>Pick a standard amount of ease:</h4>
        {easeAmountOptions.map((easeAmountOption) => {
          return (
            <DesiredFitButton
                  key={easeAmountOption.ease}
                  easeAmountOption={easeAmountOption}
                  setEaseAmount={setEaseAmount}
                  setSuccessMessage={setSuccessMessage}
                  finalJumperData={finalJumperData}
                  setFinalJumperData={setFinalJumperData}
            />
          );
        })}
        <h4>Or add a custom amount:</h4>
        <input type="number" onChange={handleEaseInput}></input>
        <button onClick={handleSubmit}>Submit</button>
        {errorMessage ? <p>{errorMessage}</p> : <></>}
      </div>
    );
  }

  if (successMessage) {
    return (
      <div id="ease-selection-container">
        <h3>Desired Fit</h3>
        <h4>{successMessage}</h4>
        <button onClick={handleResetEase}>Reset Ease</button>
      </div>
    );
  }
};

export default DesiredFit;
