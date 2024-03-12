import { useEffect, useState } from "react";
import DesiredFitButton from "./desired-fit-children/DesiredFitButton";
import "../../../App.css";
import "../DataEntry.css";

const DesiredFit = ({ finalJumperData, setFinalJumperData }) => {
  const [easeAmount, setEaseAmount] = useState(null);
  const [easeAmountOptions, setEaseAmountOptions] = useState([
    { ease: 0, text: "Fitted - 0 cm ease" },
    { ease: 7, text: "Standard - 7 cm ease" },
    { ease: 12, text: "Loose - 12cm ease" },
    { ease: 20, text: "Oversized - 20cm ease" },
  ]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (easeAmount === "") {
      setEaseAmount(null);
    }
  }, [easeAmount]);

  const handleEaseInput = (event) => {
    setEaseAmount(event.target.value);
    const updatedFinalJumperData = finalJumperData;
    updatedFinalJumperData.easeAmount = easeAmount;
    setFinalJumperData(updatedFinalJumperData);
  };

  const handleSubmit = () => {
    if (easeAmount === null) {
      setErrorMessage("You must pick a desired fit");
    } else {
      setErrorMessage(null);

      const updatedFinalJumperData = finalJumperData;
      updatedFinalJumperData.easeAmount = easeAmount.ease;
      setFinalJumperData(updatedFinalJumperData);
    }
  };

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
};

export default DesiredFit;
