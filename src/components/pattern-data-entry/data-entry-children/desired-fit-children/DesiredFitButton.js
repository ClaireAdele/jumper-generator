const DesiredFitButton = ({
  easeAmountOption,
  setEaseAmount,
  setSuccessMessage,
  finalJumperData,
  setFinalJumperData,
}) => {
  const handleClick = () => {
    setEaseAmount(easeAmountOption.ease);

    const updatedFinalJumperData = finalJumperData;
    updatedFinalJumperData.easeAmount = easeAmountOption.ease;
    setFinalJumperData(updatedFinalJumperData);
  };

  return (
    <button
      className={
        finalJumperData.easeAmount === easeAmountOption.ease
          ? "ease-selector-button-selected"
          : "ease-selector-button"
      }
      onClick={handleClick}
    >
      {easeAmountOption.text}
    </button>
  );
};

export default DesiredFitButton;
